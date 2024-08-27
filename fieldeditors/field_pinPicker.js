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
