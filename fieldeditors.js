(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const field_gestures_1 = require("./field_gestures");
const field_pinPicker_1 = require("./field_pinPicker");
pxt.editor.initFieldExtensionsAsync = function (opts) {
    pxt.debug('loading pxt-microbit field editors...');
    const res = {
        fieldEditors: [
            {
                selector: "gestures",
                editor: field_gestures_1.FieldGestures
            },
            {
                selector: "pinpicker",
                editor: field_pinPicker_1.FieldPinPicker
            }
        ]
    };
    return Promise.resolve(res);
};

},{"./field_gestures":2,"./field_pinPicker":3}],2:[function(require,module,exports){
"use strict";
/// <reference path="../node_modules/pxt-core/localtypings/pxtblockly.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldGestures = void 0;
const pxtblockly = pxt.blocks.requirePxtBlockly();
const Blockly = pxt.blocks.requireBlockly();
class FieldGestures extends pxtblockly.FieldImages {
    constructor(text, options, validator) {
        super(text, options, validator);
        this.isFieldCustom_ = true;
        this.columns_ = parseInt(options.columns) || 4;
        this.width_ = parseInt(options.width) || 350;
        this.addLabel_ = true;
    }
    render_() {
        if (this.addLabel_) {
            this.renderSelectedText_();
            this.positionBorderRect_();
        }
        else {
            super.render_();
        }
    }
    /** Renders the selected option, which must be text. */
    renderSelectedText_() {
        // Retrieves the selected option to display through getText_.
        this.getTextContent().nodeValue = this.getDisplayText_();
        const textElement = this.getTextElement();
        Blockly.utils.dom.addClass(textElement, 'blocklyDropdownText');
        textElement.setAttribute('text-anchor', 'start');
        // Height and width include the border rect.
        const hasBorder = !!this.borderRect_;
        const height = Math.max(hasBorder ? this.getConstants().FIELD_DROPDOWN_BORDER_RECT_HEIGHT : 0, this.getConstants().FIELD_TEXT_HEIGHT);
        const textWidth = Blockly.utils.dom.getFastTextWidth(this.getTextElement(), this.getConstants().FIELD_TEXT_FONTSIZE, this.getConstants().FIELD_TEXT_FONTWEIGHT, this.getConstants().FIELD_TEXT_FONTFAMILY);
        const xPadding = hasBorder
            ? this.getConstants().FIELD_BORDER_RECT_X_PADDING
            : 0;
        let arrowWidth = 0;
        if (this.getSvgArrow()) {
            arrowWidth = this.positionSVGArrow_(textWidth + xPadding, height / 2 - this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE / 2);
        }
        this.size_.width = textWidth + arrowWidth + xPadding * 2;
        this.size_.height = height;
        this.positionTextElement_(xPadding, textWidth);
    }
    positionSVGArrow_(x, y) {
        const svgArrow = this.getSvgArrow();
        if (!svgArrow) {
            return 0;
        }
        const block = this.getSourceBlock();
        const hasBorder = !!this.borderRect_;
        const xPadding = hasBorder
            ? this.getConstants().FIELD_BORDER_RECT_X_PADDING
            : 0;
        const textPadding = this.getConstants().FIELD_DROPDOWN_SVG_ARROW_PADDING;
        const svgArrowSize = this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE;
        const arrowX = block.RTL ? xPadding : x + textPadding;
        svgArrow.setAttribute('transform', 'translate(' + arrowX + ',' + y + ')');
        return svgArrowSize + textPadding;
    }
    // This hack exists because svgArrow is private in Blockly's field dropdown.
    // It should always be the last image element in the field group
    getSvgArrow() {
        if (this.fieldGroup_) {
            const children = this.fieldGroup_.children;
            let lastImage;
            for (let i = 0; i < children.length; i++) {
                if (children.item(i).tagName.toLowerCase() === "image") {
                    lastImage = children.item(i);
                }
            }
            return lastImage;
        }
        return undefined;
    }
}
exports.FieldGestures = FieldGestures;

},{}],3:[function(require,module,exports){
"use strict";
/// <reference path="../node_modules/pxt-core/localtypings/pxtblockly.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldPinPicker = void 0;
const pxtblockly = pxt.blocks.requirePxtBlockly();
const Blockly = pxt.blocks.requireBlockly();
const WARNING_ID = "pinpicker_warning";
class FieldPinPicker extends pxtblockly.FieldGridPicker {
    constructor() {
        super(...arguments);
        this.changeListener = (e) => {
            if (e.type === Blockly.Events.BLOCK_MOVE && e.blockId === this.sourceBlock_.id) {
                this.updateWarning();
            }
        };
    }
    init() {
        super.init();
        const sourceBlock = this.sourceBlock_;
        if (sourceBlock.isShadow() || sourceBlock.isInFlyout) {
            return;
        }
        sourceBlock.workspace.addChangeListener(this.changeListener);
    }
    doValueUpdate_(newValue) {
        super.doValueUpdate_(newValue);
        this.updateWarning();
    }
    updateWarning() {
        this.hideWarning();
        const sourceBlock = this.sourceBlock_;
        if (!sourceBlock || !this.value_ || sourceBlock.isShadow() || sourceBlock.isInFlyout) {
            return;
        }
        const pin = this.value_.split(".")[1];
        if (!isAnalogWriteOnlyPin(pin)) {
            return;
        }
        const parent = sourceBlock.outputConnection.targetBlock();
        if (!parent || parent.type !== "device_get_analog_pin") {
            return;
        }
        this.showWarning(pin);
    }
    showWarning(pin) {
        if (!this.sourceBlock_) {
            return;
        }
        this.sourceBlock_.setWarningText(pxt.U.lf("{0} is a write only analog pin", pin), WARNING_ID);
    }
    hideWarning() {
        if (!this.sourceBlock_) {
            return;
        }
        this.sourceBlock_.setWarningText(null, WARNING_ID);
    }
    dispose() {
        var _a, _b;
        super.dispose();
        (_b = (_a = this.sourceBlock_) === null || _a === void 0 ? void 0 : _a.workspace) === null || _b === void 0 ? void 0 : _b.removeChangeListener(this.changeListener);
    }
}
exports.FieldPinPicker = FieldPinPicker;
function isAnalogWriteOnlyPin(pin) {
    switch (pin) {
        case "P5":
        case "P6":
        case "P7":
        case "P8":
        case "P9":
        case "P11":
        case "P12":
        case "P13":
        case "P14":
        case "P15":
        case "P16":
            return true;
        default:
            return false;
    }
}

},{}]},{},[1,2,3]);
