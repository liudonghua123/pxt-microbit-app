/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../libs/core/dal.d.ts"/>
/// <reference path="../libs/core/enums.d.ts"/>
var pxsim;
(function (pxsim) {
    class DalBoard extends pxsim.CoreBoard {
        constructor() {
            super();
            this.speakerEnabled = true;
            // board hardware version
            this.hardwareVersion = 1;
            // components
            this.lightState = {};
            this.fileSystem = new pxsim.FileSystemState();
            this.controlMessageState = new pxsim.ControlMessageState(this);
            this.builtinParts["ledmatrix"] = this.ledMatrixState = new pxsim.LedMatrixState(pxsim.runtime);
            this.builtinParts["buttonpair"] = this.buttonPairState = new pxsim.ButtonPairState({
                ID_BUTTON_A: 1 /* MICROBIT_ID_BUTTON_A */,
                ID_BUTTON_B: 2 /* MICROBIT_ID_BUTTON_B */,
                ID_BUTTON_AB: 3 /* MICROBIT_ID_BUTTON_AB */,
                BUTTON_EVT_UP: 2 /* MICROBIT_BUTTON_EVT_UP */,
                BUTTON_EVT_CLICK: 3 /* MICROBIT_BUTTON_EVT_CLICK */
            });
            this.builtinParts["edgeconnector"] = this.edgeConnectorState = new pxsim.EdgeConnectorState({
                pins: [
                    100 /* MICROBIT_ID_IO_P0 */,
                    101 /* MICROBIT_ID_IO_P1 */,
                    102 /* MICROBIT_ID_IO_P2 */,
                    103 /* MICROBIT_ID_IO_P3 */,
                    104 /* MICROBIT_ID_IO_P4 */,
                    105 /* MICROBIT_ID_IO_P5 */,
                    106 /* MICROBIT_ID_IO_P6 */,
                    107 /* MICROBIT_ID_IO_P7 */,
                    108 /* MICROBIT_ID_IO_P8 */,
                    109 /* MICROBIT_ID_IO_P9 */,
                    110 /* MICROBIT_ID_IO_P10 */,
                    111 /* MICROBIT_ID_IO_P11 */,
                    112 /* MICROBIT_ID_IO_P12 */,
                    113 /* MICROBIT_ID_IO_P13 */,
                    114 /* MICROBIT_ID_IO_P14 */,
                    115 /* MICROBIT_ID_IO_P15 */,
                    116 /* MICROBIT_ID_IO_P16 */,
                    0,
                    0,
                    119 /* MICROBIT_ID_IO_P19 */,
                    120 /* MICROBIT_ID_IO_P20 */
                ],
                servos: {
                    "P0": 100 /* MICROBIT_ID_IO_P0 */,
                    "P1": 101 /* MICROBIT_ID_IO_P1 */,
                    "P2": 102 /* MICROBIT_ID_IO_P2 */,
                    "P3": 103 /* MICROBIT_ID_IO_P3 */,
                    "P4": 104 /* MICROBIT_ID_IO_P4 */,
                    "P5": 105 /* MICROBIT_ID_IO_P5 */,
                    "P6": 106 /* MICROBIT_ID_IO_P6 */,
                    "P7": 107 /* MICROBIT_ID_IO_P7 */,
                    "P8": 108 /* MICROBIT_ID_IO_P8 */,
                    "P9": 109 /* MICROBIT_ID_IO_P9 */,
                    "P10": 110 /* MICROBIT_ID_IO_P10 */,
                    "P11": 111 /* MICROBIT_ID_IO_P11 */,
                    "P12": 112 /* MICROBIT_ID_IO_P12 */,
                    "P13": 113 /* MICROBIT_ID_IO_P13 */,
                    "P14": 114 /* MICROBIT_ID_IO_P14 */,
                    "P15": 115 /* MICROBIT_ID_IO_P15 */,
                    "P16": 116 /* MICROBIT_ID_IO_P16 */,
                    "P19": 119 /* MICROBIT_ID_IO_P19 */
                }
            });
            this.builtinParts["radio"] = this.radioState = new pxsim.RadioState(pxsim.runtime, this, {
                ID_RADIO: 9 /* MICROBIT_ID_RADIO */,
                RADIO_EVT_DATAGRAM: 1 /* MICROBIT_RADIO_EVT_DATAGRAM */
            });
            this.builtinParts["microphone"] = this.microphoneState = new pxsim.MicrophoneState(3001 /* DEVICE_ID_MICROPHONE */, 0, 255, 86, 165);
            this.builtinParts["recording"] = this.recordingState = new pxsim.RecordingState();
            this.builtinParts["accelerometer"] = this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            this.builtinParts["serial"] = this.serialState = new pxsim.SerialState(pxsim.runtime, this);
            this.builtinParts["thermometer"] = this.thermometerState = new pxsim.ThermometerState();
            this.builtinParts["lightsensor"] = this.lightSensorState = new pxsim.LightSensorState();
            this.builtinParts["compass"] = this.compassState = new pxsim.CompassState();
            this.builtinParts["microservo"] = this.edgeConnectorState;
            this.builtinParts["logotouch"] = this.logoTouch = new pxsim.Button(121 /* MICROBIT_ID_LOGO */);
            this.builtinVisuals["buttonpair"] = () => new pxsim.visuals.ButtonPairView();
            this.builtinVisuals["ledmatrix"] = () => new pxsim.visuals.LedMatrixView();
            this.builtinVisuals["microservo"] = () => new pxsim.visuals.MicroServoView();
            this.builtinParts["neopixel"] = (pin) => { return this.neopixelState(pin.id); };
            this.builtinVisuals["neopixel"] = () => new pxsim.visuals.NeoPixelView(pxsim.parsePinString);
            this.builtinPartVisuals["neopixel"] = (xy) => pxsim.visuals.mkNeoPixelPart(xy);
            this.builtinPartVisuals["buttonpair"] = (xy) => pxsim.visuals.mkBtnSvg(xy);
            this.builtinPartVisuals["ledmatrix"] = (xy) => pxsim.visuals.mkLedMatrixSvg(xy, 8, 8);
            this.builtinPartVisuals["microservo"] = (xy) => pxsim.visuals.mkMicroServoPart(xy);
        }
        ensureHardwareVersion(version) {
            if (version > this.hardwareVersion) {
                this.hardwareVersion = version;
                this.updateView();
            }
        }
        initAsync(msg) {
            super.initAsync(msg);
            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
            const cmpDefs = msg.partDefinitions || {};
            const fnArgs = msg.fnArgs;
            const v2Parts = {
                "microphone": true,
                "logotouch": true,
                "builtinspeaker": true,
                "flashlog": true,
                "v2": true
            };
            if (msg.builtinParts) {
                const v2PartsUsed = msg.builtinParts.filter(k => v2Parts[k]);
                if (v2PartsUsed.length) {
                    console.log(`detected v2 feature`, v2PartsUsed);
                    cmpsList.push(...v2PartsUsed);
                    this.hardwareVersion = 2;
                }
            }
            const opts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
                highContrast: msg.highContrast
            };
            this.viewHost = new pxsim.visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual,
                boardDef: boardDef,
                highContrast: msg.highContrast
            }), opts);
            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = this.viewHost.getView());
            if (pxsim.shouldShowMute()) {
                document.body.appendChild(pxsim.createMuteButton());
                pxsim.AudioContextManager.mute(true);
                pxsim.setParentMuteState("disabled");
            }
            if (msg.theme === "mbcodal") {
                this.ensureHardwareVersion(2);
            }
            return Promise.resolve();
        }
        tryGetNeopixelState(pinId) {
            return this.lightState[pinId];
        }
        neopixelState(pinId) {
            if (pinId === undefined) {
                pinId = 100 /* MICROBIT_ID_IO_P0 */;
            }
            let state = this.lightState[pinId];
            if (!state)
                state = this.lightState[pinId] = new pxsim.CommonNeoPixelState();
            return state;
        }
        screenshotAsync(width) {
            return this.viewHost.screenshotAsync(width);
        }
    }
    pxsim.DalBoard = DalBoard;
    function initRuntimeWithDalBoard() {
        pxsim.U.assert(!pxsim.runtime.board);
        let b = new DalBoard();
        pxsim.runtime.board = b;
        pxsim.runtime.postError = (e) => {
            pxsim.led.setBrightness(255);
            let img = board().ledMatrixState.image;
            img.clear();
            img.set(0, 4, 255);
            img.set(1, 3, 255);
            img.set(2, 3, 255);
            img.set(3, 3, 255);
            img.set(4, 4, 255);
            img.set(0, 0, 255);
            img.set(1, 0, 255);
            img.set(0, 1, 255);
            img.set(1, 1, 255);
            img.set(3, 0, 255);
            img.set(4, 0, 255);
            img.set(3, 1, 255);
            img.set(4, 1, 255);
            pxsim.runtime.updateDisplay();
        };
    }
    pxsim.initRuntimeWithDalBoard = initRuntimeWithDalBoard;
    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    function parsePinString(gpioPin) {
        if (gpioPin == "*")
            return board().edgeConnectorState.getPin(100 /* MICROBIT_ID_IO_P0 */);
        const m = /^(Analog|Digital)Pin\.P(\d)+/.exec(gpioPin);
        if (!m)
            return undefined;
        const pinNum = parseInt(m[2]);
        return board().edgeConnectorState.pins[pinNum];
    }
    pxsim.parsePinString = parsePinString;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function accForGesture(gesture) {
            let b = pxsim.board().accelerometerState;
            b.accelerometer.activate();
            if (gesture == 11 && !b.useShake) { // SHAKE
                b.useShake = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            return b;
        }
        function onGesture(gesture, handler) {
            const b = accForGesture(gesture);
            pxsim.pxtcore.registerWithDal(13 /* MICROBIT_ID_GESTURE */, gesture, handler);
        }
        input.onGesture = onGesture;
        function isGesture(gesture) {
            const b = accForGesture(gesture);
            b.accelerometer.activate();
            return b.accelerometer.getGesture() == gesture;
        }
        input.isGesture = isGesture;
        function acceleration(dimension) {
            let b = pxsim.board().accelerometerState;
            let acc = b.accelerometer;
            switch (dimension) {
                case 0:
                    acc.activate(pxsim.AccelerometerFlag.X);
                    return acc.getX();
                case 1:
                    acc.activate(pxsim.AccelerometerFlag.Y);
                    return acc.getY();
                case 2:
                    acc.activate(pxsim.AccelerometerFlag.Z);
                    return acc.getZ();
                default:
                    acc.activate(pxsim.AccelerometerFlag.Strength);
                    return acc.getStrength();
            }
        }
        input.acceleration = acceleration;
        function rotation(kind) {
            const b = pxsim.board().accelerometerState;
            const acc = b.accelerometer;
            switch (kind) {
                case 0: {
                    acc.activate(pxsim.AccelerometerFlag.Pitch);
                    return acc.getPitch();
                }
                case 1: {
                    acc.activate(pxsim.AccelerometerFlag.Roll);
                    return acc.getRoll();
                }
                default: return 0;
            }
        }
        input.rotation = rotation;
        function setAccelerometerRange(range) {
            let b = pxsim.board().accelerometerState;
            b.accelerometer.setSampleRange(range);
        }
        input.setAccelerometerRange = setAccelerometerRange;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    /**
      * Co-ordinate systems that can be used.
      * RAW: Unaltered data. Data will be returned directly from the accelerometer.
      *
      * SIMPLE_CARTESIAN: Data will be returned based on an easy to understand alignment, consistent with the cartesian system taught in schools.
      * When held upright, facing the user:
      *
      *                            /
      *    +--------------------+ z
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * y  +--------------------+  x-->
      *
      *
      * NORTH_EAST_DOWN: Data will be returned based on the industry convention of the North East Down (NED) system.
      * When held upright, facing the user:
      *
      *                            z
      *    +--------------------+ /
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * x  +--------------------+  y-->
      *
      */
    let MicroBitCoordinateSystem;
    (function (MicroBitCoordinateSystem) {
        MicroBitCoordinateSystem[MicroBitCoordinateSystem["RAW"] = 0] = "RAW";
        MicroBitCoordinateSystem[MicroBitCoordinateSystem["SIMPLE_CARTESIAN"] = 1] = "SIMPLE_CARTESIAN";
        MicroBitCoordinateSystem[MicroBitCoordinateSystem["NORTH_EAST_DOWN"] = 2] = "NORTH_EAST_DOWN";
    })(MicroBitCoordinateSystem = pxsim.MicroBitCoordinateSystem || (pxsim.MicroBitCoordinateSystem = {}));
    let AccelerometerFlag;
    (function (AccelerometerFlag) {
        AccelerometerFlag[AccelerometerFlag["X"] = 1] = "X";
        AccelerometerFlag[AccelerometerFlag["Y"] = 2] = "Y";
        AccelerometerFlag[AccelerometerFlag["Z"] = 4] = "Z";
        AccelerometerFlag[AccelerometerFlag["Strength"] = 8] = "Strength";
        AccelerometerFlag[AccelerometerFlag["Pitch"] = 16] = "Pitch";
        AccelerometerFlag[AccelerometerFlag["Roll"] = 32] = "Roll";
    })(AccelerometerFlag = pxsim.AccelerometerFlag || (pxsim.AccelerometerFlag = {}));
    class Accelerometer {
        constructor(runtime) {
            this.runtime = runtime;
            this.sigma = 0; // the number of ticks that the instantaneous gesture has been stable.
            this.lastGesture = 0; // the last, stable gesture recorded.
            this.currentGesture = 0; // the instantaneous, unfiltered gesture detected.
            this.sample = { x: 0, y: 0, z: -1023 };
            this.shake = { x: false, y: false, z: false, count: 0, shaken: 0, timer: 0 }; // State information needed to detect shake events.
            this.isActive = false;
            this.sampleRange = 2;
            this.flags = 0;
            this.id = 5 /* MICROBIT_ID_ACCELEROMETER */;
        }
        setSampleRange(range) {
            this.activate();
            this.sampleRange = Math.max(1, Math.min(8, range));
        }
        activate(flags) {
            if (!this.isActive) {
                this.isActive = true;
                this.runtime.queueDisplayUpdate();
            }
            if (!!flags)
                this.flags |= flags;
        }
        /**
         * Reads the acceleration data from the accelerometer, and stores it in our buffer.
         * This is called by the tick() member function, if the interrupt is set!
         */
        update(x, y, z) {
            // read MSB values...
            this.sample.x = Math.floor(x);
            this.sample.y = Math.floor(y);
            this.sample.z = Math.floor(z);
            // Update gesture tracking
            this.updateGesture();
            // Indicate that a new sample is available
            pxsim.board().bus.queue(this.id, 1 /* MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE */);
        }
        getStrength() {
            return Math.floor(Math.sqrt(this.instantaneousAccelerationSquared()));
        }
        updateEnvironmentGlobals() {
            // update debugger
            if (this.isActive) {
                if (this.flags & AccelerometerFlag.X)
                    this.runtime.environmentGlobals[pxsim.localization.lf("acceleration.x")] = this.sample.x;
                if (this.flags & AccelerometerFlag.Y)
                    this.runtime.environmentGlobals[pxsim.localization.lf("acceleration.y")] = this.sample.y;
                if (this.flags & AccelerometerFlag.Z)
                    this.runtime.environmentGlobals[pxsim.localization.lf("acceleration.z")] = this.sample.z;
                if (this.flags & AccelerometerFlag.Strength)
                    this.runtime.environmentGlobals[pxsim.localization.lf("acceleration.strength")] = Math.sqrt(this.instantaneousAccelerationSquared());
                if (this.flags & AccelerometerFlag.Pitch)
                    this.runtime.environmentGlobals[pxsim.localization.lf("acceleration.pitch")] = this.getPitch();
                if (this.flags & AccelerometerFlag.Roll)
                    this.runtime.environmentGlobals[pxsim.localization.lf("acceleration.roll")] = this.getRoll();
            }
        }
        instantaneousAccelerationSquared() {
            // Use pythagoras theorem to determine the combined force acting on the device.
            return this.sample.x * this.sample.x + this.sample.y * this.sample.y + this.sample.z * this.sample.z;
        }
        /**
         * Service function. Determines the best guess posture of the device based on instantaneous data.
         * This makes no use of historic data (except for shake), and forms this input to the filter implemented in updateGesture().
         *
         * @return A best guess of the current posture of the device, based on instantaneous data.
         */
        instantaneousPosture() {
            let force = this.instantaneousAccelerationSquared();
            let shakeDetected = false;
            // Test for shake events.
            // We detect a shake by measuring zero crossings in each axis. In other words, if we see a strong acceleration to the left followed by
            // a string acceleration to the right, then we can infer a shake. Similarly, we can do this for each acxis (left/right, up/down, in/out).
            //
            // If we see enough zero crossings in succession (MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD), then we decide that the device
            // has been shaken.
            if ((this.getX() < -400 /* MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE */ && this.shake.x) || (this.getX() > 400 /* MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE */ && !this.shake.x)) {
                shakeDetected = true;
                this.shake.x = !this.shake.x;
            }
            if ((this.getY() < -400 /* MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE */ && this.shake.y) || (this.getY() > 400 /* MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE */ && !this.shake.y)) {
                shakeDetected = true;
                this.shake.y = !this.shake.y;
            }
            if ((this.getZ() < -400 /* MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE */ && this.shake.z) || (this.getZ() > 400 /* MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE */ && !this.shake.z)) {
                shakeDetected = true;
                this.shake.z = !this.shake.z;
            }
            if (shakeDetected && this.shake.count < 4 /* MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD */ && ++this.shake.count == 4 /* MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD */)
                this.shake.shaken = 1;
            if (++this.shake.timer >= 10 /* MICROBIT_ACCELEROMETER_SHAKE_DAMPING */) {
                this.shake.timer = 0;
                if (this.shake.count > 0) {
                    if (--this.shake.count == 0)
                        this.shake.shaken = 0;
                }
            }
            if (this.shake.shaken)
                return 11 /* MICROBIT_ACCELEROMETER_EVT_SHAKE */;
            let sq = (n) => n * n;
            if (force < sq(400 /* MICROBIT_ACCELEROMETER_FREEFALL_TOLERANCE */))
                return 7 /* MICROBIT_ACCELEROMETER_EVT_FREEFALL */;
            if (force > sq(3072 /* MICROBIT_ACCELEROMETER_3G_TOLERANCE */))
                return 8 /* MICROBIT_ACCELEROMETER_EVT_3G */;
            if (force > sq(6144 /* MICROBIT_ACCELEROMETER_6G_TOLERANCE */))
                return 9 /* MICROBIT_ACCELEROMETER_EVT_6G */;
            if (force > sq(8192 /* MICROBIT_ACCELEROMETER_8G_TOLERANCE */))
                return 10 /* MICROBIT_ACCELEROMETER_EVT_8G */;
            // Determine our posture.
            if (this.getX() < (-1000 + 200 /* MICROBIT_ACCELEROMETER_TILT_TOLERANCE */))
                return 3 /* MICROBIT_ACCELEROMETER_EVT_TILT_LEFT */;
            if (this.getX() > (1000 - 200 /* MICROBIT_ACCELEROMETER_TILT_TOLERANCE */))
                return 4 /* MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT */;
            if (this.getY() < (-1000 + 200 /* MICROBIT_ACCELEROMETER_TILT_TOLERANCE */))
                return 2 /* MICROBIT_ACCELEROMETER_EVT_TILT_DOWN */;
            if (this.getY() > (1000 - 200 /* MICROBIT_ACCELEROMETER_TILT_TOLERANCE */))
                return 1 /* MICROBIT_ACCELEROMETER_EVT_TILT_UP */;
            if (this.getZ() < (-1000 + 200 /* MICROBIT_ACCELEROMETER_TILT_TOLERANCE */))
                return 5 /* MICROBIT_ACCELEROMETER_EVT_FACE_UP */;
            if (this.getZ() > (1000 - 200 /* MICROBIT_ACCELEROMETER_TILT_TOLERANCE */))
                return 6 /* MICROBIT_ACCELEROMETER_EVT_FACE_DOWN */;
            return 0;
        }
        updateGesture() {
            // Determine what it looks like we're doing based on the latest sample...
            let g = this.instantaneousPosture();
            // Perform some low pass filtering to reduce jitter from any detected effects
            if (g != this.currentGesture) {
                this.currentGesture = g;
                this.sigma = 0;
            }
            else if (this.sigma < 5 /* MICROBIT_ACCELEROMETER_GESTURE_DAMPING */) {
                ++this.sigma;
            }
            if (this.currentGesture !== this.lastGesture && this.sigma >= 5 /* MICROBIT_ACCELEROMETER_GESTURE_DAMPING */) {
                this.enqueueCurrentGesture();
            }
        }
        forceGesture(gesture) {
            this.currentGesture = gesture;
            this.enqueueCurrentGesture();
        }
        enqueueCurrentGesture() {
            this.lastGesture = this.currentGesture;
            pxsim.board().bus.queue(13 /* MICROBIT_ID_GESTURE */, this.lastGesture);
        }
        /**
          * Reads the X axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the X axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getX();
          * uBit.accelerometer.getX(RAW);
          * @endcode
          */
        getX(system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN) {
            switch (system) {
                case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                    return -this.sample.x;
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    return this.sample.y;
                //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN.RAW:
                default:
                    return this.sample.x;
            }
        }
        /**
          * Reads the Y axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Y axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getY();
          * uBit.accelerometer.getY(RAW);
          * @endcode
          */
        getY(system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN) {
            switch (system) {
                case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                    return -this.sample.y;
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    return -this.sample.x;
                //case RAW:
                default:
                    return this.sample.y;
            }
        }
        /**
          * Reads the Z axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Z axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getZ();
          * uBit.accelerometer.getZ(RAW);
          * @endcode
          */
        getZ(system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN) {
            switch (system) {
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    return -this.sample.z;
                //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                //case MicroBitCoordinateSystem.RAW:
                default:
                    return this.sample.z;
            }
        }
        /**
          * Provides a rotation compensated pitch of the device, based on the latest update from the accelerometer.
          * @return The pitch of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getPitch();
          * @endcode
          */
        getPitch() {
            return Math.floor((360 * this.getPitchRadians()) / (2 * Math.PI));
        }
        getPitchRadians() {
            this.recalculatePitchRoll();
            return this.pitch;
        }
        /**
          * Provides a rotation compensated roll of the device, based on the latest update from the accelerometer.
          * @return The roll of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getRoll();
          * @endcode
          */
        getRoll() {
            return Math.floor((360 * this.getRollRadians()) / (2 * Math.PI));
        }
        getRollRadians() {
            this.recalculatePitchRoll();
            return this.roll;
        }
        getGesture() {
            return this.lastGesture;
        }
        /**
         * Recalculate roll and pitch values for the current sample.
         * We only do this at most once per sample, as the necessary trigonemteric functions are rather
         * heavyweight for a CPU without a floating point unit...
         */
        recalculatePitchRoll() {
            let x = this.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let y = this.getY(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let z = this.getZ(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            this.roll = Math.atan2(y, z);
            this.pitch = Math.atan(-x / (y * Math.sin(this.roll) + z * Math.cos(this.roll)));
        }
    }
    pxsim.Accelerometer = Accelerometer;
    class AccelerometerState {
        constructor(runtime) {
            this.useShake = false;
            this.accelerometer = new Accelerometer(runtime);
        }
        shake() {
            this.accelerometer.forceGesture(11 /* MICROBIT_ACCELEROMETER_EVT_SHAKE */); // SHAKE == 11
        }
    }
    pxsim.AccelerometerState = AccelerometerState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function onButtonPressed(button, handler) {
            let b = pxsim.board().buttonPairState;
            if (button == b.props.ID_BUTTON_AB && !b.usesButtonAB) {
                b.usesButtonAB = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            pxsim.pxtcore.registerWithDal(button, 3 /* MICROBIT_BUTTON_EVT_CLICK */, handler);
        }
        input.onButtonPressed = onButtonPressed;
        function buttonIsPressed(button) {
            let b = pxsim.board().buttonPairState;
            if (button == b.abBtn.id && !b.usesButtonAB) {
                b.usesButtonAB = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            if (button == b.aBtn.id)
                return b.aBtn.pressed;
            if (button == b.bBtn.id)
                return b.bBtn.pressed;
            return b.abBtn.pressed || (b.aBtn.pressed && b.bBtn.pressed);
        }
        input.buttonIsPressed = buttonIsPressed;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        function mkBtnSvg(xy) {
            let [innerCls, outerCls] = ["sim-button", "sim-button-outer"];
            const tabSize = visuals.PIN_DIST / 2.5;
            const pegR = visuals.PIN_DIST / 5;
            const btnR = visuals.PIN_DIST * .8;
            const pegMargin = visuals.PIN_DIST / 8;
            const plateR = visuals.PIN_DIST / 12;
            const pegOffset = pegMargin + pegR;
            let [x, y] = xy;
            const left = x - tabSize / 2;
            const top = y - tabSize / 2;
            const plateH = 3 * visuals.PIN_DIST - tabSize;
            const plateW = 2 * visuals.PIN_DIST + tabSize;
            const plateL = left;
            const plateT = top + tabSize;
            const btnCX = plateL + plateW / 2;
            const btnCY = plateT + plateH / 2;
            let btng = pxsim.svg.elt("g");
            //tabs
            const mkTab = (x, y) => {
                pxsim.svg.child(btng, "rect", { class: "sim-button-tab", x: x, y: y, width: tabSize, height: tabSize });
            };
            mkTab(left, top);
            mkTab(left + 2 * visuals.PIN_DIST, top);
            mkTab(left, top + 3 * visuals.PIN_DIST);
            mkTab(left + 2 * visuals.PIN_DIST, top + 3 * visuals.PIN_DIST);
            //plate
            pxsim.svg.child(btng, "rect", { class: outerCls, x: plateL, y: plateT, rx: plateR, ry: plateR, width: plateW, height: plateH });
            //pegs
            const mkPeg = (x, y) => {
                pxsim.svg.child(btng, "circle", { class: "sim-button-nut", cx: x, cy: y, r: pegR });
            };
            mkPeg(plateL + pegOffset, plateT + pegOffset);
            mkPeg(plateL + plateW - pegOffset, plateT + pegOffset);
            mkPeg(plateL + pegOffset, plateT + plateH - pegOffset);
            mkPeg(plateL + plateW - pegOffset, plateT + plateH - pegOffset);
            //inner btn
            let innerBtn = pxsim.svg.child(btng, "circle", { class: innerCls, cx: btnCX, cy: btnCY, r: btnR });
            //return
            return { el: btng, y: top, x: left, w: plateW, h: plateH + 2 * tabSize };
        }
        visuals.mkBtnSvg = mkBtnSvg;
        visuals.BUTTON_PAIR_STYLE = `
            .sim-button {
                pointer-events: none;
                fill: #000;
            }
            .sim-button-outer:active ~ .sim-button,
            .sim-button-virtual:active {
                fill: #FFA500;
            }
            .sim-button-outer {
                cursor: pointer;
                fill: #979797;
            }
            .sim-button-outer:hover {
                stroke:gray;
                stroke-width: ${visuals.PIN_DIST / 5}px;
            }
            .sim-button-nut {
                fill:#000;
                pointer-events:none;
            }
            .sim-button-nut:hover {
                stroke:${visuals.PIN_DIST / 15}px solid #704A4A;
            }
            .sim-button-tab {
                fill:#FFF;
                pointer-events:none;
            }
            .sim-button-virtual {
                cursor: pointer;
                fill: rgba(255, 255, 255, 0.6);
                stroke: rgba(255, 255, 255, 1);
                stroke-width: ${visuals.PIN_DIST / 5}px;
            }
            .sim-button-virtual:hover {
                stroke: rgba(128, 128, 128, 1);
            }
            .sim-text-virtual {
                fill: #000;
                pointer-events:none;
            }
            `;
        class ButtonPairView {
            constructor() {
                this.style = visuals.BUTTON_PAIR_STYLE;
            }
            init(bus, state) {
                this.state = state;
                this.bus = bus;
                this.defs = [];
                this.element = this.mkBtns();
                this.updateState();
                this.attachEvents();
            }
            moveToCoord(xy) {
                let btnWidth = visuals.PIN_DIST * 3;
                let [x, y] = xy;
                visuals.translateEl(this.aBtn, [x, y]);
                visuals.translateEl(this.bBtn, [x + btnWidth, y]);
                visuals.translateEl(this.abBtn, [x + visuals.PIN_DIST * 1.5, y + visuals.PIN_DIST * 4]);
            }
            updateState() {
                let stateBtns = [this.state.aBtn, this.state.bBtn, this.state.abBtn];
                let svgBtns = [this.aBtn, this.bBtn, this.abBtn];
                if (this.state.usesButtonAB && this.abBtn.style.visibility != "visible") {
                    this.abBtn.style.visibility = "visible";
                }
            }
            updateTheme() { }
            mkBtns() {
                this.aBtn = mkBtnSvg([0, 0]).el;
                this.bBtn = mkBtnSvg([0, 0]).el;
                const mkVirtualBtn = () => {
                    const numPins = 2;
                    const w = visuals.PIN_DIST * 2.8;
                    const offset = (w - (numPins * visuals.PIN_DIST)) / 2;
                    const corner = visuals.PIN_DIST / 2;
                    const cx = 0 - offset + w / 2;
                    const cy = cx;
                    const txtSize = visuals.PIN_DIST * 1.3;
                    const x = -offset;
                    const y = -offset;
                    const txtXOff = visuals.PIN_DIST / 7;
                    const txtYOff = visuals.PIN_DIST / 10;
                    let btng = pxsim.svg.elt("g");
                    let btn = pxsim.svg.child(btng, "rect", { class: "sim-button-virtual", x: x, y: y, rx: corner, ry: corner, width: w, height: w });
                    let btnTxt = visuals.mkTxt(cx + txtXOff, cy + txtYOff, txtSize, 0, "A+B");
                    pxsim.U.addClass(btnTxt, "sim-text");
                    pxsim.U.addClass(btnTxt, "sim-text-virtual");
                    btng.appendChild(btnTxt);
                    return btng;
                };
                this.abBtn = mkVirtualBtn();
                this.abBtn.style.visibility = "hidden";
                let el = pxsim.svg.elt("g");
                pxsim.U.addClass(el, "sim-buttonpair");
                el.appendChild(this.aBtn);
                el.appendChild(this.bBtn);
                el.appendChild(this.abBtn);
                return el;
            }
            attachEvents() {
                let btnStates = [this.state.aBtn, this.state.bBtn];
                let btnSvgs = [this.aBtn, this.bBtn];
                btnSvgs.forEach((btn, index) => {
                    pxsim.pointerEvents.down.forEach(evid => btn.addEventListener(evid, ev => {
                        btnStates[index].pressed = true;
                    }));
                    btn.addEventListener(pxsim.pointerEvents.leave, ev => {
                        btnStates[index].pressed = false;
                    });
                    btn.addEventListener(pxsim.pointerEvents.up, ev => {
                        btnStates[index].pressed = false;
                        this.bus.queue(btnStates[index].id, this.state.props.BUTTON_EVT_UP);
                        this.bus.queue(btnStates[index].id, this.state.props.BUTTON_EVT_CLICK);
                    });
                });
                let updateBtns = (s) => {
                    btnStates.forEach(b => b.pressed = s);
                };
                pxsim.pointerEvents.down.forEach(evid => this.abBtn.addEventListener(evid, ev => {
                    updateBtns(true);
                }));
                this.abBtn.addEventListener(pxsim.pointerEvents.leave, ev => {
                    updateBtns(false);
                });
                this.abBtn.addEventListener(pxsim.pointerEvents.up, ev => {
                    updateBtns(false);
                    this.bus.queue(this.state.abBtn.id, this.state.props.BUTTON_EVT_UP);
                    this.bus.queue(this.state.abBtn.id, this.state.props.BUTTON_EVT_CLICK);
                });
            }
        }
        visuals.ButtonPairView = ButtonPairView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function compassHeading() {
            let b = pxsim.board().compassState;
            if (!b.usesHeading) {
                b.usesHeading = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            return b.heading;
        }
        input.compassHeading = compassHeading;
        function magneticForce() {
            // TODO
            return 0;
        }
        input.magneticForce = magneticForce;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function onPinPressed(pinId, handler) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.isTouched();
            pxsim.runtime.queueDisplayUpdate();
            pxsim.pxtcore.registerWithDal(pin.id, 3 /* MICROBIT_BUTTON_EVT_CLICK */, handler);
        }
        input.onPinPressed = onPinPressed;
        function onPinReleased(pinId, handler) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.isTouched();
            pxsim.runtime.queueDisplayUpdate();
            pxsim.pxtcore.registerWithDal(pin.id, 2 /* MICROBIT_BUTTON_EVT_UP */, handler);
        }
        input.onPinReleased = onPinReleased;
        function pinIsPressed(pinId) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return false;
            return pin.isTouched();
        }
        input.pinIsPressed = pinIsPressed;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    function getPin(id) {
        return pxsim.board().edgeConnectorState.getPin(id);
    }
    pxsim.getPin = getPin;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var pins;
    (function (pins_1) {
        pins_1.edgeConnectorSoundDisabled = false;
        function digitalReadPin(pinId) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return -1;
            pin.mode = pxsim.PinFlags.Digital | pxsim.PinFlags.Input;
            return pin.value > 100 ? 1 : 0;
        }
        pins_1.digitalReadPin = digitalReadPin;
        function digitalWritePin(pinId, value) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.mode = pxsim.PinFlags.Digital | pxsim.PinFlags.Output;
            pin.value = value > 0 ? 1023 : 0;
            pxsim.runtime.queueDisplayUpdate();
        }
        pins_1.digitalWritePin = digitalWritePin;
        function setPull(pinId, pull) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.setPull(pull);
        }
        pins_1.setPull = setPull;
        function analogReadPin(pinId) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return -1;
            pin.mode = pxsim.PinFlags.Analog | pxsim.PinFlags.Input;
            return pin.value || 0;
        }
        pins_1.analogReadPin = analogReadPin;
        function analogWritePin(pinId, value) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.mode = pxsim.PinFlags.Analog | pxsim.PinFlags.Output;
            pin.value = value | 0;
            pxsim.runtime.queueDisplayUpdate();
        }
        pins_1.analogWritePin = analogWritePin;
        function analogSetPeriod(pinId, micros) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.mode = pxsim.PinFlags.Analog | pxsim.PinFlags.Output;
            pin.period = micros;
            pxsim.runtime.queueDisplayUpdate();
        }
        pins_1.analogSetPeriod = analogSetPeriod;
        function servoWritePin(pinId, value) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            analogSetPeriod(pinId, 20000);
            pin.servoAngle = value;
        }
        pins_1.servoWritePin = servoWritePin;
        function servoSetContinuous(pinId, value) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            pin.servoSetContinuous(value);
        }
        pins_1.servoSetContinuous = servoSetContinuous;
        function servoSetPulse(pinId, micros) {
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            // TODO
        }
        pins_1.servoSetPulse = servoSetPulse;
        function analogSetPitchPin(pinId) {
            const b = pxsim.board();
            if (!b)
                return;
            let pin = pxsim.getPin(pinId);
            if (!pin)
                return;
            const ec = b.edgeConnectorState;
            ec.pins.filter(p => !!p).forEach(p => p.pitch = false);
            pin.pitch = true;
        }
        pins_1.analogSetPitchPin = analogSetPitchPin;
        function setSoundOutputPinEnabled(enabled) {
            const b = pxsim.board();
            if (!b)
                return;
            const ec = b.edgeConnectorState;
            ec.pitchEnabled = !enabled;
        }
        pins_1.setSoundOutputPinEnabled = setSoundOutputPinEnabled;
        function analogSetPitchVolume(volume) {
            const ec = pxsim.board().edgeConnectorState;
            ec.pitchVolume = Math.max(0, Math.min(0xff, volume | 0));
            pxsim.AudioContextManager.setCurrentToneGain((ec.pitchVolume / 0xff) / 10);
        }
        pins_1.analogSetPitchVolume = analogSetPitchVolume;
        function analogPitchVolume() {
            const ec = pxsim.board().edgeConnectorState;
            return ec.pitchVolume;
        }
        pins_1.analogPitchVolume = analogPitchVolume;
        function analogPitch(frequency, ms) {
            // update analog output
            const b = pxsim.board();
            if (!b || isNaN(frequency) || isNaN(ms))
                return;
            const ec = b.edgeConnectorState;
            const pins = ec.pins;
            const pin = ec.pitchEnabled && (pins.filter(pin => !!pin && pin.pitch)[0] || pins[0]);
            const pitchVolume = ec.pitchVolume | 0;
            if (pin && !pins_1.edgeConnectorSoundDisabled) {
                pin.mode = pxsim.PinFlags.Analog | pxsim.PinFlags.Output;
                if (frequency <= 0 || pitchVolume <= 0) {
                    pin.value = 0;
                    pin.period = 0;
                }
                else {
                    const v = 1 << (pitchVolume >> 5);
                    pin.value = v;
                    pin.period = 1000000 / frequency;
                }
                pxsim.runtime.queueDisplayUpdate();
            }
            let cb = pxsim.getResume();
            if (pin) {
                const v = pitchVolume / 0xff;
                pxsim.AudioContextManager.tone(frequency, v / 10);
            }
            if (ms <= 0)
                cb();
            else {
                setTimeout(() => {
                    pxsim.AudioContextManager.stop();
                    if (pin && !pins_1.edgeConnectorSoundDisabled) {
                        pin.value = 0;
                        pin.period = 0;
                        pin.mode = pxsim.PinFlags.Unused;
                    }
                    pxsim.runtime.queueDisplayUpdate();
                    cb();
                }, ms);
            }
        }
        pins_1.analogPitch = analogPitch;
        function pushButton(pinId) {
            const b = pxsim.board();
            if (!b)
                return;
            const ec = b.edgeConnectorState;
            // TODO support buttons here
        }
        pins_1.pushButton = pushButton;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var music;
    (function (music) {
        function setVolume(volume) {
            pxsim.pins.analogSetPitchVolume(volume);
        }
        music.setVolume = setVolume;
        function volume() {
            return pxsim.pins.analogPitchVolume();
        }
        music.volume = volume;
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var pins;
    (function (pins) {
        function setAudioPin(pinId) {
            pxsim.pins.analogSetPitchPin(pinId);
        }
        pins.setAudioPin = setAudioPin;
        const disabledSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <clipPath id="bounds" clipPathUnits="userSpaceOnUse">
        <circle cx="50" cy="50" r="45" />
        </clipPath>
        <circle cx="50" cy="50" r="40" stroke-width="10" stroke="red" fill="none" clip-path="url(#bounds)" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="10" clip-path="url(#bounds)" />
    </svg>
    `;
        function setAudioPinEnabled(enabled) {
            pins.edgeConnectorSoundDisabled = !enabled;
            const headphone = pxsim.board().viewHost.getView().querySelector("g.sim-headphone-cmp");
            if (headphone) {
                const existing = headphone.querySelector("#headphone-disabled");
                if (existing) {
                    if (enabled) {
                        existing.remove();
                    }
                    else {
                        return;
                    }
                }
                if (!enabled) {
                    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    img.setAttribute("href", "data:image/svg+xml;utf8," + encodeURIComponent(disabledSVG));
                    img.setAttribute("id", "headphone-disabled");
                    img.style.transform = "scale(1.5) translate(-10px, -10px)";
                    headphone.appendChild(img);
                }
            }
        }
        pins.setAudioPinEnabled = setAudioPinEnabled;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let PinFlags;
    (function (PinFlags) {
        PinFlags[PinFlags["Unused"] = 0] = "Unused";
        PinFlags[PinFlags["Digital"] = 1] = "Digital";
        PinFlags[PinFlags["Analog"] = 2] = "Analog";
        PinFlags[PinFlags["Input"] = 4] = "Input";
        PinFlags[PinFlags["Output"] = 8] = "Output";
        PinFlags[PinFlags["Touch"] = 16] = "Touch";
    })(PinFlags = pxsim.PinFlags || (pxsim.PinFlags = {}));
    class Pin {
        constructor(id) {
            this.id = id;
            this.touched = false;
            this.value = 0;
            this.period = 0;
            this.servoAngle = 0;
            this.mode = PinFlags.Unused;
            this.pitch = false;
            this.pull = 0; // PullDown
            this.servoContinuous = false;
        }
        digitalReadPin() {
            this.mode = PinFlags.Digital | PinFlags.Input;
            return this.value > 100 ? 1 : 0;
        }
        digitalWritePin(value) {
            this.mode = PinFlags.Digital | PinFlags.Output;
            this.value = value > 0 ? 200 : 0;
            pxsim.runtime.queueDisplayUpdate();
        }
        setPull(pull) {
            this.pull = pull;
            switch (pull) {
                case 0 /* PullDown */:
                    this.value = 0;
                    break;
                case 1 /* PullUp */:
                    this.value = 1023;
                    break;
                default:
                    this.value = pxsim.Math_.randomRange(0, 1023);
                    break;
            }
        }
        analogReadPin() {
            this.mode = PinFlags.Analog | PinFlags.Input;
            return this.value || 0;
        }
        analogWritePin(value) {
            value = value >> 0;
            this.mode = PinFlags.Analog | PinFlags.Output;
            this.value = Math.max(0, Math.min(1023, value));
            pxsim.runtime.queueDisplayUpdate();
        }
        analogSetPeriod(micros) {
            micros = micros >> 0;
            this.mode = PinFlags.Analog | PinFlags.Output;
            this.period = micros;
            pxsim.runtime.queueDisplayUpdate();
        }
        servoWritePin(value) {
            value = value >> 0;
            this.analogSetPeriod(20000);
            this.servoAngle = Math.max(0, Math.min(180, value));
            pxsim.runtime.queueDisplayUpdate();
        }
        servoSetContinuous(value) {
            this.servoContinuous = !!value;
        }
        servoSetPulse(pinId, micros) {
            // TODO
        }
        isTouched() {
            this.mode = PinFlags.Touch | PinFlags.Analog | PinFlags.Input;
            return this.touched;
        }
    }
    pxsim.Pin = Pin;
    class EdgeConnectorState {
        constructor(props) {
            this.props = props;
            this.pitchEnabled = true;
            this.pins = props.pins.map(id => id != undefined ? new Pin(id) : null);
            this.pitchVolume = 0xff;
        }
        getPin(id) {
            return this.pins.filter(p => p && p.id == id)[0] || null;
        }
    }
    pxsim.EdgeConnectorState = EdgeConnectorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var files;
    (function (files) {
        function appendLine(filename, text) {
            const b = pxsim.board();
            b.fileSystem.append(filename, text + "\r\n");
        }
        files.appendLine = appendLine;
        function appendString(filename, text) {
            const b = pxsim.board();
            b.fileSystem.append(filename, text);
        }
        files.appendString = appendString;
        function appendNumber(filename, value) {
            const b = pxsim.board();
            b.fileSystem.append(filename, value.toString());
        }
        files.appendNumber = appendNumber;
        function remove(filename) {
            const b = pxsim.board();
            b.fileSystem.remove(filename);
        }
        files.remove = remove;
        function readToSerial(filename) {
            const b = pxsim.board();
            let f = b.fileSystem.files[filename];
            if (f)
                b.serialState.writeSerial(f);
        }
        files.readToSerial = readToSerial;
    })(files = pxsim.files || (pxsim.files = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var flashlog;
    (function (flashlog) {
        let FlashLogTimeStampFormat;
        (function (FlashLogTimeStampFormat) {
            FlashLogTimeStampFormat[FlashLogTimeStampFormat["None"] = 0] = "None";
            FlashLogTimeStampFormat[FlashLogTimeStampFormat["Milliseconds"] = 1] = "Milliseconds";
            FlashLogTimeStampFormat[FlashLogTimeStampFormat["Seconds"] = 10] = "Seconds";
            FlashLogTimeStampFormat[FlashLogTimeStampFormat["Minutes"] = 600] = "Minutes";
            FlashLogTimeStampFormat[FlashLogTimeStampFormat["Hours"] = 36000] = "Hours";
            FlashLogTimeStampFormat[FlashLogTimeStampFormat["Days"] = 864000] = "Days";
        })(FlashLogTimeStampFormat || (FlashLogTimeStampFormat = {}));
        // we don't store the flash log in the runtime object, since it's persistent
        let headers = [];
        let currentRow = undefined;
        let SEPARATOR = ",";
        let timestampFormat = undefined;
        let mirrorToSerial = false;
        let logSize = 0;
        let committedCols = 0;
        /** allocated flash size **/
        const logEnd = 121852;
        let lastRunId;
        function init() {
            const b = pxsim.board();
            if (!b)
                return;
            if (b.runOptions.id !== lastRunId) {
                lastRunId = b.runOptions.id;
                erase();
            }
            b.ensureHardwareVersion(2);
        }
        function commitRow(data, type) {
            if (!pxsim.runtime)
                return;
            data += "\n";
            /** edge 18 does not support text encoder, so fall back to length **/
            logSize += typeof TextEncoder !== "undefined" ? (new TextEncoder().encode(data)).length : data.length;
            if (logSize >= logEnd) {
                pxsim.board().bus.queue(44 /* MICROBIT_ID_LOG */, 1 /* MICROBIT_LOG_EVT_LOG_FULL */);
                clear(false);
            }
            if (mirrorToSerial) {
                pxsim.board().serialState.writeSerial(data);
            }
            if (type !== "plaintext") {
                pxsim.board().serialState.writeCsv(data, type);
            }
        }
        function beginRow() {
            init();
            if (currentRow)
                return -1015 /* DEVICE_INVALID_STATE */;
            currentRow = [];
            return 0 /* DEVICE_OK */;
        }
        flashlog.beginRow = beginRow;
        function logData(key, value, prepend = false) {
            init();
            if (!currentRow)
                return -1015 /* DEVICE_INVALID_STATE */;
            // find header index
            let index = headers.indexOf(key);
            if (index < 0) {
                if (prepend) {
                    /** push timestamps up to front of uncommitted rows **/
                    headers.splice(committedCols, 0, key);
                    currentRow.splice(committedCols, 0, value);
                    index = committedCols;
                }
                else {
                    headers.push(key);
                    index = headers.length - 1;
                }
            }
            // store
            currentRow[index] = value;
            return 0 /* DEVICE_OK */;
        }
        flashlog.logData = logData;
        function endRow() {
            init();
            if (!currentRow)
                return -1015 /* DEVICE_INVALID_STATE */;
            if (!currentRow.some(el => el !== "" && el != undefined))
                return 0 /* DEVICE_OK */;
            if (timestampFormat !== FlashLogTimeStampFormat.None) {
                let unit = "";
                switch (timestampFormat) {
                    case FlashLogTimeStampFormat.Milliseconds:
                        unit = "milliseconds";
                        break;
                    case FlashLogTimeStampFormat.Minutes:
                        unit = "minutes";
                        break;
                    case FlashLogTimeStampFormat.Hours:
                        unit = "hours";
                        break;
                    case FlashLogTimeStampFormat.Days:
                        unit = "days";
                        break;
                    case FlashLogTimeStampFormat.Seconds:
                    default:
                        unit = "seconds";
                        break;
                }
                const timestamp = pxsim.runtime.runningTime();
                const timeUnit = timestampFormat > 1 ? timestampFormat * 100 : timestampFormat;
                const timeValue = timestamp / timeUnit;
                // TODO: there's a semi complicated format conversion
                // over in MicroBitLog::endRow that we might want to replicate.
                // https://github.com/lancaster-university/codal-microbit-v2/blob/master/source/MicroBitLog.cpp#L405
                logData(`time (${unit})`, "" + timeValue, true /** Prepend before new headers */);
            }
            currentRow.length = headers.length;
            const line = currentRow.join(SEPARATOR);
            if (headers.length !== committedCols) {
                commitRow(headers.join(SEPARATOR), "headers");
                committedCols = headers.length;
            }
            currentRow = undefined;
            commitRow(line, "row");
            return 0 /* DEVICE_OK */;
        }
        flashlog.endRow = endRow;
        function logString(s) {
            init();
            if (!s)
                return;
            commitRow(s, "plaintext");
        }
        flashlog.logString = logString;
        function clear(fullErase) {
            init();
            erase();
        }
        flashlog.clear = clear;
        function erase() {
            headers = [];
            logSize = 0;
            committedCols = 0;
            currentRow = undefined;
            pxsim.board().serialState.writeCsv("", "clear");
        }
        function setTimeStamp(format) {
            init();
            // this option is probably not serialized, needs to move in state
            timestampFormat = format;
        }
        flashlog.setTimeStamp = setTimeStamp;
        function setSerialMirroring(enabled) {
            init();
            mirrorToSerial = !!enabled;
        }
        flashlog.setSerialMirroring = setSerialMirroring;
    })(flashlog = pxsim.flashlog || (pxsim.flashlog = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let DisplayMode;
    (function (DisplayMode) {
        DisplayMode[DisplayMode["bw"] = 0] = "bw";
        DisplayMode[DisplayMode["greyscale"] = 1] = "greyscale";
    })(DisplayMode = pxsim.DisplayMode || (pxsim.DisplayMode = {}));
    class LedMatrixState {
        constructor(runtime) {
            this.image = createInternalImage(5);
            this.brigthness = 255;
            this.displayMode = DisplayMode.bw;
            this.font = createFont();
            this.animationQ = new pxsim.AnimationQueue(runtime);
        }
    }
    pxsim.LedMatrixState = LedMatrixState;
    class Image extends pxsim.RefObject {
        constructor(width, data) {
            super();
            this.width = width;
            this.data = data;
            this.height = (this.data.length / this.width) | 0;
        }
        print() {
            console.debug(`Image id:${this.id} size:${this.width}x${this.height}`);
        }
        get(x, y) {
            x = x | 0;
            y = y | 0;
            if (x < 0 || x >= this.width || y < 0 || y >= this.height)
                return 0;
            return this.data[y * this.width + x];
        }
        set(x, y, v) {
            x = x | 0;
            y = y | 0;
            if (x < 0 || x >= this.width || y < 0 || y >= this.height)
                return;
            this.data[y * this.width + x] = Math.max(0, Math.min(255, v));
        }
        copyTo(xSrcIndex, length, target, xTargetIndex) {
            xSrcIndex = xSrcIndex | 0;
            length = length | 0;
            xTargetIndex = xTargetIndex | 0;
            for (let x = 0; x < length; x++) {
                for (let y = 0; y < this.height; y++) {
                    let value = this.get(xSrcIndex + x, y);
                    target.set(xTargetIndex + x, y, value);
                }
            }
        }
        shiftLeft(cols) {
            cols = cols | 0;
            for (let x = 0; x < this.width; ++x)
                for (let y = 0; y < this.height; ++y)
                    this.set(x, y, x < this.width - cols ? this.get(x + cols, y) : 0);
        }
        shiftRight(cols) {
            cols = cols >> 0;
            for (let x = this.width - 1; x >= 0; --x)
                for (let y = 0; y < this.height; ++y)
                    this.set(x, y, x >= cols ? this.get(x - cols, y) : 0);
        }
        clear() {
            for (let i = 0; i < this.data.length; ++i)
                this.data[i] = 0;
        }
    }
    pxsim.Image = Image;
    function createInternalImage(width) {
        width = width >> 0;
        let img = createImage(width);
        return img;
    }
    pxsim.createInternalImage = createInternalImage;
    function createImage(width) {
        width = width >> 0;
        return new Image(width, new Array(width * 5));
    }
    pxsim.createImage = createImage;
    function createImageFromBuffer(data) {
        return new Image((data.length / 5) | 0, data);
    }
    pxsim.createImageFromBuffer = createImageFromBuffer;
    function createImageFromString(text) {
        let font = pxsim.board().ledMatrixState.font;
        let w = font.width;
        let sprite = createInternalImage(6 * text.length - 1);
        let k = 0;
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let charStart = (charCode - 32) * 5;
            if (charStart < 0 || charStart + 5 > w) {
                charCode = " ".charCodeAt(0);
                charStart = (charCode - 32) * 5;
            }
            font.copyTo(charStart, 5, sprite, k);
            k = k + 5;
            if (i < text.length - 1) {
                k = k + 1;
            }
        }
        return sprite;
    }
    pxsim.createImageFromString = createImageFromString;
    pxsim.FONT_DATA = [0x0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x8, 0x8, 0x0, 0x8, 0xa, 0x4a, 0x40, 0x0, 0x0, 0xa, 0x5f, 0xea, 0x5f, 0xea, 0xe, 0xd9, 0x2e, 0xd3, 0x6e, 0x19, 0x32, 0x44, 0x89, 0x33, 0xc, 0x92, 0x4c, 0x92, 0x4d, 0x8, 0x8, 0x0, 0x0, 0x0, 0x4, 0x88, 0x8, 0x8, 0x4, 0x8, 0x4, 0x84, 0x84, 0x88, 0x0, 0xa, 0x44, 0x8a, 0x40, 0x0, 0x4, 0x8e, 0xc4, 0x80, 0x0, 0x0, 0x0, 0x4, 0x88, 0x0, 0x0, 0xe, 0xc0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x0, 0x1, 0x22, 0x44, 0x88, 0x10, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x4, 0x8c, 0x84, 0x84, 0x8e, 0x1c, 0x82, 0x4c, 0x90, 0x1e, 0x1e, 0xc2, 0x44, 0x92, 0x4c, 0x6, 0xca, 0x52, 0x5f, 0xe2, 0x1f, 0xf0, 0x1e, 0xc1, 0x3e, 0x2, 0x44, 0x8e, 0xd1, 0x2e, 0x1f, 0xe2, 0x44, 0x88, 0x10, 0xe, 0xd1, 0x2e, 0xd1, 0x2e, 0xe, 0xd1, 0x2e, 0xc4, 0x88, 0x0, 0x8, 0x0, 0x8, 0x0, 0x0, 0x4, 0x80, 0x4, 0x88, 0x2, 0x44, 0x88, 0x4, 0x82, 0x0, 0xe, 0xc0, 0xe, 0xc0, 0x8, 0x4, 0x82, 0x44, 0x88, 0xe, 0xd1, 0x26, 0xc0, 0x4, 0xe, 0xd1, 0x35, 0xb3, 0x6c, 0xc, 0x92, 0x5e, 0xd2, 0x52, 0x1c, 0x92, 0x5c, 0x92, 0x5c, 0xe, 0xd0, 0x10, 0x10, 0xe, 0x1c, 0x92, 0x52, 0x52, 0x5c, 0x1e, 0xd0, 0x1c, 0x90, 0x1e, 0x1e, 0xd0, 0x1c, 0x90, 0x10, 0xe, 0xd0, 0x13, 0x71, 0x2e, 0x12, 0x52, 0x5e, 0xd2, 0x52, 0x1c, 0x88, 0x8, 0x8, 0x1c, 0x1f, 0xe2, 0x42, 0x52, 0x4c, 0x12, 0x54, 0x98, 0x14, 0x92, 0x10, 0x10, 0x10, 0x10, 0x1e, 0x11, 0x3b, 0x75, 0xb1, 0x31, 0x11, 0x39, 0x35, 0xb3, 0x71, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x1c, 0x92, 0x5c, 0x90, 0x10, 0xc, 0x92, 0x52, 0x4c, 0x86, 0x1c, 0x92, 0x5c, 0x92, 0x51, 0xe, 0xd0, 0xc, 0x82, 0x5c, 0x1f, 0xe4, 0x84, 0x84, 0x84, 0x12, 0x52, 0x52, 0x52, 0x4c, 0x11, 0x31, 0x31, 0x2a, 0x44, 0x11, 0x31, 0x35, 0xbb, 0x71, 0x12, 0x52, 0x4c, 0x92, 0x52, 0x11, 0x2a, 0x44, 0x84, 0x84, 0x1e, 0xc4, 0x88, 0x10, 0x1e, 0xe, 0xc8, 0x8, 0x8, 0xe, 0x10, 0x8, 0x4, 0x82, 0x41, 0xe, 0xc2, 0x42, 0x42, 0x4e, 0x4, 0x8a, 0x40, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1f, 0x8, 0x4, 0x80, 0x0, 0x0, 0x0, 0xe, 0xd2, 0x52, 0x4f, 0x10, 0x10, 0x1c, 0x92, 0x5c, 0x0, 0xe, 0xd0, 0x10, 0xe, 0x2, 0x42, 0x4e, 0xd2, 0x4e, 0xc, 0x92, 0x5c, 0x90, 0xe, 0x6, 0xc8, 0x1c, 0x88, 0x8, 0xe, 0xd2, 0x4e, 0xc2, 0x4c, 0x10, 0x10, 0x1c, 0x92, 0x52, 0x8, 0x0, 0x8, 0x8, 0x8, 0x2, 0x40, 0x2, 0x42, 0x4c, 0x10, 0x14, 0x98, 0x14, 0x92, 0x8, 0x8, 0x8, 0x8, 0x6, 0x0, 0x1b, 0x75, 0xb1, 0x31, 0x0, 0x1c, 0x92, 0x52, 0x52, 0x0, 0xc, 0x92, 0x52, 0x4c, 0x0, 0x1c, 0x92, 0x5c, 0x90, 0x0, 0xe, 0xd2, 0x4e, 0xc2, 0x0, 0xe, 0xd0, 0x10, 0x10, 0x0, 0x6, 0xc8, 0x4, 0x98, 0x8, 0x8, 0xe, 0xc8, 0x7, 0x0, 0x12, 0x52, 0x52, 0x4f, 0x0, 0x11, 0x31, 0x2a, 0x44, 0x0, 0x11, 0x31, 0x35, 0xbb, 0x0, 0x12, 0x4c, 0x8c, 0x92, 0x0, 0x11, 0x2a, 0x44, 0x98, 0x0, 0x1e, 0xc4, 0x88, 0x1e, 0x6, 0xc4, 0x8c, 0x84, 0x86, 0x8, 0x8, 0x8, 0x8, 0x8, 0x18, 0x8, 0xc, 0x88, 0x18, 0x0, 0x0, 0xc, 0x83, 0x60];
    function createFont() {
        let nb = pxsim.FONT_DATA.length;
        let n = nb / 5;
        let font = createInternalImage(nb);
        for (let c = 0; c < n; c++) {
            for (let row = 0; row < 5; row++) {
                let char = pxsim.FONT_DATA[c * 5 + row];
                for (let col = 0; col < 5; col++) {
                    if ((char & (1 << col)) != 0)
                        font.set((c * 5 + 4) - col, row, 255);
                }
            }
        }
        return font;
    }
    pxsim.createFont = createFont;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var fonts;
    (function (fonts) {
        function charCodeBuffer(charCode) {
            if (charCode < 32 /* MICROBIT_FONT_ASCII_START */ || charCode > 126 /* MICROBIT_FONT_ASCII_END */)
                return undefined;
            const b = pxsim.board();
            const led = b.ledMatrixState;
            const font = led.font;
            const h = font.height;
            const w = font.width;
            const buf = pxsim.control.createBuffer(h);
            const offset = (charCode - 32 /* MICROBIT_FONT_ASCII_START */) * h;
            for (let row = 0; row < h; ++row)
                buf.data[row] = pxsim.FONT_DATA[offset + row];
            return buf;
        }
        fonts.charCodeBuffer = charCodeBuffer;
    })(fonts = pxsim.fonts || (pxsim.fonts = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var images;
    (function (images) {
        function createImage(img) {
            return img;
        }
        images.createImage = createImage;
        function createBigImage(img) {
            return img;
        }
        images.createBigImage = createBigImage;
    })(images = pxsim.images || (pxsim.images = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var ImageMethods;
    (function (ImageMethods) {
        function showImage(leds, offset, interval) {
            pxsim.pxtrt.nullCheck(leds);
            offset = offset >> 0;
            interval = interval >> 0;
            let cb = pxsim.getResume();
            let first = true;
            leds = clampPixelBrightness(leds);
            pxsim.board().ledMatrixState.animationQ.enqueue({
                interval,
                frame: () => {
                    if (first) {
                        leds.copyTo(offset, 5, pxsim.board().ledMatrixState.image, 0);
                        first = false;
                        return true;
                    }
                    return false;
                },
                whenDone: cb
            });
        }
        ImageMethods.showImage = showImage;
        function plotImage(leds, offset) {
            pxsim.pxtrt.nullCheck(leds);
            offset = offset >> 0;
            leds = clampPixelBrightness(leds);
            pxsim.board().ledMatrixState.animationQ.enqueue({
                interval: 0,
                frame: () => {
                    leds.copyTo(offset, 5, pxsim.board().ledMatrixState.image, 0);
                    return false;
                }
            });
        }
        ImageMethods.plotImage = plotImage;
        function height(leds) {
            pxsim.pxtrt.nullCheck(leds);
            return leds.height;
        }
        ImageMethods.height = height;
        function width(leds) {
            pxsim.pxtrt.nullCheck(leds);
            return leds.width;
        }
        ImageMethods.width = width;
        function plotFrame(leds, frame) {
            ImageMethods.plotImage(leds, frame * leds.height);
        }
        ImageMethods.plotFrame = plotFrame;
        function showFrame(leds, frame, interval) {
            ImageMethods.showImage(leds, frame * leds.height, interval);
        }
        ImageMethods.showFrame = showFrame;
        function pixel(leds, x, y) {
            pxsim.pxtrt.nullCheck(leds);
            return leds.get(x, y);
        }
        ImageMethods.pixel = pixel;
        function setPixel(leds, x, y, v) {
            pxsim.pxtrt.nullCheck(leds);
            leds.set(x, y, v);
        }
        ImageMethods.setPixel = setPixel;
        function clear(leds) {
            pxsim.pxtrt.nullCheck(leds);
            leds.clear();
        }
        ImageMethods.clear = clear;
        function setPixelBrightness(i, x, y, b) {
            pxsim.pxtrt.nullCheck(i);
            i.set(x, y, b);
        }
        ImageMethods.setPixelBrightness = setPixelBrightness;
        function pixelBrightness(i, x, y) {
            pxsim.pxtrt.nullCheck(i);
            return i.get(x, y);
        }
        ImageMethods.pixelBrightness = pixelBrightness;
        function scrollImage(leds, stride, interval) {
            pxsim.pxtrt.nullCheck(leds);
            stride = stride >> 0;
            interval = interval >> 0;
            if (stride == 0)
                stride = 1;
            let cb = pxsim.getResume();
            let off = stride > 0 ? 0 : leds.width - 1;
            let display = pxsim.board().ledMatrixState.image;
            leds = clampPixelBrightness(leds);
            pxsim.board().ledMatrixState.animationQ.enqueue({
                interval: interval,
                frame: () => {
                    if (off >= leds.width || off < 0)
                        return false;
                    if (stride > 0) {
                        display.shiftLeft(stride);
                        const c = Math.min(stride, leds.width - off);
                        leds.copyTo(off, c, display, 5 - stride);
                    }
                    else {
                        display.shiftRight(-stride);
                        const c = Math.min(-stride, leds.width - off);
                        leds.copyTo(off, c, display, 0);
                    }
                    off += stride;
                    return true;
                },
                whenDone: cb
            });
        }
        ImageMethods.scrollImage = scrollImage;
        function clampPixelBrightness(img) {
            let res = img;
            if (pxsim.led.displayMode() === pxsim.DisplayMode.greyscale && pxsim.led.brightness() < 0xff) {
                res = new pxsim.Image(img.width, img.data);
                const b = pxsim.led.brightness();
                for (let x = 0; x < res.width; ++x) {
                    for (let y = 0; y < 5; ++y) {
                        if (pixelBrightness(res, x, y) > b) {
                            setPixelBrightness(res, x, y, b);
                        }
                    }
                }
            }
            return res;
        }
    })(ImageMethods = pxsim.ImageMethods || (pxsim.ImageMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var basic;
    (function (basic) {
        function showNumber(x, interval) {
            interval |= 0;
            if (interval <= 0)
                interval = 1;
            let leds = pxsim.createImageFromString(x.toString());
            if (x < 0 || x >= 10)
                pxsim.ImageMethods.scrollImage(leds, 1, interval);
            else
                showLeds(leds, interval * 5);
        }
        basic.showNumber = showNumber;
        function showString(s, interval) {
            interval |= 0;
            if (interval <= 0)
                interval = 1;
            if (s.length == 0) {
                clearScreen();
                basic.pause(interval * 5);
            }
            else if (s.length > 1) {
                pxsim.ImageMethods.scrollImage(pxsim.createImageFromString(s + " "), 1, interval);
            }
            else {
                showLeds(pxsim.createImageFromString(s), interval * 5);
            }
        }
        basic.showString = showString;
        function showLeds(leds, interval) {
            interval |= 0;
            showAnimation(leds, interval);
        }
        basic.showLeds = showLeds;
        function clearScreen() {
            pxsim.board().ledMatrixState.image.clear();
            pxsim.runtime.queueDisplayUpdate();
        }
        basic.clearScreen = clearScreen;
        function showAnimation(leds, interval) {
            interval |= 0;
            pxsim.ImageMethods.scrollImage(leds, 5, interval);
        }
        basic.showAnimation = showAnimation;
        function plotLeds(leds) {
            pxsim.ImageMethods.plotImage(leds, 0);
        }
        basic.plotLeds = plotLeds;
    })(basic = pxsim.basic || (pxsim.basic = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var led;
    (function (led) {
        function plot(x, y) {
            x |= 0;
            y |= 0;
            pxsim.board().ledMatrixState.image.set(x, y, 0xff);
            pxsim.runtime.queueDisplayUpdate();
        }
        led.plot = plot;
        function plotBrightness(x, y, brightness) {
            x |= 0;
            y |= 0;
            const state = pxsim.board().ledMatrixState;
            brightness |= 0;
            brightness = Math.max(0, Math.min(led.brightness(), brightness));
            if (brightness != 0 && brightness != 0xff && state.displayMode != pxsim.DisplayMode.greyscale)
                state.displayMode = pxsim.DisplayMode.greyscale;
            state.image.set(x, y, brightness);
            pxsim.runtime.queueDisplayUpdate();
        }
        led.plotBrightness = plotBrightness;
        function unplot(x, y) {
            x |= 0;
            y |= 0;
            pxsim.board().ledMatrixState.image.set(x, y, 0);
            pxsim.runtime.queueDisplayUpdate();
        }
        led.unplot = unplot;
        function pointBrightness(x, y) {
            x |= 0;
            y |= 0;
            return pxsim.board().ledMatrixState.image.get(x, y);
        }
        led.pointBrightness = pointBrightness;
        function brightness() {
            return pxsim.board().ledMatrixState.brigthness;
        }
        led.brightness = brightness;
        function setBrightness(value) {
            value |= 0;
            pxsim.board().ledMatrixState.brigthness = Math.max(0, Math.min(255, value));
            pxsim.runtime.queueDisplayUpdate();
        }
        led.setBrightness = setBrightness;
        function stopAnimation() {
            pxsim.board().ledMatrixState.animationQ.cancelAll();
            pxsim.board().ledMatrixState.image.clear();
        }
        led.stopAnimation = stopAnimation;
        function setDisplayMode(mode) {
            pxsim.board().ledMatrixState.displayMode = mode;
            pxsim.runtime.queueDisplayUpdate();
        }
        led.setDisplayMode = setDisplayMode;
        function displayMode() {
            return pxsim.board().ledMatrixState.displayMode;
        }
        led.displayMode = displayMode;
        function screenshot() {
            let img = pxsim.createImage(5);
            pxsim.board().ledMatrixState.image.copyTo(0, 5, img, 0);
            return img;
        }
        led.screenshot = screenshot;
        function enable(on) {
            pxsim.board().ledMatrixState.disabled = !on;
            pxsim.runtime.queueDisplayUpdate();
        }
        led.enable = enable;
    })(led = pxsim.led || (pxsim.led = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function lightLevel() {
            let b = pxsim.board().lightSensorState;
            if (!b.usesLightLevel) {
                b.usesLightLevel = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            return b.lightLevel;
        }
        input.lightLevel = lightLevel;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function onLogoEvent(action, handler) {
            const b = pxsim.board();
            if (!b)
                return;
            // update rendering
            pxsim.runtime.queueDisplayUpdate();
            // minimum v2
            b.ensureHardwareVersion(2);
            // register handle
            pxsim.pxtcore.registerWithDal(121 /* MICROBIT_ID_LOGO */, action, handler);
        }
        input.onLogoEvent = onLogoEvent;
        function logoIsPressed() {
            const b = pxsim.board();
            if (!b)
                return false;
            // minimum v2
            b.ensureHardwareVersion(2);
            return b.logoTouch.pressed;
        }
        input.logoIsPressed = logoIsPressed;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var pins;
    (function (pins) {
        function touchSetMode(name, mode) {
            const b = pxsim.board();
            if (b)
                b.ensureHardwareVersion(2);
            // not simulated
        }
        pins.touchSetMode = touchSetMode;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
// move to common packages eventually
var pxsim;
(function (pxsim) {
    var input;
    (function (input) {
        function soundLevel() {
            const b = pxsim.microphoneState();
            if (!b)
                return 0;
            b.setUsed();
            b.pingSoundLevel();
            return b.getLevel();
        }
        input.soundLevel = soundLevel;
        function onSound(sound /* SoundThreshold */, body) {
            const b = pxsim.microphoneState();
            if (!b)
                return;
            b.setUsed();
            b.onSoundRegistered = true;
            pxsim.pxtcore.registerWithDal(b.id, sound, body);
        }
        input.onSound = onSound;
        function setSoundThreshold(sound, threshold) {
            const b = pxsim.microphoneState();
            if (!b)
                return;
            if (sound === 2 /* SoundThreshold.Loud */)
                b.setHighThreshold(threshold);
            else
                b.setLowThreshold(threshold);
        }
        input.setSoundThreshold = setSoundThreshold;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        function createMicroServoElement() {
            return pxsim.svg.parseString(`
        <svg xmlns="http://www.w3.org/2000/svg" id="svg2" width="112.188" height="299.674">
          <g id="layer1" stroke-linecap="round" stroke-linejoin="round" transform="scale(0.8)">
            <path id="path8212" fill="#0061ff" stroke-width="6.6" d="M.378 44.61v255.064h112.188V44.61H.378z"/>
            <path id="crankbase" fill="#00f" stroke-width="6.6" d="M56.57 88.047C25.328 88.047 0 113.373 0 144.615c.02 22.352 11.807 42.596 32.238 51.66.03 3.318.095 5.24.088 7.938 0 13.947 11.307 25.254 25.254 25.254 13.947 0 25.254-11.307 25.254-25.254-.006-2.986-.415-5.442-.32-8.746 19.487-9.45 30.606-29.195 30.625-50.852 0-31.24-25.33-56.568-56.57-56.568z"/>
            <path id="lowertip" fill="#00a2ff" stroke-width="2" d="M.476 260.78v38.894h53.82v-10.486a6.82 6.566 0 0 1-4.545-6.182 6.82 6.566 0 0 1 6.82-6.566 6.82 6.566 0 0 1 6.82 6.566 6.82 6.566 0 0 1-4.545 6.182v10.486h53.82V260.78H.475z"/>
            <path id="uppertip" fill="#00a2ff" stroke-width="2" d="M112.566 83.503V44.61h-53.82v10.487a6.82 6.566 0 0 1 4.544 6.18 6.82 6.566 0 0 1-6.818 6.568 6.82 6.566 0 0 1-6.82-6.567 6.82 6.566 0 0 1 4.546-6.18V44.61H.378v38.893h112.188z"/>
            <path id="VCC" fill="red" stroke-width="2" d="M53.72 21.93h5.504v22.627H53.72z"/>
            <path id="LOGIC" fill="#fc0" stroke-width="2" d="M47.3 21.93h5.503v22.627H47.3z"/>
            <path id="GND" fill="#a02c2c" stroke-width="2" d="M60.14 21.93h5.505v22.627H60.14z"/>
            <path id="connector" stroke-width="2" d="M45.064 0a1.488 1.488 0 0 0-1.488 1.488v24.5a1.488 1.488 0 0 0 1.488 1.487h22.71a1.488 1.488 0 0 0 1.49-1.488v-24.5A1.488 1.488 0 0 0 67.774 0h-22.71z"/>
            <g id="crank" transform="translate(0 -752.688)">
              <path id="arm" fill="#ececec" stroke="#000" stroke-width="1.372" d="M47.767 880.88c-4.447 1.162-8.412 8.278-8.412 18.492s3.77 18.312 8.412 18.494c8.024.314 78.496 5.06 78.51-16.952.012-22.013-74.377-21.117-78.51-20.035z"/>
              <circle id="path8216" cx="56.661" cy="899.475" r="8.972" fill="gray" stroke-width="2"/>
            </g>
          </g>
        </svg>
                    `).firstElementChild;
        }
        function mkMicroServoPart(xy = [0, 0]) {
            return { el: createMicroServoElement(), x: xy[0], y: xy[1], w: 112.188, h: 299.674 };
        }
        visuals.mkMicroServoPart = mkMicroServoPart;
        const SPEED = 300; // 0.1s/60 degree
        class MicroServoView {
            constructor() {
                this.style = "";
                this.overElement = undefined;
                this.defs = [];
                this.currentAngle = 0;
                this.targetAngle = 0;
                this.lastAngleTime = 0;
            }
            init(bus, state, svgEl, otherParams) {
                this.state = state;
                this.pin = this.state.props.servos[pxsim.readPin(otherParams["name"] || otherParams["pin"])];
                this.bus = bus;
                this.defs = [];
                this.initDom();
                this.updateState();
            }
            initDom() {
                this.element = createMicroServoElement();
                this.crankEl = this.element.querySelector("#crank");
                this.crankTransform = this.crankEl.getAttribute("transform");
            }
            moveToCoord(xy) {
                let [x, y] = xy;
                visuals.translateEl(this.element, [x, y]);
            }
            updateState() {
                const p = this.state.getPin(this.pin);
                const continuous = !!p.servoContinuous;
                const servoAngle = p.servoAngle;
                if (continuous) {
                    // for a continuous servo, the angle is interpreted as a rotation speed
                    // 0 -> -100%, 90 - 0%, 180 - 100%
                    const now = pxsim.U.now();
                    const dt = Math.min(now - this.lastAngleTime, 50) / 1000;
                    this.currentAngle = this.targetAngle;
                    this.targetAngle += ((servoAngle - 90) / 90) * SPEED * dt;
                }
                else {
                    this.targetAngle = 180.0 - servoAngle;
                }
                if (this.targetAngle != this.currentAngle)
                    this.renderAngle();
            }
            renderAngle() {
                const now = pxsim.U.now();
                const cx = 56.661;
                const cy = 899.475;
                const dt = Math.min(now - this.lastAngleTime, 50) / 1000;
                const delta = this.targetAngle - this.currentAngle;
                this.currentAngle += Math.min(Math.abs(delta), SPEED * dt) * (delta > 0 ? 1 : -1);
                this.crankEl.setAttribute("transform", this.crankTransform
                    + ` rotate(${this.currentAngle}, ${cx}, ${cy})`);
                this.lastAngleTime = now;
                setTimeout(() => pxsim.runtime.updateDisplay(), 20);
            }
            updateTheme() {
            }
        }
        visuals.MicroServoView = MicroServoView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var control;
    (function (control) {
        function __midiSend(data) {
            const b = pxsim.board();
            pxsim.AudioContextManager.sendMidiMessage(data);
        }
        control.__midiSend = __midiSend;
    })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    /**
     * Error codes used in the micro:bit runtime.
    */
    let PanicCode;
    (function (PanicCode) {
        // PANIC Codes. These are not return codes, but are terminal conditions.
        // These induce a panic operation, where all code stops executing, and a panic state is
        // entered where the panic code is diplayed.
        // Out out memory error. Heap storage was requested, but is not available.
        PanicCode[PanicCode["MICROBIT_OOM"] = 20] = "MICROBIT_OOM";
        // Corruption detected in the micro:bit heap space
        PanicCode[PanicCode["MICROBIT_HEAP_ERROR"] = 30] = "MICROBIT_HEAP_ERROR";
        // Dereference of a NULL pointer through the ManagedType class,
        PanicCode[PanicCode["MICROBIT_NULL_DEREFERENCE"] = 40] = "MICROBIT_NULL_DEREFERENCE";
    })(PanicCode = pxsim.PanicCode || (pxsim.PanicCode = {}));
    ;
    function panic(code) {
        console.log("PANIC:", code);
        throw new Error("PANIC " + code);
    }
    pxsim.panic = panic;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var basic;
    (function (basic) {
        basic.pause = pxsim.thread.pause;
        basic.forever = pxsim.thread.forever;
    })(basic = pxsim.basic || (pxsim.basic = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var control;
    (function (control) {
        control.inBackground = pxsim.thread.runInBackground;
        function onEvent(id, evid, handler) {
            if (id == 3 /* MICROBIT_ID_BUTTON_AB */) {
                const b = pxsim.board().buttonPairState;
                if (!b.usesButtonAB) {
                    b.usesButtonAB = true;
                    pxsim.runtime.queueDisplayUpdate();
                }
            }
            pxsim.pxtcore.registerWithDal(id, evid, handler);
        }
        control.onEvent = onEvent;
        function eventTimestamp() {
            return pxsim.board().bus.getLastEventTime();
        }
        control.eventTimestamp = eventTimestamp;
        function eventValue() {
            return pxsim.board().bus.getLastEventValue();
        }
        control.eventValue = eventValue;
    })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var input;
    (function (input) {
        function calibrateCompass() {
            // device calibrates...
        }
        input.calibrateCompass = calibrateCompass;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var pins;
    (function (pins) {
        function onPulsed(name, pulse, body) {
        }
        pins.onPulsed = onPulsed;
        function pulseDuration() {
            return 0;
        }
        pins.pulseDuration = pulseDuration;
        function createBuffer(sz) {
            return pxsim.BufferMethods.createBuffer(sz);
        }
        pins.createBuffer = createBuffer;
        function pulseIn(name, value, maxDuration) {
            let pin = pxsim.getPin(name);
            if (!pin)
                return 0;
            return 5000;
        }
        pins.pulseIn = pulseIn;
        function spiWrite(value) {
            // TODO
            return 0;
        }
        pins.spiWrite = spiWrite;
        function spiTransfer(cmd, resp) {
            // TODO
        }
        pins.spiTransfer = spiTransfer;
        function spiFrequency(f) {
            // TODO
        }
        pins.spiFrequency = spiFrequency;
        function spiFormat(bits, mode) {
            // TODO
        }
        pins.spiFormat = spiFormat;
        function spiPins(mosi, miso, sck) {
            // TODO
        }
        pins.spiPins = spiPins;
        function i2cReadBuffer(address, size, repeat) {
            // fake reading zeros
            return createBuffer(size);
        }
        pins.i2cReadBuffer = i2cReadBuffer;
        function i2cWriteBuffer(address, buf, repeat) {
            // fake - noop
        }
        pins.i2cWriteBuffer = i2cWriteBuffer;
        // this likely shouldn't be called
        function getPinAddress(name) {
            return pxsim.getPin(name);
        }
        pins.getPinAddress = getPinAddress;
        function setEvents(name, event) {
        }
        pins.setEvents = setEvents;
        function setMatrixWidth(pin, width) {
            const lp = pxsim.neopixelState(pin);
            if (!lp)
                return;
            lp.width = width;
        }
        pins.setMatrixWidth = setMatrixWidth;
    })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var devices;
    (function (devices) {
        function tellCameraTo(action) {
            // TODO
        }
        devices.tellCameraTo = tellCameraTo;
        function tellRemoteControlTo(action) {
            // TODO
        }
        devices.tellRemoteControlTo = tellRemoteControlTo;
        function raiseAlertTo(action) {
            // TODO
        }
        devices.raiseAlertTo = raiseAlertTo;
        function onSignalStrengthChanged(action) {
            // TODO
        }
        devices.onSignalStrengthChanged = onSignalStrengthChanged;
        function signalStrength() {
            // TODO
            return 0;
        }
        devices.signalStrength = signalStrength;
        function onGamepadButton(button, body) {
            // TODO
        }
        devices.onGamepadButton = onGamepadButton;
    })(devices = pxsim.devices || (pxsim.devices = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var bluetooth;
    (function (bluetooth) {
        function startIOPinService() {
            // TODO
        }
        bluetooth.startIOPinService = startIOPinService;
        function startLEDService() {
            // TODO
        }
        bluetooth.startLEDService = startLEDService;
        function startTemperatureService() {
            // TODO
        }
        bluetooth.startTemperatureService = startTemperatureService;
        function startMagnetometerService() {
            // TODO
        }
        bluetooth.startMagnetometerService = startMagnetometerService;
        function startAccelerometerService() {
            // TODO
        }
        bluetooth.startAccelerometerService = startAccelerometerService;
        function startButtonService() {
            // TODO
        }
        bluetooth.startButtonService = startButtonService;
        function startUartService() {
            // TODO
        }
        bluetooth.startUartService = startUartService;
        function uartWriteString(s) {
            pxsim.serial.writeString(s);
        }
        bluetooth.uartWriteString = uartWriteString;
        function uartWriteBuffer(b) {
            pxsim.serial.writeBuffer(b);
        }
        bluetooth.uartWriteBuffer = uartWriteBuffer;
        function uartReadBuffer() {
            return pxsim.pins.createBuffer(0);
        }
        bluetooth.uartReadBuffer = uartReadBuffer;
        function uartReadUntil(del) {
            return pxsim.serial.readUntil(del);
        }
        bluetooth.uartReadUntil = uartReadUntil;
        function onUartDataReceived(delimiters, handler) {
            let b = pxsim.board();
            b.bus.listen(1200 /* MICROBIT_ID_BLE_UART */, 1 /* MICROBIT_UART_S_EVT_DELIM_MATCH */, handler);
        }
        bluetooth.onUartDataReceived = onUartDataReceived;
        function onBluetoothConnected(a) {
            // TODO
        }
        bluetooth.onBluetoothConnected = onBluetoothConnected;
        function onBluetoothDisconnected(a) {
            // TODO
        }
        bluetooth.onBluetoothDisconnected = onBluetoothDisconnected;
        function advertiseUrl(url, power, connectable) { }
        bluetooth.advertiseUrl = advertiseUrl;
        function advertiseUidBuffer(nsAndInstance, power, connectable) { }
        bluetooth.advertiseUidBuffer = advertiseUidBuffer;
        function stopAdvertising() { }
        bluetooth.stopAdvertising = stopAdvertising;
        function setTransmitPower(power) { }
        bluetooth.setTransmitPower = setTransmitPower;
    })(bluetooth = pxsim.bluetooth || (pxsim.bluetooth = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var light;
    (function (light) {
        function sendWS2812Buffer(buffer, pin) {
            pxsim.sendBufferAsm(buffer, pin);
        }
        light.sendWS2812Buffer = sendWS2812Buffer;
        function sendWS2812BufferWithBrightness(buffer, pin, brightness) {
            const clone = new pxsim.RefBuffer(new Uint8Array(buffer.data));
            const data = clone.data;
            for (let i = 0; i < data.length; ++i) {
                data[i] = (data[i] * brightness) >> 8;
            }
            pxsim.sendBufferAsm(clone, pin);
        }
        light.sendWS2812BufferWithBrightness = sendWS2812BufferWithBrightness;
        function setMode(pin, mode) {
            const lp = pxsim.neopixelState(pin);
            if (!lp)
                return;
            lp.mode = mode & 0xff;
        }
        light.setMode = setMode;
    })(light = pxsim.light || (pxsim.light = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var music;
    (function (music) {
        function setBuiltInSpeakerEnabled(enabled) {
            const b = pxsim.board();
            if (!b)
                return;
            // TODO some rendering about this
            b.ensureHardwareVersion(2);
            b.speakerEnabled = !!enabled;
        }
        music.setBuiltInSpeakerEnabled = setBuiltInSpeakerEnabled;
        function setSilenceLevel(level) {
            // ignore in v1,v2
        }
        music.setSilenceLevel = setSilenceLevel;
        function isSoundPlaying() {
            const audioActive = pxsim.AudioContextManager.isAudioElementActive();
            const soundExpressionPlaying = pxsim.codal.music.isSoundExpPlaying();
            return audioActive || soundExpressionPlaying || pxsim.record.audioIsPlaying();
        }
        music.isSoundPlaying = isSoundPlaying;
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var music;
    (function (music) {
        var MusicalIntervals;
        (function (MusicalIntervals) {
            // #if CONFIG_ENABLED(JUST_SCALE)
            // const float MusicalIntervals.chromaticInterval[] = [1.000000, 1.059463, 1.122462, 1.189207, 1.259921, 1.334840, 1.414214, 1.498307, 1.587401, 1.681793, 1.781797, 1.887749];
            // #else
            // const float MusicalIntervals.chromaticInterval[] = [1.000000, 1.0417, 1.1250, 1.2000, 1.2500, 1.3333, 1.4063, 1.5000, 1.6000, 1.6667, 1.8000, 1.8750];
            // #endif
            MusicalIntervals.chromaticInterval = [1.000000, 1.0417, 1.1250, 1.2000, 1.2500, 1.3333, 1.4063, 1.5000, 1.6000, 1.6667, 1.8000, 1.8750];
            MusicalIntervals.majorScaleInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[2], MusicalIntervals.chromaticInterval[4], MusicalIntervals.chromaticInterval[5], MusicalIntervals.chromaticInterval[7], MusicalIntervals.chromaticInterval[9], MusicalIntervals.chromaticInterval[11]];
            MusicalIntervals.minorScaleInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[2], MusicalIntervals.chromaticInterval[3], MusicalIntervals.chromaticInterval[5], MusicalIntervals.chromaticInterval[7], MusicalIntervals.chromaticInterval[8], MusicalIntervals.chromaticInterval[10]];
            MusicalIntervals.pentatonicScaleInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[2], MusicalIntervals.chromaticInterval[4], MusicalIntervals.chromaticInterval[7], MusicalIntervals.chromaticInterval[9]];
            MusicalIntervals.majorTriadInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[4], MusicalIntervals.chromaticInterval[7]];
            MusicalIntervals.minorTriadInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[3], MusicalIntervals.chromaticInterval[7]];
            MusicalIntervals.diminishedInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[3], MusicalIntervals.chromaticInterval[6], MusicalIntervals.chromaticInterval[9]];
            MusicalIntervals.wholeToneInterval = [MusicalIntervals.chromaticInterval[0], MusicalIntervals.chromaticInterval[2], MusicalIntervals.chromaticInterval[4], MusicalIntervals.chromaticInterval[6], MusicalIntervals.chromaticInterval[8], MusicalIntervals.chromaticInterval[10]];
        })(MusicalIntervals = music.MusicalIntervals || (music.MusicalIntervals = {}));
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var music;
    (function (music) {
        var MusicalProgressions;
        (function (MusicalProgressions) {
            MusicalProgressions.chromatic = { interval: music.MusicalIntervals.chromaticInterval, length: 12 };
            MusicalProgressions.majorScale = { interval: music.MusicalIntervals.majorScaleInterval, length: 7 };
            MusicalProgressions.minorScale = { interval: music.MusicalIntervals.minorScaleInterval, length: 7 };
            MusicalProgressions.pentatonicScale = { interval: music.MusicalIntervals.pentatonicScaleInterval, length: 5 };
            MusicalProgressions.majorTriad = { interval: music.MusicalIntervals.majorTriadInterval, length: 3 };
            MusicalProgressions.minorTriad = { interval: music.MusicalIntervals.minorTriadInterval, length: 3 };
            MusicalProgressions.diminished = { interval: music.MusicalIntervals.diminishedInterval, length: 4 };
            MusicalProgressions.wholeTone = { interval: music.MusicalIntervals.wholeToneInterval, length: 6 };
            /**
             * Determine the frequency of a given note in a given progressions
             *
             * @param root The root frequency of the progression
             * @param progression The Progression to use
             * @param offset The offset (interval) of the note to generate
             * @return The frequency of the note requested in Hz.
             */
            function calculateFrequencyFromProgression(root, progression, offset) {
                let octave = Math.floor(offset / progression.length);
                let index = offset % progression.length;
                return root * Math.pow(2, octave) * progression.interval[index];
            }
            MusicalProgressions.calculateFrequencyFromProgression = calculateFrequencyFromProgression;
        })(MusicalProgressions = music.MusicalProgressions || (music.MusicalProgressions = {}));
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class RecordingState {
        constructor() {
            this.currentlyRecording = false;
            this.audioPlaying = false;
            this.handleAudioPlaying = () => {
                this.audioPlaying = true;
            };
            this.handleAudioStopped = () => {
                this.audioPlaying = false;
            };
            this.initListeners = () => {
                if (this.recording) {
                    this.recording.addEventListener("play", this.handleAudioPlaying, false);
                    this.recording.addEventListener("ended", this.handleAudioStopped, false);
                }
            };
        }
    }
    pxsim.RecordingState = RecordingState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var record;
    (function (record_1) {
        let _initialized = false;
        function init() {
            if (!_initialized) {
                registerSimStop();
                _initialized = true;
            }
        }
        function stopRecorder(b) {
            b.recordingState.recorder.stop();
            b.recordingState.currentlyRecording = false;
            pxsim.runtime.queueDisplayUpdate();
            if (b.recordingState.stream.active) {
                b.recordingState.stream.getAudioTracks().forEach(track => {
                    track.stop();
                    track.enabled = false;
                });
            }
        }
        async function populateRecording(b) {
            if (b.recordingState.currentlyErasing) {
                await erasingAsync(b);
            }
            if (b.recordingState.chunks[0].size > 0) {
                b.recordingState.audioURL = null;
                const recordingType = pxsim.isSafari() ? "audio/mp4" : "audio/ogg; codecs=opus";
                const blob = new Blob(b.recordingState.chunks, { type: recordingType });
                b.recordingState.audioURL = window.URL.createObjectURL(blob);
                b.recordingState.recording = new Audio(b.recordingState.audioURL);
                b.recordingState.initListeners();
            }
            b.recordingState.currentlyRecording = false;
            b.recordingState.recorder = null;
            b.recordingState.chunks = [];
        }
        async function record() {
            let b = pxsim.board();
            init();
            if (b.recordingState.recorder) {
                b.recordingState.recorder.stop();
                clearTimeout(b.recordingState.recordTimeoutID);
            }
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    b.recordingState.stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
                    b.recordingState.recorder = new MediaRecorder(b.recordingState.stream);
                    b.recordingState.recorder.start();
                    b.recordingState.currentlyRecording = true;
                    pxsim.runtime.queueDisplayUpdate();
                    b.recordingState.recordTimeoutID = setTimeout(() => {
                        stopRecorder(b);
                    }, 5000);
                    b.recordingState.recorder.ondataavailable = (e) => {
                        b.recordingState.chunks.push(e.data);
                    };
                    b.recordingState.recorder.onstop = async () => {
                        await populateRecording(b);
                    };
                }
                catch (error) {
                    console.log("An error occurred, could not get microphone access");
                    if (b.recordingState.recorder) {
                        b.recordingState.recorder.stop();
                    }
                    b.recordingState.currentlyRecording = false;
                }
            }
            else {
                console.log("getUserMedia not supported on your browser!");
                b.recordingState.currentlyRecording = false;
            }
        }
        record_1.record = record;
        function stopAudio() {
            const b = pxsim.board();
            if (!b)
                return;
            if (b.recordingState.currentlyRecording && b.recordingState.recordTimeoutID) {
                clearTimeout(b.recordingState.recordTimeoutID);
                if (b.recordingState.recorder) {
                    stopRecorder(b);
                }
            }
            else if (b.recordingState.recording && b.recordingState.audioPlaying) {
                b.recordingState.handleAudioStopped();
                stopPlayback();
            }
        }
        function registerSimStop() {
            pxsim.AudioContextManager.onStopAll(() => {
                const b = pxsim.board();
                if (b && b.recordingState && b.recordingState.recording) {
                    stopAudio();
                    b.recordingState.recording.removeEventListener("play", b.recordingState.handleAudioPlaying);
                    b.recordingState.recording.removeEventListener("ended", b.recordingState.handleAudioStopped);
                }
            });
        }
        function play() {
            const b = pxsim.board();
            if (!b)
                return;
            init();
            stopAudio();
            b.recordingState.audioPlaying = true;
            setTimeout(async () => {
                if (!b.recordingState.currentlyErasing && b.recordingState.recording) {
                    try {
                        const volume = pxsim.AudioContextManager.isMuted() ? 0 : 1;
                        b.recordingState.recording.volume = volume;
                        await b.recordingState.recording.play();
                    }
                    catch (e) {
                        if (!(e instanceof DOMException)) {
                            throw e;
                        }
                    }
                }
                else {
                    b.recordingState.audioPlaying = false;
                }
            }, 10);
        }
        record_1.play = play;
        function stop() {
            stopAudio();
        }
        record_1.stop = stop;
        function stopPlayback() {
            const b = pxsim.board();
            if (!b)
                return;
            b.recordingState.recording.pause();
            b.recordingState.recording.currentTime = 0;
            b.recordingState.recording.removeEventListener("play", b.recordingState.handleAudioPlaying);
            b.recordingState.recording.removeEventListener("ended", b.recordingState.handleAudioStopped);
        }
        function erasingAsync(b) {
            return new Promise((resolve, reject) => {
                if (b.recordingState.recording && b.recordingState.audioPlaying) {
                    stopPlayback();
                }
                if (b.recordingState.audioURL) {
                    window.URL.revokeObjectURL(b.recordingState.audioURL);
                    b.recordingState.recording = null;
                }
                b.recordingState.audioPlaying = false;
                resolve(null);
                b.recordingState.currentlyErasing = false;
            });
        }
        function erase() {
            const b = pxsim.board();
            if (!b)
                return;
            b.recordingState.chunks = [];
            b.recordingState.currentlyErasing = true;
        }
        record_1.erase = erase;
        function setMicrophoneGain(gain) {
        }
        record_1.setMicrophoneGain = setMicrophoneGain;
        function audioDuration(sampleRate) {
            return 0;
        }
        record_1.audioDuration = audioDuration;
        function audioIsPlaying() {
            const b = pxsim.board();
            if (!b)
                return false;
            return b.recordingState.audioPlaying;
        }
        record_1.audioIsPlaying = audioIsPlaying;
        function audioIsRecording() {
            const b = pxsim.board();
            if (!b)
                return false;
            return b.recordingState.recorder ? b.recordingState.recorder.state === "recording" : false;
        }
        record_1.audioIsRecording = audioIsRecording;
        function audioIsStopped() {
            const b = pxsim.board();
            if (!b)
                return true;
            const isNotPlaying = !audioIsPlaying();
            const isNotRecording = !audioIsRecording();
            return b.recordingState.recording ? isNotPlaying && isNotRecording : false;
        }
        record_1.audioIsStopped = audioIsStopped;
        function setInputSampleRate(sampleRate) {
        }
        record_1.setInputSampleRate = setInputSampleRate;
        function setOutputSampleRate(sampleRate) {
        }
        record_1.setOutputSampleRate = setOutputSampleRate;
        function setBothSamples(sampleRate) {
        }
        record_1.setBothSamples = setBothSamples;
    })(record = pxsim.record || (pxsim.record = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    const SERIAL_BUFFER_LENGTH = 16;
    class SerialState {
        constructor(runtime, board) {
            this.runtime = runtime;
            this.board = board;
            this.serialIn = [];
            this.serialOutBuffer = "";
            this.board.addMessageListener(this.handleMessage.bind(this));
        }
        handleMessage(msg) {
            if (msg.type === "serial") {
                const data = msg.data || "";
                this.receiveData(data);
            }
        }
        receiveData(data) {
            this.serialIn.push();
        }
        readSerial() {
            let v = this.serialIn.shift() || "";
            return v;
        }
        writeSerial(s) {
            this.serialOutBuffer += s;
            if (/\n/.test(this.serialOutBuffer) || this.serialOutBuffer.length > SERIAL_BUFFER_LENGTH) {
                pxsim.Runtime.postMessage({
                    type: 'serial',
                    data: this.serialOutBuffer,
                    id: pxsim.runtime.id,
                    sim: true
                });
                this.serialOutBuffer = '';
            }
        }
        writeCsv(s, type) {
            pxsim.Runtime.postMessage({
                type: 'serial',
                data: s,
                id: pxsim.runtime.id,
                csvType: type,
                sim: true
            });
        }
    }
    pxsim.SerialState = SerialState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var serial;
    (function (serial) {
        function writeString(s) {
            pxsim.board().writeSerial(s);
        }
        serial.writeString = writeString;
        function writeBuffer(buf) {
            // TODO
        }
        serial.writeBuffer = writeBuffer;
        function readUntil(del) {
            return readString();
        }
        serial.readUntil = readUntil;
        function readString() {
            return pxsim.board().serialState.readSerial();
        }
        serial.readString = readString;
        function onDataReceived(delimiters, handler) {
            let b = pxsim.board();
            b.bus.listen(12 /* MICROBIT_ID_SERIAL */, 1 /* MICROBIT_SERIAL_EVT_DELIM_MATCH */, handler);
        }
        serial.onDataReceived = onDataReceived;
        function redirect(tx, rx, rate) {
            // TODO?
        }
        serial.redirect = redirect;
        function redirectToUSB() {
            // TODO
        }
        serial.redirectToUSB = redirectToUSB;
        function setRxBufferSize(size) {
            // TODO
        }
        serial.setRxBufferSize = setRxBufferSize;
        function setTxBufferSize(size) {
            // TODO
        }
        serial.setTxBufferSize = setTxBufferSize;
        function readBuffer(length) {
            length |= 0;
            if (length <= 0)
                length = 64;
            return pxsim.pins.createBuffer(length);
        }
        serial.readBuffer = readBuffer;
        function setBaudRate(rate) {
            // TODO
        }
        serial.setBaudRate = setBaudRate;
        function writeDmesg() {
            // TODO
        }
        serial.writeDmesg = writeDmesg;
    })(serial = pxsim.serial || (pxsim.serial = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var music;
    (function (music) {
        //%
        function __playSoundExpression(notes, waitTillDone) {
            notes = lookupBuiltIn(notes);
            pxsim.codal.music.__playSoundExpression(notes, waitTillDone);
        }
        music.__playSoundExpression = __playSoundExpression;
        function __stopSoundExpressions() {
            pxsim.codal.music.__stopSoundExpressions();
        }
        music.__stopSoundExpressions = __stopSoundExpressions;
        const giggle = "giggle";
        const giggleData = "010230988019008440044008881023001601003300240000000000000000000000000000,110232570087411440044008880352005901003300010000000000000000010000000000,310232729021105440288908880091006300000000240700020000000000003000000000,310232729010205440288908880091006300000000240700020000000000003000000000,310232729011405440288908880091006300000000240700020000000000003000000000";
        const happy = "happy";
        const happyData = "010231992066911440044008880262002800001800020500000000000000010000000000,002322129029508440240408880000000400022400110000000000000000007500000000,000002129029509440240408880145000400022400110000000000000000007500000000";
        const hello = "hello";
        const helloData = "310230673019702440118708881023012800000000240000000000000000000000000000,300001064001602440098108880000012800000100040000000000000000000000000000,310231064029302440098108881023012800000100040000000000000000000000000000";
        const mysterious = "mysterious";
        const mysteriousData = "400002390033100440240408880477000400022400110400000000000000008000000000,405512845385000440044008880000012803010500160000000000000000085000500015";
        const sad = "sad";
        const sadData = "310232226070801440162408881023012800000100240000000000000000000000000000,310231623093602440093908880000012800000100240000000000000000000000000000";
        const slide = "slide";
        const slideData = "105202325022302440240408881023012801020000110400000000000000010000000000,010232520091002440044008881023012801022400110400000000000000010000000000";
        const soaring = "soaring";
        const soaringData = "210234009530905440599908881023002202000400020250000000000000020000000000,402233727273014440044008880000003101024400030000000000000000000000000000";
        const spring = "spring";
        const springData = "306590037116312440058708880807003400000000240000000000000000050000000000,010230037116313440058708881023003100000000240000000000000000050000000000";
        const twinkle = "twinkle";
        const twinkleData = "010180007672209440075608880855012800000000240000000000000000000000000000";
        const yawn = "yawn";
        const yawnData = "200002281133202440150008881023012801024100240400030000000000010000000000,005312520091002440044008880636012801022400110300000000000000010000000000,008220784019008440044008880681001600005500240000000000000000005000000000,004790784019008440044008880298001600000000240000000000000000005000000000,003210784019008440044008880108001600003300080000000000000000005000000000";
        function lookupBuiltIn(sound) {
            if (sound == giggle)
                return giggleData;
            if (sound == happy)
                return happyData;
            if (sound == hello)
                return helloData;
            if (sound == mysterious)
                return mysteriousData;
            if (sound == sad)
                return sadData;
            if (sound == slide)
                return slideData;
            if (sound == soaring)
                return soaringData;
            if (sound == spring)
                return springData;
            if (sound == twinkle)
                return twinkleData;
            if (sound == yawn)
                return yawnData;
            return sound;
        }
    })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class ThermometerState {
        constructor() {
            this.usesTemperature = false;
            this.temperature = 21;
        }
    }
    pxsim.ThermometerState = ThermometerState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var input;
    (function (input) {
        function temperature() {
            let b = pxsim.board();
            if (!b.thermometerState.usesTemperature) {
                b.thermometerState.usesTemperature = true;
                pxsim.runtime.queueDisplayUpdate();
            }
            return b.thermometerState.temperature;
        }
        input.temperature = temperature;
    })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.mkBoardView = (opts) => {
            return new visuals.MicrobitBoardSvg({
                runtime: pxsim.runtime,
                theme: visuals.randomTheme(opts.highContrast),
                wireframe: opts.wireframe
            });
        };
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        function mkLedMatrixSvg(xy, rows, cols) {
            let result = { el: null, y: 0, x: 0, w: 0, h: 0, leds: [], ledsOuter: [], background: null };
            result.el = pxsim.svg.elt("g");
            let width = cols * visuals.PIN_DIST;
            let height = rows * visuals.PIN_DIST;
            let ledRad = Math.round(visuals.PIN_DIST * .35);
            let spacing = visuals.PIN_DIST;
            let padding = (spacing - 2 * ledRad) / 2.0;
            let [x, y] = xy;
            let left = x - (ledRad + padding);
            let top = y - (ledRad + padding);
            result.x = left;
            result.y = top;
            result.w = width;
            result.h = height;
            result.background = pxsim.svg.child(result.el, "rect", { class: "sim-display", x: left, y: top, width: width, height: height });
            // ledsOuter
            result.leds = [];
            result.ledsOuter = [];
            let hoverRad = ledRad * 1.2;
            for (let i = 0; i < rows; ++i) {
                let y = top + ledRad + i * spacing + padding;
                for (let j = 0; j < cols; ++j) {
                    let x = left + ledRad + j * spacing + padding;
                    result.ledsOuter.push(pxsim.svg.child(result.el, "circle", { class: "sim-led-back", cx: x, cy: y, r: ledRad }));
                    result.leds.push(pxsim.svg.child(result.el, "circle", { class: "sim-led", cx: x, cy: y, r: hoverRad, title: `(${j},${i})` }));
                }
            }
            //default theme
            pxsim.svg.fill(result.background, visuals.defaultLedMatrixTheme.background);
            pxsim.svg.fills(result.leds, visuals.defaultLedMatrixTheme.ledOn);
            pxsim.svg.fills(result.ledsOuter, visuals.defaultLedMatrixTheme.ledOff);
            //turn off LEDs
            result.leds.forEach(l => l.style.opacity = 0 + "");
            return result;
        }
        visuals.mkLedMatrixSvg = mkLedMatrixSvg;
        visuals.defaultLedMatrixTheme = {
            background: "#000",
            ledOn: "#ff5f5f",
            ledOff: "#DDD",
        };
        visuals.LED_MATRIX_STYLE = `
            .sim-led-back:hover {
                stroke:#a0a0a0;
                stroke-width:3px;
            }
            .sim-led:hover {
                stroke:#ff7f7f;
                stroke-width:3px;
            }
            `;
        class LedMatrixView {
            constructor() {
                this.DRAW_SIZE = 8;
                this.ACTIVE_SIZE = 5;
                this.style = visuals.LED_MATRIX_STYLE;
            }
            init(bus, state) {
                this.bus = bus;
                this.state = state;
                this.theme = visuals.defaultLedMatrixTheme;
                this.defs = [];
                this.element = this.buildDom();
            }
            moveToCoord(xy) {
                visuals.translateEl(this.element, xy);
            }
            updateTheme() {
                pxsim.svg.fill(this.background, this.theme.background);
                pxsim.svg.fills(this.leds, this.theme.ledOn);
                pxsim.svg.fills(this.ledsOuter, this.theme.ledOff);
            }
            updateState() {
                if (this.state.disabled) {
                    this.leds.forEach((led, i) => {
                        let sel = led;
                        sel.style.opacity = 0 + "";
                    });
                    return;
                }
                const bw = this.state.displayMode == pxsim.DisplayMode.bw;
                const img = this.state.image;
                this.leds.forEach((led, i) => {
                    let sel = led;
                    let dx = i % this.DRAW_SIZE;
                    let dy = (i - dx) / this.DRAW_SIZE;
                    if (dx < this.ACTIVE_SIZE && dy < this.ACTIVE_SIZE) {
                        let j = dx + dy * this.ACTIVE_SIZE;
                        sel.style.opacity = ((bw ? img.data[j] > 0 ? 255 : 0 : img.data[j]) / 255.0) + "";
                    }
                    else {
                        sel.style.opacity = 0 + "";
                    }
                });
            }
            buildDom() {
                let res = mkLedMatrixSvg([0, 0], this.DRAW_SIZE, this.DRAW_SIZE);
                let display = res.el;
                this.background = res.background;
                this.leds = res.leds;
                this.ledsOuter = res.ledsOuter;
                return display;
            }
        }
        visuals.LedMatrixView = LedMatrixView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const MB_STYLE = `
        svg.sim {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            display: block;
        }
        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }
        .sim-button-group {
            cursor: pointer;
        }
        .sim-button {
            pointer-events: none;
        }
        .sim-head .sim-button {
            pointer-events: unset;
        }
        .sim-board, .sim-display, sim-button {
            fill: #111;
        }
        .sim-button-outer:hover {
            stroke:grey;
            stroke-width: 3px;
        }
        .sim-button-nut {
            fill:#704A4A;
            pointer-events:none;
        }
        .sim-button-nut:hover {
            stroke:1px solid #704A4A;
        }
        .sim-pin:hover {
            stroke:#D4AF37;
            stroke-width:2px;
        }

        .sim-pin-touch.touched:hover {
            stroke:darkorange;
        }

        .sim-led-back:hover {
            stroke:#a0a0a0;
            stroke-width:3px;
        }
        .sim-led:hover {
            stroke:#ff7f7f;
            stroke-width:3px;
        }

        .sim-systemled {
            fill:#333;
            stroke:#555;
            stroke-width: 1px;
        }

        .sim-light-level-button {
            stroke:#fff;
            stroke-width: 3px;
        }

        .sim-antenna {
            stroke:#555;
            stroke-width: 2px;
        }

        .sim-text {
        font-family:"Lucida Console", Monaco, monospace;
        font-size:25px;
        fill:#fff;
        pointer-events: none;
        }

        .sim-text-small,
        .sim-text-pin {
        font-family:"Lucida Console", Monaco, monospace;
        font-size:20px;
        fill:#fff;
        pointer-events: none;
        }

        .sim-thermometer {
            stroke:#aaa;
            stroke-width: 3px;
            cursor: pointer;
        }

        /* animations */
        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        /* wireframe */
        .sim-wireframe * {
            fill: none;
            stroke: black;
        }
        .sim-wireframe .sim-display,
        .sim-wireframe .sim-led,
        .sim-wireframe .sim-led-back,
        .sim-wireframe .sim-head,
        .sim-wireframe .sim-theme,
        .sim-wireframe .sim-button-group,
        .sim-wireframe .sim-button-label,
        .sim-wireframe .sim-button,
        .sim-wireframe .sim-text-pin
        {
            visibility: hidden;
        }
        .sim-wireframe .sim-label
        {
            stroke: none;
            fill: #777;
        }
        .sim-label, .sim-button-label {
            fill: #000;
        }
        .sim-wireframe .sim-board {
            stroke-width: 2px;
        }
        *:focus {
            outline: none;
        }
        *:focus .sim-button-outer,
        .sim-pin:focus,
        .sim-thermometer:focus,
        .sim-shake:focus,
        .sim-light-level-button:focus {
            stroke: #4D90FE;
            stroke-width: 5px !important;
        }
        .sim-button-outer.sim-button-group:focus > .sim-button {
            stroke: #4D90FE;
            stroke-width: 10px !important;
        }
        .no-drag, .sim-text, .sim-text-small,
        .sim-text-pin {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    `;
        const MB_HIGHCONTRAST = `
path.sim-board {
    stroke: white;
    stroke-width: 3;
}
.sim-led {
    stroke: red;
}
*:focus .sim-button-outer,
.sim-pin:focus,
.sim-thermometer:focus,
.sim-shake:focus,
.sim-light-level-button:focus {
    stroke: #10C8CD !important;
}
    `;
        const pins4onXs = [66.7, 79.1, 91.4, 103.7, 164.3, 176.6, 188.9, 201.3, 213.6, 275.2, 287.5, 299.8, 312.1, 324.5, 385.1, 397.4, 409.7, 422];
        const pins4onMids = pins4onXs.map(x => x + 5);
        const littlePinDist = pins4onMids[1] - pins4onMids[0];
        const bigPinWidth = pins4onMids[4] - pins4onMids[3];
        const pin0mid = pins4onXs[0] - bigPinWidth / 2.0;
        const pin3mid = pin0mid - bigPinWidth / 2.0;
        const pin1mid = pins4onMids[3] + bigPinWidth / 2.0;
        const pin2mid = pins4onMids[8] + bigPinWidth / 2.0;
        const pin3Vmid = pins4onMids[13] + bigPinWidth / 2.0;
        const pinGNDmid = pins4onMids[pins4onMids.length - 1] + bigPinWidth / 2.0;
        const pinGND2mid = pinGNDmid + bigPinWidth / 2.0;
        const pinMids = [pin0mid, pin1mid, pin2mid, pin3mid].concat(pins4onMids).concat([pinGNDmid, pin3Vmid, pinGND2mid]);
        const pinNames = [
            "P0", "P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10",
            "P11", "P12", "P13", "P14", "P15", "P16", "P17", "P18", "P19", "P20",
            "GND0", "GND", "+3v3", "GND1"
        ];
        const pinTitles = [
            "P0, ANALOG IN",
            "P1, ANALOG IN",
            "P2, ANALOG IN",
            "P3, ANALOG IN, LED Col 1",
            "P4, ANALOG IN, LED Col 2",
            "P5, BUTTON A",
            "P6, LED Col 9",
            "P7, LED Col 8",
            "P8",
            "P9, LED Col 7",
            "P10, ANALOG IN, LED Col 3",
            "P11, BUTTON B",
            "P12, RESERVED ACCESSIBILITY",
            "P13, SPI - SCK",
            "P14, SPI - MISO",
            "P15, SPI - MOSI",
            "P16, SPI - Chip Select",
            "P17, +3v3",
            "P18, +3v3",
            "P19, I2C - SCL",
            "P20, I2C - SDA",
            "GND", "GND", "+3v3", "GND"
        ];
        const MB_WIDTH = 500;
        const MB_HEIGHT = 408;
        visuals.themes = ["#3ADCFE", "#FFD43A", "#3AFFB3", "#FF3A54"].map(accent => {
            return {
                accent: accent,
                display: "#111",
                pin: "#D4AF37",
                pinTouched: "#FFA500",
                pinActive: "#FF5500",
                ledOn: "#ff7f7f",
                ledOff: "#202020",
                buttonOuter: "#979797",
                buttonUp: "#111",
                buttonDown: "#FFA500",
                virtualButtonOuter: "#333",
                virtualButtonUp: "#fff",
                lightLevelOn: "yellow",
                lightLevelOff: "#555"
            };
        });
        function randomTheme(highContrast) {
            let theme = visuals.themes[Math.floor(Math.random() * visuals.themes.length)];
            if (highContrast) {
                theme = JSON.parse(JSON.stringify(theme));
                theme.highContrast = true;
                theme.ledOff = "#888";
                theme.ledOn = "#0000bb";
                theme.display = "#ffffff";
                theme.pin = "#D4AF37";
                theme.accent = "#FFD43A";
            }
            return theme;
        }
        visuals.randomTheme = randomTheme;
        class MicrobitBoardSvg {
            constructor(props) {
                this.props = props;
                this.headInitialized = false;
                this.pinNmToCoord = {};
                this.domHardwareVersion = 1;
                this.lastFlashTime = 0;
                this.lastAntennaFlash = 0;
                this.recordPinCoords();
                this.buildDom();
                if (props && props.wireframe)
                    pxsim.U.addClass(this.element, "sim-wireframe");
                if (props && props.theme)
                    this.updateTheme();
                if (props && props.runtime) {
                    this.board = this.props.runtime.board;
                    this.board.updateSubscribers.push(() => this.updateState());
                    this.updateState();
                    this.attachEvents();
                }
            }
            getView() {
                return {
                    el: this.element,
                    y: 0,
                    x: 0,
                    w: MB_WIDTH,
                    h: MB_HEIGHT
                };
            }
            getCoord(pinNm) {
                return this.pinNmToCoord[pinNm];
            }
            highlightPin(pinNm) {
                //TODO: for instructions
            }
            getPinDist() {
                return littlePinDist * 1.7;
            }
            recordPinCoords() {
                const pinsY = 356.7 + 40;
                pinNames.forEach((nm, i) => {
                    let x = pinMids[i];
                    this.pinNmToCoord[nm] = [x, pinsY];
                });
            }
            updateTheme() {
                let theme = this.props.theme;
                pxsim.svg.fill(this.display, theme.display);
                pxsim.svg.fills(this.leds, theme.ledOn);
                pxsim.svg.fills(this.ledsOuter, theme.ledOff);
                if (this.microphoneLed && this.board.microphoneState.sensorUsed) {
                    pxsim.svg.fills([this.microphoneLed], theme.ledOn);
                    pxsim.svg.filter(this.microphoneLed, `url(#ledglow)`);
                }
                pxsim.svg.fills(this.buttonsOuter.slice(0, 2), theme.buttonOuter);
                pxsim.svg.fills(this.buttons.slice(0, 2), theme.buttonUp);
                pxsim.svg.fill(this.buttonsOuter[2], theme.virtualButtonOuter);
                pxsim.svg.fill(this.buttons[2], theme.virtualButtonUp);
                pxsim.svg.fills(this.logos, theme.accent);
                if (this.domHardwareVersion > 1) {
                    pxsim.svg.fills(this.heads.slice(1), "gold");
                }
                else {
                    pxsim.svg.fills(this.heads.slice(1), theme.accent);
                }
                if (this.shakeButton)
                    pxsim.svg.fill(this.shakeButton, theme.virtualButtonUp);
                this.pinGradients.forEach(lg => pxsim.svg.setGradientColors(lg, theme.pin, theme.pinActive));
                pxsim.svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);
                pxsim.svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
                pxsim.svg.setGradientColors(this.soundLevelGradient, theme.ledOff, theme.ledOn);
                this.positionV2Elements();
            }
            updateState() {
                const state = this.board;
                if (!state)
                    return;
                this.updateHardwareVersion();
                this.updateMicrophone();
                this.updateRecordingActive();
                this.updateButtonPairs();
                this.updateLEDMatrix();
                this.updatePins();
                this.updateTilt();
                this.updateHeading();
                this.updateLightLevel();
                this.updateTemperature();
                this.updateButtonAB();
                this.updateGestures();
                this.updateRSSI();
                if (!this.props.runtime || this.props.runtime.dead)
                    pxsim.U.addClass(this.element, "grayscale");
                else
                    pxsim.U.removeClass(this.element, "grayscale");
            }
            updateButtonPairs() {
                const state = this.board;
                const theme = this.props.theme;
                const bpState = state.buttonPairState;
                const buttons = [bpState.aBtn, bpState.bBtn, bpState.abBtn];
                buttons.forEach((btn, index) => {
                    pxsim.svg.fill(this.buttons[index], btn.pressed ? theme.buttonDown : theme.buttonUp);
                });
            }
            updateLEDMatrix() {
                const state = this.board;
                if (state.ledMatrixState.disabled) {
                    this.leds.forEach((led, i) => {
                        const sel = led;
                        sel.style.opacity = "0";
                    });
                }
                else {
                    const bw = state.ledMatrixState.displayMode == pxsim.DisplayMode.bw;
                    const img = state.ledMatrixState.image;
                    const br = state.ledMatrixState.brigthness != undefined ? state.ledMatrixState.brigthness : 255;
                    this.leds.forEach((led, i) => {
                        const sel = led;
                        let imgbr = bw ? (img.data[i] > 0 ? br : 0) : img.data[i];
                        // correct brightness
                        const opacity = imgbr > 0 ? imgbr / 255 * 155 + 100 : 0;
                        const transfrom = imgbr > 0 ? imgbr / 255 * 0.4 + 0.6 : 0;
                        sel.style.opacity = (opacity / 255) + "";
                        if (transfrom > 0) {
                            sel.style.transformBox = 'fill-box';
                            sel.style.transformOrigin = '50% 50%';
                            sel.style.transform = `scale(${transfrom})`;
                        }
                    });
                }
            }
            updateGestures() {
                let state = this.board;
                if (state.accelerometerState.useShake && !this.shakeButton) {
                    this.shakeButton = pxsim.svg.child(this.g, "circle", { cx: 404, cy: 115, r: 12, class: "sim-shake" });
                    pxsim.accessibility.makeFocusable(this.shakeButton);
                    pxsim.svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                    pxsim.pointerEvents.down.forEach(evid => this.shakeButton.addEventListener(evid, ev => {
                        let state = this.board;
                        pxsim.svg.fill(this.shakeButton, this.props.theme.buttonDown);
                    }));
                    this.shakeButton.addEventListener(pxsim.pointerEvents.leave, ev => {
                        let state = this.board;
                        pxsim.svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                    });
                    this.shakeButton.addEventListener(pxsim.pointerEvents.up, ev => {
                        let state = this.board;
                        pxsim.svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                        this.board.accelerometerState.shake();
                    });
                    pxsim.accessibility.enableKeyboardInteraction(this.shakeButton, undefined, () => {
                        this.board.accelerometerState.shake();
                    });
                    pxsim.accessibility.setAria(this.shakeButton, "button", "Shake the board");
                    this.shakeText = pxsim.svg.child(this.g, "text", { x: 420, y: 122, class: "sim-text-small" });
                    this.shakeText.textContent = "SHAKE";
                }
            }
            updateMicrophone() {
                const b = pxsim.board();
                if (!b
                    || !b.microphoneState.sensorUsed)
                    return;
                this.updateSoundLevel();
            }
            updateRecordingActive() {
                const b = pxsim.board();
                if (!b)
                    return;
                let theme = this.props.theme;
                if (this.microphoneLed) {
                    if (b.recordingState.currentlyRecording || b.microphoneState.soundLevelRequested) {
                        pxsim.svg.fills([this.microphoneLed], theme.ledOn);
                        pxsim.svg.filter(this.microphoneLed, `url(#ledglow)`);
                    }
                    else if (!(b.microphoneState.onSoundRegistered || b.microphoneState.soundLevelRequested)) {
                        pxsim.svg.fills([this.microphoneLed], theme.ledOff);
                        pxsim.svg.filter(this.microphoneLed, `url(#none)`);
                    }
                }
            }
            updateButtonAB() {
                let state = this.board;
                if (state.buttonPairState.usesButtonAB && !this.buttonABText) {
                    this.buttonsOuter[2].style.visibility = "visible";
                    this.buttons[2].style.visibility = "visible";
                    this.buttonABText = pxsim.svg.child(this.g, "text", { class: "sim-text", x: 370, y: 272 });
                    this.buttonABText.textContent = "A+B";
                    this.updateTheme();
                    this.positionV2Elements();
                }
            }
            updatePin(pin, index) {
                if (!pin)
                    return;
                let text = this.pinTexts[index];
                let v = "";
                if (pin.mode & pxsim.PinFlags.Analog) {
                    v = Math.floor(100 - (pin.value || 0) / 1023 * 100) + "%";
                    if (text)
                        text.textContent = (pin.period ? "~" : "") + (pin.value || 0) + "";
                }
                else if (pin.mode & pxsim.PinFlags.Digital) {
                    v = pin.value > 0 ? "0%" : "100%";
                    if (text)
                        text.textContent = pin.value > 0 ? "1" : "0";
                }
                else if (pin.mode & pxsim.PinFlags.Touch) {
                    v = pin.touched ? "0%" : "100%";
                    if (text)
                        text.textContent = "";
                }
                else {
                    v = "100%";
                    if (text)
                        text.textContent = "";
                }
                if (v)
                    pxsim.svg.setGradientValue(this.pinGradients[index], v);
                if (pin.mode !== pxsim.PinFlags.Unused) {
                    pxsim.accessibility.makeFocusable(this.pins[index]);
                    pxsim.accessibility.setAria(this.pins[index], "slider", this.pins[index].firstChild.textContent);
                    this.pins[index].setAttribute("aria-valuemin", "0");
                    this.pins[index].setAttribute("aria-valuemax", pin.mode & pxsim.PinFlags.Analog ? "1023" : "100");
                    this.pins[index].setAttribute("aria-orientation", "vertical");
                    this.pins[index].setAttribute("aria-valuenow", text ? text.textContent : v);
                    pxsim.accessibility.setLiveContent(text ? text.textContent : v);
                }
            }
            updateTemperature() {
                let state = this.board;
                if (!state || !state.thermometerState.usesTemperature)
                    return;
                let tmin = -5;
                let tmax = 50;
                if (!this.thermometer) {
                    let gid = "gradient-thermometer";
                    this.thermometerGradient = pxsim.svg.linearGradient(this.defs, gid);
                    this.thermometer = pxsim.svg.child(this.g, "rect", {
                        class: "sim-thermometer no-drag",
                        x: 120,
                        y: 110,
                        width: 20,
                        height: 160,
                        rx: 5, ry: 5,
                        fill: `url(#${gid})`
                    });
                    this.thermometerText = pxsim.svg.child(this.g, "text", { class: 'sim-text', x: 58, y: 130 });
                    if (this.props.runtime)
                        this.props.runtime.environmentGlobals[pxsim.localization.lf("temperature")] = state.thermometerState.temperature;
                    this.updateTheme();
                    let pt = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.thermometer, 
                    // move
                    (ev) => {
                        let cur = pxsim.svg.cursorPoint(pt, this.element, ev);
                        let t = Math.max(0, Math.min(1, (260 - cur.y) / 140));
                        state.thermometerState.temperature = Math.floor(tmin + t * (tmax - tmin));
                        this.updateTemperature();
                    }, 
                    // start
                    ev => { }, 
                    // stop
                    ev => { }, 
                    // keydown
                    (ev) => {
                        let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            state.thermometerState.temperature--;
                            if (state.thermometerState.temperature < -5) {
                                state.thermometerState.temperature = 50;
                            }
                            this.updateTemperature();
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            state.thermometerState.temperature++;
                            if (state.thermometerState.temperature > 50) {
                                state.thermometerState.temperature = -5;
                            }
                            this.updateTemperature();
                        }
                    });
                    pxsim.accessibility.makeFocusable(this.thermometer);
                    pxsim.accessibility.setAria(this.thermometer, "slider", pxsim.localization.lf("Thermometer"));
                    this.thermometer.setAttribute("aria-valuemin", "-5");
                    this.thermometer.setAttribute("aria-valuemax", "50");
                    this.thermometer.setAttribute("aria-orientation", "vertical");
                    this.thermometer.setAttribute("aria-valuenow", "21");
                    this.thermometer.setAttribute("aria-valuetext", "21°C");
                }
                let t = Math.max(tmin, Math.min(tmax, state.thermometerState.temperature));
                let per = Math.floor((state.thermometerState.temperature - tmin) / (tmax - tmin) * 100);
                pxsim.svg.setGradientValue(this.thermometerGradient, 100 - per + "%");
                this.thermometerText.textContent = t + "°C";
                this.thermometer.setAttribute("aria-valuenow", t.toString());
                this.thermometer.setAttribute("aria-valuetext", t + "°C");
                pxsim.accessibility.setLiveContent(t + "°C");
            }
            updateSoundLevel() {
                let state = this.board;
                if (!state || !state.microphoneState.sensorUsed)
                    return;
                const tmin = 0; // state.microphoneState.min;
                const tmax = 255; //state.microphoneState.max;
                if (!this.soundLevel) {
                    const level = state.microphoneState.getLevel();
                    let gid = "gradient-soundlevel";
                    this.soundLevelGradient = pxsim.svg.linearGradient(this.defs, gid);
                    this.soundLevel = pxsim.svg.child(this.g, "rect", {
                        class: "sim-thermometer no-drag",
                        x: 360,
                        y: 110,
                        width: 20,
                        height: 160,
                        rx: 5, ry: 5,
                        fill: `url(#${gid})`
                    });
                    this.soundLevelText = pxsim.svg.child(this.g, "text", { class: 'sim-text', x: 370, y: 90 });
                    if (this.props.runtime)
                        this.props.runtime.environmentGlobals[pxsim.localization.lf("sound level")] = state.microphoneState.getLevel();
                    this.updateTheme();
                    let pt = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.soundLevel, 
                    // move
                    (ev) => {
                        let cur = pxsim.svg.cursorPoint(pt, this.element, ev);
                        let t = Math.max(0, Math.min(1, (260 - cur.y) / 140));
                        state.microphoneState.setLevel(Math.floor(tmin + t * (tmax - tmin)));
                        this.updateMicrophone();
                    }, 
                    // start
                    ev => { }, 
                    // stop
                    ev => { }, 
                    // keydown
                    (ev) => {
                        let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            state.microphoneState.setLevel(state.microphoneState.getLevel() - 1);
                            this.updateMicrophone();
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            state.microphoneState.setLevel(state.microphoneState.getLevel() + 1);
                            this.updateMicrophone();
                        }
                    });
                    pxsim.accessibility.makeFocusable(this.soundLevel);
                    pxsim.accessibility.setAria(this.soundLevel, "slider", pxsim.localization.lf("Sound Level"));
                    this.soundLevel.setAttribute("aria-valuemin", tmin + "");
                    this.soundLevel.setAttribute("aria-valuemax", tmax + "");
                    this.soundLevel.setAttribute("aria-orientation", "vertical");
                    this.soundLevel.setAttribute("aria-valuenow", level + "");
                    this.soundLevel.setAttribute("aria-valuetext", level + "");
                }
                let t = Math.max(tmin, Math.min(tmax, state.microphoneState.getLevel()));
                let per = Math.floor((state.microphoneState.getLevel() - tmin) / (tmax - tmin) * 100);
                pxsim.svg.setGradientValue(this.soundLevelGradient, (100 - per) + "%");
                this.soundLevelText.textContent = t + "";
                this.soundLevel.setAttribute("aria-valuenow", t.toString());
                this.soundLevel.setAttribute("aria-valuetext", t + "");
                pxsim.accessibility.setLiveContent(t + "");
            }
            updateHeading() {
                let xc = 258;
                let yc = 75;
                let state = this.board;
                if (!state || !state.compassState.usesHeading)
                    return;
                if (!this.headInitialized) {
                    let p = this.heads[1];
                    p.setAttribute("d", "m269.9,50.134647l0,0l-39.5,0l0,0c-14.1,0.1 -24.6,10.7 -24.6,24.8c0,13.9 10.4,24.4 24.3,24.7l0,0l39.6,0c14.2,0 40.36034,-22.97069 40.36034,-24.85394c0,-1.88326 -26.06034,-24.54606 -40.16034,-24.64606m-0.2,39l0,0l-39.3,0c-7.7,-0.1 -14,-6.4 -14,-14.2c0,-7.8 6.4,-14.2 14.2,-14.2l39.1,0c7.8,0 14.2,6.4 14.2,14.2c0,7.9 -6.4,14.2 -14.2,14.2l0,0l0,0z");
                    this.updateTheme();
                    let pt = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.head, (ev) => {
                        let cur = pxsim.svg.cursorPoint(pt, this.element, ev);
                        state.compassState.heading = Math.floor(Math.atan2(cur.y - yc, cur.x - xc) * 180 / Math.PI) + 90;
                        if (state.compassState.heading < 0)
                            state.compassState.heading += 360;
                        this.updateHeading();
                    });
                    this.headInitialized = true;
                }
                let txt = state.compassState.heading.toString() + "°";
                if (txt != this.headText.textContent) {
                    pxsim.svg.rotateElement(this.head, xc, yc, state.compassState.heading - 180);
                    this.headText.textContent = txt;
                    if (this.props.runtime)
                        this.props.runtime.environmentGlobals[pxsim.localization.lf("heading")] = state.compassState.heading;
                }
            }
            flashSystemLed() {
                if (!this.systemLed)
                    this.systemLed = pxsim.svg.child(this.g, "circle", { class: "sim-systemled", cx: 300, cy: 20, r: 5 });
                let now = Date.now();
                if (now - this.lastFlashTime > 150) {
                    this.lastFlashTime = now;
                    pxsim.svg.animate(this.systemLed, "sim-flash");
                }
            }
            flashAntenna() {
                if (!this.antenna) {
                    let ax = 380;
                    let dax = 18;
                    let ayt = 10;
                    let ayb = 40;
                    const wh = dax * 5;
                    const antenaBackground = pxsim.svg.child(this.g, "rect", { x: ax, y: ayt, width: wh, height: ayb - ayt, fill: "transparent" });
                    this.antenna = pxsim.svg.child(this.g, "polyline", { class: "sim-antenna", points: `${ax},${ayb} ${ax},${ayt} ${ax += dax},${ayt} ${ax},${ayb} ${ax += dax},${ayb} ${ax},${ayt} ${ax += dax},${ayt} ${ax},${ayb} ${ax += dax},${ayb} ${ax},${ayt} ${ax += dax},${ayt}` });
                    const pt = this.element.createSVGPoint();
                    const evh = (ev) => {
                        const state = this.board;
                        if (!state)
                            return;
                        const pos = pxsim.svg.cursorPoint(pt, this.element, ev);
                        const rs = Math.max(-128, Math.min(-42, (-138 + (pos.x - ax + wh) / wh * 100) | 0));
                        this.board.radioState.datagram.rssi = rs;
                        this.updateRSSI();
                    };
                    pxsim.svg.buttonEvents(antenaBackground, evh, evh, evh, (ev) => { });
                    pxsim.svg.buttonEvents(this.antenna, evh, evh, evh, (ev) => { });
                    pxsim.accessibility.makeFocusable(this.antenna);
                    pxsim.accessibility.setAria(this.antenna, "slider", "RSSI");
                    this.antenna.setAttribute("aria-valuemin", "-128");
                    this.antenna.setAttribute("aria-valuemax", "-42");
                    this.antenna.setAttribute("aria-orientation", "horizontal");
                    this.antenna.setAttribute("aria-valuenow", "");
                    pxsim.accessibility.setLiveContent("");
                }
                let now = Date.now();
                if (now - this.lastAntennaFlash > 200) {
                    this.lastAntennaFlash = now;
                    pxsim.svg.animate(this.antenna, 'sim-flash-stroke');
                }
                this.updateRSSI();
            }
            updateRSSI() {
                let state = this.board;
                if (!state)
                    return;
                const v = state.radioState.datagram.rssi;
                if (v === undefined)
                    return;
                if (!this.rssi) {
                    let ax = 380;
                    let dax = 18;
                    let ayt = 10;
                    let ayb = 40;
                    const wh = dax * 5;
                    for (let i = 0; i < 4; ++i)
                        pxsim.svg.child(this.g, "rect", { x: ax - 90 + i * 6, y: ayt + 28 - i * 4, width: 4, height: 2 + i * 4, fill: "#fff" });
                    this.rssi = pxsim.svg.child(this.g, "text", { x: ax - 64, y: ayb, class: "sim-text" });
                    this.rssi.textContent = "";
                }
                const vt = v.toString();
                if (vt !== this.rssi.textContent) {
                    this.rssi.textContent = v.toString();
                    this.antenna.setAttribute("aria-valuenow", this.rssi.textContent);
                    pxsim.accessibility.setLiveContent(this.rssi.textContent);
                }
            }
            updatePins() {
                let state = this.board;
                if (!state)
                    return;
                state.edgeConnectorState.pins.forEach((pin, i) => this.updatePin(pin, i));
            }
            updateLightLevel() {
                let state = this.board;
                if (!state || !state.lightSensorState.usesLightLevel)
                    return;
                if (!this.lightLevelButton) {
                    let gid = "gradient-light-level";
                    this.lightLevelGradient = pxsim.svg.linearGradient(this.defs, gid);
                    let cy = 50;
                    let r = 35;
                    this.lightLevelButton = pxsim.svg.child(this.g, "circle", {
                        cx: `50px`, cy: `${cy}px`, r: `${r}px`,
                        class: 'sim-light-level-button no-drag',
                        fill: `url(#${gid})`
                    });
                    let pt = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(this.lightLevelButton, 
                    // move
                    (ev) => {
                        let pos = pxsim.svg.cursorPoint(pt, this.element, ev);
                        let rs = r / 2;
                        let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                        if (level != this.board.lightSensorState.lightLevel) {
                            this.board.lightSensorState.lightLevel = level;
                            this.applyLightLevel();
                        }
                    }, 
                    // start
                    ev => { }, 
                    // stop
                    ev => { }, 
                    // keydown
                    (ev) => {
                        let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            this.board.lightSensorState.lightLevel--;
                            if (this.board.lightSensorState.lightLevel < 0) {
                                this.board.lightSensorState.lightLevel = 255;
                            }
                            this.applyLightLevel();
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            this.board.lightSensorState.lightLevel++;
                            if (this.board.lightSensorState.lightLevel > 255) {
                                this.board.lightSensorState.lightLevel = 0;
                            }
                            this.applyLightLevel();
                        }
                    });
                    this.lightLevelText = pxsim.svg.child(this.g, "text", { x: 85, y: cy + r - 5, text: '', class: 'sim-text' });
                    if (this.props.runtime)
                        this.props.runtime.environmentGlobals[pxsim.localization.lf("lightLevel")] = state.lightSensorState.lightLevel;
                    this.updateTheme();
                    pxsim.accessibility.makeFocusable(this.lightLevelButton);
                    pxsim.accessibility.setAria(this.lightLevelButton, "slider", "Light level");
                    this.lightLevelButton.setAttribute("aria-valuemin", "0");
                    this.lightLevelButton.setAttribute("aria-valuemax", "255");
                    this.lightLevelButton.setAttribute("aria-orientation", "vertical");
                    this.lightLevelButton.setAttribute("aria-valuenow", "128");
                }
                pxsim.svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(state.lightSensorState.lightLevel * 100 / 255))) + '%');
                this.lightLevelText.textContent = state.lightSensorState.lightLevel.toString();
            }
            applyLightLevel() {
                let lv = this.board.lightSensorState.lightLevel;
                pxsim.svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(lv * 100 / 255))) + '%');
                this.lightLevelText.textContent = lv.toString();
                this.lightLevelButton.setAttribute("aria-valuenow", lv.toString());
                pxsim.accessibility.setLiveContent(lv.toString());
            }
            findParentElement() {
                let el = this.element;
                while (el.parentNode && el.parentNode.nodeName == "svg")
                    el = el.parentNode;
                return el;
            }
            updateTilt() {
                const state = this.board;
                if (!state || !state.accelerometerState.accelerometer.isActive)
                    return;
                const acc = state.accelerometerState.accelerometer;
                const x = acc.getX();
                const y = -acc.getY();
                const z = acc.getZ();
                const af = 8 / 1023;
                const s = 1 - Math.min(0.1, Math.pow(Math.max(Math.abs(x), Math.abs(y)) / 1023, 2) / 35);
                acc.updateEnvironmentGlobals();
                // fix top parent and apply style to it
                const el = this.findParentElement();
                el.style.transform = `perspective(30em) rotateX(${y * af}deg) rotateY(${x * af}deg) scale(${s}, ${s})`;
                el.style.perspectiveOrigin = "50% 50% 50%";
                el.style.perspective = "30em";
                // don't display acc data when AB is on, v2 is on or soundLevel is on
                if (state.buttonPairState.usesButtonAB
                    || this.v2Circle
                    || this.soundLevel) {
                    if (this.accTextX)
                        this.accTextX.textContent = "";
                    if (this.accTextY)
                        this.accTextY.textContent = "";
                    if (this.accTextZ)
                        this.accTextZ.textContent = "";
                }
                else {
                    // update text
                    if (acc.flags & pxsim.AccelerometerFlag.X) {
                        if (!this.accTextX) {
                            this.accTextX = pxsim.svg.child(this.g, "text", { x: 365, y: 260, class: "sim-text" });
                            this.accTextX.textContent = "";
                        }
                        this.accTextX.textContent = `ax:${x}`;
                    }
                    if (acc.flags & pxsim.AccelerometerFlag.Y) {
                        if (!this.accTextY) {
                            this.accTextY = pxsim.svg.child(this.g, "text", { x: 365, y: 285, class: "sim-text" });
                            this.accTextY.textContent = "";
                        }
                        this.accTextY.textContent = `ay:${-y}`;
                    }
                    if (acc.flags & pxsim.AccelerometerFlag.Z) {
                        if (!this.accTextZ) {
                            this.accTextZ = pxsim.svg.child(this.g, "text", { x: 365, y: 310, class: "sim-text" });
                            this.accTextZ.textContent = "";
                        }
                        this.accTextZ.textContent = `az:${z}`;
                    }
                }
            }
            buildDom() {
                this.domHardwareVersion = 1;
                this.element = pxsim.svg.elt("svg");
                pxsim.svg.hydrate(this.element, {
                    "version": "1.0",
                    "viewBox": `0 0 ${MB_WIDTH} ${MB_HEIGHT}`,
                    "class": "sim",
                    "x": "0px",
                    "y": "0px",
                    "width": MB_WIDTH + "px",
                    "height": MB_HEIGHT + "px",
                    "fill": "rgba(0,0,0,0)"
                });
                this.style = pxsim.svg.child(this.element, "style", {});
                this.style.textContent = MB_STYLE + (this.props.theme.highContrast ? MB_HIGHCONTRAST : "");
                this.defs = pxsim.svg.child(this.element, "defs", {});
                this.g = pxsim.svg.elt("g");
                this.element.appendChild(this.g);
                // filters
                let ledglow = pxsim.svg.child(this.defs, "filter", { id: "ledglow", x: "-75%", y: "-75%", width: "300%", height: "300%" });
                pxsim.svg.child(ledglow, "feMorphology", { operator: "dilate", radius: "4", in: "SourceAlpha", result: "thicken" });
                pxsim.svg.child(ledglow, "feGaussianBlur", { stdDeviation: "5", in: "thicken", result: "blurred" });
                pxsim.svg.child(ledglow, "feFlood", { "flood-color": "rgb(255, 17, 77)", result: "glowColor" });
                pxsim.svg.child(ledglow, "feComposite", { in: "glowColor", in2: "blurred", operator: "in", result: "ledglow_colored" });
                let ledglowMerge = pxsim.svg.child(ledglow, "feMerge", {});
                pxsim.svg.child(ledglowMerge, "feMergeNode", { in: "ledglow_colored" });
                pxsim.svg.child(ledglowMerge, "feMergeNode", { in: "SourceGraphic" });
                let glow = pxsim.svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
                pxsim.svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
                let merge = pxsim.svg.child(glow, "feMerge", {});
                for (let i = 0; i < 3; ++i)
                    pxsim.svg.child(merge, "feMergeNode", { in: "glow" });
                // outline
                this.pkg = pxsim.svg.path(this.g, "sim-board", "M498,31.9C498,14.3,483.7,0,466.1,0H31.9C14.3,0,0,14.3,0,31.9v342.2C0,391.7,14.3,406,31.9,406h434.2c17.6,0,31.9-14.3,31.9-31.9V31.9z M14.3,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C19.2,204.6,17,206.7,14.3,206.7z M486.2,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.72.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C491,204.6,488.8,206.7,486.2,206.7z");
                pxsim.svg.hydrate(this.pkg, { fill: "#111" });
                // script background
                this.display = pxsim.svg.path(this.g, "sim-display", "M333.8,310.3H165.9c-8.3,0-15-6.7-15-15V127.5c0-8.3,6.7-15,15-15h167.8c8.3,0,15,6.7,15,15v167.8C348.8,303.6,342.1,310.3,333.8,310.3z");
                pxsim.svg.hydrate(this.display, { fill: "#111" });
                this.logos = [];
                this.logos.push(pxsim.svg.child(this.g, "polygon", { class: "sim-theme", points: "115,56.7 173.1,0 115,0" }));
                this.logos.push(pxsim.svg.path(this.g, "sim-theme", "M114.2,0H25.9C12.1,2.1,0,13.3,0,27.7v83.9L114.2,0z"));
                this.logos.push(pxsim.svg.child(this.g, "polygon", { class: "sim-theme", points: "173,27.9 202.5,0 173,0" }));
                this.logos.push(pxsim.svg.child(this.g, "polygon", { class: "sim-theme", points: "54.1,242.4 54.1,274.1 22.4,274.1" }));
                this.logos.push(pxsim.svg.child(this.g, "polygon", { class: "sim-theme", points: "446.2,164.6 446.2,132.8 477.9,132.8" }));
                // leds
                this.leds = [];
                this.ledsOuter = [];
                let left = 154, top = 113, ledoffw = 46, ledoffh = 44;
                for (let i = 0; i < 5; ++i) {
                    let ledtop = i * ledoffh + top;
                    for (let j = 0; j < 5; ++j) {
                        let ledleft = j * ledoffw + left;
                        let k = i * 5 + j;
                        this.ledsOuter.push(pxsim.svg.child(this.g, "rect", { class: "sim-led-back", x: ledleft, y: ledtop, width: 10, height: 20, rx: 2, ry: 2 }));
                        let led = pxsim.svg.child(this.g, "rect", { class: "sim-led", x: ledleft - 2, y: ledtop - 2, width: 14, height: 24, rx: 3, ry: 3, title: `(${j},${i})` });
                        pxsim.svg.filter(led, `url(#ledglow)`);
                        this.leds.push(led);
                    }
                }
                // head
                this.head = pxsim.svg.child(this.g, "g", { class: "sim-head" });
                pxsim.svg.child(this.head, "circle", { cx: 258, cy: 75, r: 100, fill: "transparent" });
                this.headParts = pxsim.svg.child(this.head, "g", {});
                this.heads = [];
                // background
                this.heads.push(pxsim.svg.path(this.headParts, "sim-button", "M 269.9 50.2 L 269.9 50.2 l -39.5 0 v 0 c -14.1 0.1 -24.6 10.7 -24.6 24.8 c 0 13.9 10.4 24.4 24.3 24.7 v 0 h 39.6 c 14.2 0 24.8 -10.6 24.8 -24.7 C 294.5 61 284 50.3 269.9 50.2 M 269.7 89.2"));
                // shapes
                this.heads.push(pxsim.svg.path(this.headParts, "sim-theme", "M269.9,50.2L269.9,50.2l-39.5,0v0c-14.1,0.1-24.6,10.7-24.6,24.8c0,13.9,10.4,24.4,24.3,24.7v0h39.6c14.2,0,24.8-10.6,24.8-24.7C294.5,61,284,50.3,269.9,50.2 M269.7,89.2L269.7,89.2l-39.3,0c-7.7-0.1-14-6.4-14-14.2c0-7.8,6.4-14.2,14.2-14.2h39.1c7.8,0,14.2,6.4,14.2,14.2C283.9,82.9,277.5,89.2,269.7,89.2"));
                this.heads.push(pxsim.svg.path(this.headParts, "sim-theme", "M230.6,69.7c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3C235.9,72.1,233.5,69.7,230.6,69.7"));
                this.heads.push(pxsim.svg.path(this.headParts, "sim-theme", "M269.7,80.3c2.9,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3C264.4,77.9,266.8,80.3,269.7,80.3"));
                this.headText = pxsim.svg.child(this.g, "text", { x: 160, y: 60, class: "sim-text" });
                // https://www.microbit.co.uk/device/pins
                // P0, P1, P2
                this.pins = [
                    "M16.5,341.2c0,0.4-0.1,0.9-0.1,1.3v60.7c4.1,1.7,8.6,2.7,12.9,2.7h34.4v-64.7c0,0,0-0.1,0-0.1c0-13-10.6-23.6-23.7-23.6C27.2,317.6,16.5,328.1,16.5,341.2z M21.2,341.6c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3c0,10.7-8.6,19.3-19.3,19.3C29.9,360.9,21.2,352.2,21.2,341.6z",
                    "M139.1,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h46.2v-65.6C162.2,327.7,151.9,317.3,139.1,317.3zM139.3,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C158.6,351.5,150,360.1,139.3,360.1z",
                    "M249,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h46.2v-65.6C272.1,327.7,261.8,317.3,249,317.3z M249.4,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C268.7,351.5,260.1,360.1,249.4,360.1z"
                ].map((p, pi) => pxsim.svg.path(this.g, "sim-pin sim-pin-touch", p));
                // P3
                this.pins.push(pxsim.svg.path(this.g, "sim-pin", "M0,357.7v19.2c0,10.8,6.2,20.2,14.4,25.2v-44.4H0z"));
                pins4onXs.forEach(x => {
                    this.pins.push(pxsim.svg.child(this.g, "rect", { x: x, y: 356.7, width: 10, height: 50, class: "sim-pin" }));
                });
                this.pins.push(pxsim.svg.path(this.g, "sim-pin", "M483.6,402c8.2-5,14.4-14.4,14.4-25.1v-19.2h-14.4V402z"));
                this.pins.push(pxsim.svg.path(this.g, "sim-pin", "M359.9,317.3c-12.8,0-22.1,10.3-23.1,23.1V406H383v-65.6C383,327.7,372.7,317.3,359.9,317.3z M360,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C379.3,351.5,370.7,360.1,360,360.1z"));
                this.pins.push(pxsim.svg.path(this.g, "sim-pin", "M458,317.6c-13,0-23.6,10.6-23.6,23.6c0,0,0,0.1,0,0.1h0V406H469c4.3,0,8.4-1,12.6-2.7v-60.7c0-0.4,0-0.9,0-1.3C481.6,328.1,471,317.6,458,317.6z M457.8,360.9c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C477.1,352.2,468.4,360.9,457.8,360.9z"));
                this.pins.forEach((p, i) => pxsim.svg.hydrate(p, { title: pinTitles[i] }));
                this.pinGradients = this.pins.map((pin, i) => {
                    let gid = "gradient-pin-" + i;
                    let lg = pxsim.svg.linearGradient(this.defs, gid);
                    pin.setAttribute("fill", `url(#${gid})`);
                    return lg;
                });
                this.pinTexts = [67, 165, 275].map(x => pxsim.svg.child(this.g, "text", { class: "sim-text-pin", x: x, y: 345 }));
                this.buttonsOuter = [];
                this.buttons = [];
                const outerBtn = (left, top, label) => {
                    const btnr = 4;
                    const btnw = 56.2;
                    const btnn = 6;
                    const btnnm = 10;
                    let btng = pxsim.svg.child(this.g, "g", { class: "sim-button-group" });
                    pxsim.accessibility.makeFocusable(btng);
                    pxsim.accessibility.setAria(btng, "button", label);
                    this.buttonsOuter.push(btng);
                    pxsim.svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });
                    pxsim.svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnnm, cy: top + btnnm, r: btnn });
                    pxsim.svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnnm, cy: top + btnw - btnnm, r: btnn });
                    pxsim.svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnw - btnnm, cy: top + btnw - btnnm, r: btnn });
                    pxsim.svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnw - btnnm, cy: top + btnnm, r: btnn });
                };
                outerBtn(25.9, 176.4, "A");
                this.buttons.push(pxsim.svg.path(this.g, "sim-button", "M69.7,203.5c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7c0-8.7,7-15.7,15.7-15.7S69.7,194.9,69.7,203.5"));
                outerBtn(418.1, 176.4, "B");
                this.buttons.push(pxsim.svg.path(this.g, "sim-button", "M461.9,203.5c0,8.7-7,15.7-15.7,15.7c-8.7,0-15.7-7-15.7-15.7c0-8.7,7-15.7,15.7-15.7C454.9,187.8,461.9,194.9,461.9,203.5"));
                outerBtn(417, 250, "A+B");
                this.buttons.push(pxsim.svg.child(this.g, "circle", { class: "sim-button", cx: 446, cy: 278, r: 16.5 }));
                this.buttonsOuter[2].style.visibility = "hidden";
                this.buttons[2].style.visibility = "hidden";
                this.buttons.forEach(btn => pxsim.svg.hydrate(btn, { fill: "#111" }));
                pxsim.svg.path(this.g, "sim-label", "M35.7,376.4c0-2.8,2.1-5.1,5.5-5.1c3.3,0,5.5,2.4,5.5,5.1v4.7c0,2.8-2.2,5.1-5.5,5.1c-3.3,0-5.5-2.4-5.5-5.1V376.4zM43.3,376.4c0-1.3-0.8-2.3-2.2-2.3c-1.3,0-2.1,1.1-2.1,2.3v4.7c0,1.2,0.8,2.3,2.1,2.3c1.3,0,2.2-1.1,2.2-2.3V376.4z");
                pxsim.svg.path(this.g, "sim-label", "M136.2,374.1c2.8,0,3.4-0.8,3.4-2.5h2.9v14.3h-3.4v-9.5h-3V374.1z");
                pxsim.svg.path(this.g, "sim-label", "M248.6,378.5c1.7-1,3-1.7,3-3.1c0-1.1-0.7-1.6-1.6-1.6c-1,0-1.8,0.6-1.8,2.1h-3.3c0-2.6,1.8-4.6,5.1-4.6c2.6,0,4.9,1.3,4.9,4.3c0,2.4-2.3,3.9-3.8,4.7c-2,1.3-2.5,1.8-2.5,2.9h6.1v2.7h-10C244.8,381.2,246.4,379.9,248.6,378.5z");
                pxsim.svg.path(this.g, "sim-button-label", "M48.1,270.9l-0.6-1.7h-5.1l-0.6,1.7h-3.5l5.1-14.3h3.1l5.2,14.3H48.1z M45,260.7l-1.8,5.9h3.5L45,260.7z");
                pxsim.svg.path(this.g, "sim-button-label", "M449.1,135.8h5.9c3.9,0,4.7,2.4,4.7,3.9c0,1.8-1.4,2.9-2.5,3.2c0.9,0,2.6,1.1,2.6,3.3c0,1.5-0.8,4-4.7,4h-6V135.8zM454.4,141.7c1.6,0,2-1,2-1.7c0-0.6-0.3-1.7-2-1.7h-2v3.4H454.4z M452.4,144.1v3.5h2.1c1.6,0,2-1,2-1.8c0-0.7-0.4-1.8-2-1.8H452.4z");
                pxsim.svg.path(this.g, "sim-label", "M352.1,381.1c0,1.6,0.9,2.5,2.2,2.5c1.2,0,1.9-0.9,1.9-1.9c0-1.2-0.6-2-2.1-2h-1.3v-2.6h1.3c1.5,0,1.9-0.7,1.9-1.8c0-1.1-0.7-1.6-1.6-1.6c-1.4,0-1.8,0.8-1.8,2.1h-3.3c0-2.4,1.5-4.6,5.1-4.6c2.6,0,5,1.3,5,4c0,1.6-1,2.8-2.1,3.2c1.3,0.5,2.3,1.6,2.3,3.5c0,2.7-2.4,4.3-5.2,4.3c-3.5,0-5.5-2.1-5.5-5.1H352.1z");
                pxsim.svg.path(this.g, "sim-label", "M368.5,385.9h-3.1l-5.1-14.3h3.5l3.1,10.1l3.1-10.1h3.6L368.5,385.9z");
                pxsim.svg.path(this.g, "sim-label", "M444.4,378.3h7.4v2.5h-1.5c-0.6,3.3-3,5.5-7.1,5.5c-4.8,0-7.5-3.5-7.5-7.5c0-3.9,2.8-7.5,7.5-7.5c3.8,0,6.4,2.3,6.6,5h-3.5c-0.2-1.1-1.4-2.2-3.1-2.2c-2.7,0-4.1,2.3-4.1,4.7c0,2.5,1.4,4.7,4.4,4.7c2,0,3.2-1.2,3.4-2.7h-2.5V378.3z");
                pxsim.svg.path(this.g, "sim-label", "M461.4,380.9v-9.3h3.3v14.3h-3.5l-5.2-9.2v9.2h-3.3v-14.3h3.5L461.4,380.9z");
                pxsim.svg.path(this.g, "sim-label", "M472.7,371.6c4.8,0,7.5,3.5,7.5,7.2s-2.7,7.2-7.5,7.2h-5.3v-14.3H472.7z M470.8,374.4v8.6h1.8c2.7,0,4.2-2.1,4.2-4.3s-1.6-4.3-4.2-4.3H470.8z");
            }
            updateHardwareVersion() {
                // check if microphone has been used
                const b = this.board;
                if (!b)
                    return;
                if (b.microphoneState.sensorUsed)
                    b.ensureHardwareVersion(2);
                // check current version
                const version = this.board.hardwareVersion;
                if (version === this.domHardwareVersion)
                    return;
                this.domHardwareVersion = this.board.hardwareVersion;
                // v2 skinning
                // don't use yellow theme
                if (this.props.theme.accent === "#FFD43A") {
                    this.props.theme = visuals.themes[0];
                }
                // display v2 indicator
                const title = pxsim.localization.lf("micro:bit v2 needed");
                this.v2Circle = pxsim.svg.child(this.g, "circle", { r: 21, title: title });
                pxsim.svg.fill(this.v2Circle, "white");
                this.v2Text = pxsim.svg.child(this.g, "text", { class: "sim-text", title: title });
                this.v2Text.textContent = "V2";
                pxsim.svg.fill(this.v2Text, "black");
                this.v2Text.style.fontWeight = "700";
                // update pins
                // notch: 46.2 -> h 7 c 0 0 -1 -9 8 -8 l 18 0 c 0 0 9 -1 8 8 h 7
                this.pins[0].setAttribute("d", "M 16.5 341.2 c 0 0.4 -0.1 0.9 -0.1 1.3 v 60.7 c 2.6 1.8 4.6 2.8 8.6 2.8 c 0 0 -1 -9 8 -8 l 16 0 c 0 0 9 -1 8 8 h 8 v -64.7 c 0 0 0 -0.1 0 -0.1 c 0 -13 -10.6 -23.6 -23.7 -23.6 C 27.2 317.6 16.5 328.1 16.5 341.2 z M 21.2 341.6 c 0 -10.7 8.7 -19.3 19.3 -19.3 c 10.7 0 19.3 8.7 19.3 19.3 c 0 10.7 -8.6 19.3 -19.3 19.3 C 29.9 360.9 21.2 352.2 21.2 341.6 z");
                this.pins[1].setAttribute("d", "M139.1,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h 6 c 0 0 -1 -9 8 -8 l 17 0 c 0 0 9 -1 8 8 h 7v-65.6C162.2,327.7,151.9,317.3,139.1,317.3zM139.3,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C158.6,351.5,150,360.1,139.3,360.1z");
                this.pins[2].setAttribute("d", "M249,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h 6 c 0 0 -1 -9 8 -8 l 17 0 c 0 0 9 -1 8 8 h 7v-65.6C272.1,327.7,261.8,317.3,249,317.3z M249.4,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C268.7,351.5,260.1,360.1,249.4,360.1z");
                // 3v
                this.pins[this.pins.length - 2].setAttribute("d", "M359.9,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h 7 c 0 0 -1 -9 8 -8 l 17 0 c 0 0 9 -1 8 8 h 7v-65.6C383,327.7,372.7,317.3,359.9,317.3z M360,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C379.3,351.5,370.7,360.1,360,360.1z");
                this.pins[this.pins.length - 1].setAttribute("d", "M 458 317.6 c -13 0 -23.6 10.6 -23.6 23.6 c 0 0 0 0.1 0 0.1 h 0 V 406 h 7 c 0 0 -1 -9 8 -8 l 17 0 c 0 0 9 -1 8 8 h 1.6 c 2 0 4 -1 5 -3 v -60.7 c 0 -0.4 0 -0.9 0 -1.3 C 481.6 328.1 471 317.6 458 317.6 z M 457.8 360.9 c -10.7 0 -19.3 -8.6 -19.3 -19.3 c 0 -10.7 8.6 -19.3 19.3 -19.3 c 10.7 0 19.3 8.7 19.3 19.3 C 477.1 352.2 468.4 360.9 457.8 360.9 z");
                // outline
                this.pkg.setAttribute("d", "M 498 31.9 C 498 14.3 483.7 0 466.1 0 H 31.9 C 14.3 0 0 14.3 0 31.9 v 342.2 C -1 399 21 405 23 406 c 0 0 -1 -9 8 -8 l 18 0 c 0 0 9 -1 8 8 h 7 h 50 h 7 c 0 0 -1 -9 8 -8 l 18 0 c 0 0 9 -1 8 8 h 7 h 63 h 7 c 0 0 -1 -9 8 -8 l 18 0 c 0 0 9 -1 8 8 h 7 h 64 h 7 c 0 0 -1 -9 8 -8 l 18 0 c 0 0 9 -1 8 8 h 7 h 51 h 5 c 0 0 -1 -9 8 -8 l 18 0 c 0 0 9 -1 8 8 h 0 c 9 0 23 -17 23 -31 V 31.9 z M 14.3 206.7 c -2.7 0 -4.8 -2.2 -4.8 -4.8 c 0 -2.7 2.2 -4.8 4.8 -4.8 c 2.7 0 4.8 2.2 4.8 4.8 C 19.2 204.6 17 206.7 14.3 206.7 z M 486.2 206.7 c -2.7 0 -4.8 -2.2 -4.8 -4.8 c 0 -2.72 0.2 -4.8 4.8 -4.8 c 2.7 0 4.8 2.2 4.8 4.8 C 491 204.6 488.8 206.7 486.2 206.7 z");
                const headTitle = pxsim.localization.lf("logo touch (micro:bit v2 needed)");
                pxsim.accessibility.makeFocusable(this.headParts);
                pxsim.accessibility.setAria(this.headParts, "button", headTitle);
                this.headParts.setAttribute("class", "sim-button-outer sim-button-group");
                this.attachButtonEvents(this.board.logoTouch, this.headParts, this.headParts);
                // microphone led
                const microphoneTitle = pxsim.localization.lf("microphone (micro:bit v2 needed)");
                const microg = pxsim.svg.child(this.g, "g", { title: microphoneTitle });
                this.microphoneLed = pxsim.svg.path(microg, "sim-led sim-mic", "M 352.852 71 C 351.315 71 350.07 72.248 350.07 73.784 V 79.056 C 350.07 80.594 351.316 81.838 352.852 81.838 C 354.387 81.838 355.634 80.593 355.634 79.056 V 73.784 C 355.634 72.248 354.387 71 352.852 71 Z M 346.743 79.981 C 346.743 82.84 348.853 85.062 351.501 85.658 V 87.095 H 348.448 V 89.329 H 357.366 V 87.095 H 354.306 V 85.658 C 356.954 85.064 359.071 82.842 359.071 79.981 H 357.057 C 357.057 82.174 355.168 83.81 352.905 83.81 C 350.64 83.81 348.757 82.173 348.757 79.981 Z");
                pxsim.svg.fills([this.microphoneLed], this.props.theme.ledOff);
                // ring
                const microhole = pxsim.svg.child(this.g, "circle", { cx: 336, cy: 86, r: 3, stroke: "gold", strokeWidth: "1px" });
                pxsim.svg.title(microhole, pxsim.localization.lf("microphone (micro:bit v2 needed)"));
                this.updateMicrophone();
                this.updateTheme();
            }
            positionV2Elements() {
                if (this.v2Circle && this.v2Text) {
                    const offsetFromAB = !!(this.board && this.board.buttonPairState.usesButtonAB);
                    const x = offsetFromAB ? 385 : 458;
                    const y = offsetFromAB ? 300 : 290;
                    this.v2Circle.setAttribute("cx", "" + x);
                    this.v2Circle.setAttribute("cy", "" + y);
                    this.v2Text.setAttribute("x", `${x - 15}`);
                    this.v2Text.setAttribute("y", `${y + 8}`);
                }
                if (this.soundLevel && this.buttonABText) {
                    // hide A+B text
                    this.buttonABText.setAttribute("x", "386");
                    this.buttonABText.setAttribute("y", "274");
                    this.buttonABText.style.fontSize = "95%";
                }
            }
            attachEvents() {
                this.attachIFrameEvents();
                this.attachAccelerometerEvents();
                this.attachPinsIOEvents();
                this.attachPinsTouchEvents();
                this.attachABEvents();
                this.attachAPlusBEvents();
            }
            attachIFrameEvents() {
                pxsim.Runtime.messagePosted = (msg) => {
                    switch (msg.type || "") {
                        case "serial":
                            this.flashSystemLed();
                            break;
                        case "radiopacket":
                            this.flashAntenna();
                            break;
                        case "eventbus":
                            if (msg.id == 2000 /* MES_BROADCAST_GENERAL_ID */)
                                this.flashAntenna();
                            break;
                    }
                };
            }
            attachAccelerometerEvents() {
                let tiltDecayer = undefined;
                this.element.addEventListener(pxsim.pointerEvents.move, (ev) => {
                    const state = this.board;
                    if (!state.accelerometerState.accelerometer.isActive)
                        return;
                    if (tiltDecayer) {
                        clearInterval(tiltDecayer);
                        tiltDecayer = 0;
                    }
                    const bbox = this.element.getBoundingClientRect();
                    // ev.clientX and ev.clientY are not defined on mobile iOS
                    const xPos = ev.clientX != null ? ev.clientX : ev.pageX;
                    const yPos = ev.clientY != null ? ev.clientY : ev.pageY;
                    const ax = (xPos - bbox.width / 2) / (bbox.width / 3);
                    const ay = (yPos - bbox.height / 2) / (bbox.height / 3);
                    const x = -Math.max(-1023, Math.min(1023, Math.floor(ax * 1023)));
                    const y = -Math.max(-1023, Math.min(1023, Math.floor(ay * 1023)));
                    const z2 = 1023 * 1023 - x * x - y * y;
                    const z = Math.floor((z2 > 0 ? -1 : 1) * Math.sqrt(Math.abs(z2)));
                    state.accelerometerState.accelerometer.update(x, y, z);
                    this.updateTilt();
                }, false);
                this.element.addEventListener(pxsim.pointerEvents.leave, (ev) => {
                    let state = this.board;
                    if (!state.accelerometerState.accelerometer.isActive)
                        return;
                    if (!tiltDecayer) {
                        tiltDecayer = setInterval(() => {
                            let accx = state.accelerometerState.accelerometer.getX(pxsim.MicroBitCoordinateSystem.RAW);
                            accx = Math.floor(Math.abs(accx) * 0.85) * (accx > 0 ? 1 : -1);
                            let accy = state.accelerometerState.accelerometer.getY(pxsim.MicroBitCoordinateSystem.RAW);
                            accy = Math.floor(Math.abs(accy) * 0.85) * (accy > 0 ? 1 : -1);
                            let accz = -Math.sqrt(Math.max(0, 1023 * 1023 - accx * accx - accy * accy));
                            if (Math.abs(accx) <= 24 && Math.abs(accy) <= 24) {
                                clearInterval(tiltDecayer);
                                tiltDecayer = 0;
                                accx = 0;
                                accy = 0;
                                accz = -1023;
                            }
                            state.accelerometerState.accelerometer.update(accx, accy, accz);
                            this.updateTilt();
                        }, 50);
                    }
                }, false);
            }
            attachPinsIOEvents() {
                this.pins.forEach((pin, index) => {
                    if (!this.board.edgeConnectorState.pins[index])
                        return;
                    let pt = this.element.createSVGPoint();
                    pxsim.svg.buttonEvents(pin, 
                    // move
                    ev => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        if (pin.mode & pxsim.PinFlags.Input) {
                            let cursor = pxsim.svg.cursorPoint(pt, this.element, ev);
                            let v = (400 - cursor.y) / 40 * 1023;
                            pin.value = Math.max(0, Math.min(1023, Math.floor(v)));
                        }
                        this.updatePin(pin, index);
                    }, 
                    // start
                    ev => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        pxsim.U.addClass(svgpin, "touched");
                        if (pin.mode & pxsim.PinFlags.Input) {
                            let cursor = pxsim.svg.cursorPoint(pt, this.element, ev);
                            let v = (400 - cursor.y) / 40 * 1023;
                            pin.value = Math.max(0, Math.min(1023, Math.floor(v)));
                        }
                        this.updatePin(pin, index);
                    }, 
                    // stop
                    (ev) => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        pxsim.U.removeClass(svgpin, "touched");
                        this.updatePin(pin, index);
                        return false;
                    }, 
                    // keydown
                    (ev) => {
                        let charCode = (typeof ev.which == "number") ? ev.which : ev.keyCode;
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        if (charCode === 40 || charCode === 37) { // Down/Left arrow
                            pin.value -= 10;
                            if (pin.value < 0) {
                                pin.value = 1023;
                            }
                            this.updatePin(pin, index);
                        }
                        else if (charCode === 38 || charCode === 39) { // Up/Right arrow
                            pin.value += 10;
                            if (pin.value > 1023) {
                                pin.value = 0;
                            }
                            this.updatePin(pin, index);
                        }
                    });
                });
            }
            attachPinsTouchEvents() {
                this.pins.slice(0, 3).forEach((btn, index) => {
                    let pressedTime;
                    pxsim.pointerEvents.down.forEach(evid => btn.addEventListener(evid, ev => {
                        let state = this.board;
                        state.edgeConnectorState.pins[index].touched = true;
                        this.updatePin(state.edgeConnectorState.pins[index], index);
                        this.board.bus.queue(state.edgeConnectorState.pins[index].id, 1 /* MICROBIT_BUTTON_EVT_DOWN */);
                        pressedTime = pxsim.runtime.runningTime();
                    }));
                    btn.addEventListener(pxsim.pointerEvents.leave, ev => {
                        let state = this.board;
                        state.edgeConnectorState.pins[index].touched = false;
                        this.updatePin(state.edgeConnectorState.pins[index], index);
                    });
                    btn.addEventListener(pxsim.pointerEvents.up, ev => {
                        let state = this.board;
                        state.edgeConnectorState.pins[index].touched = false;
                        this.updatePin(state.edgeConnectorState.pins[index], index);
                        this.board.bus.queue(state.edgeConnectorState.pins[index].id, 2 /* MICROBIT_BUTTON_EVT_UP */);
                        const currentTime = pxsim.runtime.runningTime();
                        if (currentTime - pressedTime > 1000 /* DEVICE_BUTTON_LONG_CLICK_TIME */)
                            this.board.bus.queue(state.edgeConnectorState.pins[index].id, 4 /* MICROBIT_BUTTON_EVT_LONG_CLICK */);
                        else
                            this.board.bus.queue(state.edgeConnectorState.pins[index].id, 3 /* MICROBIT_BUTTON_EVT_CLICK */);
                        pressedTime = undefined;
                    });
                    pxsim.accessibility.enableKeyboardInteraction(btn, undefined, () => {
                        let state = this.board;
                        this.board.bus.queue(state.edgeConnectorState.pins[index].id, 1 /* MICROBIT_BUTTON_EVT_DOWN */);
                        this.board.bus.queue(state.edgeConnectorState.pins[index].id, 2 /* MICROBIT_BUTTON_EVT_UP */);
                        this.board.bus.queue(state.edgeConnectorState.pins[index].id, 3 /* MICROBIT_BUTTON_EVT_CLICK */);
                    });
                });
            }
            attachABEvents() {
                const bpState = this.board.buttonPairState;
                const stateButtons = [bpState.aBtn, bpState.bBtn];
                const elButtonOuters = this.buttonsOuter.slice(0, 2);
                const elButtons = this.buttons.slice(0, 2);
                elButtonOuters.forEach((btn, index) => {
                    this.attachButtonEvents(stateButtons[index], btn, elButtons[index]);
                });
            }
            attachButtonEvents(stateButton, buttonOuter, elButton) {
                let pressedTime;
                pxsim.pointerEvents.down.forEach(evid => buttonOuter.addEventListener(evid, ev => {
                    // console.log(`down ${stateButton.id}`)
                    stateButton.pressed = true;
                    pxsim.svg.fill(elButton, this.props.theme.buttonDown);
                    this.board.bus.queue(stateButton.id, 1 /* MICROBIT_BUTTON_EVT_DOWN */);
                    pressedTime = pxsim.runtime.runningTime();
                }));
                buttonOuter.addEventListener(pxsim.pointerEvents.leave, ev => {
                    stateButton.pressed = false;
                    pxsim.svg.fill(elButton, this.props.theme.buttonUp);
                });
                buttonOuter.addEventListener(pxsim.pointerEvents.up, ev => {
                    stateButton.pressed = false;
                    pxsim.svg.fill(elButton, this.props.theme.buttonUp);
                    this.board.bus.queue(stateButton.id, 2 /* MICROBIT_BUTTON_EVT_UP */);
                    const currentTime = pxsim.runtime.runningTime();
                    if (currentTime - pressedTime > 1000 /* DEVICE_BUTTON_LONG_CLICK_TIME */)
                        this.board.bus.queue(stateButton.id, 4 /* MICROBIT_BUTTON_EVT_LONG_CLICK */);
                    else
                        this.board.bus.queue(stateButton.id, 3 /* MICROBIT_BUTTON_EVT_CLICK */);
                    pressedTime = undefined;
                });
                pxsim.accessibility.enableKeyboardInteraction(buttonOuter, undefined, () => {
                    this.board.bus.queue(stateButton.id, 1 /* MICROBIT_BUTTON_EVT_DOWN */);
                    this.board.bus.queue(stateButton.id, 2 /* MICROBIT_BUTTON_EVT_UP */);
                    this.board.bus.queue(stateButton.id, 3 /* MICROBIT_BUTTON_EVT_CLICK */);
                });
            }
            attachAPlusBEvents() {
                const bpState = this.board.buttonPairState;
                let pressedTime;
                // A+B
                pxsim.pointerEvents.down.forEach(evid => this.buttonsOuter[2].addEventListener(evid, ev => {
                    bpState.aBtn.pressed = true;
                    bpState.bBtn.pressed = true;
                    bpState.abBtn.pressed = true;
                    pxsim.svg.fill(this.buttons[0], this.props.theme.buttonDown);
                    pxsim.svg.fill(this.buttons[1], this.props.theme.buttonDown);
                    pxsim.svg.fill(this.buttons[2], this.props.theme.buttonDown);
                    this.board.bus.queue(bpState.abBtn.id, 1 /* MICROBIT_BUTTON_EVT_DOWN */);
                    pressedTime = pxsim.runtime.runningTime();
                }));
                this.buttonsOuter[2].addEventListener(pxsim.pointerEvents.leave, ev => {
                    bpState.aBtn.pressed = false;
                    bpState.bBtn.pressed = false;
                    bpState.abBtn.pressed = false;
                    pxsim.svg.fill(this.buttons[0], this.props.theme.buttonUp);
                    pxsim.svg.fill(this.buttons[1], this.props.theme.buttonUp);
                    pxsim.svg.fill(this.buttons[2], this.props.theme.virtualButtonUp);
                });
                this.buttonsOuter[2].addEventListener(pxsim.pointerEvents.up, ev => {
                    bpState.aBtn.pressed = false;
                    bpState.bBtn.pressed = false;
                    bpState.abBtn.pressed = false;
                    pxsim.svg.fill(this.buttons[0], this.props.theme.buttonUp);
                    pxsim.svg.fill(this.buttons[1], this.props.theme.buttonUp);
                    pxsim.svg.fill(this.buttons[2], this.props.theme.virtualButtonUp);
                    this.board.bus.queue(bpState.abBtn.id, 2 /* MICROBIT_BUTTON_EVT_UP */);
                    const currentTime = pxsim.runtime.runningTime();
                    if (currentTime - pressedTime > 1000 /* DEVICE_BUTTON_LONG_CLICK_TIME */)
                        this.board.bus.queue(bpState.abBtn.id, 4 /* MICROBIT_BUTTON_EVT_LONG_CLICK */);
                    else
                        this.board.bus.queue(bpState.abBtn.id, 3 /* MICROBIT_BUTTON_EVT_CLICK */);
                    pressedTime = undefined;
                });
                pxsim.accessibility.enableKeyboardInteraction(this.buttonsOuter[2], undefined, () => {
                    this.board.bus.queue(bpState.abBtn.id, 1 /* MICROBIT_BUTTON_EVT_DOWN */);
                    this.board.bus.queue(bpState.abBtn.id, 2 /* MICROBIT_BUTTON_EVT_UP */);
                    this.board.bus.queue(bpState.abBtn.id, 3 /* MICROBIT_BUTTON_EVT_CLICK */);
                });
            }
        }
        visuals.MicrobitBoardSvg = MicrobitBoardSvg;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"/></svg>`;
    // We only need to unmute from within the iframe once
    let hasUnmuted = false;
    function createMuteButton() {
        const el = document.createElement("div");
        el.setAttribute("id", "safari-mute-button-outer");
        el.innerHTML = `
            <button class="safari-mute-button">
                ${icon}
            </button>
        `;
        const button = el.firstElementChild;
        button.setAttribute("title", pxsim.localization.lf("Unmute simulator"));
        button.addEventListener("click", () => {
            pxsim.AudioContextManager.mute(false);
            pxsim.setParentMuteState("unmuted");
            button.remove();
            hasUnmuted = true;
        });
        return el;
    }
    pxsim.createMuteButton = createMuteButton;
    function shouldShowMute() {
        return isSafari() && !hasUnmuted;
    }
    pxsim.shouldShowMute = shouldShowMute;
    // Everything below is taken from browserutils in pxt
    function hasNavigator() {
        return typeof navigator !== "undefined";
    }
    pxsim.hasNavigator = hasNavigator;
    //Microsoft Edge lies about its user agent and claims to be Chrome, but Microsoft Edge/Version
    //is always at the end
    function isEdge() {
        return hasNavigator() && /Edge/i.test(navigator.userAgent);
    }
    pxsim.isEdge = isEdge;
    //IE11 also lies about its user agent, but has Trident appear somewhere in
    //the user agent. Detecting the different between IE11 and Microsoft Edge isn't
    //super-important because the UI is similar enough
    function isIE() {
        return hasNavigator() && /Trident/i.test(navigator.userAgent);
    }
    pxsim.isIE = isIE;
    //Microsoft Edge and IE11 lie about being Chrome. Chromium-based Edge ("Edgeium") will be detected as Chrome, that is ok. If you're looking for Edgeium, use `isChromiumEdge()`.
    function isChrome() {
        return !isEdge() && !isIE() && !!navigator && (/Chrome/i.test(navigator.userAgent) || /Chromium/i.test(navigator.userAgent));
    }
    pxsim.isChrome = isChrome;
    //Chrome and Microsoft Edge lie about being Safari
    function isSafari() {
        //Could also check isMac but I don't want to risk excluding iOS
        //Checking for iPhone, iPod or iPad as well as Safari in order to detect home screen browsers on iOS
        return !isChrome() && !isEdge() && !!navigator && /(Macintosh|Safari|iPod|iPhone|iPad)/i.test(navigator.userAgent);
    }
    pxsim.isSafari = isSafari;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        // TODO: add in support for mode, as in CODAL
        function registerWithDal(id, evid, handler, mode = 0) {
            pxsim.board().bus.listen(id, evid, handler);
        }
        pxtcore.registerWithDal = registerWithDal;
        function deepSleep() {
            // TODO?
            console.log("deep sleep requested");
        }
        pxtcore.deepSleep = deepSleep;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var BufferMethods;
    (function (BufferMethods) {
        function fnv1(data) {
            let h = 0x811c9dc5;
            for (let i = 0; i < data.length; ++i) {
                h = Math.imul(h, 0x1000193) ^ data[i];
            }
            return h;
        }
        function hash(buf, bits) {
            bits |= 0;
            if (bits < 1)
                return 0;
            const h = fnv1(buf.data);
            if (bits >= 32)
                return h >>> 0;
            else
                return ((h ^ (h >>> bits)) & ((1 << bits) - 1)) >>> 0;
        }
        BufferMethods.hash = hash;
    })(BufferMethods = pxsim.BufferMethods || (pxsim.BufferMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var control;
    (function (control) {
        control.runInParallel = pxsim.thread.runInBackground;
        control.delay = pxsim.thread.pause;
        function reset() {
            pxsim.Runtime.postMessage({
                type: "simulator",
                command: "restart",
                controlReset: true
            });
            const cb = pxsim.getResume();
        }
        control.reset = reset;
        function waitMicros(micros) {
            pxsim.thread.pause(micros / 1000); // it prempts not much we can do here.
        }
        control.waitMicros = waitMicros;
        function deviceName() {
            let b = pxsim.board();
            return b && b.id
                ? b.id.slice(0, 4)
                : "abcd";
        }
        control.deviceName = deviceName;
        function _ramSize() {
            return 32 * 1024 * 1024;
        }
        control._ramSize = _ramSize;
        function deviceSerialNumber() {
            let b = pxsim.board();
            if (!b)
                return 42;
            let n = 0;
            if (b.id) {
                n = parseInt(b.id.slice(1));
                if (isNaN(n)) {
                    n = 0;
                    for (let i = 0; i < b.id.length; ++i) {
                        n = ((n << 5) - n) + b.id.charCodeAt(i);
                        n |= 0;
                    }
                    n = Math.abs(n);
                }
            }
            if (!n)
                n = 42;
            return n;
        }
        control.deviceSerialNumber = deviceSerialNumber;
        function deviceLongSerialNumber() {
            let b = control.createBuffer(8);
            pxsim.BufferMethods.setNumber(b, pxsim.BufferMethods.NumberFormat.UInt32LE, 0, deviceSerialNumber());
            return b;
        }
        control.deviceLongSerialNumber = deviceLongSerialNumber;
        function deviceDalVersion() {
            return "sim";
        }
        control.deviceDalVersion = deviceDalVersion;
        function internalOnEvent(id, evid, handler) {
            pxsim.pxtcore.registerWithDal(id, evid, handler);
        }
        control.internalOnEvent = internalOnEvent;
        function waitForEvent(id, evid) {
            const cb = pxsim.getResume();
            pxsim.board().bus.wait(id, evid, cb);
        }
        control.waitForEvent = waitForEvent;
        function allocateNotifyEvent() {
            let b = pxsim.board();
            return b.bus.nextNotifyEvent++;
        }
        control.allocateNotifyEvent = allocateNotifyEvent;
        function raiseEvent(id, evid, mode) {
            // TODO mode?
            pxsim.board().bus.queue(id, evid);
        }
        control.raiseEvent = raiseEvent;
        function millis() {
            return pxsim.runtime.runningTime();
        }
        control.millis = millis;
        function micros() {
            return pxsim.runtime.runningTimeUs() & 0x3fffffff;
        }
        control.micros = micros;
        function delayMicroseconds(us) {
            control.delay(us / 0.001);
        }
        control.delayMicroseconds = delayMicroseconds;
        function createBuffer(size) {
            return pxsim.BufferMethods.createBuffer(size);
        }
        control.createBuffer = createBuffer;
        function dmesg(msg) {
            console.log(`DMESG: ${msg}`);
        }
        control.dmesg = dmesg;
        function setDebugFlags(flags) {
            console.log(`debug flags: ${flags}`);
        }
        control.setDebugFlags = setDebugFlags;
        function heapSnapshot() {
            console.log(pxsim.runtime.traceObjects());
        }
        control.heapSnapshot = heapSnapshot;
        function toStr(v) {
            if (v instanceof pxsim.RefRecord) {
                return `${v.vtable.name}@${v.id}`;
            }
            if (v instanceof pxsim.RefCollection) {
                let r = "[";
                for (let e of v.toArray()) {
                    if (r.length > 200) {
                        r += "...";
                        break;
                    }
                    r += toStr(e) + ", ";
                }
                r += "]";
                return r;
            }
            if (typeof v == "function") {
                return (v + "").slice(0, 60) + "...";
            }
            return v + "";
        }
        function dmesgPtr(msg, ptr) {
            console.log(`DMESG: ${msg} ${toStr(ptr)}`);
        }
        control.dmesgPtr = dmesgPtr;
        function dmesgValue(ptr) {
            console.log(`DMESG: ${toStr(ptr)}`);
        }
        control.dmesgValue = dmesgValue;
        function gc() { }
        control.gc = gc;
        function profilingEnabled() {
            return !!pxsim.runtime.perfCounters;
        }
        control.profilingEnabled = profilingEnabled;
        function __log(priority, str) {
            switch (priority) {
                case 0:
                    console.debug("d>" + str);
                    break;
                case 1:
                    console.log("l>" + str);
                    break;
                case 2:
                    console.warn("w>" + str);
                    break;
                case 3:
                    console.error("e>" + str);
                    break;
            }
            pxsim.runtime.board.writeSerial(str);
        }
        control.__log = __log;
        function heapDump() {
            // TODO something better
        }
        control.heapDump = heapDump;
        function isUSBInitialized() {
            return false;
        }
        control.isUSBInitialized = isUSBInitialized;
    })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var pxtcore;
    (function (pxtcore) {
        // general purpose message sending mechanism
        function sendMessage(channel, message, parentOnly) {
            if (!channel)
                return;
            pxsim.Runtime.postMessage({
                type: "messagepacket",
                broadcast: !parentOnly,
                channel: channel,
                data: message && message.data
            });
        }
        pxtcore.sendMessage = sendMessage;
        function peekMessageChannel() {
            const state = pxsim.getControlMessageState();
            const msg = state && state.peek();
            return msg && msg.channel;
        }
        pxtcore.peekMessageChannel = peekMessageChannel;
        function readMessageData() {
            const state = pxsim.getControlMessageState();
            const msg = state && state.read();
            return msg && new pxsim.RefBuffer(msg.data);
        }
        pxtcore.readMessageData = readMessageData;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    // keep in sync with ts
    pxsim.CONTROL_MESSAGE_EVT_ID = 2999;
    pxsim.CONTROL_MESSAGE_RECEIVED = 1;
    class ControlMessageState {
        constructor(board) {
            this.board = board;
            this.messages = [];
            this.enabled = false;
            this.board.addMessageListener(msg => this.messageHandler(msg));
        }
        messageHandler(msg) {
            if (msg.type == "messagepacket") {
                let packet = msg;
                this.enqueue(packet);
            }
        }
        enqueue(message) {
            this.messages.push(message);
            this.board.bus.queue(pxsim.CONTROL_MESSAGE_EVT_ID, pxsim.CONTROL_MESSAGE_RECEIVED);
        }
        peek() {
            return this.messages[0];
        }
        read() {
            return this.messages.shift();
        }
    }
    pxsim.ControlMessageState = ControlMessageState;
    function getControlMessageState() {
        return pxsim.board().controlMessageState;
    }
    pxsim.getControlMessageState = getControlMessageState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let ThresholdState;
    (function (ThresholdState) {
        ThresholdState[ThresholdState["High"] = 0] = "High";
        ThresholdState[ThresholdState["Low"] = 1] = "Low";
        ThresholdState[ThresholdState["Normal"] = 2] = "Normal";
    })(ThresholdState || (ThresholdState = {}));
    class AnalogSensorState {
        constructor(id, min = 0, max = 255, lowThreshold = 64, highThreshold = 192) {
            this.id = id;
            this.min = min;
            this.max = max;
            this.lowThreshold = lowThreshold;
            this.highThreshold = highThreshold;
            this.sensorUsed = false;
            this.state = ThresholdState.Normal;
            this.level = Math.ceil((max - min) / 2);
        }
        setUsed() {
            if (!this.sensorUsed) {
                this.sensorUsed = true;
                pxsim.runtime.queueDisplayUpdate();
            }
        }
        setLevel(level) {
            this.level = this.clampValue(level);
            if (this.level >= this.highThreshold) {
                this.setState(ThresholdState.High);
            }
            else if (this.level <= this.lowThreshold) {
                this.setState(ThresholdState.Low);
            }
            else {
                this.setState(ThresholdState.Normal);
            }
        }
        getLevel() {
            return this.level;
        }
        setLowThreshold(value) {
            this.lowThreshold = this.clampValue(value);
            this.highThreshold = Math.max(this.lowThreshold + 1, this.highThreshold);
        }
        setHighThreshold(value) {
            this.highThreshold = this.clampValue(value);
            this.lowThreshold = Math.min(this.highThreshold - 1, this.lowThreshold);
        }
        clampValue(value) {
            if (value < this.min) {
                return this.min;
            }
            else if (value > this.max) {
                return this.max;
            }
            return value;
        }
        setState(state) {
            if (this.state === state) {
                return;
            }
            this.state = state;
            switch (state) {
                case ThresholdState.High:
                    pxsim.board().bus.queue(this.id, 2 /* SENSOR_THRESHOLD_HIGH */);
                    break;
                case ThresholdState.Low:
                    pxsim.board().bus.queue(this.id, 1 /* SENSOR_THRESHOLD_LOW */);
                    break;
                case ThresholdState.Normal:
                    break;
            }
        }
    }
    pxsim.AnalogSensorState = AnalogSensorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    class MicrophoneState extends pxsim.AnalogSensorState {
        constructor() {
            super(...arguments);
            this.onSoundRegistered = false;
            this.soundLevelRequested = false;
            this.pingSoundLevel = () => {
                if (this.onSoundRegistered) {
                    return;
                }
                this.soundLevelRequested = true;
                pxsim.runtime.queueDisplayUpdate();
                clearTimeout(this.pingUsed);
                this.pingUsed = setTimeout(() => {
                    this.soundLevelRequested = false;
                    pxsim.runtime.queueDisplayUpdate();
                    this.pingUsed = undefined;
                }, 100);
            };
        }
    }
    pxsim.MicrophoneState = MicrophoneState;
    function microphoneState() {
        return pxsim.board().microphoneState;
    }
    pxsim.microphoneState = microphoneState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    let NeoPixelMode;
    (function (NeoPixelMode) {
        NeoPixelMode[NeoPixelMode["RGB"] = 1] = "RGB";
        NeoPixelMode[NeoPixelMode["RGBW"] = 2] = "RGBW";
        NeoPixelMode[NeoPixelMode["RGB_RGB"] = 3] = "RGB_RGB";
        NeoPixelMode[NeoPixelMode["DotStar"] = 4] = "DotStar";
    })(NeoPixelMode = pxsim.NeoPixelMode || (pxsim.NeoPixelMode = {}));
    class CommonNeoPixelState {
        constructor() {
            this.mode = NeoPixelMode.RGB; // GRB
            this.width = 1;
        }
        get length() {
            return this.buffer ? (this.buffer.length / this.stride) | 0 : 0;
        }
        get stride() {
            return this.mode == NeoPixelMode.RGBW || this.mode == NeoPixelMode.DotStar ? 4 : 3;
        }
        pixelColor(pixel) {
            const offset = pixel * this.stride;
            // RBG
            switch (this.mode) {
                case NeoPixelMode.RGBW:
                    return [this.buffer[offset + 1], this.buffer[offset], this.buffer[offset + 2], this.buffer[offset + 3]];
                case NeoPixelMode.RGB_RGB:
                    return [this.buffer[offset], this.buffer[offset + 1], this.buffer[offset + 2]];
                case NeoPixelMode.DotStar:
                    return [this.buffer[offset + 3], this.buffer[offset + 2], this.buffer[offset + 1]];
                default:
                    return [this.buffer[offset + 1], this.buffer[offset + 0], this.buffer[offset + 2]];
            }
        }
    }
    pxsim.CommonNeoPixelState = CommonNeoPixelState;
    function neopixelState(pinId) {
        return pxsim.board().neopixelState(pinId);
    }
    pxsim.neopixelState = neopixelState;
    function sendBufferAsm(buffer, pin) {
        const b = pxsim.board();
        if (!b)
            return;
        const p = b.edgeConnectorState.getPin(pin);
        if (!p)
            return;
        const lp = neopixelState(p.id);
        if (!lp)
            return;
        const mode = lp.mode;
        pxsim.light.sendBuffer(p, undefined, mode, buffer);
    }
    pxsim.sendBufferAsm = sendBufferAsm;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var light;
    (function (light) {
        // Currently only modifies the builtin pixels
        function sendBuffer(pin, clk, mode, b) {
            const state = pxsim.neopixelState(pin.id);
            if (!state)
                return;
            state.mode = mode & 0xff;
            state.buffer = b.data;
            pxsim.runtime.queueDisplayUpdate();
        }
        light.sendBuffer = sendBuffer;
    })(light = pxsim.light || (pxsim.light = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var visuals;
    (function (visuals) {
        const PIXEL_SPACING = visuals.PIN_DIST * 2.5; // 3
        const PIXEL_RADIUS = visuals.PIN_DIST;
        const CANVAS_WIDTH = 1.2 * visuals.PIN_DIST;
        const CANVAS_HEIGHT = 12 * visuals.PIN_DIST;
        const CANVAS_VIEW_PADDING = visuals.PIN_DIST * 4;
        const CANVAS_LEFT = 1.4 * visuals.PIN_DIST;
        const CANVAS_TOP = visuals.PIN_DIST;
        // For the instructions parts list
        function mkNeoPixelPart(xy = [0, 0]) {
            const NP_PART_XOFF = -13.5;
            const NP_PART_YOFF = -11;
            const NP_PART_WIDTH = 87.5;
            const NP_PART_HEIGHT = 190;
            const NEOPIXEL_PART_IMG = `<svg viewBox="-5 -1 53 112" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
  <rect x="2.5" width="38" height="100" style="fill: rgb(68, 68, 68);"/>
  <rect x="11.748" y="3.2" width="1.391" height="2.553" style="fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);"/>
  <rect x="20.75" y="3.2" width="1.391" height="2.553" style="fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);"/>
  <rect x="29.75" y="3.2" width="1.391" height="2.553" style="fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);"/>
  <g>
    <rect x="9" y="16.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="22.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="28.563" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="11.607" y="14.833" width="19.787" height="18.697" style="fill: rgb(0, 0, 0);"/>
    <ellipse style="fill: rgb(216, 216, 216);" cx="21.5" cy="24.181" rx="7" ry="7"/>
  </g>
  <path d="M -7.25 -103.2 L -2.5 -100.003 L -12 -100.003 L -7.25 -103.2 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -12 -103.2 9.5 3.197 0.5 0 1@ad6f5cac"/>
  <path d="M -16.75 -103.197 L -12 -100 L -21.5 -100 L -16.75 -103.197 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -21.5 -103.197 9.5 3.197 0.5 0 1@07d73149"/>
  <path d="M -26.25 -103.2 L -21.5 -100.003 L -31 -100.003 L -26.25 -103.2 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -31 -103.2 9.5 3.197 0.5 0 1@54403e2d"/>
  <path d="M -35.75 -103.197 L -31 -100 L -40.5 -100 L -35.75 -103.197 Z" style="fill: rgb(68, 68, 68);" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -40.5 -103.197 9.5 3.197 0.5 0 1@21c9b772"/>
  <g transform="matrix(1, 0, 0, 1, 0.000002, 29.999994)">
    <rect x="9" y="16.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="22.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="28.563" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="11.607" y="14.833" width="19.787" height="18.697" style="fill: rgb(0, 0, 0);"/>
    <ellipse style="fill: rgb(216, 216, 216);" cx="21.5" cy="24.181" rx="7" ry="7"/>
  </g>
  <g transform="matrix(1, 0, 0, 1, 0.000005, 59.999992)">
    <rect x="9" y="16.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="22.562" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="9" y="28.563" width="25" height="3.238" style="fill: rgb(216, 216, 216);"/>
    <rect x="11.607" y="14.833" width="19.787" height="18.697" style="fill: rgb(0, 0, 0);"/>
    <ellipse style="fill: rgb(216, 216, 216);" cx="21.5" cy="24.181" rx="7" ry="7"/>
  </g>
</svg>`;
            let [x, y] = xy;
            let l = x + NP_PART_XOFF;
            let t = y + NP_PART_YOFF;
            let w = NP_PART_WIDTH;
            let h = NP_PART_HEIGHT;
            let img = pxsim.svg.elt("image");
            pxsim.svg.hydrate(img, {
                class: "sim-neopixel-strip", x: l, y: t, width: w, height: h,
                href: pxsim.svg.toDataUri(NEOPIXEL_PART_IMG)
            });
            return { el: img, x: l, y: t, w: w, h: h };
        }
        visuals.mkNeoPixelPart = mkNeoPixelPart;
        class NeoPixel {
            constructor(xy = [0, 0], width = 1) {
                let el = pxsim.svg.elt("rect");
                let r = PIXEL_RADIUS;
                let [cx, cy] = xy;
                let y = cy - r;
                if (width <= 1)
                    pxsim.svg.hydrate(el, { x: "-50%", y: y, width: "100%", height: r * 2, class: "sim-neopixel" });
                else {
                    let x = cx - r;
                    pxsim.svg.hydrate(el, { x: x, y: y, width: r * 2, height: r * 2, class: "sim-neopixel" });
                }
                this.el = el;
                this.cy = cy;
            }
            setRgb(rgb) {
                let hsl = visuals.rgbToHsl(rgb);
                let [h, s, l] = hsl;
                // at least 70% luminosity
                l = Math.max(l, 60);
                let fill = `hsl(${h}, ${s}%, ${l}%)`;
                this.el.setAttribute("fill", fill);
            }
        }
        visuals.NeoPixel = NeoPixel;
        class NeoPixelCanvas {
            constructor(pin, cols = 1) {
                this.cols = cols;
                this.pixels = [];
                let el = pxsim.svg.elt("svg");
                pxsim.svg.hydrate(el, {
                    "class": `sim-neopixel-canvas`,
                    "x": "0px",
                    "y": "0px",
                    "width": `${CANVAS_WIDTH}px`,
                    "height": `${CANVAS_HEIGHT}px`,
                });
                this.canvas = el;
                this.background = pxsim.svg.child(el, "rect", { class: "sim-neopixel-background hidden" });
                this.updateViewBox(-CANVAS_WIDTH / 2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            }
            updateViewBox(x, y, w, h) {
                this.viewBox = [x, y, w, h];
                pxsim.svg.hydrate(this.canvas, { "viewBox": `${x} ${y} ${w} ${h}` });
                pxsim.svg.hydrate(this.background, { "x": x, "y": y, "width": w, "height": h });
            }
            update(colors) {
                if (!colors || colors.length <= 0)
                    return;
                if (this.pixels.length == 0 && this.cols > 1) {
                    // first time, so redo width of canvas
                    let rows = Math.ceil(colors.length / this.cols);
                    let rt = CANVAS_HEIGHT / rows;
                    let width = this.cols * rt;
                    this.canvas.setAttributeNS(null, "width", `${width}px`);
                    this.updateViewBox(0, 0, width, CANVAS_HEIGHT);
                }
                for (let i = 0; i < colors.length; i++) {
                    let pixel = this.pixels[i];
                    if (!pixel) {
                        let cxy = [0, CANVAS_VIEW_PADDING + i * PIXEL_SPACING];
                        if (this.cols > 1) {
                            const row = Math.floor(i / this.cols);
                            const col = i - row * this.cols;
                            cxy = [(col + 1) * PIXEL_SPACING, (row + 1) * PIXEL_SPACING];
                        }
                        pixel = this.pixels[i] = new NeoPixel(cxy, this.cols);
                        pxsim.svg.hydrate(pixel.el, { title: `offset: ${i}` });
                        this.canvas.appendChild(pixel.el);
                    }
                    pixel.setRgb(colors[i]);
                }
                //show the canvas if it's hidden
                pxsim.U.removeClass(this.background, "hidden");
                // resize
                let [first, last] = [this.pixels[0], this.pixels[this.pixels.length - 1]];
                let yDiff = last.cy - first.cy;
                let newH = yDiff + CANVAS_VIEW_PADDING * 2;
                let [oldX, oldY, oldW, oldH] = this.viewBox;
                if (newH > oldH) {
                    let scalar = newH / oldH;
                    let newW = oldW * scalar;
                    if (this.cols > 1) {
                        // different computation for matrix
                        let rows = Math.ceil(colors.length / this.cols);
                        newH = PIXEL_SPACING * (rows + 1);
                        newW = PIXEL_SPACING * (this.cols + 1);
                        this.updateViewBox(0, oldY, newW, newH);
                    }
                    else
                        this.updateViewBox(-newW / 2, oldY, newW, newH);
                }
            }
            setLoc(xy) {
                let [x, y] = xy;
                pxsim.svg.hydrate(this.canvas, { x: x, y: y });
            }
        }
        visuals.NeoPixelCanvas = NeoPixelCanvas;
        ;
        class NeoPixelView {
            constructor(parsePinString) {
                this.parsePinString = parsePinString;
                this.style = `
            .sim-neopixel-canvas {
            }
            .sim-neopixel-canvas-parent:hover {
                transform-origin: center;
                transform: scale(4) translateY(-220px);
                -moz-transform: scale(4) translateY(-220px);
            }
            .sim-neopixel-canvas .hidden {
                visibility:hidden;
            }
            .sim-neopixel-background {
                fill: rgba(255,255,255,0.9);
            }
            .sim-neopixel-strip {
            }
        `;
            }
            init(bus, state, svgEl, otherParams) {
                this.stripGroup = pxsim.svg.elt("g");
                this.element = this.stripGroup;
                this.pin = this.parsePinString(otherParams["dataPin"] || otherParams["pin"])
                    || this.parsePinString("pins.NEOPIXEL")
                    || this.parsePinString("pins.MOSI");
                this.lastLocation = [0, 0];
                this.state = state(this.pin);
                let part = mkNeoPixelPart();
                this.part = part;
                this.stripGroup.appendChild(part.el);
                this.overElement = null;
                this.makeCanvas();
            }
            makeCanvas() {
                let canvas = new NeoPixelCanvas(this.pin.id, this.state.width);
                if (this.overElement) {
                    this.overElement.removeChild(this.canvas.canvas);
                    this.overElement.appendChild(canvas.canvas);
                }
                else {
                    let canvasG = pxsim.svg.elt("g", { class: "sim-neopixel-canvas-parent" });
                    canvasG.appendChild(canvas.canvas);
                    this.overElement = canvasG;
                }
                this.canvas = canvas;
                this.updateStripLoc();
            }
            moveToCoord(xy) {
                let [x, y] = xy;
                let loc = [x, y];
                this.lastLocation = loc;
                this.updateStripLoc();
            }
            updateStripLoc() {
                let [x, y] = this.lastLocation;
                pxsim.U.assert(typeof x === "number" && typeof y === "number", "invalid x,y for NeoPixel strip");
                this.canvas.setLoc([x + CANVAS_LEFT, y + CANVAS_TOP]);
                pxsim.svg.hydrate(this.part.el, { transform: `translate(${x} ${y})` }); //TODO: update part's l,h, etc.
            }
            updateState() {
                if (this.state.width != this.canvas.cols) {
                    this.makeCanvas();
                }
                let colors = [];
                for (let i = 0; i < this.state.length; i++) {
                    colors.push(this.state.pixelColor(i));
                }
                this.canvas.update(colors);
            }
            updateTheme() { }
        }
        visuals.NeoPixelView = NeoPixelView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var radio;
    (function (radio) {
        function raiseEvent(id, eventid) {
            const state = pxsim.getRadioState();
            state.raiseEvent(id, eventid);
        }
        radio.raiseEvent = raiseEvent;
        function setGroup(id) {
            const state = pxsim.getRadioState();
            state.setGroup(id);
        }
        radio.setGroup = setGroup;
        function setTransmitPower(power) {
            const state = pxsim.getRadioState();
            state.setTransmitPower(power);
        }
        radio.setTransmitPower = setTransmitPower;
        function setFrequencyBand(band) {
            const state = pxsim.getRadioState();
            state.setFrequencyBand(band);
        }
        radio.setFrequencyBand = setFrequencyBand;
        function sendRawPacket(buf) {
            let cb = pxsim.getResume();
            const state = pxsim.getRadioState();
            if (state.enable) {
                state.datagram.send({
                    type: 0,
                    groupId: state.groupId,
                    bufferData: buf.data
                });
            }
            setTimeout(cb, 1);
        }
        radio.sendRawPacket = sendRawPacket;
        function readRawPacket() {
            const state = pxsim.getRadioState();
            const packet = state.datagram.recv();
            const buf = packet.payload.bufferData;
            const n = buf.length;
            if (!n)
                return undefined;
            const rbuf = pxsim.BufferMethods.createBuffer(n + 4);
            for (let i = 0; i < buf.length; ++i)
                rbuf.data[i] = buf[i];
            // append RSSI
            pxsim.BufferMethods.setNumber(rbuf, pxsim.BufferMethods.NumberFormat.Int32LE, n, packet.rssi);
            return rbuf;
        }
        radio.readRawPacket = readRawPacket;
        function onDataReceived(handler) {
            const state = pxsim.getRadioState();
            state.datagram.onReceived(handler);
        }
        radio.onDataReceived = onDataReceived;
        function off() {
            const state = pxsim.getRadioState();
            state.off();
        }
        radio.off = off;
        function on() {
            const state = pxsim.getRadioState();
            state.on();
        }
        radio.on = on;
    })(radio = pxsim.radio || (pxsim.radio = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function getRadioState() {
        return pxsim.board().radioState;
    }
    pxsim.getRadioState = getRadioState;
    class RadioDatagram {
        constructor(runtime, dal) {
            this.runtime = runtime;
            this.dal = dal;
            this.datagram = [];
            this.lastReceived = RadioDatagram.defaultPacket();
            this._rssi = undefined; // not set yet
        }
        get rssi() {
            return this._rssi;
        }
        set rssi(value) {
            this._rssi = value | 0;
        }
        queue(packet) {
            if (this.datagram.length < 4)
                this.datagram.push(packet);
            pxsim.runtime.board.bus.queue(this.dal.ID_RADIO, this.dal.RADIO_EVT_DATAGRAM);
        }
        send(payload) {
            const state = getRadioState();
            pxsim.Runtime.postMessage({
                type: "radiopacket",
                broadcast: true,
                rssi: this._rssi || -75,
                serial: state.transmitSerialNumber ? pxsim.control.deviceSerialNumber() : 0,
                time: new Date().getTime(),
                payload
            });
        }
        recv() {
            let r = this.datagram.shift();
            if (!r)
                r = RadioDatagram.defaultPacket();
            return this.lastReceived = r;
        }
        onReceived(handler) {
            pxsim.pxtcore.registerWithDal(this.dal.ID_RADIO, this.dal.RADIO_EVT_DATAGRAM, handler);
            this.recv();
        }
        static defaultPacket() {
            return {
                rssi: -1,
                serial: 0,
                time: 0,
                payload: { type: -1, groupId: 0, bufferData: new Uint8Array(0) }
            };
        }
    }
    pxsim.RadioDatagram = RadioDatagram;
    class RadioState {
        constructor(runtime, board, dal) {
            this.runtime = runtime;
            this.board = board;
            this.power = 0;
            this.transmitSerialNumber = false;
            this.datagram = new RadioDatagram(runtime, dal);
            this.power = 6; // default value
            this.groupId = 0;
            this.band = 7; // https://github.com/lancaster-university/microbit-dal/blob/master/inc/core/MicroBitConfig.h#L320
            this.enable = true;
            this.board.addMessageListener(this.handleMessage.bind(this));
        }
        handleMessage(msg) {
            if (msg.type == "radiopacket") {
                let packet = msg;
                this.receivePacket(packet);
            }
        }
        setGroup(id) {
            if (this.enable) {
                this.groupId = id & 0xff; // byte only
            }
        }
        setTransmitPower(power) {
            if (this.enable) {
                power = power | 0;
                this.power = Math.max(0, Math.min(7, power));
            }
        }
        setTransmitSerialNumber(sn) {
            this.transmitSerialNumber = !!sn;
        }
        setFrequencyBand(band) {
            if (this.enable) {
                band = band | 0;
                if (band < 0 || band > 83)
                    return;
                this.band = band;
            }
        }
        off() {
            this.enable = false;
        }
        on() {
            this.enable = true;
        }
        raiseEvent(id, eventid) {
            if (this.enable) {
                pxsim.Runtime.postMessage({
                    type: "eventbus",
                    broadcast: true,
                    id,
                    eventid,
                    power: this.power,
                    group: this.groupId
                });
            }
        }
        receivePacket(packet) {
            if (this.enable) {
                if (this.groupId == packet.payload.groupId) {
                    this.datagram.queue(packet);
                }
            }
        }
    }
    pxsim.RadioState = RadioState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var settings;
    (function (settings) {
        let currSize = 0;
        const MAX_SIZE = 16 * 1024;
        function encodeKey(key) {
            return "S/" + key;
        }
        function allKeys() {
            const pref = encodeKey("");
            const st = pxsim.board().storedState;
            return Object.keys(st).filter(k => k.slice(0, pref.length) == pref);
        }
        function userKeys() {
            return allKeys().filter(s => s[2] != "#");
        }
        function computeSize() {
            let sz = 0;
            const storage = pxsim.board().storedState;
            for (let k of allKeys()) {
                sz += k.length + storage[k].length;
            }
            currSize = sz;
        }
        function _set(key, buf) {
            key = encodeKey(key);
            const storage = pxsim.board().storedState;
            const prev = storage[key];
            const val = btoa(pxsim.U.uint8ArrayToString(buf.data));
            const newSize = prev == null
                ? currSize + key.length + val.length
                : currSize + val.length - prev.length;
            if (newSize > MAX_SIZE)
                return -1;
            pxsim.board().setStoredState(key, val);
            currSize = newSize;
            return 0;
        }
        settings._set = _set;
        function _remove(key) {
            key = encodeKey(key);
            const storage = pxsim.board().storedState;
            if (storage[key] == null)
                return -1;
            currSize -= key.length + storage[key].length;
            pxsim.board().setStoredState(key, null);
            return 0;
        }
        settings._remove = _remove;
        function _exists(key) {
            return _get(key) != undefined;
        }
        settings._exists = _exists;
        function _get(key) {
            key = encodeKey(key);
            const storage = pxsim.board().storedState;
            const val = storage[key];
            if (val == null)
                return undefined;
            return new pxsim.RefBuffer(pxsim.U.stringToUint8Array(atob(val)));
        }
        settings._get = _get;
        function _userClean() {
            for (let k of userKeys())
                pxsim.board().setStoredState(k, null);
            computeSize();
            // if system keys take more than 25% of space, delete everything
            if (currSize > MAX_SIZE / 4) {
                for (let k of allKeys())
                    pxsim.board().setStoredState(k, null);
                computeSize();
            }
        }
        settings._userClean = _userClean;
        function _list(prefix) {
            const r = new pxsim.RefCollection();
            const emptyPref = encodeKey("");
            for (let k of prefix[0] == "#" ? allKeys() : userKeys()) {
                const n = k.slice(emptyPref.length);
                if (n.slice(0, prefix.length) != prefix)
                    continue;
                r.push(n);
            }
            return r;
        }
        settings._list = _list;
    })(settings = pxsim.settings || (pxsim.settings = {}));
})(pxsim || (pxsim = {}));
