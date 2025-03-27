var pxtTargetBundle = {
    "id": "microbit",
    "nickname": "microbit",
    "name": "makecode.microbit.org",
    "title": "Microsoft MakeCode for micro:bit",
    "description": "A Blocks / JavaScript code editor for the micro:bit powered by Microsoft MakeCode.",
    "corepkg": "core",
    "cloud": {
        "workspace": false,
        "packages": true,
        "sharing": true,
        "thumbnails": true,
        "publishing": true,
        "importing": true,
        "showBadges": false,
        "preferredPackages": [
            "Microsoft/pxt-neopixel"
        ],
        "githubPackages": true,
        "cloudProviders": {
            "github": {
                "id": "github",
                "name": "GitHub",
                "icon": "docs/static/providers/github-mark.png",
                "identity": false,
                "order": 3
            },
            "microsoft": {
                "id": "microsoft",
                "name": "Microsoft",
                "icon": "docs/static/providers/microsoft-logo.svg",
                "identity": true,
                "redirect": true,
                "order": 1
            },
            "google": {
                "id": "google",
                "name": "Google",
                "icon": "docs/static/providers/google-logo.svg",
                "identity": true,
                "redirect": true,
                "order": 2
            },
            "clever": {
                "id": "clever",
                "name": "Clever",
                "icon": "docs/static/providers/clever-logo.png",
                "identity": true,
                "redirect": true,
                "order": 3
            }
        }
    },
    "compile": {
        "isNative": false,
        "hasHex": true,
        "deployDrives": "(MICROBIT|MBED)",
        "driveName": "MICROBIT",
        "hexMimeType": "application/x-microbit-hex",
        "openocdScript": "source [find interface/cmsis-dap.cfg]; source [find target/nrf51.cfg]",
        "flashUsableEnd": 242688,
        "flashEnd": 242688,
        "flashCodeAlign": 1024,
        "floatingPoint": true,
        "taggedInts": true,
        "utf8": false,
        "gc": true,
        "imageRefTag": 9,
        "shimRenames": {
            "sendBufferAsm": "light::sendWS2812Buffer"
        },
        "patches": {
            "0.0.0 - 1.0.0": [
                {
                    "type": "package",
                    "map": {
                        "microbit": "core",
                        "microbit-bluetooth": "bluetooth",
                        "microbit-radio": "radio",
                        "microbit-devices": "devices",
                        "microbit-led": "",
                        "microbit-music": "",
                        "microbit-game": "",
                        "microbit-pins": "",
                        "microbit-serial": ""
                    }
                },
                {
                    "type": "missingPackage",
                    "map": {
                        "radio\\s*\\.": "radio",
                        "bluetooth\\s*\\.": "bluetooth",
                        "devices\\s*\\.": "devices"
                    }
                },
                {
                    "type": "api",
                    "map": {
                        "bluetooth\\s*\\.\\s*uartRead\\s*\\((.*?)\\)": "bluetooth.uartReadUntil($1)",
                        "bluetooth\\s*\\.\\s*uartWrite\\s*\\((.*?)\\)": "bluetooth.uartWriteUntil($1)",
                        "input\\s*\\.\\s*calibrate\\s*\\(": "input.calibrateCompass(",
                        "radio\\s*\\.\\s*onDataPacketReceived\\(\\s*\\(\\{\\s*receivedNumber\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedNumber(function (receivedNumber) {",
                        "radio\\s*\\.\\s*onDataPacketReceived\\(\\s*\\(\\{\\s*receivedString: name, receivedNumber: value\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedValue(function (name, value) {",
                        "radio\\s*\\.\\s*onDataPacketReceived\\(\\s*\\(\\{\\s*receivedString\\s*\\}\\)\\s*=>\\s*\\{": "radio.onReceivedString(function (receivedString) {",
                        "Math\\s*\\.\\s*random\\s*\\(": "Math.randomRange(0, "
                    }
                },
                {
                    "type": "blockId",
                    "map": {
                        "device_get_acceleration": "device_acceleration"
                    }
                },
                {
                    "type": "blockValue",
                    "map": {
                        "device_print_message.message": "text"
                    }
                }
            ],
            "0.0.0 - 1.4.12": [
                {
                    "type": "api",
                    "map": {
                        "DisplayMode\\s*\\.\\s*BackAndWhite": "DisplayMode.BlackAndWhite"
                    }
                }
            ],
            "0.0.0 - 3.1.10": [
                {
                    "type": "package",
                    "map": {
                        "pxt-microbit-v2-extension": "microphone"
                    }
                }
            ],
            "0.0.0 - 3.0.18": [
                {
                    "type": "missingPackage",
                    "map": {
                        ".*": "microphone"
                    }
                }
            ]
        },
        "hidSelectors": [
            {
                "usagePage": "0xFF00",
                "usageId": "0x0001",
                "vid": "0x0d28",
                "pid": "0x0204"
            }
        ],
        "webUSB": true,
        "useNewFunctions": true,
        "nativeType": "thumb",
        "switches": {},
        "jsRefCounting": false,
        "noSourceInFlash": true
    },
    "compileService": {
        "yottaTarget": "bbc-microbit-classic-gcc@https://github.com/lancaster-university/yotta-target-bbc-microbit-classic-gcc",
        "yottaCorePackage": "microbit",
        "githubCorePackage": "lancaster-university/microbit",
        "gittag": "v2.2.0-rc6",
        "serviceId": "microbit",
        "dockerImage": "pext/yotta:gcc5",
        "yottaBinary": "pxt-microbit-app-combined.hex"
    },
    "multiVariants": [
        "mbdal",
        "mbcodal"
    ],
    "alwaysMultiVariant": true,
    "variants": {
        "mbdal": {
            "compile": {},
            "compileService": {}
        },
        "mbcodal": {
            "compile": {
                "flashCodeAlign": 4096,
                "flashUsableEnd": 471040,
                "flashEnd": 524288
            },
            "compileService": {
                "buildEngine": "codal",
                "codalTarget": {
                    "name": "codal-microbit-v2",
                    "url": "https://github.com/lancaster-university/codal-microbit-v2",
                    "branch": "v0.2.69",
                    "type": "git"
                },
                "codalBinary": "MICROBIT",
                "githubCorePackage": "lancaster-university/microbit-v2-samples",
                "gittag": "v0.2.13",
                "serviceId": "mbcodal2",
                "dockerImage": "pext/yotta:latest",
                "yottaConfigCompatibility": true
            }
        }
    },
    "runtime": {
        "mathBlocks": true,
        "loopsBlocks": true,
        "logicBlocks": true,
        "variablesBlocks": true,
        "textBlocks": true,
        "listsBlocks": true,
        "functionBlocks": true,
        "breakBlock": true,
        "continueBlock": true,
        "functionsOptions": {
            "useNewFunctions": true,
            "extraFunctionEditorTypes": [
                {
                    "typeName": "game.LedSprite",
                    "label": "LedSprite",
                    "icon": "send",
                    "defaultName": "sprite"
                },
                {
                    "typeName": "Image",
                    "label": "Image",
                    "icon": "image outline",
                    "defaultName": "image"
                }
            ]
        },
        "onStartColor": "#1E90FF",
        "onStartNamespace": "basic",
        "onStartWeight": 54
    },
    "simulator": {
        "autoRun": true,
        "streams": false,
        "aspectRatio": 1.22,
        "parts": true,
        "partsAspectRatio": 0.69,
        "messageSimulators": {
            "jacdac": {
                "url": "https://microsoft.github.io/jacdac-docs/tools/makecode-sim?webusb=0&parentOrigin=$PARENT_ORIGIN$",
                "localHostUrl": "http://localhost:8000/tools/makecode-sim?webusb=0&parentOrigin=$PARENT_ORIGIN$",
                "aspectRatio": 1.22,
                "permanent": true
            },
            "robot": {
                "url": "https://microsoft.github.io/microbit-robot/?parentOrigin=$PARENT_ORIGIN$",
                "localHostUrl": "http://localhost:3000/microbit-robot/?parentOrigin=$PARENT_ORIGIN$",
                "aspectRatio": 1.22,
                "permanent": true
            }
        },
        "testSimulatorExtensions": {},
        "boardDefinition": {
            "visual": "microbit",
            "gpioPinBlocks": [
                [
                    "P0"
                ],
                [
                    "P1"
                ],
                [
                    "P2"
                ],
                [
                    "P3"
                ],
                [
                    "P4",
                    "P5",
                    "P6",
                    "P7"
                ],
                [
                    "P8",
                    "P9",
                    "P10",
                    "P11",
                    "P12"
                ],
                [
                    "P16"
                ]
            ],
            "gpioPinMap": {
                "P0": "P0",
                "P1": "P1",
                "P2": "P2",
                "P3": "P3",
                "P4": "P4",
                "P5": "P5",
                "P6": "P6",
                "P7": "P7",
                "P8": "P8",
                "P9": "P9",
                "P10": "P10",
                "P11": "P11",
                "P12": "P12",
                "P13": "P13",
                "P14": "P14",
                "P15": "P15",
                "P16": "P16",
                "P19": "P19",
                "P20": "P20"
            },
            "spiPins": {
                "MOSI": "P15",
                "MISO": "P14",
                "SCK": "P13"
            },
            "i2cPins": {
                "SDA": "P20",
                "SCL": "P19"
            },
            "analogInPins": [
                "P0",
                "P1",
                "P2",
                "P3",
                "P10"
            ],
            "groundPins": [
                "GND"
            ],
            "threeVoltPins": [
                "+3v3"
            ],
            "attachPowerOnRight": true,
            "onboardComponents": [
                "accelerometer",
                "buttonpair",
                "ledmatrix",
                "speaker",
                "bluetooth",
                "thermometer",
                "compass",
                "builtinspeaker",
                "microphone",
                "logotouch",
                "flashlog",
                "v2"
            ],
            "pinStyles": {
                "P0": "croc",
                "P1": "croc",
                "P2": "croc",
                "GND": "croc",
                "+3v3": "croc"
            },
            "marginWhenBreadboarding": [
                0,
                0,
                80,
                0
            ]
        }
    },
    "serial": {
        "nameFilter": "^(mbed Serial Port|DAPLink CMSIS-DAP)",
        "log": true,
        "useEditor": true,
        "editorTheme": {
            "graphBackground": "#d9d9d9",
            "lineColors": [
                "#6633cc",
                "#2C7485",
                "#3454D1",
                "#EF767A",
                "#F46197",
                "#107C10"
            ]
        },
        "vendorId": "0x0d28",
        "productId": "0x0204",
        "rawHID": true
    },
    "queryVariants": {
        "hidemenu": {
            "appTheme": {
                "hideMenuBar": true
            }
        },
        "androidapp": {
            "compile": {
                "webUSB": false
            },
            "appTheme": {
                "disableBlobObjectDownload": true
            }
        },
        "skillsMap=1": {
            "appTheme": {
                "hideReplaceMyCode": false
            }
        },
        "teachertool=1": {
            "appTheme": {
                "hideMenuBar": true,
                "workspaceSearch": true,
                "noReloadOnUpdate": true
            }
        }
    },
    "uploadDocs": true,
    "versions": {
        "branch": "main",
        "commits": "https://github.com/liudonghua123/pxt-microbit-app/commits/5bc6af62b4963d37df616ba4f825a84e5575a187",
        "target": "7.1.24",
        "pxt": "11.4.4"
    },
    "blocksprj": {
        "id": "blocksprj",
        "config": {
            "name": "{0} block",
            "dependencies": {
                "core": "*",
                "radio": "*",
                "microphone": "*"
            },
            "description": "",
            "files": [
                "main.blocks",
                "main.ts",
                "README.md"
            ],
            "additionalFilePaths": []
        },
        "files": {
            "README.md": "",
            "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <block type=\"pxt-on-start\"></block>\n  <block type=\"device_forever\"></block>\n</xml>",
            "main.ts": "\n"
        }
    },
    "tsprj": {
        "id": "tsprj",
        "config": {
            "name": "{0} bit",
            "dependencies": {
                "core": "*",
                "radio": "*",
                "microphone": "*"
            },
            "description": "",
            "files": [
                "main.ts",
                "README.md"
            ],
            "additionalFilePaths": []
        },
        "files": {
            "README.md": "",
            "main.ts": "basic.showLeds(`\n    . . . . .\n    . # . # .\n    . . . . .\n    # . . . #\n    . # # # .\n    `);"
        }
    },
    "colorThemeMap": {
        "pxt-high-contrast": {
            "id": "pxt-high-contrast",
            "name": "High Contrast",
            "weight": 100,
            "monacoBaseTheme": "hc-black",
            "colors": {
                "pxt-header-background": "#000000",
                "pxt-header-foreground": "#FFFFFF",
                "pxt-header-background-hover": "#000000",
                "pxt-header-foreground-hover": "#FFFFFF",
                "pxt-header-stencil": "#FFFFFF",
                "pxt-primary-background": "#000000",
                "pxt-primary-foreground": "#FFFFFF",
                "pxt-primary-background-hover": "#000000",
                "pxt-primary-foreground-hover": "#FFFFFF",
                "pxt-primary-accent": "#000000",
                "pxt-secondary-background": "#000000",
                "pxt-secondary-foreground": "#FFFFFF",
                "pxt-secondary-background-hover": "#000000",
                "pxt-secondary-foreground-hover": "#FFFFFF",
                "pxt-secondary-accent": "#000000",
                "pxt-tertiary-background": "#000000",
                "pxt-tertiary-foreground": "#FFFFFF",
                "pxt-tertiary-background-hover": "#000000",
                "pxt-tertiary-foreground-hover": "#FFFFFF",
                "pxt-tertiary-accent": "#000000",
                "pxt-target-background1": "#000000",
                "pxt-target-foreground1": "#FFFFFF",
                "pxt-target-background1-hover": "#000000",
                "pxt-target-foreground1-hover": "#cccccc",
                "pxt-target-stencil1": "#FFFFFF",
                "pxt-target-background2": "#000000",
                "pxt-target-foreground2": "#FFFFFF",
                "pxt-target-background2-hover": "#000000",
                "pxt-target-foreground2-hover": "#cccccc",
                "pxt-target-stencil2": "#FFFFFF",
                "pxt-target-background3": "#000000",
                "pxt-target-foreground3": "#FFFFFF",
                "pxt-target-background3-hover": "#000000",
                "pxt-target-foreground3-hover": "#cccccc",
                "pxt-target-stencil3": "#FFFFFF",
                "pxt-neutral-background1": "#000000",
                "pxt-neutral-foreground1": "#FFFFFF",
                "pxt-neutral-background1-hover": "#000000",
                "pxt-neutral-foreground1-hover": "#FFFFFF",
                "pxt-neutral-stencil1": "#FFFFFF",
                "pxt-neutral-background2": "#000000",
                "pxt-neutral-foreground2": "#FFFFFF",
                "pxt-neutral-background2-hover": "#000000",
                "pxt-neutral-foreground2-hover": "#FFFFFF",
                "pxt-neutral-stencil2": "#FFFFFF",
                "pxt-neutral-background3": "#000000",
                "pxt-neutral-foreground3": "#FFFFFF",
                "pxt-neutral-background3-hover": "#000000",
                "pxt-neutral-foreground3-hover": "#FFFFFF",
                "pxt-neutral-stencil3": "#FFFFFF",
                "pxt-neutral-background3-alpha90": "#000000E5",
                "pxt-neutral-base": "rgba(255, 255, 255, 1)",
                "pxt-neutral-alpha0": "rgba(255, 255, 255, 0)",
                "pxt-neutral-alpha10": "rgba(255, 255, 255, 0.1)",
                "pxt-neutral-alpha20": "rgba(255, 255, 255, 0.2)",
                "pxt-neutral-alpha50": "rgba(255, 255, 255, 0.5)",
                "pxt-neutral-alpha80": "rgba(255, 255, 255, 0.8)",
                "pxt-link": "#807FFF",
                "pxt-link-hover": "#1b19ff",
                "pxt-focus-border": "#FFFF00",
                "pxt-colors-purple-background": "#FF00FF",
                "pxt-colors-purple-foreground": "#000000",
                "pxt-colors-purple-hover": "#FF00FF",
                "pxt-colors-purple-alpha10": "#FF00FF19",
                "pxt-colors-orange-background": "#FF7F00",
                "pxt-colors-orange-foreground": "#000000",
                "pxt-colors-orange-hover": "#FF7F00",
                "pxt-colors-orange-alpha10": "#FF7F0019",
                "pxt-colors-brown-background": "#d1b7a3",
                "pxt-colors-brown-foreground": "#FFFFFF",
                "pxt-colors-brown-hover": "#d1b7a3",
                "pxt-colors-brown-alpha10": "#d1b7a319",
                "pxt-colors-blue-background": "#8C8CFF",
                "pxt-colors-blue-foreground": "#000000",
                "pxt-colors-blue-hover": "#8C8CFF",
                "pxt-colors-blue-alpha10": "#8C8CFF19",
                "pxt-colors-green-background": "#00FF00",
                "pxt-colors-green-foreground": "#000000",
                "pxt-colors-green-hover": "#00FF00",
                "pxt-colors-green-alpha10": "#00FF0019",
                "pxt-colors-red-background": "#880000",
                "pxt-colors-red-foreground": "#FFFFFF",
                "pxt-colors-red-hover": "#880000",
                "pxt-colors-red-alpha10": "#88000019",
                "pxt-colors-teal-background": "#5BE0FF",
                "pxt-colors-teal-foreground": "#000000",
                "pxt-colors-teal-hover": "#5BE0FF",
                "pxt-colors-teal-alpha10": "#5BE0FF19",
                "pxt-colors-yellow-background": "#00FFFF",
                "pxt-colors-yellow-foreground": "#000000",
                "pxt-colors-yellow-hover": "#00FFFF",
                "pxt-colors-yellow-alpha10": "#00FFFF19"
            },
            "overrideCss": ".common-button {\n    color: var(--pxt-neutral-foreground2) !important;\n    background-color: var(--pxt-neutral-background2) !important;\n    border-color: var(--pxt-neutral-foreground2) !important;\n}\n\n.common-button:hover, .common-button:focus {\n    outline: 2px solid var(--pxt-colors-yellow-background) !important;\n    z-index: 1;\n}\n\n/* \n * Inverted image colors\n */\n.barcharticon,\n.blockly-ws-search-next-btn,\n.blockly-ws-search-previous-btn,\n.blockly-ws-search-close-btn {\n    filter: invert(1);\n}\n\n/* Sim toolbar */\n#simulator .editor-sidebar .simtoolbar .debug-button.active,\n#simulator .editor-sidebar .simtoolbar .debug-button.active:hover,\n#simulator .editor-sidebar .simtoolbar .debug-button.active:hover i {\n    /* Make active state more apparent by inverting the colors */\n    background: var(--pxt-neutral-foreground2) !important;\n    color: var(--pxt-neutral-background2) !important;\n}\n\n/* Image Editor */\n.image-editor-topbar, .image-editor-bottombar, .image-editor-sidebar {\n    background: var(--pxt-neutral-background1) !important;\n}\n.image-editor-tool-buttons {\n    background: none !important;\n}\n.image-editor-button,\n.image-editor-input,\n.image-editor-confirm {\n    border: 1px solid var(--pxt-neutral-foreground1);\n}\n.image-editor-canvas, .image-editor-canvas:hover, .image-editor-canvas:focus {\n    outline: none !important;\n}\n.cursor-button {\n    /* remove margin since we now have a border around the cursor buttons and it looks better centered */\n    margin-right: 0;\n}\n\n/* Toolbox */\n.pxtToolbox:not(.invertedToolbox) span.blocklyTreeLabel {\n    color: var(--pxt-target-foreground3);\n}\n\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeSelected span.blocklyTreeLabel,\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeSelected span.blocklyTreeIcon {\n    color: var(--pxt-target-foreground3);\n}\n\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeRow:not(.blocklyTreeSelected) .blocklyTreeLabel {\n    color: var(--pxt-target-foreground3) !important;\n}\n\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeRow:not(.blocklyTreeSelected):hover,\n.pxtToolbox:not(.invertedToolbox) .blocklyTreeRow:not(.blocklyTreeSelected):focus {\n    background-color: #404040 !important;\n}\n"
        },
        "microbit-light": {
            "id": "microbit-light",
            "name": "Micro:bit Light",
            "weight": 20,
            "colors": {
                "pxt-header-background": "#3454D1",
                "pxt-header-foreground": "#FFFFFF",
                "pxt-header-background-hover": "#1d3282",
                "pxt-header-foreground-hover": "#FFFFFF",
                "pxt-header-stencil": "#2742ab",
                "pxt-primary-background": "#6633cc",
                "pxt-primary-foreground": "#FFFFFF",
                "pxt-primary-background-hover": "#5C2EB8",
                "pxt-primary-foreground-hover": "#FFFFFF",
                "pxt-primary-accent": "#5229A3",
                "pxt-secondary-background": "#3454D1",
                "pxt-secondary-foreground": "#FFFFFF",
                "pxt-secondary-background-hover": "#2742ab",
                "pxt-secondary-foreground-hover": "#FFFFFF",
                "pxt-secondary-accent": "#516DD8",
                "pxt-tertiary-background": "#3454D1",
                "pxt-tertiary-foreground": "#FFFFFF",
                "pxt-tertiary-background-hover": "#2742ab",
                "pxt-tertiary-foreground-hover": "#FFFFFF",
                "pxt-tertiary-accent": "#1d3282",
                "pxt-target-background1": "#ECF0F1",
                "pxt-target-foreground1": "#000000",
                "pxt-target-background1-hover": "#cfd9db",
                "pxt-target-foreground1-hover": "#000000",
                "pxt-target-stencil1": "#e1e1e1",
                "pxt-target-background2": "#FDFDFF",
                "pxt-target-foreground2": "#000000",
                "pxt-target-background2-hover": "#cacaff",
                "pxt-target-foreground2-hover": "#000000",
                "pxt-target-stencil2": "#e1e1e1",
                "pxt-target-background3": "#FFFFFF",
                "pxt-target-foreground3": "#000000",
                "pxt-target-background3-hover": "#e6e6e6",
                "pxt-target-foreground3-hover": "#000000",
                "pxt-target-stencil3": "#e1e1e1",
                "pxt-neutral-background1": "#FFFFFF",
                "pxt-neutral-foreground1": "rgba(0,0,0,.85)",
                "pxt-neutral-background1-hover": "#e6e6e6",
                "pxt-neutral-foreground1-hover": "rgba(0,0,0,.85)",
                "pxt-neutral-stencil1": "rgba(34, 74, 114, 0.15)",
                "pxt-neutral-background2": "#F8F8F8",
                "pxt-neutral-foreground2": "rgba(0,0,0,.85)",
                "pxt-neutral-background2-hover": "#DFDFDF",
                "pxt-neutral-foreground2-hover": "rgba(0,0,0,.85)",
                "pxt-neutral-stencil2": "#e9eef2",
                "pxt-neutral-background3": "#617374",
                "pxt-neutral-foreground3": "#FFFFFF",
                "pxt-neutral-background3-hover": "#363c3d",
                "pxt-neutral-foreground3-hover": "#FFFFFF",
                "pxt-neutral-stencil3": "#FFFFFF",
                "pxt-neutral-background3-alpha90": "#617374E5",
                "pxt-neutral-base": "rgba(0, 0, 0, 1)",
                "pxt-neutral-alpha0": "rgba(0, 0, 0, 0)",
                "pxt-neutral-alpha10": "rgba(0, 0, 0, 0.1)",
                "pxt-neutral-alpha20": "rgba(0, 0, 0, 0.2)",
                "pxt-neutral-alpha50": "rgba(0, 0, 0, 0.5)",
                "pxt-link": "#3977B4",
                "pxt-link-hover": "#204467",
                "pxt-focus-border": "#0078D4",
                "pxt-colors-purple-background": "#9932cc",
                "pxt-colors-purple-foreground": "#FFFFFF",
                "pxt-colors-purple-hover": "#7a28a3",
                "pxt-colors-purple-alpha10": "#9932cc19",
                "pxt-colors-orange-background": "#ff7f50",
                "pxt-colors-orange-foreground": "#FFFFFF",
                "pxt-colors-orange-hover": "#ff5a1d",
                "pxt-colors-orange-alpha10": "#ff7f5019",
                "pxt-colors-brown-background": "#663905",
                "pxt-colors-brown-foreground": "#FFFFFF",
                "pxt-colors-brown-hover": "#351e03",
                "pxt-colors-brown-alpha10": "#66390519",
                "pxt-colors-blue-background": "#3454D1",
                "pxt-colors-blue-foreground": "#FFFFFF",
                "pxt-colors-blue-hover": "#2742ab",
                "pxt-colors-blue-alpha10": "#3454D119",
                "pxt-colors-green-background": "#107c10",
                "pxt-colors-green-foreground": "#FFFFFF",
                "pxt-colors-green-hover": "#096a09",
                "pxt-colors-green-alpha10": "#107c1019",
                "pxt-colors-red-background": "#E41B21",
                "pxt-colors-red-foreground": "#FFFFFF",
                "pxt-colors-red-hover": "#d60f15",
                "pxt-colors-red-alpha10": "#e41b2119",
                "pxt-colors-teal-background": "#2C7485",
                "pxt-colors-teal-foreground": "#FFFFFF",
                "pxt-colors-teal-hover": "#1f535f",
                "pxt-colors-teal-alpha10": "#2C748519",
                "pxt-colors-yellow-background": "#FDE74C",
                "pxt-colors-yellow-foreground": "#000000",
                "pxt-colors-yellow-hover": "#fce01a",
                "pxt-colors-yellow-alpha10": "#FDE74C19"
            },
            "overrideCss": "/* Lots of specificity to override another !important rule */\n#simulator #editorSidebar .simtoolbar .ui.icon.tiny.buttons .ui.button.play-button.play .icon.play {\n    color: var(--pxt-colors-green-background) !important;\n}\n\n.theme-preview-microbit-light .theme-preview-sim-button {\n    background-color: var(--pxt-neutral-background2) !important;\n}\n"
        }
    }
}