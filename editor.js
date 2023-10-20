var DapJS =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUInt32LE = function (b, idx) {
    return (b[idx] |
        (b[idx + 1] << 8) |
        (b[idx + 2] << 16) |
        (b[idx + 3] << 24)) >>> 0;
};
exports.bufferConcat = function (bufs) {
    var len = 0;
    for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
        var b = bufs_1[_i];
        len += b.length;
    }
    var r = new Uint8Array(len);
    len = 0;
    for (var _a = 0, bufs_2 = bufs; _a < bufs_2.length; _a++) {
        var b = bufs_2[_a];
        r.set(b, len);
        len += b.length;
    }
    return r;
};
exports.delay = function (t) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, t);
            })];
    });
}); };
exports.addInt32 = function (arr, val) {
    if (!arr) {
        arr = [];
    }
    arr.push(val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff, (val >> 24) & 0xff);
    return arr;
};
exports.hex = function (v) {
    return "0x" + v.toString(16);
};
exports.rid = function (v) {
    var m = [
        "DP_0x0",
        "DP_0x4",
        "DP_0x8",
        "DP_0xC",
        "AP_0x0",
        "AP_0x4",
        "AP_0x8",
        "AP_0xC",
    ];
    return m[v] || "?";
};
exports.bank = function (addr) {
    var APBANKSEL = 0x000000f0;
    return (addr & APBANKSEL) | (addr & 0xff000000);
};
exports.apReg = function (r, mode) {
    var v = r | mode | 1 /* AP_ACC */;
    return (4 + ((v & 0x0c) >> 2));
};
exports.bufToUint32Array = function (buf) {
    exports.assert((buf.length & 3) === 0);
    var r = [];
    if (!buf.length) {
        return r;
    }
    r[buf.length / 4 - 1] = 0;
    for (var i = 0; i < r.length; ++i) {
        r[i] = exports.readUInt32LE(buf, i << 2);
    }
    return r;
};
exports.assert = function (cond) {
    if (!cond) {
        throw new Error("assertion failed");
    }
};
exports.regRequest = function (regId, isWrite) {
    if (isWrite === void 0) { isWrite = false; }
    var request = !isWrite ? 2 /* READ */ : 0 /* WRITE */;
    if (regId < 4) {
        request |= 0 /* DP_ACC */;
    }
    else {
        request |= 1 /* AP_ACC */;
    }
    request |= (regId & 3) << 2;
    return request;
};
exports.hexBytes = function (bytes) {
    var chk = 0;
    var r = ":";
    bytes.forEach(function (b) { return chk += b; });
    bytes.push((-chk) & 0xff);
    bytes.forEach(function (b) { return r += ("0" + b.toString(16)).slice(-2); });
    return r.toUpperCase();
};
exports.hex2bin = function (hexstr) {
    var array = new Uint8Array(hexstr.length / 2);
    for (var i = 0; i < hexstr.length / 2; i++) {
        array[i] = parseInt(hexstr.substr(2 * i, 2), 16);
    }
    return array;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * # Prepared Memory Command
 *
 * Allows multiple memory operations to be batched together to improve HID
 * interface utilisation.
 *
 * ## Usage
 *
 * Similarly to `CortexMPreparedCommand` and `DapPreparedCommand`, a convenience
 * function exists to quickly create a prepared memory command:
 *
 * ```typescript
 * const prep = core.memory.prepareCommand();
 * ```
 *
 * You can then construct the sequence of commands using the same API as `Memory`.
 *
 * ```typescript
 * prep.write32(0x20000, 1234);
 * prep.write32(0x12344, 5678);
 * prep.write16(0x12346, 123);
 * ```
 *
 * And then dispatch the prepared commands asynchronously:
 *
 * ```typescript
 * await prep.go();
 * ```
 */
var PreparedMemoryCommand = (function () {
    function PreparedMemoryCommand(dap) {
        this.cmd = dap.prepareCommand();
    }
    /**
     * Schedule a 32-bit memory write operation.
     *
     * @param addr Word-aligned memory address to write to.
     * @param data Number to be written.
     */
    PreparedMemoryCommand.prototype.write32 = function (addr, data) {
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.writeAp(12 /* DRW */, data);
    };
    /**
     * Schedule a 16-bit memory write operation.
     *
     * @param addr Half word-aligned memory address to write to.
     * @param data Number to be written.
     */
    PreparedMemoryCommand.prototype.write16 = function (addr, data) {
        data = data << ((addr & 0x02) << 3);
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.writeAp(12 /* DRW */, data);
    };
    /**
     * Schedule a 32-bit memory read operation.
     *
     * @param addr Word-aligned memory address to read from.
     */
    PreparedMemoryCommand.prototype.read32 = function (addr) {
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.readAp(12 /* DRW */);
    };
    /**
     * Schedule a 16-bit memory read operation.
     *
     * FIXME: the values need to be shifted after being read.
     *
     * @param addr Half word-aligned memory address to read from.
     */
    PreparedMemoryCommand.prototype.read16 = function (addr) {
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.readAp(12 /* DRW */);
    };
    /**
     * Execute all commands asynchronously.
     */
    PreparedMemoryCommand.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmd.go()];
            });
        });
    };
    return PreparedMemoryCommand;
}());
exports.PreparedMemoryCommand = PreparedMemoryCommand;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(5);
var memory_1 = __webpack_require__(7);
var prepared_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(3);
var prepared_2 = __webpack_require__(8);
/**
 * # Cortex M
 *
 * Manages access to a CPU core, and its associated memory and debug functionality.
 *
 * > **NOTE:** all of the methods that involve interaction with the CPU core
 * > are asynchronous, so must be `await`ed, or explicitly handled as a Promise.
 *
 * ## Usage
 *
 * First, let's create an instance of `CortexM`, using an associated _Debug Access
 * Port_ (DAP) instance that we created earlier.
 *
 * ```typescript
 * const core = new CortexM(dap);
 * ```
 *
 * Now, we can halt and resume the core just like this:
 *
 * > **NOTE:** If you're not using ES2017, you can replace the use of `async` and
 * > `await` with direct use of Promises. These examples also need to be run within
 * > an `async` function for `async` to be used.
 *
 * ```typescript
 * await core.halt();
 * await core.resume();
 * ```
 *
 * Resetting the core is just as easy:
 *
 * ```typescript
 * await core.reset();
 * ```
 *
 * You can even halt immediately after reset:
 *
 * ```typescript
 * await core.reset(true);
 * ```
 *
 * We can also read and write 32-bit values to/from core registers:
 *
 * ```typescript
 * const sp = await core.readCoreRegister(CortexReg.SP);
 *
 * await core.writeCoreRegister(CortexReg.R0, 0x1000);
 * await core.writeCoreRegister(CortexReg.PC, 0x1234);
 * ```
 *
 * ### See also
 *
 * For details on debugging and memory features, see the documentation for
 * `Debug` and `Memory`.
 */
var CortexM = (function () {
    function CortexM(device) {
        this.dev = device;
        this.memory = new memory_1.Memory(device);
        this.debug = new debug_1.Debug(this);
    }
    /**
     * Initialise the debug access port on the device, and read the device type.
     */
    CortexM.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.init()];
                    case 1:
                        _a.sent();
                        // FIXME: don't run this if security is enabled on the K64F
                        return [4 /*yield*/, this.debug.init()];
                    case 2:
                        // FIXME: don't run this if security is enabled on the K64F
                        _a.sent();
                        return [4 /*yield*/, this.readCoreType()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the current state of the CPU.
     *
     * @returns A member of the `CoreState` enum corresponding to the current status of the CPU.
     */
    CortexM.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, newDHCSR;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        if (!(dhcsr & 33554432 /* S_RESET_ST */)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        newDHCSR = _a.sent();
                        if (newDHCSR & 33554432 /* S_RESET_ST */ && !(newDHCSR & 16777216 /* S_RETIRE_ST */)) {
                            return [2 /*return*/, 0 /* TARGET_RESET */];
                        }
                        _a.label = 3;
                    case 3:
                        if (dhcsr & 524288 /* S_LOCKUP */) {
                            return [2 /*return*/, 1 /* TARGET_LOCKUP */];
                        }
                        else if (dhcsr & 262144 /* S_SLEEP */) {
                            return [2 /*return*/, 2 /* TARGET_SLEEPING */];
                        }
                        else if (dhcsr & 131072 /* S_HALT */) {
                            return [2 /*return*/, 3 /* TARGET_HALTED */];
                        }
                        else {
                            return [2 /*return*/, 4 /* TARGET_RUNNING */];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the CPUID register from the CPU, and interpret its meaning in terms of implementer,
     * architecture and core type.
     */
    CortexM.prototype.readCoreType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cpuid, implementer, arch, coreType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157056 /* CPUID */)];
                    case 1:
                        cpuid = _a.sent();
                        implementer = ((cpuid & constants_1.CPUID_IMPLEMENTER_MASK) >> constants_1.CPUID_IMPLEMENTER_POS);
                        arch = ((cpuid & constants_1.CPUID_ARCHITECTURE_MASK) >> constants_1.CPUID_ARCHITECTURE_POS);
                        coreType = ((cpuid & constants_1.CPUID_PARTNO_MASK) >> constants_1.CPUID_PARTNO_POS);
                        console.debug("Found an ARM " + constants_1.CoreNames.get(coreType));
                        return [2 /*return*/, [implementer, arch, coreType]];
                }
            });
        });
    };
    CortexM.prototype.prepareCommand = function () {
        return new prepared_2.PreparedCortexMCommand(this.dev);
    };
    /**
     * Read a core register from the CPU (e.g. r0...r15, pc, sp, lr, s0...)
     *
     * @param no Member of the `CortexReg` enum - an ARM Cortex CPU general-purpose register.
     */
    CortexM.prototype.readCoreRegister = function (no) {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157300 /* DCRSR */, no)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        v = _a.sent();
                        util_1.assert(v & 65536 /* S_REGRDY */);
                        return [4 /*yield*/, this.memory.read32(3758157304 /* DCRDR */)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Write a 32-bit word to the specified CPU general-purpose register.
     *
     * @param no Member of the `CortexReg` enum - an ARM Cortex CPU general-purpose register.
     * @param val Value to be written.
     */
    CortexM.prototype.writeCoreRegister = function (no, val) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = new prepared_1.PreparedMemoryCommand(this.dev);
                        prep.write32(3758157304 /* DCRDR */, val);
                        prep.write32(3758157300 /* DCRSR */, no | 65536 /* DCRSR_REGWnR */);
                        prep.read32(3758157296 /* DHCSR */);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        v = (_a.sent())[0];
                        util_1.assert(v & 65536 /* S_REGRDY */);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Halt the CPU core.
     */
    CortexM.prototype.halt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */ | 2 /* C_HALT */)];
            });
        });
    };
    /**
     * Resume the CPU core.
     */
    CortexM.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isHalted()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.memory.write32(3758157104 /* DFSR */, 4 /* DFSR_DWTTRAP */ | 2 /* DFSR_BKPT */ | 1 /* DFSR_HALTED */)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.debug.enable()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Find out whether the CPU is halted.
     */
    CortexM.prototype.isHalted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status()];
                    case 1:
                        s = _a.sent();
                        return [2 /*return*/, s.isHalted];
                }
            });
        });
    };
    /**
     * Read the current status of the CPU.
     *
     * @returns Object containing the contents of the `DHCSR` register, the `DFSR` register, and a boolean value
     * stating the current halted state of the CPU.
     */
    CortexM.prototype.status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prep, results, dhcsr, dfsr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = new prepared_1.PreparedMemoryCommand(this.dev);
                        prep.read32(3758157296 /* DHCSR */);
                        prep.read32(3758157104 /* DFSR */);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        results = _a.sent();
                        dhcsr = results[0];
                        dfsr = results[1];
                        return [2 /*return*/, {
                                dfsr: dfsr,
                                dhscr: dhcsr,
                                isHalted: !!(dhcsr & 131072 /* S_HALT */),
                            }];
                }
            });
        });
    };
    /**
     * Reset the CPU core. This currently does a software reset - it is also technically possible to perform a 'hard'
     * reset using the reset pin from the debugger.
     */
    CortexM.prototype.reset = function (halt) {
        if (halt === void 0) { halt = false; }
        return __awaiter(this, void 0, void 0, function () {
            var demcr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!halt) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.halt()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157308 /* DEMCR */)];
                    case 2:
                        demcr = _a.sent();
                        return [4 /*yield*/, this.memory.write32(3758157308 /* DEMCR */, demcr | 1 /* DEMCR_VC_CORERESET */)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.softwareReset()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.waitForHalt()];
                    case 5:
                        _a.sent();
                        // Unset the VC_CORERESET bit
                        return [4 /*yield*/, this.memory.write32(3758157308 /* DEMCR */, demcr)];
                    case 6:
                        // Unset the VC_CORERESET bit
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.softwareReset()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Run specified machine code natively on the device. Assumes usual C calling conventions
     * - returns the value of r0 once the program has terminated. The program _must_ terminate
     * in order for this function to return. This can be achieved by placing a `bkpt`
     * instruction at the end of the function.
     *
     * @param code array containing the machine code (32-bit words).
     * @param address memory address at which to place the code.
     * @param pc initial value of the program counter.
     * @param lr initial value of the link register.
     * @param sp initial value of the stack pointer.
     * @param upload should we upload the code before running it.
     * @param args set registers r0...rn before running code
     *
     * @returns A promise for the value of r0 on completion of the function call.
     */
    CortexM.prototype.runCode = function (code, address, pc, lr, sp, upload) {
        var args = [];
        for (var _i = 6; _i < arguments.length; _i++) {
            args[_i - 6] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var cmd, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this.prepareCommand();
                        cmd.halt();
                        // Point the program counter to the start of the program
                        cmd.writeCoreRegister(15 /* PC */, pc);
                        cmd.writeCoreRegister(14 /* LR */, lr);
                        cmd.writeCoreRegister(13 /* SP */, sp);
                        for (i = 0; i < args.length; i++) {
                            cmd.writeCoreRegister(i, args[i]);
                        }
                        return [4 /*yield*/, cmd.go()];
                    case 1:
                        _a.sent();
                        if (!upload) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.memory.writeBlock(address, code)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: 
                    // Run the program and wait for halt
                    return [4 /*yield*/, this.resume()];
                    case 4:
                        // Run the program and wait for halt
                        _a.sent();
                        return [4 /*yield*/, this.waitForHalt(constants_1.DEFAULT_RUNCODE_TIMEOUT)];
                    case 5:
                        _a.sent(); // timeout after 10s
                        return [4 /*yield*/, this.readCoreRegister(0 /* R0 */)];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Spin until the chip has halted.
     */
    CortexM.prototype.waitForHalt = function (timeout) {
        if (timeout === void 0) { timeout = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var running, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    running = true;
                                    if (timeout > 0) {
                                        setTimeout(function () {
                                            if (running) {
                                                reject("waitForHalt timed out.");
                                                running = false;
                                            }
                                        }, timeout);
                                    }
                                    _b.label = 1;
                                case 1:
                                    _a = running;
                                    if (!_a) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.isHalted()];
                                case 2:
                                    _a = !(_b.sent());
                                    _b.label = 3;
                                case 3:
                                    if (!_a) return [3 /*break*/, 4];
                                    return [3 /*break*/, 1];
                                case 4:
                                    if (running) {
                                        running = false;
                                        resolve();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CortexM.prototype.softwareReset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157068 /* NVIC_AIRCR */, 100270080 /* NVIC_AIRCR_VECTKEY */ | 4 /* NVIC_AIRCR_SYSRESETREQ */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        dhcsr = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!((dhcsr & 33554432 /* S_RESET_ST */) !== 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 4:
                        dhcsr = _a.sent();
                        return [3 /*break*/, 3];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CortexM;
}());
exports.CortexM = CortexM;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_RUNCODE_TIMEOUT = 10000 /* ms */;
exports.CPUID_IMPLEMENTER_MASK = 0xff000000;
exports.CPUID_IMPLEMENTER_POS = 24;
exports.CPUID_VARIANT_MASK = 0x00f00000;
exports.CPUID_VARIANT_POS = 20;
exports.CPUID_ARCHITECTURE_MASK = 0x000f0000;
exports.CPUID_ARCHITECTURE_POS = 16;
exports.CPUID_PARTNO_MASK = 0x0000fff0;
exports.CPUID_PARTNO_POS = 4;
exports.CPUID_REVISION_MASK = 0x0000000f;
exports.CPUID_REVISION_POS = 0;
exports.ISANames = new Map();
exports.ISANames.set(12 /* ARMv6M */, "ARMv6M");
exports.ISANames.set(15 /* ARMv7M */, "ARMv7M");
exports.CoreNames = new Map();
exports.CoreNames.set(3104 /* CortexM0 */, "Cortex-M0");
exports.CoreNames.set(3105 /* CortexM1 */, "Cortex-M1");
exports.CoreNames.set(3107 /* CortexM3 */, "Cortex-M3");
exports.CoreNames.set(3108 /* CortexM4 */, "Cortex-M4");
exports.CoreNames.set(3168 /* CortexM0p */, "Cortex-M0+");


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cortex_1 = __webpack_require__(2);
exports.CortexM = cortex_1.CortexM;
var constants_1 = __webpack_require__(3);
exports.CoreNames = constants_1.CoreNames;
exports.ISANames = constants_1.ISANames;
var dap_1 = __webpack_require__(9);
exports.DAP = dap_1.default;
var FlashTarget_1 = __webpack_require__(12);
exports.FlashTargets = FlashTarget_1.FlashTargets;
exports.FlashTarget = FlashTarget_1.FlashTarget;
var FlashProgram_1 = __webpack_require__(15);
exports.FlashProgram = FlashProgram_1.FlashProgram;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var breakpoint_1 = __webpack_require__(6);
/**
 * # Debug Interface
 *
 * Keeps track of breakpoints set on the target, as well as deciding whether to
 * use a hardware breakpoint or a software breakpoint.
 *
 * ## Usage
 *
 * ```typescript
 * const dbg = core.debug;
 *
 * await dbg.setBreakpoint(0x123456);
 *
 * // resume the core and wait for the breakpoint
 * await core.resume();
 * await core.waitForHalt();
 *
 * // step forward one instruction
 * await dbg.step();
 *
 * // remove the breakpoint
 * await dbg.deleteBreakpoint(0x123456);
 * ```
 */
var Debug = (function () {
    function Debug(core) {
        this.core = core;
        this.enabled = false;
        this.availableHWBreakpoints = [];
        this.breakpoints = new Map();
    }
    Debug.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setupFpb()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable debugging on the target CPU
     */
    Debug.prototype.enable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set breakpoints at specified memory addresses.
     *
     * @param addrs An array of memory addresses at which to set breakpoints.
     */
    Debug.prototype.setBreakpoint = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var breakpoint, bkpt, regAddr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.breakpoints.has(addr)) {
                            breakpoint = this.breakpoints.get(addr);
                            if (typeof breakpoint !== "number") {
                                // already enabled
                                console.warn("Breakpoint at " + addr.toString(16) + " already enabled.");
                                return [2 /*return*/];
                            }
                        }
                        if (!(addr < 0x20000000)) return [3 /*break*/, 5];
                        if (!(this.availableHWBreakpoints.length > 0)) return [3 /*break*/, 3];
                        if (!!this.enabled) return [3 /*break*/, 2];
                        console.log("enabling fpb");
                        return [4 /*yield*/, this.setFpbEnabled(true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        regAddr = this.availableHWBreakpoints.pop();
                        console.log("using regAddr=" + regAddr.toString(16));
                        bkpt = new breakpoint_1.HWBreakpoint(regAddr, this.core, addr);
                        return [3 /*break*/, 4];
                    case 3:
                        bkpt = new breakpoint_1.SWBreakpoint(this.core, addr);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        bkpt = new breakpoint_1.SWBreakpoint(this.core, addr);
                        _a.label = 6;
                    case 6: return [4 /*yield*/, bkpt.set()];
                    case 7:
                        _a.sent();
                        this.breakpoints.set(addr, bkpt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Debug.prototype.deleteBreakpoint = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var bkpt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.breakpoints.has(addr)) return [3 /*break*/, 3];
                        bkpt = this.breakpoints.get(addr);
                        if (!(typeof bkpt !== "number")) return [3 /*break*/, 2];
                        return [4 /*yield*/, bkpt.clear()];
                    case 1:
                        _a.sent();
                        if (bkpt instanceof breakpoint_1.HWBreakpoint) {
                            // return the register address to the pool
                            this.availableHWBreakpoints.push(bkpt.regAddr);
                        }
                        _a.label = 2;
                    case 2:
                        this.breakpoints.delete(addr);
                        return [3 /*break*/, 4];
                    case 3:
                        console.warn("Breakpoint at " + addr.toString(16) + " does not exist.");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Step the processor forward by one instruction.
     */
    Debug.prototype.step = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, interruptsMasked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        if (!(dhcsr & (4 /* C_STEP */ | 2 /* C_HALT */))) {
                            console.error("Target is not halted.");
                            return [2 /*return*/];
                        }
                        interruptsMasked = (8 /* C_MASKINTS */ & dhcsr) !== 0;
                        if (!!interruptsMasked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                                1 /* C_DEBUGEN */ |
                                2 /* C_HALT */ |
                                8 /* C_MASKINTS */)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                            1 /* C_DEBUGEN */ |
                            8 /* C_MASKINTS */ |
                            4 /* C_STEP */)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.core.waitForHalt()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                                1 /* C_DEBUGEN */ |
                                2 /* C_HALT */)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set up (and disable) the Flash Patch & Breakpoint unit. It will be enabled when
     * the first breakpoint is set.
     *
     * Also reads the number of available hardware breakpoints.
     */
    Debug.prototype.setupFpb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fpcr, nbCode, nbLit, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.read32(3758104576 /* FP_CTRL */)];
                    case 1:
                        fpcr = _a.sent();
                        nbCode = ((fpcr >> 8) & 0x70) | ((fpcr >> 4) & 0xf);
                        nbLit = (fpcr >> 7) & 0xf;
                        this.totalHWBreakpoints = nbCode;
                        console.debug(nbCode + " hardware breakpoints, " + nbLit + " literal comparators");
                        return [4 /*yield*/, this.setFpbEnabled(false)];
                    case 2:
                        _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < nbCode)) return [3 /*break*/, 6];
                        this.availableHWBreakpoints.push(3758104584 /* FP_COMP0 */ + (4 * i));
                        return [4 /*yield*/, this.core.memory.write32(3758104584 /* FP_COMP0 */ + (i * 4), 0)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable or disable the Flash Patch and Breakpoint unit (FPB).
     *
     * @param enabled
     */
    Debug.prototype.setFpbEnabled = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.enabled = enabled;
                        return [4 /*yield*/, this.core.memory.write32(3758104576 /* FP_CTRL */, 2 /* FP_CTRL_KEY */ | (enabled ? 1 : 0))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Debug;
}());
exports.Debug = Debug;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HWBreakpoint = (function () {
    function HWBreakpoint(regAddr, parent, addr) {
        this.regAddr = regAddr;
        this.parent = parent;
        this.addr = addr;
    }
    HWBreakpoint.prototype.set = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bpMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bpMatch = ((this.addr & 0x2) ? 2 : 1) << 30;
                        return [4 /*yield*/, this.parent.memory.write32(this.regAddr, this.addr & 0x1ffffffc | bpMatch | 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HWBreakpoint.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* clear hardware breakpoint */
                    return [4 /*yield*/, this.parent.memory.write32(this.regAddr, 0)];
                    case 1:
                        /* clear hardware breakpoint */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HWBreakpoint;
}());
exports.HWBreakpoint = HWBreakpoint;
var SWBreakpoint = (function () {
    function SWBreakpoint(parent, addr) {
        this.parent = parent;
        this.addr = addr;
    }
    SWBreakpoint.prototype.set = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // read the instruction from the CPU...
                        _a = this;
                        return [4 /*yield*/, this.parent.memory.read16(this.addr)];
                    case 1:
                        // read the instruction from the CPU...
                        _a.instruction = _b.sent();
                        return [4 /*yield*/, this.parent.memory.write16(this.addr, SWBreakpoint.BKPT_INSTRUCTION)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SWBreakpoint.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* clear hardware breakpoint */
                    return [4 /*yield*/, this.parent.memory.write16(this.addr, this.instruction)];
                    case 1:
                        /* clear hardware breakpoint */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SWBreakpoint.BKPT_INSTRUCTION = 0xbe00;
    return SWBreakpoint;
}());
exports.SWBreakpoint = SWBreakpoint;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var prepared_1 = __webpack_require__(1);
/**
 * # Memory Interface
 *
 * Controls access to the target's memory.
 *
 * ## Usage
 *
 * Using an instance of `CortexM`, as described before, we can simply read and
 * write numbers to memory as follows:
 *
 * ```typescript
 * const mem = core.memory;
 *
 * // NOTE: the address parameter must be word (4-byte) aligned.
 * await mem.write32(0x200000, 12345);
 * const val = await mem.read32(0x200000);
 *
 * // val === 12345
 *
 * // NOTE: the address parameter must be half-word (2-byte) aligned
 * await mem.write16(0x2000002, 65534);
 * const val16 = await mem.read16(0x2000002);
 *
 * // val16 === 65534
 * ```
 *
 * To write a larger block of memory, we can use `readBlock` and `writeBlock`. Again,
 * these blocks must be written to word-aligned addresses in memory.
 *
 * ```typescript
 * const data = new Uint32Array([0x1234, 0x5678, 0x9ABC, 0xDEF0]);
 * await mem.writeBlock(0x200000, data);
 *
 * const readData = await mem.readBlock(0x200000, data.length, 0x100);
 * ```
 *
 * ## See also
 *
 * `PreparedMemoryCommand` provides an equivalent API with better performance (in some
 * cases) by enabling batched memory operations.
 */
var Memory = (function () {
    function Memory(dev) {
        this.dev = dev;
    }
    /**
     * Write a 32-bit word to the specified (word-aligned) memory address.
     *
     * @param addr Memory address to write to
     * @param data Data to write (values above 2**32 will be truncated)
     */
    Memory.prototype.write32 = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.writeAp(12 /* DRW */, data);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Write a 16-bit word to the specified (half word-aligned) memory address.
     *
     * @param addr Memory address to write to
     * @param data Data to write (values above 2**16 will be truncated)
     */
    Memory.prototype.write16 = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = data << ((addr & 0x02) << 3);
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.writeAp(12 /* DRW */, data);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read a 32-bit word from the specified (word-aligned) memory address.
     *
     * @param addr Memory address to read from.
     */
    Memory.prototype.read32 = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.readAp(12 /* DRW */);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, prep.go()];
                    case 2: return [2 /*return*/, (_a.sent())[0]];
                    case 3:
                        e_1 = _a.sent();
                        // transfer wait, try again.
                        return [4 /*yield*/, util_1.delay(100)];
                    case 4:
                        // transfer wait, try again.
                        _a.sent();
                        return [4 /*yield*/, this.read32(addr)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read a 16-bit word from the specified (half word-aligned) memory address.
     *
     * @param addr Memory address to read from.
     */
    Memory.prototype.read16 = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, val, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.readAp(12 /* DRW */);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, prep.go()];
                    case 2:
                        val = (_a.sent())[0];
                        return [3 /*break*/, 6];
                    case 3:
                        e_2 = _a.sent();
                        // transfer wait, try again.
                        return [4 /*yield*/, util_1.delay(100)];
                    case 4:
                        // transfer wait, try again.
                        _a.sent();
                        return [4 /*yield*/, this.read16(addr)];
                    case 5:
                        val = _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        val = (val >> ((addr & 0x02) << 3) & 0xffff);
                        return [2 /*return*/, val];
                }
            });
        });
    };
    /**
     * Reads a block of memory from the specified memory address.
     *
     * @param addr Address to read from
     * @param words Number of words to read
     * @param pageSize Memory page size
     */
    Memory.prototype.readBlock = function (addr, words, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var bufs, end, ptr, nextptr, len, _a, _b, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        bufs = [];
                        end = addr + words * 4;
                        ptr = addr;
                        _c.label = 1;
                    case 1:
                        if (!(ptr < end)) return [3 /*break*/, 3];
                        nextptr = ptr + pageSize;
                        if (ptr === addr) {
                            nextptr &= ~(pageSize - 1);
                        }
                        len = Math.min(nextptr - ptr, end - ptr);
                        util_1.assert((len & 3) === 0);
                        _b = (_a = bufs).push;
                        return [4 /*yield*/, this.readBlockCore(ptr, len >> 2)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        ptr = nextptr;
                        return [3 /*break*/, 1];
                    case 3:
                        result = util_1.bufferConcat(bufs);
                        return [2 /*return*/, result.subarray(0, words * 4)];
                }
            });
        });
    };
    /**
     * Write a block of memory to the specified memory address.
     *
     * @param addr Memory address to write to.
     * @param words Array of 32-bit words to write to memory.
     */
    Memory.prototype.writeBlock = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (words.length === 0) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.writeBlockCore(addr, words)];
            });
        });
    };
    Memory.prototype.prepareCommand = function () {
        return new prepared_1.PreparedMemoryCommand(this.dev);
    };
    Memory.prototype.readBlockCore = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, lastSize, blocks, i, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        lastSize = words % 15;
                        if (lastSize === 0) {
                            lastSize = 15;
                        }
                        blocks = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < Math.ceil(words / 15))) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.dev.readRegRepeat(util_1.apReg(12 /* DRW */, 2 /* READ */), i === blocks.length - 1 ? lastSize : 15)];
                    case 3:
                        b = _a.sent();
                        blocks.push(b);
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, util_1.bufferConcat(blocks).subarray(0, words * 4)];
                }
            });
        });
    };
    Memory.prototype.writeBlockCore = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.writeRegRepeat(util_1.apReg(12 /* DRW */, 0 /* WRITE */), words);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        e_3 = _a.sent();
                        if (!e_3.dapWait) return [3 /*break*/, 5];
                        console.debug("transfer wait, write block");
                        return [4 /*yield*/, util_1.delay(100)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.writeBlockCore(addr, words)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: throw e_3;
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Memory;
}());
exports.Memory = Memory;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prepared_1 = __webpack_require__(1);
/**
 * # Cortex M: Prepared Command
 *
 * Allows batching of Cortex M-related commands, such as writing to a register,
 * halting and resuming the core.
 *
 * ## Example
 *
 * When preparing the sequence of commands, we can use the same API to prepare
 * a command as we would to execute them immediately.
 *
 * ```typescript
 * // Note that only the .go method is asynchronous.
 *
 * const prep = core.prepareCommand();
 * prep.writeCoreRegister(CortexReg.R0, 0x1000);
 * prep.writeCoreRegister(CortexReg.R1, 0x0);
 * prep.writeCoreRegister(CortexReg.PC, 0x2000000);
 * prep.resume();
 * ```
 *
 * We can then execute them as efficiently as possible by combining them together
 * and executing them like so.
 *
 * ```typescript
 * await prep.go();
 * ```
 *
 * The code above is equivalent to the following _non-prepared_ command:
 *
 * ```typescript
 * await core.writeCoreRegister(CortexReg.R0, 0x1000);
 * await core.writeCoreRegister(CortexReg.R1, 0x0);
 * await core.writeCoreRegister(CortexReg.PC, 0x2000000);
 * await core.resume();
 * ```
 *
 * Since the batched version of this code avoids making three round-trips to the
 * target, we are able to significantly improve performance. This is especially
 * noticable when uploading a binary to flash memory, where are large number of
 * repetetive commands are being used.
 *
 * ## Explanation
 *
 * For a detailed explanation of why prepared commands are used in DAP.js, see the
 * documentation for `PreparedDapCommand`.
 */
var PreparedCortexMCommand = (function () {
    function PreparedCortexMCommand(dap) {
        this.cmd = new prepared_1.PreparedMemoryCommand(dap);
    }
    /**
     * Schedule a 32-bit integer to be written to a core register.
     *
     * @param no Core register to be written.
     * @param val Value to write.
     */
    PreparedCortexMCommand.prototype.writeCoreRegister = function (no, val) {
        this.cmd.write32(3758157304 /* DCRDR */, val);
        this.cmd.write32(3758157300 /* DCRSR */, no | 65536 /* DCRSR_REGWnR */);
    };
    /**
     * Schedule a halt command to be written to the CPU.
     */
    PreparedCortexMCommand.prototype.halt = function () {
        this.cmd.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */ | 2 /* C_HALT */);
    };
    /**
     * Schedule a resume command to be written to the CPU.
     */
    PreparedCortexMCommand.prototype.resume = function () {
        this.cmd.write32(3758157104 /* DFSR */, 4 /* DFSR_DWTTRAP */ | 2 /* DFSR_BKPT */ | 1 /* DFSR_HALTED */);
    };
    /**
     * Execute all scheduled commands.
     */
    PreparedCortexMCommand.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cmd.go()];
                    case 1:
                        v = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PreparedCortexMCommand;
}());
exports.PreparedCortexMCommand = PreparedCortexMCommand;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prepared_1 = __webpack_require__(10);
var cmsis_dap_1 = __webpack_require__(11);
var util_1 = __webpack_require__(0);
var DAP = (function () {
    function DAP(device) {
        this.device = device;
        this.dap = new cmsis_dap_1.CMSISDAP(device);
    }
    DAP.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dap.disconnect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, util_1.delay(100)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.init()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var n, prep, m, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dap.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readDp(0 /* IDCODE */)];
                    case 2:
                        n = _a.sent();
                        this.idcode = n;
                        prep = this.prepareCommand();
                        prep.writeReg(0 /* DP_0x0 */, 1 << 2); // clear sticky error
                        prep.writeDp(2 /* SELECT */, 0);
                        prep.writeDp(1 /* CTRL_STAT */, 1073741824 /* CSYSPWRUPREQ */ | 268435456 /* CDBGPWRUPREQ */);
                        m = 536870912 /* CDBGPWRUPACK */ | 2147483648 /* CSYSPWRUPACK */;
                        prep.readDp(1 /* CTRL_STAT */);
                        return [4 /*yield*/, prep.go()];
                    case 3:
                        v = (_a.sent())[0];
                        _a.label = 4;
                    case 4:
                        if (!((v & m) !== m)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.readDp(1 /* CTRL_STAT */)];
                    case 5:
                        v = _a.sent();
                        return [3 /*break*/, 4];
                    case 6:
                        prep = this.prepareCommand();
                        prep.writeDp(1 /* CTRL_STAT */, (1073741824 /* CSYSPWRUPREQ */ |
                            268435456 /* CDBGPWRUPREQ */ |
                            0 /* TRNNORMAL */ |
                            3840 /* MASKLANE */));
                        prep.writeDp(2 /* SELECT */, 0);
                        prep.readAp(252 /* IDR */);
                        return [4 /*yield*/, prep.go()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.writeReg = function (regId, val) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.regOp(regId, val)];
            });
        });
    };
    DAP.prototype.readReg = function (regId) {
        return __awaiter(this, void 0, void 0, function () {
            var buf, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.regOp(regId, null)];
                    case 1:
                        buf = _a.sent();
                        v = util_1.readUInt32LE(buf, 3);
                        return [2 /*return*/, v];
                }
            });
        });
    };
    DAP.prototype.prepareCommand = function () {
        return new prepared_1.PreparedDapCommand(this.dap);
    };
    DAP.prototype.readDp = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.readReg(addr)];
            });
        });
    };
    DAP.prototype.readAp = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.prepareCommand();
                        prep.writeDp(2 /* SELECT */, util_1.bank(addr));
                        prep.readReg(util_1.apReg(addr, 2 /* READ */));
                        return [4 /*yield*/, prep.go()];
                    case 1: return [2 /*return*/, (_a.sent())[0]];
                }
            });
        });
    };
    DAP.prototype.writeDp = function (addr, data) {
        if (addr === 2 /* SELECT */) {
            if (data === this.dpSelect) {
                return Promise.resolve();
            }
            this.dpSelect = data;
        }
        return this.writeReg(addr, data);
    };
    DAP.prototype.writeAp = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (addr === 0 /* CSW */) {
                            if (data === this.csw) {
                                return [2 /*return*/, Promise.resolve()];
                            }
                            this.csw = data;
                        }
                        prep = this.prepareCommand();
                        prep.writeDp(2 /* SELECT */, util_1.bank(addr));
                        prep.writeReg(util_1.apReg(addr, 0 /* WRITE */), data);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.device.close()];
            });
        });
    };
    DAP.prototype.readRegRepeat = function (regId, cnt) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, i, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.assert(cnt <= 15);
                        request = util_1.regRequest(regId);
                        sendargs = [0, cnt];
                        for (i = 0; i < cnt; ++i) {
                            sendargs.push(request);
                        }
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] !== cnt) {
                            throw new Error(("(many) Bad #trans " + buf[1]));
                        }
                        else if (buf[2] !== 1) {
                            throw new Error(("(many) Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/, buf.subarray(3, 3 + cnt * 4)];
                }
            });
        });
    };
    DAP.prototype.writeRegRepeat = function (regId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var remainingLength, request, sendargs, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remainingLength = 64 - 1 - 1 - 2 - 1;
                        util_1.assert(data.length <= remainingLength / 4);
                        request = util_1.regRequest(regId, true);
                        sendargs = [0, data.length, 0, request];
                        data.forEach(function (d) {
                            // separate d into bytes
                            util_1.addInt32(sendargs, d);
                        });
                        return [4 /*yield*/, this.dap.cmdNums(6 /* DAP_TRANSFER_BLOCK */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[3] !== 1) {
                            throw new Error(("(many-wr) Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.regOp = function (regId, val) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = util_1.regRequest(regId, val !== null);
                        sendargs = [0, 1, request];
                        if (val !== null) {
                            util_1.addInt32(sendargs, val);
                        }
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] !== 1) {
                            console.error("Make sure you have initialised the DAP connection.");
                            throw new Error(("Bad #trans " + buf[1]));
                        }
                        else if (buf[2] !== 1) {
                            if (buf[2] === 2) {
                                throw new Error(("Transfer wait"));
                            }
                            throw new Error(("Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/, buf];
                }
            });
        });
    };
    return DAP;
}());
exports.default = DAP;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
/**
 * # Prepared DAP Command
 *
 * Batches together multiple Debug Access Port (DAP) commands into one (or more)
 * CMSIS-DAP Transfers that can be written together to improve link utilisation.
 *
 * > **NOTE:** this will not normally need to be used by applications or libraries
 * > depending on DAP.js.
 *
 * ## Architecture
 *
 * - `PreparedDapCommand` keeps a list of CMSIS-DAP `Transfer` commands.
 * - Every time an action is scheduled (writing to or reading from a DP or AP register),
 * we check to see if there is any remaining room in the current batch, starting a new
 * batch if none is available.
 * - When `go` is called, the batches are executed sequentially (so DAP commands are
 * executed in the order they were added).
 *
 * ### Reading Values
 *
 * Writing values to registers is relatively straight forward, however mixing register
 * reads and writes together requires us to keep track of how many commands in
 * each batch are read commands.
 *
 * Once data has successfully been read back from the target, the values read are assembled
 * into an array, and returned in the order they requested. This allows `PreparedDapCommand`s
 * to be used higher up the stack in places where multiple independent read operations take
 * place sequentially.
 *
 * ### Constructing CMSIS-DAP Commands
 *
 * We keep track of the number of commands in each batch, so that we can fill in the command
 * count field of the `DAP_Transfer`.
 */
var PreparedDapCommand = (function () {
    function PreparedDapCommand(dap) {
        this.dap = dap;
        this.commands = [[0, 1]];
        this.commandCounts = [0];
        this.currentCommand = 0;
        this.readCounts = [0];
    }
    /**
     * Schedule a value to be written to an AP or DP register.
     *
     * @param regId register ID to be written to
     * @param value value to be written
     */
    PreparedDapCommand.prototype.writeReg = function (regId, value) {
        var request = util_1.regRequest(regId, true);
        if (this.commands[this.currentCommand].length + 5 > 64) {
            // start a new command
            this.commands.push([0, 1]);
            this.commandCounts.push(0);
            this.readCounts.push(0);
            this.currentCommand++;
        }
        this.commands[this.currentCommand].push(request);
        util_1.addInt32(this.commands[this.currentCommand], value);
        this.commandCounts[this.currentCommand]++;
    };
    /**
     * Schedule a value to be read from an AP or DP register.
     * @param regId register to read from
     */
    PreparedDapCommand.prototype.readReg = function (regId) {
        var request = util_1.regRequest(regId, false);
        if (this.commands[this.currentCommand].length + 1 > 64) {
            // start a new command
            this.commands.push([0, 1]);
            this.commandCounts.push(0);
            this.readCounts.push(0);
            this.currentCommand++;
        }
        this.commands[this.currentCommand].push(request);
        this.commandCounts[this.currentCommand]++;
        this.readCounts[this.currentCommand]++;
    };
    /**
     * Schedule multiple values to be written to the same register.
     *
     * **TODO:** figure out dynamically whether it's better to use DAP_TransferBlock vs
     * DAP_Transfer. We should be able to fill up the remaining space in a Transfer
     * and then start a TransferBlock _if_ we can fit in _13 or more_ values into the
     * TransferBlock. However, the gains from this are marginal unless we're using much
     * larger packet sizes than 64 bytes.
     *
     * @param regId register to write to repeatedly
     * @param data array of 32-bit values to be written
     */
    PreparedDapCommand.prototype.writeRegRepeat = function (regId, data) {
        var _this = this;
        // fill up the rest of the command we have left
        data.forEach(function (cmd) {
            _this.writeReg(regId, cmd);
        });
    };
    /**
     * Asynchronously execute the commands scheduled.
     */
    PreparedDapCommand.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v, i, command, results, i, result, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        v = [];
                        for (i = 0; i < this.commands.length; i++) {
                            command = this.commands[i];
                            command[1] = this.commandCounts[i];
                        }
                        return [4 /*yield*/, this.dap.sendTransfers(this.commands)];
                    case 1:
                        results = _a.sent();
                        for (i = 0; i < this.commands.length; i++) {
                            result = results[i];
                            for (j = 0; j < this.readCounts[i]; j++) {
                                v.push(util_1.readUInt32LE(result, 3 + 4 * j));
                            }
                        }
                        return [2 /*return*/, v];
                }
            });
        });
    };
    /**
     * Schedule a value to be written to a DP register
     *
     * @param addr Address to write to
     * @param data Data to be written
     */
    PreparedDapCommand.prototype.writeDp = function (addr, data) {
        if (addr === 2 /* SELECT */) {
            if (data === this.dpSelect) {
                return Promise.resolve();
            }
            this.dpSelect = data;
        }
        return this.writeReg(addr, data);
    };
    /**
     * Schedule a value to be written to an AP register
     *
     * @param addr Address to write to
     * @param data Data to be written
     */
    PreparedDapCommand.prototype.writeAp = function (addr, data) {
        this.writeDp(2 /* SELECT */, util_1.bank(addr));
        if (addr === 0 /* CSW */) {
            if (data === this.csw) {
                return Promise.resolve();
            }
            this.csw = data;
        }
        this.writeReg(util_1.apReg(addr, 0 /* WRITE */), data);
    };
    /**
     * Schedule a DP register to read from
     *
     * @param addr Address to read from
     */
    PreparedDapCommand.prototype.readDp = function (addr) {
        return this.readReg(addr);
    };
    /**
     * Schedule an AP register to read from
     *
     * @param addr Address to read from
     */
    PreparedDapCommand.prototype.readAp = function (addr) {
        this.writeDp(2 /* SELECT */, util_1.bank(addr));
        return this.readReg(util_1.apReg(addr, 2 /* READ */));
    };
    return PreparedDapCommand;
}());
exports.PreparedDapCommand = PreparedDapCommand;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var CMSISDAP = (function () {
    function CMSISDAP(hid) {
        this.maxSent = 1;
        this.hid = hid;
    }
    CMSISDAP.prototype.resetTarget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(10 /* DAP_RESET_TARGET */, [])];
            });
        });
    };
    CMSISDAP.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(3 /* DAP_DISCONNECT */, [])];
            });
        });
    };
    CMSISDAP.prototype.sendTransfers = function (commands) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, commands_1, cmd, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.hid.sendMany)
                            return [2 /*return*/, this.hid.sendMany(commands.map(function (cmd) {
                                    cmd.unshift(5 /* DAP_TRANSFER */);
                                    return Uint8Array.from(cmd);
                                })).then(function (bufs) {
                                    for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
                                        var buf = bufs_1[_i];
                                        if (buf[0] != 5 /* DAP_TRANSFER */)
                                            throw new Error("Bad response for Transfer (many) -> " + buf[0]);
                                    }
                                    return bufs;
                                })];
                        res = [];
                        _i = 0, commands_1 = commands;
                        _c.label = 1;
                    case 1:
                        if (!(_i < commands_1.length)) return [3 /*break*/, 4];
                        cmd = commands_1[_i];
                        _b = (_a = res).push;
                        return [4 /*yield*/, this.cmdNums(5 /* DAP_TRANSFER */, cmd)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, res];
                }
            });
        });
    };
    CMSISDAP.prototype.cmdNums = function (op, data) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.unshift(op);
                        return [4 /*yield*/, this.send(data)];
                    case 1:
                        buf = _a.sent();
                        if (buf[0] !== op) {
                            throw new Error("Bad response for " + op + " -> " + buf[0]);
                        }
                        switch (op) {
                            case 2 /* DAP_CONNECT */:
                            case 0 /* DAP_INFO */:
                            case 5 /* DAP_TRANSFER */:
                            case 6 /* DAP_TRANSFER_BLOCK */:
                                break;
                            default:
                                if (op < 0x80 && buf[1] !== 0) {
                                    throw new Error("Bad status for " + op + " -> " + buf[1]);
                                }
                        }
                        return [2 /*return*/, buf];
                }
            });
        });
    };
    CMSISDAP.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Connecting...");
                        return [4 /*yield*/, this.info(254 /* PACKET_COUNT */)];
                    case 1:
                        v = _a.sent();
                        if (v) {
                            this.maxSent = v;
                        }
                        else {
                            throw new Error("DAP_INFO returned invalid packet count.");
                        }
                        return [4 /*yield*/, this.cmdNums(17 /* DAP_SWJ_CLOCK */, util_1.addInt32(null, 10000000))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(2 /* DAP_CONNECT */, [0])];
                    case 3:
                        buf = _a.sent();
                        if (buf[1] !== 1) {
                            throw new Error("SWD mode not enabled.");
                        }
                        return [4 /*yield*/, this.cmdNums(17 /* DAP_SWJ_CLOCK */, util_1.addInt32(null, 10000000))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(4 /* DAP_TRANSFER_CONFIGURE */, [0, 0x50, 0, 0, 0])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(19 /* DAP_SWD_CONFIGURE */, [0])];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.jtagToSwd()];
                    case 7:
                        _a.sent();
                        console.log("Connected");
                        return [2 /*return*/];
                }
            });
        });
    };
    CMSISDAP.prototype.jtagToSwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrs, _i, arrs_1, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrs = [
                            [56, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
                            [16, 0x9e, 0xe7],
                            [56, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
                            [8, 0x00],
                        ];
                        _i = 0, arrs_1 = arrs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arrs_1.length)) return [3 /*break*/, 4];
                        arr = arrs_1[_i];
                        return [4 /*yield*/, this.swjSequence(arr)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CMSISDAP.prototype.swjSequence = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(18 /* DAP_SWJ_SEQUENCE */, data)];
            });
        });
    };
    CMSISDAP.prototype.info = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cmdNums(0 /* DAP_INFO */, [id])];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] === 0) {
                            return [2 /*return*/, null];
                        }
                        switch (id) {
                            case 240 /* CAPABILITIES */:
                            case 254 /* PACKET_COUNT */:
                            case 255 /* PACKET_SIZE */:
                                if (buf[1] === 1) {
                                    return [2 /*return*/, buf[2]];
                                }
                                else if (buf[1] === 2) {
                                    return [2 /*return*/, buf[3] << 8 | buf[2]];
                                }
                        }
                        return [2 /*return*/, buf.subarray(2, buf[1] + 2 - 1)]; // .toString("utf8")
                }
            });
        });
    };
    CMSISDAP.prototype.send = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var array, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        array = Uint8Array.from(command);
                        return [4 /*yield*/, this.hid.write(array.buffer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.hid.read()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, new Uint8Array(response.buffer)];
                }
            });
        });
    };
    return CMSISDAP;
}());
exports.CMSISDAP = CMSISDAP;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cortex_1 = __webpack_require__(2);
var K64F_1 = __webpack_require__(13);
var NRF51_1 = __webpack_require__(14);
var analyzer = new Uint32Array([
    0x2180468c, 0x2600b5f0, 0x4f2c2501, 0x447f4c2c, 0x1c2b0049, 0x425b4033, 0x40230872, 0x085a4053,
    0x425b402b, 0x40534023, 0x402b085a, 0x4023425b, 0x085a4053, 0x425b402b, 0x40534023, 0x402b085a,
    0x4023425b, 0x085a4053, 0x425b402b, 0x40534023, 0x402b085a, 0x4023425b, 0x085a4053, 0x425b402b,
    0x40534023, 0xc7083601, 0xd1d2428e, 0x2b004663, 0x4663d01f, 0x46b4009e, 0x24ff2701, 0x44844d11,
    0x1c3a447d, 0x88418803, 0x4351409a, 0xd0122a00, 0x22011856, 0x780b4252, 0x40533101, 0x009b4023,
    0x0a12595b, 0x42b1405a, 0x43d2d1f5, 0x4560c004, 0x2000d1e7, 0x2200bdf0, 0x46c0e7f8, 0x000000b6,
    0xedb88320, 0x00000044,
]);
var FlashTarget = (function (_super) {
    __extends(FlashTarget, _super);
    function FlashTarget(device, platform) {
        var _this = _super.call(this, device) || this;
        _this.platform = platform;
        _this.inited = false;
        return _this;
    }
    /**
     * Initialise the flash driver on the chip. Must be called before any of the other
     * flash-related methods.
     */
    FlashTarget.prototype.flashInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.inited) {
                            return [2 /*return*/];
                        }
                        // reset and halt
                        return [4 /*yield*/, this.reset(true)];
                    case 1:
                        // reset and halt
                        _a.sent();
                        // make sure we're in Thumb mode.
                        return [4 /*yield*/, this.writeCoreRegister(16 /* XPSR */, 1 << 24)];
                    case 2:
                        // make sure we're in Thumb mode.
                        _a.sent();
                        return [4 /*yield*/, this.writeCoreRegister(9 /* R9 */, this.platform.flashAlgo.staticBase)];
                    case 3:
                        _a.sent();
                        if (!this.platform.flashAlgo.analyzerSupported) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.memory.writeBlock(this.platform.flashAlgo.analyzerAddress, analyzer)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcInit, this.platform.flashAlgo.loadAddress + 1, this.platform.flashAlgo.stackPointer, true, 0, 0, 0, 0)];
                    case 6:
                        result = _a.sent();
                        this.inited = true;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Erase _all_ data stored in flash on the chip.
     */
    FlashTarget.prototype.eraseChip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inited) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcEraseAll, this.platform.flashAlgo.loadAddress + 1, this.platform.flashAlgo.stackPointer, false, 0, 0, 0)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Upload a program to flash memory on the chip.
     * TODO: add a callback to provide progress data
     *
     * @param data Array of 32-bit integers to write to flash.
     */
    FlashTarget.prototype.flash = function (data, address, progressCb) {
        return __awaiter(this, void 0, void 0, function () {
            var pageSizeWords, bufferAddress, flashStart, ptr, wordPtr, pageData, flashAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inited) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        pageSizeWords = this.platform.flashAlgo.pageSize / 4;
                        bufferAddress = this.platform.flashAlgo.pageBuffers[0];
                        flashStart = address || this.platform.flashAlgo.flashStart;
                        ptr = 0;
                        _a.label = 3;
                    case 3:
                        if (!(ptr < data.byteLength)) return [3 /*break*/, 6];
                        wordPtr = ptr / 4;
                        pageData = data.subarray(wordPtr, wordPtr + pageSizeWords);
                        flashAddress = flashStart + ptr;
                        return [4 /*yield*/, this.memory.writeBlock(bufferAddress, pageData)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcProgramPage, // pc
                            this.platform.flashAlgo.loadAddress + 1, // lr
                            this.platform.flashAlgo.stackPointer, // sp
                            /* upload? */
                            false, 
                            /* args */
                            flashAddress, this.platform.flashAlgo.pageSize, bufferAddress)];
                    case 5:
                        _a.sent();
                        if (progressCb) {
                            progressCb(ptr / data.byteLength);
                        }
                        ptr += pageData.byteLength;
                        return [3 /*break*/, 3];
                    case 6:
                        if (progressCb) {
                            progressCb(1.0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashTarget.prototype.program = function (program, progressCb) {
        return __awaiter(this, void 0, void 0, function () {
            var totalBytes, cumulativeBytes, startTime, _loop_1, this_1, _i, _a, section, endTime, elapsedTime, transferRate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.eraseChip()];
                    case 2:
                        _b.sent();
                        totalBytes = program.totalByteLength();
                        cumulativeBytes = 0;
                        startTime = Date.now();
                        _loop_1 = function (section) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.flash(section.data, section.address, function (progress) {
                                            var sectionBytes = section.data.byteLength * progress;
                                            progressCb((cumulativeBytes + sectionBytes) / totalBytes);
                                        })];
                                    case 1:
                                        _a.sent();
                                        cumulativeBytes += section.data.byteLength;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = program.sections;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        section = _a[_i];
                        return [5 /*yield**/, _loop_1(section)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        endTime = Date.now();
                        elapsedTime = endTime - startTime;
                        transferRate = totalBytes / elapsedTime;
                        console.debug("Transfer took " + elapsedTime / 1000 + " s");
                        console.debug("Transfered " + totalBytes + " bytes at " + transferRate + " kB/s");
                        return [4 /*yield*/, this.flashUnInit()];
                    case 7:
                        _b.sent();
                        progressCb(1.0);
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashTarget.prototype.flashUnInit = function () {
        this.inited = false;
    };
    return FlashTarget;
}(cortex_1.CortexM));
exports.FlashTarget = FlashTarget;
exports.FlashTargets = new Map();
exports.FlashTargets.set("0240", new K64F_1.K64F());
exports.FlashTargets.set("9900", new NRF51_1.NRF51());


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var K64F_FLASH_ALGO = {
    analyzerAddress: 0x1ffff000,
    analyzerSupported: true,
    flashSize: 0x100000,
    flashStart: 0x0,
    // Flash algorithm as a hex string
    instructions: new Uint32Array([
        0xE00ABE00, 0x062D780D, 0x24084068, 0xD3000040, 0x1E644058, 0x1C49D1FA, 0x2A001E52, 0x4770D1F2,
        0x4604b570, 0x4616460d, 0x5020f24c, 0x81c84932, 0x1028f64d, 0x460881c8, 0xf0208800, 0x80080001,
        0x4448482e, 0xf8dcf000, 0x2001b108, 0x2000bd70, 0x4601e7fc, 0x47702000, 0x4929b510, 0x44484827,
        0xf8b8f000, 0xb92c4604, 0x48242100, 0xf0004448, 0x4604f9a9, 0xf837f000, 0xbd104620, 0x4604b570,
        0x4448481e, 0x46214b1e, 0xf00068c2, 0x4605f85d, 0x481ab93d, 0x23004448, 0x68c24621, 0xf946f000,
        0xf0004605, 0x4628f820, 0xb5febd70, 0x460c4605, 0x46234616, 0x46294632, 0x44484810, 0xf8f8f000,
        0xb9674607, 0x22012000, 0x2000e9cd, 0x46224633, 0x90024629, 0x44484809, 0xf984f000, 0xf0004607,
        0x4638f802, 0x4807bdfe, 0xf4206840, 0xf5000070, 0x49040070, 0x47706048, 0x40052000, 0x00000004,
        0x6b65666b, 0x4001f000, 0x4a0e2070, 0x20807010, 0xbf007010, 0x7800480b, 0x280009c0, 0x4809d0fa,
        0xf0017801, 0xb1080020, 0x47702067, 0x0010f001, 0x2068b108, 0xf001e7f9, 0xb1080001, 0xe7f42069,
        0xe7f22000, 0x40020000, 0x4df0e92d, 0x460d4604, 0x469a4690, 0xf0004650, 0x4606f891, 0x4630b116,
        0x8df0e8bd, 0x46422310, 0x46204629, 0xf86cf000, 0xb10e4606, 0xe7f34630, 0x0008eb05, 0x68e01e47,
        0xf1f0fbb7, 0x7011fb00, 0x68e0b140, 0xf0f0fbb7, 0x0b01f100, 0xfb0068e0, 0x1e47f00b, 0x480be011,
        0x68004478, 0x20096005, 0x71c84909, 0xffacf7ff, 0x69a04606, 0x69a0b108, 0xb1064780, 0x68e0e003,
        0x42bd4405, 0xbf00d9eb, 0xe7c94630, 0x000002ec, 0x40020000, 0x4604b570, 0x4628460d, 0xf84ef000,
        0xb10e4606, 0xbd704630, 0x2004b90c, 0x2044e7fb, 0x71c84902, 0xff88f7ff, 0x0000e7f5, 0x40020000,
        0xb9094601, 0x47702004, 0x6cc04826, 0x6003f3c0, 0x447b4b25, 0x0010f833, 0xb90a0302, 0xe7f22064,
        0x60082000, 0x2002604a, 0x02c06088, 0x200060c8, 0x61486108, 0xbf006188, 0x4602e7e5, 0x2004b90a,
        0x61914770, 0xe7fb2000, 0x4604b530, 0x2004b90c, 0x1e58bd30, 0xb9104008, 0x40101e58, 0x2065b108,
        0x6820e7f6, 0xd8054288, 0x0500e9d4, 0x188d4428, 0xd20142a8, 0xe7eb2066, 0xe7e92000, 0x480b4601,
        0xd0014281, 0x4770206b, 0xe7fc2000, 0xb90b4603, 0x47702004, 0xd801290f, 0xd0012a04, 0xe7f82004,
        0xe7f62000, 0x40048000, 0x0000025a, 0x6b65666b, 0x41f0e92d, 0x46884607, 0x461d4614, 0x2004b914,
        0x81f0e8bd, 0x462a2308, 0x46384641, 0xffbcf7ff, 0xb10e4606, 0xe7f34630, 0x4812e01f, 0x68004478,
        0x8000f8c0, 0x490fcc01, 0x390c4479, 0x60486809, 0x490ccc01, 0x39184479, 0x60886809, 0x490a2007,
        0xf7ff71c8, 0x4606ff01, 0xb10869b8, 0x478069b8, 0xe004b106, 0x0808f108, 0x2d003d08, 0xbf00d1dd,
        0xe7cd4630, 0x000001b0, 0x40020000, 0x4dffe92d, 0x4682b082, 0x2310460c, 0x46504621, 0xf7ff9a04,
        0x4683ff83, 0x0f00f1bb, 0x4658d003, 0xe8bdb006, 0xe9da8df0, 0xfbb00101, 0x4260f7f1, 0x40084279,
        0x42a54245, 0x443dd100, 0xe0229e04, 0x0804eba5, 0xd90045b0, 0xea4f46b0, 0x90011018, 0x4478480f,
        0x60046800, 0x490e2001, 0x980171c8, 0x72c80a00, 0x72889801, 0x72489805, 0xfeb6f7ff, 0xf1bb4683,
        0xd0010f00, 0xe7d14658, 0x0608eba6, 0x443d4444, 0x2e00bf00, 0x2000d1da, 0x0000e7c8, 0x0000010e,
        0x40020000, 0x4604b570, 0xb90c460d, 0xbd702004, 0x49032040, 0x460871c8, 0xf7ff7185, 0xe7f6fe95,
        0x40020000, 0x4dffe92d, 0x4617460c, 0xe9dd461d, 0xf8ddb80c, 0xb91da038, 0xb0042004, 0x8df0e8bd,
        0x463a2304, 0x98004621, 0xff1ef7ff, 0xb10e4606, 0xe7f24630, 0x4814e022, 0x68004478, 0x20026004,
        0x71c84912, 0xf8804608, 0x490fb00b, 0x39144479, 0x68096828, 0xf7ff6088, 0x4606fe67, 0xf1b8b15e,
        0xd0010f00, 0x4000f8c8, 0x0f00f1ba, 0x2000d002, 0x0000f8ca, 0x1f3fe004, 0x1d241d2d, 0xd1da2f00,
        0x4630bf00, 0x0000e7c9, 0x00000074, 0x40020000, 0x00000000, 0x00080000, 0x00100000, 0x00200000,
        0x00400000, 0x00800000, 0x01000000, 0x01000000, 0x40020004, 0x00000000,
    ]),
    loadAddress: 0x20000000,
    pageBuffers: [0x20003000, 0x20004000],
    pageSize: 0x1000,
    // Relative function addresses
    pcEraseAll: 0x20000059,
    pcEraseSector: 0x2000007D,
    pcInit: 0x20000021,
    // pcUnInit: 0x49,
    pcProgramPage: 0x200000AB,
    stackPointer: 0x20001000,
    staticBase: 0x20000000 + 0x20 + 0x474,
};
var K64F = (function () {
    function K64F() {
        this.flashAlgo = K64F_FLASH_ALGO;
    }
    K64F.prototype.overrideSecurityBits = function (address, data) {
        var u8data = new Uint8Array(data.buffer);
        // Kinetis security values and addresses
        var SECURITY_START = 0x400;
        var SECURITY_SIZE = 16;
        var FPROT_ADDR = 0x408;
        var FPROT_ADDR_END = 0x40c;
        var FPROT_SIZE = 4;
        var FSEC_ADDR = 0x40c;
        var FSEC_VAL = 0xFE;
        var FOPT_ADDR = 0x40d;
        var FOPT_VAL = 0xFF;
        var FEPROT_ADDR = 0x40e;
        var FEPROT_VAL = 0xFF;
        var FDPROT_ADDR = 0x40f;
        var FDPROT_VAL = 0xFF;
        if (address <= SECURITY_START && address + u8data.byteLength > SECURITY_START + SECURITY_SIZE) {
            for (var i = FPROT_ADDR; i < FPROT_ADDR_END; i++) {
                if (u8data[i - address] !== 0xff) {
                    u8data[i - address] = 0xff;
                    console.debug("FCF[" + (i - FPROT_ADDR) + "] at addr " + i + " changed to " + u8data[i - address]);
                }
            }
            if (u8data[FSEC_ADDR - address] !== FSEC_VAL) {
                u8data[FSEC_ADDR - address] = FSEC_VAL;
                console.debug("FSEC at addr " + FSEC_ADDR + " changed to " + FSEC_VAL);
            }
            if (u8data[FOPT_ADDR - address] === 0x00) {
                console.debug("FOPT set to restricted value 0x00");
            }
            if (u8data[FEPROT_ADDR - address] !== FEPROT_VAL) {
                u8data[FEPROT_ADDR - address] = FEPROT_VAL;
                console.debug("FEPROT at addr " + FEPROT_ADDR + " changed to " + FEPROT_VAL);
            }
            if (u8data[FDPROT_ADDR - address] !== FDPROT_VAL) {
                u8data[FDPROT_ADDR - address] = FDPROT_VAL;
                console.debug("FDPROT at addr " + FDPROT_ADDR + " changed to " + FDPROT_VAL);
            }
        }
    };
    return K64F;
}());
exports.K64F = K64F;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NRF51_FLASH_ALGO = {
    analyzerAddress: 0x20003000,
    analyzerSupported: true,
    beginData: 0x20002000,
    flashSize: 0x40000,
    flashStart: 0x0,
    instructions: new Uint32Array([
        0xE00ABE00, 0x062D780D, 0x24084068, 0xD3000040, 0x1E644058, 0x1C49D1FA, 0x2A001E52, 0x4770D1F2,
        0x47702000, 0x47702000, 0x4c26b570, 0x60602002, 0x60e02001, 0x68284d24, 0xd00207c0, 0x60602000,
        0xf000bd70, 0xe7f6f82c, 0x4c1eb570, 0x60612102, 0x4288491e, 0x2001d302, 0xe0006160, 0x4d1a60a0,
        0xf81df000, 0x07c06828, 0x2000d0fa, 0xbd706060, 0x4605b5f8, 0x4813088e, 0x46142101, 0x4f126041,
        0xc501cc01, 0x07c06838, 0x1e76d006, 0x480dd1f8, 0x60412100, 0xbdf84608, 0xf801f000, 0x480ce7f2,
        0x06006840, 0xd00b0e00, 0x6849490a, 0xd0072900, 0x4a0a4909, 0xd00007c3, 0x1d09600a, 0xd1f90840,
        0x00004770, 0x4001e500, 0x4001e400, 0x10001000, 0x40010400, 0x40010500, 0x40010600, 0x6e524635,
        0x00000000,
    ]),
    loadAddress: 0x20000000,
    minProgramLength: 4,
    pageBuffers: [0x20002000, 0x20002400],
    pageSize: 0x400,
    pcEraseAll: 0x20000029,
    pcEraseSector: 0x20000049,
    pcInit: 0x20000021,
    pcProgramPage: 0x20000071,
    stackPointer: 0x20001000,
    staticBase: 0x20000170,
};
var NRF51 = (function () {
    function NRF51() {
        this.flashAlgo = NRF51_FLASH_ALGO;
    }
    NRF51.prototype.overrideSecurityBits = function (address, data) {
        /* empty */
    };
    return NRF51;
}());
exports.NRF51 = NRF51;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var FlashSection = (function () {
    function FlashSection(address, data) {
        this.address = address;
        this.data = data;
        /* empty */
    }
    FlashSection.prototype.toString = function () {
        return this.data.byteLength + " bytes @ " + this.address.toString(16);
    };
    return FlashSection;
}());
exports.FlashSection = FlashSection;
var FlashProgram = (function () {
    function FlashProgram(sections) {
        this.sections = sections;
    }
    FlashProgram.fromIntelHex = function (hex) {
        var lines = hex.split(/\n/);
        var upperAddr = 0;
        var startAddr = 0;
        var current = null;
        var chunks = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.substr(0, 1) !== ":") {
                throw new Error("Invaild line in hex file: " + (i + 1));
            }
            else {
                var length_1 = parseInt(line.substr(1, 2), 16);
                var addr = upperAddr + parseInt(line.substr(3, 4), 16);
                var fieldType = parseInt(line.substr(7, 2), 16);
                var data = line.substr(9, length_1 * 2);
                if (fieldType === 0x00) {
                    if (current && addr !== startAddr + (current.length / 2)) {
                        // non-contiguous
                        var sectionData = util_1.hex2bin(current);
                        chunks.push(new FlashSection(startAddr, new Uint32Array(sectionData.buffer)));
                        current = "";
                        startAddr = addr;
                    }
                    else if (!current) {
                        startAddr = addr;
                        current = "";
                    }
                    current += data;
                }
                else if (fieldType === 0x01) {
                    // EOF
                    break;
                }
                else if (fieldType === 0x02) {
                    // extended segment address record
                    upperAddr = parseInt(data, 16) << 4;
                }
                else if (fieldType === 0x04) {
                    // extended linear address record
                    upperAddr = parseInt(data, 16) << 16;
                }
            }
        }
        return new FlashProgram(chunks);
    };
    FlashProgram.fromBinary = function (addr, bin) {
        return new FlashProgram([new FlashSection(addr, bin)]);
    };
    FlashProgram.prototype.totalByteLength = function () {
        return this.sections.map(function (s) { return s.data.byteLength; }).reduce(function (x, y) { return x + y; });
    };
    FlashProgram.prototype.toString = function () {
        return this.sections.toString();
    };
    return FlashProgram;
}());
exports.FlashProgram = FlashProgram;


/***/ })
/******/ ]);
//# sourceMappingURL=dapjs.js.map
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProgramTooLargeErrorAsync = exports.cantImportAsync = void 0;
function cantImportAsync(project) {
    // this feature is support in v0 only
    return project.showModalDialogAsync({
        header: lf("Can't import microbit.co.uk scripts..."),
        body: lf("Importing microbit.co.uk programs is not supported in this editor anymore. Please open this script in the https://makecode.microbit.org/v0 editor."),
        buttons: [
            {
                label: lf("Go to the old editor"),
                url: `https://makecode.microbit.org/v0`
            }
        ]
    }).then(() => project.openHome());
}
exports.cantImportAsync = cantImportAsync;
async function showProgramTooLargeErrorAsync(variants, confirmAsync, saveOnly) {
    if (variants.length !== 2)
        return undefined;
    if (pxt.packetio.isConnected() && pxt.packetio.deviceVariant() === "mbcodal" && !saveOnly) {
        // connected micro:bit V2 will be flashed; don't give warning dialog
        return {
            recompile: true,
            useVariants: ["mbcodal"]
        };
    }
    const choice = await confirmAsync({
        header: lf("Oops, there was a problem downloading your code"),
        body: lf("Great coding skills! Unfortunately, your program is too large to fit on a micro:bit V1😢. You can go back and try to make your program smaller, or you can download your program onto a micro:bit V2."),
        bigHelpButton: true,
        agreeLbl: lf("Go Back"),
        agreeClass: "cancel",
        agreeIcon: "cancel",
        disagreeLbl: lf("Download for V2 only"),
        disagreeClass: "positive",
        disagreeIcon: "checkmark"
    });
    if (!choice) {
        return {
            recompile: true,
            useVariants: ["mbcodal"]
        };
    }
    return {
        recompile: false,
        useVariants: []
    };
}
exports.showProgramTooLargeErrorAsync = showProgramTooLargeErrorAsync;

},{}],2:[function(require,module,exports){
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

},{"./dialogs":1,"./flash":3,"./patch":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkDAPLinkPacketIOWrapper = void 0;
const imul = Math.imul;
const timeoutMessage = "timeout";
const membase = 0x20000000;
const loadAddr = membase;
const dataAddr = 0x20002000;
const stackAddr = 0x20001000;
const FULL_FLASH_TIMEOUT = 100000; // 100s
const PARTIAL_FLASH_TIMEOUT = 60000; // 60s
const flashPageBIN = new Uint32Array([
    0xbe00be00,
    0x2502b5f0, 0x4c204b1f, 0xf3bf511d, 0xf3bf8f6f, 0x25808f4f, 0x002e00ed,
    0x2f00595f, 0x25a1d0fc, 0x515800ed, 0x2d00599d, 0x2500d0fc, 0xf3bf511d,
    0xf3bf8f6f, 0x25808f4f, 0x002e00ed, 0x2f00595f, 0x2501d0fc, 0xf3bf511d,
    0xf3bf8f6f, 0x599d8f4f, 0xd0fc2d00, 0x25002680, 0x00f60092, 0xd1094295,
    0x511a2200, 0x8f6ff3bf, 0x8f4ff3bf, 0x2a00599a, 0xbdf0d0fc, 0x5147594f,
    0x2f00599f, 0x3504d0fc, 0x46c0e7ec, 0x4001e000, 0x00000504,
]);
// void computeHashes(uint32_t *dst, uint8_t *ptr, uint32_t pageSize, uint32_t numPages)
const computeChecksums2 = new Uint32Array([
    0x4c27b5f0, 0x44a52680, 0x22009201, 0x91004f25, 0x00769303, 0x24080013,
    0x25010019, 0x40eb4029, 0xd0002900, 0x3c01407b, 0xd1f52c00, 0x468c0091,
    0xa9044665, 0x506b3201, 0xd1eb42b2, 0x089b9b01, 0x23139302, 0x9b03469c,
    0xd104429c, 0x2000be2a, 0x449d4b15, 0x9f00bdf0, 0x4d149e02, 0x49154a14,
    0x3e01cf08, 0x2111434b, 0x491341cb, 0x405a434b, 0x4663405d, 0x230541da,
    0x4b10435a, 0x466318d2, 0x230541dd, 0x4b0d435d, 0x2e0018ed, 0x6002d1e7,
    0x9a009b01, 0x18d36045, 0x93003008, 0xe7d23401, 0xfffffbec, 0xedb88320,
    0x00000414, 0x1ec3a6c8, 0x2f9be6cc, 0xcc9e2d51, 0x1b873593, 0xe6546b64,
]);
let startTime = 0;
function log(msg) {
    let now = Date.now();
    if (!startTime)
        startTime = now;
    now -= startTime;
    let ts = ("00000" + now).slice(-5);
    pxt.debug(`dap ${ts}: ${msg}`);
}
const logV = /webusbdbg=1/.test(window.location.href) ? log : (msg) => { };
const setBaudRateOnConnection = !/webusbbaud=0/.test(window.location.href);
const resetOnConnection = !/webusbreset=0/.test(window.location.href);
function murmur3_core(data) {
    let h0 = 0x2F9BE6CC;
    let h1 = 0x1EC3A6C8;
    for (let i = 0; i < data.length; i += 4) {
        let k = pxt.HF2.read32(data, i) >>> 0;
        k = imul(k, 0xcc9e2d51);
        k = (k << 15) | (k >>> 17);
        k = imul(k, 0x1b873593);
        h0 ^= k;
        h1 ^= k;
        h0 = (h0 << 13) | (h0 >>> 19);
        h1 = (h1 << 13) | (h1 >>> 19);
        h0 = (imul(h0, 5) + 0xe6546b64) >>> 0;
        h1 = (imul(h1, 5) + 0xe6546b64) >>> 0;
    }
    return [h0, h1];
}
function bufferConcat(a, b) {
    const r = new Uint8Array(a.length + b.length);
    r.set(a, 0);
    r.set(b, a.length);
    return r;
}
class DAPWrapper {
    constructor(io) {
        this.io = io;
        this.initialized = false;
        this.flashAborted = false;
        this.connectionId = 0;
        this.pbuf = new pxt.U.PromiseBuffer();
        this.pageSize = 1024;
        this.numPages = 256;
        this.usesCODAL = undefined;
        // we don't know yet if jacdac was compiled in the hex
        this.jacdacInHex = undefined;
        this.forceFullFlash = /webusbfullflash=1/.test(window.location.href);
        this.onSerial = (buf, isStderr) => { };
        this.onCustomEvent = (type, payload) => { };
        this.icon = "xicon microbit";
        this.xchgAddr = null;
        this.sendQ = [];
        this.familyID = 0x0D28; // this is the microbit vendor id, not quite UF2 family id
        this.io.onDeviceConnectionChanged = async (connect) => {
            log(`device connection changed`);
            await this.disconnectAsync();
            // we don't know what's being connected
            this.usesCODAL = undefined;
            this.jacdacInHex = undefined;
            if (!connect)
                return;
            await this.reconnectAsync();
        };
        this.io.onData = buf => {
            // console.log("RD: " + pxt.Util.toHex(buf))
            this.pbuf.push(buf);
        };
        this.allocDAP();
    }
    processSerialLine(line) {
        if (this.onSerial) {
            try {
                // catch encoding bugs
                this.onSerial(line, false);
            }
            catch (err) {
                log(`serial decoding error: ${err.message}`);
                pxt.tickEvent("hid.flash.serial.decode.error");
                console.error({ err, line });
            }
        }
    }
    async readSerial() {
        let buf = await this.dapCmdNums(0x83);
        const len = buf[1];
        // concat received data with previous data
        if (len) {
            buf = buf.slice(2, 2 + len);
            if (this.pendingSerial)
                buf = bufferConcat(this.pendingSerial, buf);
            let ptr = 0;
            let beg = 0;
            while (ptr < buf.length) {
                if (buf[ptr] == 10 || buf[ptr] == 13) {
                    ptr++;
                    // eat \r\n
                    while (ptr < buf.length && (buf[ptr] == 10 || buf[ptr] == 13))
                        ptr++;
                    const line = buf.slice(beg, ptr);
                    if (line.length)
                        this.processSerialLine(line);
                    beg = ptr;
                }
                else
                    ptr++;
            }
            buf = buf.slice(beg);
            this.pendingSerial = buf.length ? buf : null;
            if (this.pendingSerial) {
                this.lastPendingSerial = Date.now();
                //logV(`pending serial ${this.pendingSerial.length}`)
            }
        }
        else if (this.pendingSerial) {
            const d = Date.now() - this.lastPendingSerial;
            if (d > 500) {
                this.processSerialLine(this.pendingSerial);
                this.pendingSerial = null;
                this.lastPendingSerial = undefined;
            }
        }
        return len;
    }
    startReadSerial(connectionId) {
        const startTime = Date.now();
        log(`start read serial ${connectionId}`);
        const readSerialLoop = async () => {
            try {
                let numSer = 0;
                let numEv = 0;
                while (connectionId === this.connectionId) {
                    numSer = await this.readSerial();
                    // we need to read jacdac in a tight loop
                    // so we don't miss any event
                    if (this.xchgAddr)
                        numEv = await this.jacdacProcess();
                    else
                        numEv = 0;
                    // no data on either side, wait as little as possible
                    // the browser will eventually throttle this call
                    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified
                    if (!numSer && !numEv)
                        await pxt.U.delay(0);
                }
                log(`stopped serial reader ${connectionId}`);
            }
            catch (err) {
                log(`serial error ${connectionId}: ${err.message}`);
                console.error(err);
                if (connectionId != this.connectionId) {
                    log(`stopped serial reader ${connectionId}`);
                }
                else {
                    pxt.tickEvent("hid.flash.serial.error");
                    const timeRunning = Date.now() - startTime;
                    await this.disconnectAsync(); // force disconnect
                    // if we've been running for a while, try reconnecting
                    if (timeRunning > 1000) {
                        log(`auto-reconnect`);
                        try {
                            await this.reconnectAsync();
                        }
                        catch (e) {
                            if (e.type === "devicenotfound")
                                return;
                            throw e;
                        }
                    }
                }
            }
            finally {
                this.pendingSerial = undefined;
                this.lastPendingSerial = undefined;
            }
        };
        readSerialLoop();
    }
    stopReadersAsync() {
        log(`cancelling connection ${this.connectionId}`);
        this.connectionId++;
        return pxt.Util.delay(200);
    }
    allocDAP() {
        log(`alloc dap`);
        const h = this.io;
        this.dap = new DapJS.DAP({
            write: data => h.sendPacketAsync(new Uint8Array(data)),
            close: this.disconnectAsync,
            read: () => this.recvPacketAsync(),
            //sendMany: sendMany
        });
        this.cortexM = new DapJS.CortexM(this.dap);
    }
    get binName() {
        return `${this.devVariant}-${pxtc.BINARY_HEX}`;
    }
    get devVariant() {
        if (this.usesCODAL === undefined)
            console.warn('try to access codal information before it is computed');
        return this.usesCODAL ? "mbcodal" : "mbdal";
    }
    unsupportedParts() {
        if (this.usesCODAL === undefined)
            console.warn('try to access codal information before it is computed');
        if (!this.usesCODAL) {
            return ["logotouch", "builtinspeaker", "microphone", "flashlog"];
        }
        return [];
    }
    isConnected() {
        return this.io.isConnected() && this.initialized;
    }
    isConnecting() {
        return this.io.isConnecting() || (this.io.isConnected() && !this.initialized);
    }
    async getBaudRate() {
        const readSerialSettings = new Uint8Array([0x81]); // get serial settings
        const serialSettings = await this.dapCmd(readSerialSettings);
        const baud = (serialSettings[4] << 24) + (serialSettings[3] << 16) + (serialSettings[2] << 8) + serialSettings[1];
        return baud;
    }
    async setBaudRate() {
        const currentBaudRate = await this.getBaudRate();
        if (currentBaudRate === 115200) {
            log(`baud rate already set to 115200`);
            return;
        }
        log(`set baud rate to 115200`);
        const baud = new Uint8Array(5);
        baud[0] = 0x82; // set baud
        pxt.HF2.write32(baud, 1, 115200);
        await this.dapCmd(baud);
        // setting the baud rate on serial may reset NRF (depending on daplink version), so delay after
        await pxt.Util.delay(200);
    }
    async readPageSize() {
        const res = await this.readWords(0x10000010, 2);
        this.pageSize = res[0];
        this.numPages = res[1];
        log(`page size ${this.pageSize}, num pages ${this.numPages}`);
    }
    async reconnectAsync() {
        log(`reconnect`);
        this.initialized = false;
        this.flashAborted = false;
        this.io.onConnectionChanged();
        function stringResponse(buf) {
            return pxt.U.uint8ArrayToString(buf.slice(2, 2 + buf[1]));
        }
        await this.stopReadersAsync();
        const connectionId = this.connectionId;
        this.allocDAP(); // clean dap apis
        await this.io.reconnectAsync();
        // halt before reading from dap
        // to avoid interference from data logger
        await this.cortexM.halt();
        // before calling into dapjs, we use our dapCmdNums() a few times, which which will make sure the responses
        // to commends from previous sessions (if any) are flushed
        const info = await this.dapCmdNums(0x00, 0x04); // info
        const daplinkVersion = stringResponse(info);
        log(`daplink version: ${daplinkVersion}`);
        const r = await this.dapCmdNums(0x80);
        this.usesCODAL = r[2] == 57 && r[3] == 57 && r[5] >= 51;
        const binVersion = stringResponse(r);
        log(`bin name: ${this.binName} v:${binVersion}`);
        pxt.tickEvent("hid.flash.connect", { codal: this.usesCODAL ? 1 : 0, daplink: daplinkVersion, bin: binVersion });
        if (setBaudRateOnConnection)
            await this.setBaudRate();
        // only init after setting baud rate, in case we got reset
        await this.cortexM.init();
        if (resetOnConnection) {
            log(`reset cortex`);
            await this.cortexM.reset(true);
        }
        await this.readPageSize();
        // jacdac needs to run to set the xchg address
        await this.checkStateAsync(true);
        await this.initJacdac(connectionId);
        this.initialized = true;
        this.io.onConnectionChanged();
        // start jacdac, serial async
        this.startReadSerial(connectionId);
    }
    async checkStateAsync(resume) {
        const states = ["reset", "lockup", "sleeping", "halted", "running"];
        try {
            const state = await this.cortexM.getState();
            log(`cortex state: ${states[state]}`);
            if (resume && state == 3 /* TARGET_HALTED */)
                await this.cortexM.resume();
        }
        catch (e) {
            log(`cortex state failed`);
            pxt.tickEvent("hid.checkstate.error");
            console.debug(e);
        }
    }
    checkAborted() {
        if (this.flashAborted)
            throw new Error(lf("Download cancelled"));
    }
    async disconnectAsync() {
        log(`disconnect`);
        this.flashAborted = true;
        this.initialized = false;
        await this.stopReadersAsync();
        await this.io.disconnectAsync();
    }
    async reflashAsync(resp, progressCallback) {
        var _a, _b;
        pxt.tickEvent("hid.flash.start");
        log("reflash");
        startTime = 0;
        // JACDAC_WEBUSB is defined in microsoft/pxt-jacdac/pxt.json
        const codalJson = resp.outfiles["codal.json"];
        this.jacdacInHex = codalJson && !!((_b = (_a = pxt.Util.jsonTryParse(codalJson)) === null || _a === void 0 ? void 0 : _a.definitions) === null || _b === void 0 ? void 0 : _b.JACDAC_WEBUSB);
        this.flashAborted = false;
        if (!this.io.isConnected()) {
            await this.io.reconnectAsync();
        }
        await this.stopReadersAsync();
        await this.cortexM.init();
        await this.cortexM.reset(true);
        await this.checkStateAsync();
        const uicr = await this.readUICR();
        pxt.tickEvent("hid.flash.uicr", { uicr });
        // shortcut, do a full flash
        if (uicr != 0 || this.forceFullFlash) {
            pxt.tickEvent("hid.flash.uicrfail");
            await this.fullVendorCommandFlashAsync(resp, progressCallback);
        }
        else {
            // check flash checksums
            const chk = await this.computeFlashChecksum(resp);
            pxt.tickEvent("hid.flash.checksum", { quick: chk.quick ? 1 : 0, changed: chk.changed ? chk.changed.length : 0 });
            if (chk.quick) {
                // let's do a quick flash!
                await this.quickHidFlashAsync(chk.changed, progressCallback);
            }
            else {
                await this.fullVendorCommandFlashAsync(resp, progressCallback);
            }
        }
        await this.checkStateAsync(true);
        pxt.tickEvent("hid.flash.success");
        // don't disconnect here
        // the micro:bit will automatically disconnect and reconnect
        // via the webusb events
    }
    recvPacketAsync() {
        if (this.io.recvPacketAsync)
            return this.io.recvPacketAsync();
        else
            return this.pbuf.shiftAsync();
    }
    async dapCmd(buf) {
        await this.io.sendPacketAsync(buf);
        const resp = await this.recvPacketAsync();
        if (resp[0] != buf[0]) {
            pxt.tickEvent('hid.flash.cmderror', { req: buf[0], resp: resp[0] });
            const msg = `bad dapCmd response: ${buf[0]} -> ${resp[0]}`;
            // in case we got an invalid response, try to get another response, in case the current
            // response is a left-over from previous communications
            log(msg + "; retrying");
            try {
                const secondTryResp = await this.recvPacketAsync();
                if (secondTryResp[0] === buf[0]) {
                    log(msg + "; retry success");
                    return secondTryResp;
                }
            }
            catch (e) {
                log(e);
            }
            throw new Error(`retry failed ${msg}`);
        }
        return resp;
    }
    dapCmdNums(...nums) {
        return this.dapCmd(new Uint8Array(nums));
    }
    async fullVendorCommandFlashAsync(resp, progressCallback) {
        log("full flash");
        pxt.tickEvent("hid.flash.full.start");
        const start = Date.now();
        const chunkSize = 62;
        let sentPages = 0;
        try {
            await pxt.Util.promiseTimeout(FULL_FLASH_TIMEOUT, (async () => {
                const dapOpenRes = await this.dapCmdNums(0x8A /* DAPLinkFlash.OPEN */, 1);
                log(`daplinkflash open: ${pxt.U.toHex(dapOpenRes)}`);
                if (dapOpenRes[1] !== 0) {
                    pxt.tickEvent('hid.flash.full.error.open', { res: dapOpenRes[1] });
                    throw new Error(lf("Download failed, please try again"));
                }
                const binFile = this.getBinFile(resp);
                log(`bin file ${this.binName} in ${Object.keys(resp.outfiles).join(', ')}, ${(binFile === null || binFile === void 0 ? void 0 : binFile.length) || -1}b`);
                const hexUint8 = pxt.U.stringToUint8Array(binFile);
                log(`hex ${(hexUint8 === null || hexUint8 === void 0 ? void 0 : hexUint8.byteLength) || -1}b, ~${(hexUint8.byteLength / chunkSize) | 0} chunks of ${chunkSize}b`);
                let offset = 0;
                while (offset < hexUint8.length) {
                    const end = Math.min(hexUint8.length, offset + chunkSize);
                    const nextPageData = hexUint8.slice(offset, end);
                    const cmdData = new Uint8Array(2 + nextPageData.length);
                    cmdData[0] = 0x8C; /* DAPLinkFlash.WRITE */
                    cmdData[1] = nextPageData.length;
                    cmdData.set(nextPageData, 2);
                    if (sentPages % 128 == 0) { // reduce logging
                        progressCallback(offset / hexUint8.length);
                        log(`next page ${sentPages}: [${offset.toString(16)}, ${end.toString(16)}] (${Math.ceil((hexUint8.length - end) / 1000)}kb left)`);
                    }
                    await this.dapCmd(cmdData);
                    this.checkAborted();
                    sentPages++;
                    offset = end;
                }
                log("close");
                const closeRes = await this.dapCmdNums(0x8B /* DAPLinkFlash.CLOSE */);
                log(`daplinkclose: ${pxt.U.toHex(closeRes)}`);
                const resetRes = await this.dapCmdNums(0x89 /* DAPLinkFlash.RESET */);
                log(`daplinkreset: ${pxt.U.toHex(resetRes)}`);
                log(`full flash done after ${Date.now() - start}ms`);
                pxt.tickEvent("hid.flash.full.success");
            })(), timeoutMessage);
        }
        catch (e) {
            log(`error: abort`);
            pxt.tickEvent("hid.flash.full.error");
            this.flashAborted = true;
            return this.resetAndThrowAsync(e);
        }
        ;
    }
    async resetAndThrowAsync(e) {
        log(`reset on error`);
        pxt.tickEvent("hid.flash.reset");
        console.debug(e);
        // reset any pending daplink
        try {
            await this.dapCmdNums(0x89 /* DAPLinkFlash.RESET */);
        }
        catch (e) {
            // Best effort reset, no-op if there's an error
        }
        try {
            await this.cortexM.reset(false);
        }
        catch (e) {
            // Best effort reset, no-op if there's an error
        }
        throw e;
    }
    async readUICR() {
        const v = await this.readWords(0x10001014, 1);
        const uicr = v[0] & 0xff;
        log(`uicr: ${uicr.toString(16)} (${v[0].toString(16)})`);
        return uicr;
    }
    getBinFile(resp) {
        var _a;
        const multiVariantBinFile = resp.outfiles[this.binName];
        if (multiVariantBinFile)
            return multiVariantBinFile;
        const dvBin = ((_a = resp.builtVariants) === null || _a === void 0 ? void 0 : _a.find(el => el === this.devVariant)) && resp.outfiles[pxtc.BINARY_HEX];
        if (dvBin)
            return resp.outfiles[pxtc.BINARY_HEX];
        throw new Error(`unable to find ${this.binName} in outfiles ${Object.keys(resp.outfiles).join(', ')}`);
    }
    async computeFlashChecksum(resp) {
        const binFile = this.getBinFile(resp);
        const checksums = await this.getFlashChecksumsAsync();
        log(`checksums ${pxt.Util.toHex(checksums)}`);
        // TODO this is seriously inefficient (130ms on a fast machine)
        const uf2 = ts.pxtc.UF2.newBlockFile();
        ts.pxtc.UF2.writeHex(uf2, binFile.split(/\r?\n/));
        const bytes = pxt.U.stringToUint8Array(ts.pxtc.UF2.serializeFile(uf2));
        const parsed = ts.pxtc.UF2.parseFile(bytes);
        const aligned = DAPWrapper.pageAlignBlocks(parsed, this.pageSize);
        const changed = DAPWrapper.onlyChanged(aligned, checksums, this.pageSize);
        const quick = changed.length < aligned.length / 2;
        log(`pages: ${aligned.length}, changed ${changed.length}, ${quick ? "quick" : "full"}`);
        return {
            quick,
            changed
        };
    }
    async quickHidFlashAsync(changed, progressCallback) {
        log("quick flash");
        pxt.tickEvent("hid.flash.quick.start");
        const start = Date.now();
        const runFlash = async (b, dataAddr) => {
            const cmd = this.cortexM.prepareCommand();
            cmd.halt();
            cmd.writeCoreRegister(15 /* PC */, loadAddr + 4 + 1);
            cmd.writeCoreRegister(14 /* LR */, loadAddr + 1);
            cmd.writeCoreRegister(13 /* SP */, stackAddr);
            cmd.writeCoreRegister(0, b.targetAddr);
            cmd.writeCoreRegister(1, dataAddr);
            cmd.writeCoreRegister(2, this.pageSize >> 2);
            logV("setregs");
            await cmd.go();
            // starts the program
            logV(`cortex.debug.enable`);
            return this.cortexM.debug.enable();
        };
        const quickHidFlashCoreAsync = async () => {
            await this.cortexM.memory.writeBlock(loadAddr, flashPageBIN);
            for (let i = 0; i < changed.length; i++) {
                this.checkAborted();
                let b = changed[i];
                if (b.targetAddr >= 0x10000000) {
                    log(`target address 0x${b.targetAddr.toString(16)} > 0x10000000`);
                    continue;
                }
                log(`about to write at 0x${b.targetAddr.toString(16)}`);
                progressCallback(i / changed.length);
                const thisAddr = (i & 1) ? dataAddr : dataAddr + this.pageSize;
                const nextAddr = (i & 1) ? dataAddr + this.pageSize : dataAddr;
                if (i == 0) {
                    const u32data = new Uint32Array(b.data.length / 4);
                    for (let i = 0; i < b.data.length; i += 4)
                        u32data[i >> 2] = pxt.HF2.read32(b.data, i);
                    await this.cortexM.memory.writeBlock(thisAddr, u32data);
                }
                await runFlash(b, thisAddr);
                const next = changed[i + 1];
                if (next) {
                    logV("write next");
                    const buf = new Uint32Array(next.data.buffer);
                    await this.cortexM.memory.writeBlock(nextAddr, buf);
                }
                logV("wait");
                await this.cortexM.waitForHalt(500);
                logV("done block");
            }
            log(`quick flash done after ${Date.now() - start}ms`);
            await this.cortexM.reset(false);
            pxt.tickEvent("hid.flash.quick.success");
            await this.checkStateAsync(true);
        };
        try {
            await pxt.Util.promiseTimeout(PARTIAL_FLASH_TIMEOUT, quickHidFlashCoreAsync(), timeoutMessage);
        }
        catch (e) {
            pxt.tickEvent("hid.flash.quick.error");
            this.flashAborted = true;
            return this.resetAndThrowAsync(e);
        }
    }
    async getFlashChecksumsAsync() {
        log("flash checksums");
        let pages = this.numPages;
        await this.cortexM.runCode(computeChecksums2, loadAddr, loadAddr + 1, 0xffffffff, stackAddr, true, dataAddr, 0, this.pageSize, pages);
        return this.cortexM.memory.readBlock(dataAddr, pages * 2, this.pageSize);
    }
    async readWords(addr, numWords) {
        const u8 = await this.cortexM.memory.readBlock(addr, numWords, this.pageSize);
        // assume browser is little-endian
        return new Uint32Array(u8.buffer);
    }
    writeWords(addr, buf) {
        return this.cortexM.memory.writeBlock(addr, buf);
    }
    async readBytes(addr, numBytes) {
        const u8 = await this.cortexM.memory.readBlock(addr, (numBytes + 3) >> 2, this.pageSize);
        return u8.length == numBytes ? u8 : u8.slice(0, numBytes);
    }
    static onlyChanged(blocks, checksums, pageSize) {
        return blocks.filter(b => {
            let idx = b.targetAddr / pageSize;
            pxt.U.assert((idx | 0) == idx);
            pxt.U.assert(b.data.length == pageSize);
            if (idx * 8 + 8 > checksums.length)
                return true; // out of range?
            let c0 = pxt.HF2.read32(checksums, idx * 8);
            let c1 = pxt.HF2.read32(checksums, idx * 8 + 4);
            let ch = murmur3_core(b.data);
            if (c0 == ch[0] && c1 == ch[1])
                return false;
            return true;
        });
    }
    static pageAlignBlocks(blocks, pageSize) {
        pxt.U.assert(pageSize % 256 == 0);
        let res = [];
        for (let i = 0; i < blocks.length;) {
            let b0 = blocks[i];
            let newbuf = new Uint8Array(pageSize);
            for (let i = 0; i < newbuf.length; ++i)
                newbuf[i] = 0xff;
            let startPad = b0.targetAddr & (pageSize - 1);
            let newAddr = b0.targetAddr - startPad;
            for (; i < blocks.length; ++i) {
                let b = blocks[i];
                if (b.targetAddr + b.payloadSize > newAddr + pageSize)
                    break;
                pxt.U.memcpy(newbuf, b.targetAddr - newAddr, b.data, 0, b.payloadSize);
            }
            let bb = pxt.U.flatClone(b0);
            bb.data = newbuf;
            bb.targetAddr = newAddr;
            bb.payloadSize = pageSize;
            res.push(bb);
        }
        return res;
    }
    sendCustomEventAsync(type, buf) {
        if (type == "jacdac") {
            if (this.xchgAddr == null)
                return Promise.resolve();
            if (buf.length & 3) {
                const tmp = new Uint8Array((buf.length + 3) & ~3);
                tmp.set(buf);
                buf = tmp;
            }
            return new Promise(resolve => {
                this.sendQ.push({
                    buf,
                    cb: resolve
                });
            });
        }
        return Promise.reject(new Error("invalid custom event type"));
    }
    writeWord(addr, val) {
        return this.cortexM.memory.write32(addr, val);
    }
    async findJacdacXchgAddr(cid) {
        const memStart = 536870912;
        const memStop = memStart + 128 * 1024;
        const addr = (await this.readWords(memStop - 4, 1))[0];
        if (cid != this.connectionId)
            return null;
        if (memStart <= addr && addr < memStop) {
            const buf = await this.readWords(addr, 2);
            if (buf[0] == 0x786D444A && buf[1] == 0xB0A6C0E9)
                return addr;
        }
        return null;
    }
    /**
     * Sniff Jacdac exchange address
     * @returns
     */
    async initJacdac(connectionId) {
        this.xchgAddr = null;
        this.irqn = undefined;
        this.lastXchg = undefined;
        if (!this.usesCODAL) {
            log(`jacdac: CODAL disabled`);
            return;
        }
        if (this.jacdacInHex === false) {
            log(`jacdac: jacdac not compiled in`);
            return;
        }
        try {
            // allow jacdac to boot
            const now = pxt.U.now();
            await pxt.Util.delay(1000);
            let xchgRetry = 0;
            let xchg;
            while (xchg == null && xchgRetry++ < 3) {
                log(`jacdac: finding xchg address (retry ${xchgRetry})`);
                if (xchgRetry > 0)
                    await pxt.Util.delay(500); // wait for the program to start and setup memory correctly
                if (connectionId != this.connectionId)
                    return;
                xchg = await this.findJacdacXchgAddr(connectionId);
            }
            log(`jacdac: exchange address 0x${xchg ? xchg.toString(16) : "?"}; ${xchgRetry} retries; ${(pxt.U.now() - now) | 0}ms`);
            if (xchg == null) {
                log("jacdac: xchg address not found");
                this.jacdacInHex = false;
                pxt.tickEvent("hid.flash.jacdac.error.missingxchg");
                return;
            }
            if (connectionId != this.connectionId)
                return;
            const info = await this.readBytes(xchg, 16);
            if (info[12 + 2] != 0xff) {
                log("jacdac: invalid memory; try power-cycling the micro:bit");
                pxt.tickEvent("hid.flash.jacdac.error.invalidmemory");
                console.debug({ info, xchg });
                return;
            }
            // make sure connection is not outdated
            if (connectionId != this.connectionId)
                return;
            // clear initial lock
            await this.writeWord(xchg + 12, 0);
            // allow serial thread to use jacdac
            this.irqn = info[8];
            this.xchgAddr = xchg;
            log(`jacdac: exchange address 0x${this.xchgAddr.toString(16)}; irqn=${this.irqn}`);
            pxt.tickEvent("hid.flash.jacdac.connected");
        }
        catch (e) {
            if (connectionId != this.connectionId) {
                log(`jacdac: setup aborted`);
                return;
            }
            else
                throw e;
        }
    }
    async triggerIRQ() {
        const addr = 0xE000E200 + (this.irqn >> 5) * 4;
        await this.writeWord(addr, 1 << (this.irqn & 31));
    }
    async jacdacProcess() {
        const now = Date.now();
        if (this.lastXchg && now - this.lastXchg > 50) {
            logV("slow xchg: " + (now - this.lastXchg) + "ms");
        }
        this.lastXchg = now;
        let numev = 0;
        // TODO only read say 32 bytes first, and more if needed
        let inp = await this.readBytes(this.xchgAddr + 12, 256);
        if (inp[2]) {
            await this.writeWord(this.xchgAddr + 12, 0);
            await this.triggerIRQ();
            inp = inp.slice(0, inp[2] + 12);
            this.onCustomEvent("jacdac", inp);
            numev++;
        }
        let sendFree = false;
        if (this.currSend) {
            const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
            if (!send[2]) {
                this.currSend.cb();
                this.currSend = null;
                sendFree = true;
                numev++;
            }
        }
        if (!this.currSend && this.sendQ.length) {
            if (!sendFree) {
                const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
                if (!send[2])
                    sendFree = true;
            }
            if (sendFree) {
                this.currSend = this.sendQ.shift();
                const bbody = this.currSend.buf.slice(4);
                await this.writeWords(this.xchgAddr + 12 + 256 + 4, new Uint32Array(bbody.buffer));
                const bhead = this.currSend.buf.slice(0, 4);
                await this.writeWords(this.xchgAddr + 12 + 256, new Uint32Array(bhead.buffer));
                await this.triggerIRQ();
                this.lastSend = Date.now();
                numev++;
            }
            else {
                if (this.lastSend) {
                    const d = Date.now() - this.lastSend;
                    if (d > 50) {
                        this.lastSend = 0;
                        console.error("failed to send packet fast enough");
                    }
                }
            }
        }
        return numev;
    }
}
function mkDAPLinkPacketIOWrapper(io) {
    pxt.log(`packetio: mk wrapper dap wrapper`);
    return new DAPWrapper(io);
}
exports.mkDAPLinkPacketIOWrapper = mkDAPLinkPacketIOWrapper;

},{}],4:[function(require,module,exports){
"use strict";
/**
 *       <block type="device_show_leds">
    <field name="LED00">FALSE</field>
    <field name="LED10">FALSE</field>
    <field name="LED20">FALSE</field>
    <field name="LED30">FALSE</field>
    <field name="LED40">FALSE</field>
    <field name="LED01">FALSE</field>
    <field name="LED11">FALSE</field>
    <field name="LED21">FALSE</field>
    <field name="LED31">TRUE</field>
    <field name="LED41">FALSE</field>
    <field name="LED02">FALSE</field>
    <field name="LED12">FALSE</field>
    <field name="LED22">FALSE</field>
    <field name="LED32">FALSE</field>
    <field name="LED42">FALSE</field>
    <field name="LED03">FALSE</field>
    <field name="LED13">TRUE</field>
    <field name="LED23">FALSE</field>
    <field name="LED33">FALSE</field>
    <field name="LED43">FALSE</field>
    <field name="LED04">FALSE</field>
    <field name="LED14">FALSE</field>
    <field name="LED24">FALSE</field>
    <field name="LED34">FALSE</field>
    <field name="LED44">FALSE</field>
  </block>

  to
<block type="device_show_leds">
    <field name="LEDS">`
    # # # # #
    . . . . #
    . . . . .
    . . . . #
    . . . . #
    `
    </field>
  </block>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchBlocks = void 0;
function patchBlocks(pkgTargetVersion, dom) {
    if (pxt.semver.majorCmp(pkgTargetVersion || "0.0.0", "5.0.12") <= 0) {
        // Eighth note misspelling
        /*
        <block type="basic_show_icon">
            <field name="i">IconNames.EigthNote</field>
        </block>

        converts to

        <block type="basic_show_icon">
            <field name="i">IconNames.EighthNote</field>
        </block>
        */
        pxt.U.toArray(dom.querySelectorAll("block[type=basic_show_icon]>field[name=i]"))
            .filter(node => node.textContent === "IconNames.EigthNote")
            .forEach(node => node.textContent = "IconNames.EighthNote");
        // Italian translation error
        /*
        <shadow type="device_note">
            <field name="note">466</field>
        </shadow>

        converts to

        <shadow type="device_note">
            <field name="name">466</field>
        </shadow>
        */
        pxt.U.toArray(dom.querySelectorAll("shadow[type=device_note]>field[name=note]"))
            .forEach(node => node.setAttribute("name", "name"));
    }
    // is this a old script?
    if (pxt.semver.majorCmp(pkgTargetVersion || "0.0.0", "1.0.0") >= 0)
        return;
    // showleds
    const nodes = pxt.U.toArray(dom.querySelectorAll("block[type=device_show_leds]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("block[type=device_build_image]")))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=device_build_image]")))
        .concat(pxt.U.toArray(dom.querySelectorAll("block[type=device_build_big_image]")))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=device_build_big_image]")));
    nodes.forEach(node => {
        // don't rewrite if already upgraded, eg. field LEDS already present
        if (pxt.U.toArray(node.children).filter(child => child.tagName == "field" && "LEDS" == child.getAttribute("name"))[0])
            return;
        // read LEDxx value and assmebly into a new field
        const leds = [[], [], [], [], []];
        pxt.U.toArray(node.children)
            .filter(child => child.tagName == "field" && /^LED\d+$/.test(child.getAttribute("name")))
            .forEach(lednode => {
            let n = lednode.getAttribute("name");
            let col = parseInt(n[3]);
            let row = parseInt(n[4]);
            leds[row][col] = lednode.innerHTML == "TRUE" ? "#" : ".";
            // remove node
            node.removeChild(lednode);
        });
        // add new field
        const f = node.ownerDocument.createElement("field");
        f.setAttribute("name", "LEDS");
        const s = '`\n' + leds.map(row => row.join('')).join('\n') + '\n`';
        f.appendChild(node.ownerDocument.createTextNode(s));
        node.insertBefore(f, null);
    });
    // radio
    /*
<block type="radio_on_packet" x="174" y="120">
<mutation callbackproperties="receivedNumber" renamemap="{}"></mutation>
<field name="receivedNumber">receivedNumber</field>
</block>
<block type="radio_on_packet" disabled="true" x="127" y="263">
<mutation callbackproperties="receivedString,receivedNumber" renamemap="{&quot;receivedString&quot;:&quot;name&quot;,&quot;receivedNumber&quot;:&quot;value&quot;}"></mutation>
<field name="receivedString">name</field>
<field name="receivedNumber">value</field>
</block>
<block type="radio_on_packet" disabled="true" x="162" y="420">
<mutation callbackproperties="receivedString" renamemap="{}"></mutation>
<field name="receivedString">receivedString</field>
</block>

converts to

<block type="radio_on_number" x="196" y="208">
<field name="HANDLER_receivedNumber" id="DCy(W;1)*jLWQUpoy4Mm" variabletype="">receivedNumber</field>
</block>
<block type="radio_on_value" x="134" y="408">
<field name="HANDLER_name" id="*d-Jm^MJXO]Djs(dTR*?" variabletype="">name</field>
<field name="HANDLER_value" id="A6HQjH[k^X43o3h775+G" variabletype="">value</field>
</block>
<block type="radio_on_string" x="165" y="583">
<field name="HANDLER_receivedString" id="V9KsE!h$(iO?%W:[32CV" variabletype="">receivedString</field>
</block>
*/
    const varids = {};
    function addField(node, renameMap, name) {
        const f = node.ownerDocument.createElement("field");
        f.setAttribute("name", "HANDLER_" + name);
        f.setAttribute("id", varids[renameMap[name] || name]);
        f.appendChild(node.ownerDocument.createTextNode(name));
        node.appendChild(f);
    }
    pxt.U.toArray(dom.querySelectorAll("variable")).forEach(node => varids[node.innerHTML] = node.getAttribute("id"));
    pxt.U.toArray(dom.querySelectorAll("block[type=radio_on_packet]"))
        .forEach(node => {
        const mutation = node.querySelector("mutation");
        if (!mutation)
            return;
        const renameMap = JSON.parse(node.getAttribute("renamemap") || "{}");
        const props = mutation.getAttribute("callbackproperties");
        if (props) {
            const parts = props.split(",");
            // It's tempting to generate radio_on_number if parts.length === 0 but
            // that would create a variable named "receivedNumber" and possibly shadow
            // an existing variable in the user's program. It's safer to stick to the
            // old block.
            if (parts.length === 1) {
                if (parts[0] === "receivedNumber") {
                    node.setAttribute("type", "radio_on_number");
                    node.removeChild(node.querySelector("field[name=receivedNumber]"));
                    addField(node, renameMap, "receivedNumber");
                }
                else if (parts[0] === "receivedString") {
                    node.setAttribute("type", "radio_on_string");
                    node.removeChild(node.querySelector("field[name=receivedString]"));
                    addField(node, renameMap, "receivedString");
                }
                else {
                    return;
                }
                node.removeChild(mutation);
            }
            else if (parts.length === 2 && parts.indexOf("receivedNumber") !== -1 && parts.indexOf("receivedString") !== -1) {
                node.setAttribute("type", "radio_on_value");
                node.removeChild(node.querySelector("field[name=receivedNumber]"));
                node.removeChild(node.querySelector("field[name=receivedString]"));
                addField(node, renameMap, "name");
                addField(node, renameMap, "value");
                node.removeChild(mutation);
            }
        }
    });
    // device_random now refers to randomRange() so we need to add the missing lower bound argument
    pxt.U.toArray(dom.querySelectorAll("block[type=device_random]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=device_random]")))
        .forEach(node => {
        if (getValue(node, "min"))
            return;
        const v = node.ownerDocument.createElement("value");
        v.setAttribute("name", "min");
        addNumberShadow(v);
        node.appendChild(v);
    });
    /*
    <block type="math_arithmetic">
        <field name="OP">DIVIDE</field>
        <value name="A">
            <shadow type="math_number"><field name="NUM">0</field></shadow>
            <block type="math_number"><field name="NUM">2</field></block>
        </value>
        <value name="B">
            <shadow type="math_number"><field name="NUM">1</field></shadow>
            <block type="math_number"><field name="NUM">3</field></block>
        </value>
    </block>
    */
    pxt.U.toArray(dom.querySelectorAll("block[type=math_arithmetic]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=math_arithmetic]")))
        .forEach(node => {
        const op = getField(node, "OP");
        if (!op || op.textContent.trim() !== "DIVIDE")
            return;
        // Convert to integer division
        /*
        <block type="math_js_op">
            <mutation op-type="infix"></mutation>
            <field name="OP">idiv</field>
            <value name="ARG0">
                <shadow type="math_number"><field name="NUM">0</field></shadow>
            </value>
            <value name="ARG1">
                <shadow type="math_number"><field name="NUM">0</field></shadow>
            </value>
        </block>
        */
        node.setAttribute("type", "math_js_op");
        op.textContent = "idiv";
        const mutation = node.ownerDocument.createElement("mutation");
        mutation.setAttribute("op-type", "infix");
        // mutation has to be first or Blockly will drop the second argument
        node.insertBefore(mutation, node.firstChild);
        const a = getValue(node, "A");
        if (a)
            a.setAttribute("name", "ARG0");
        const b = getValue(node, "B");
        if (b)
            b.setAttribute("name", "ARG1");
    });
    renameField(dom, "math_number_minmax", "NUM", "SLIDER");
    renameField(dom, "device_note", "note", "name");
}
exports.patchBlocks = patchBlocks;
function renameField(dom, blockType, oldName, newName) {
    pxt.U.toArray(dom.querySelectorAll(`block[type=${blockType}]`))
        .concat(pxt.U.toArray(dom.querySelectorAll(`shadow[type=${blockType}]`)))
        .forEach(node => {
        const thefield = getField(node, oldName);
        if (thefield) {
            thefield.setAttribute("name", newName);
        }
    });
}
function getField(parent, name) {
    return getFieldOrValue(parent, name, true);
}
function getValue(parent, name) {
    return getFieldOrValue(parent, name, false);
}
function getFieldOrValue(parent, name, isField) {
    const nodeType = isField ? "field" : "value";
    for (let i = 0; i < parent.children.length; i++) {
        const child = parent.children.item(i);
        if (child.tagName === nodeType && child.getAttribute("name") === name) {
            return child;
        }
    }
    return undefined;
}
function addNumberShadow(valueNode) {
    const s = valueNode.ownerDocument.createElement("shadow");
    s.setAttribute("type", "math_number");
    const f = valueNode.ownerDocument.createElement("field");
    f.setAttribute("name", "NUM");
    f.textContent = "0";
    s.appendChild(f);
    valueNode.appendChild(s);
}

},{}]},{},[1,2,3,4]);
