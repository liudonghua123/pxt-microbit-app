"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtblocks.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtcompiler.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
/// <reference path="dapjs.d.ts" />
const dialogs = require("./dialogs");
const flash = require("./flash");
const patch = require("./patch");
pxt.editor.initExtensionsAsync = function (opts) {
    pxt.debug('loading microbit target extensions...');
    const manyAny = Math;
    if (!manyAny.imul)
        manyAny.imul = function (a, b) {
            const ah = (a >>> 16) & 0xffff;
            const al = a & 0xffff;
            const bh = (b >>> 16) & 0xffff;
            const bl = b & 0xffff;
            // the shift by 0 fixes the sign on the high part
            // the final |0 converts the unsigned value into a signed value
            return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
        };
    const res = {
        hexFileImporters: []
    };
    pxt.usb.setFilters([{
            vendorId: 0x0D28,
            productId: 0x0204,
            classCode: 0xff,
            subclassCode: 0x03 // the ctrl pipe endpoint
        }, {
            vendorId: 0x0D28,
            productId: 0x0204,
            classCode: 0xff,
            subclassCode: 0x00 // the custom CMSIS2 endpoint
        }]);
    res.mkPacketIOWrapper = flash.mkDAPLinkPacketIOWrapper;
    res.blocklyPatch = patch.patchBlocks;
    res.showProgramTooLargeErrorAsync = dialogs.showProgramTooLargeErrorAsync;
    return Promise.resolve(res);
};
