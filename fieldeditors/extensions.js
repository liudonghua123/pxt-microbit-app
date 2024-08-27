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
