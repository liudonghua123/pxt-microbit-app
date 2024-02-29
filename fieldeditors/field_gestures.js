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
