let blocksJSON = [{
    "type": "delay",
    "message0": "Задержка %1 Время %2",
    "args0": [{
        "type": "input_dummy"
    },
        {
            "type": "input_value",
            "name": "time",
            "check": "Number",
            "align": "RIGHT"
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "Позволяет задать задержку между двумя событиями.",
    "helpUrl": ""
},
    {
        "type": "start",
        "message0": "Начало",
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Начальный блок всего кода",
        "helpUrl": ""
    },
    {
        "type": "end",
        "message0": "Конец",
        "previousStatement": null,
        "colour": 65,
        "tooltip": "Конечный блок кода. После него код сразу начнет повторятся.",
        "helpUrl": ""
    },
    {
        "type": "loop_for",
        "message0": "повторить %1 раз %2 %3",
        "args0": [{
            "type": "input_value",
            "name": "forCount",
            "check": "Number"
        },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "blocks"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "Повторить код указанное количество раз.",
        "helpUrl": ""
    },
    {
        "type": "loop_while",
        "message0": "повторять %1 %2 %3",
        "args0": [{
            "type": "field_dropdown",
            "name": "loopType",
            "options": [
                [
                    "пока",
                    "while"
                ],
                [
                    "пока не",
                    "until"
                ]
            ]
        },
            {
                "type": "input_value",
                "name": "condition",
                "check": "Boolean",
                "align": "RIGHT"
            },
            {
                "type": "input_statement",
                "name": "blocks"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "digital_write",
        "lastDummyAlign0": "RIGHT",
        "message0": "DigitalWrite %1 %2 порт %3",
        "args0": [{
            "type": "field_dropdown",
            "name": "action",
            "options": [
                [
                    "Включить",
                    "on"
                ],
                [
                    "Выключить",
                    "off"
                ]
            ]
        },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "port",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_digital_prowrite",
        "message0": "ProDigitalWrite %1 порт %2 %3 значение %4",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "port",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ]
                ]
            },
            {
                "type": "input_dummy",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "value",
                "check": "Boolean",
                "align": "RIGHT"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "digital_read",
        "lastDummyAlign0": "RIGHT",
        "message0": "DigitalRead %1 порт %2",
        "args0": [{
            "type": "input_dummy"
        },
            {
                "type": "field_dropdown",
                "name": "port",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "analog_write",
        "message0": "AnalogWrite %1 порт %2 %3 мощность %4",
        "args0": [{
            "type": "input_dummy"
        },
            {
                "type": "field_dropdown",
                "name": "port",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ]
                ]
            },
            {
                "type": "input_dummy",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "power",
                "check": "Number",
                "align": "RIGHT"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 15,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "analog_read",
        "lastDummyAlign0": "RIGHT",
        "message0": "AnalogRead %1 порт %2",
        "args0": [{
            "type": "input_dummy"
        },
            {
                "type": "field_dropdown",
                "name": "port",
                "options": [
                    [
                        "1",
                        "1"
                    ],
                    [
                        "2",
                        "2"
                    ],
                    [
                        "3",
                        "3"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": 15,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_math_main",
        "message0": "%1 %2 %3 %4",
        "args0": [{
            "type": "input_value",
            "name": "firstNum",
            "check": "Number"
        },
            {
                "type": "field_dropdown",
                "name": "sign",
                "options": [
                    [
                        "+",
                        "+"
                    ],
                    [
                        "-",
                        "-"
                    ],
                    [
                        "×",
                        "*"
                    ],
                    [
                        "÷",
                        "/"
                    ],
                    [
                        "^",
                        "^"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "secondNum",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_math_sqrt",
        "message0": "√‎ %1",
        "args0": [{
            "type": "input_value",
            "name": "base",
            "check": "Number"
        }],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_math_tryg",
        "message0": "%1 %2",
        "args0": [{
            "type": "field_dropdown",
            "name": "type",
            "options": [
                [
                    "sin°",
                    "sin"
                ],
                [
                    "cos°",
                    "cos"
                ],
                [
                    "tg°",
                    "tg"
                ],
                [
                    "asin°",
                    "asin"
                ],
                [
                    "acos°",
                    "acos"
                ],
                [
                    "atg°",
                    "atg"
                ]
            ]
        },
            {
                "type": "input_value",
                "name": "base",
                "check": "Number"
            }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_if",
        "message0": "если %1 то %2",
        "args0": [{
            "type": "input_value",
            "name": "condition",
            "check": "Boolean",
            "align": "RIGHT"
        },
            {
                "type": "input_statement",
                "name": "blocks",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Выполнение блока кода только при выполнении условия.",
        "helpUrl": ""
    },
    {
        "type": "sc_if_else",
        "message0": "если %1 то %2 иначе %3",
        "args0": [{
            "type": "input_value",
            "name": "condition",
            "check": "Boolean",
            "align": "RIGHT"
        },
            {
                "type": "input_statement",
                "name": "blocks",
                "align": "RIGHT"
            },
            {
                "type": "input_statement",
                "name": "blocks_else",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_logic_main_compare",
        "message0": "%1 %2 %3 %4",
        "args0": [{
            "type": "input_value",
            "name": "first_statement"
        },
            {
                "type": "field_dropdown",
                "name": "sign",
                "options": [
                    [
                        "=",
                        "=="
                    ],
                    [
                        "≠",
                        "!="
                    ],
                    [
                        "<",
                        "<"
                    ],
                    [
                        ">",
                        ">"
                    ],
                    [
                        "≥",
                        ">="
                    ],
                    [
                        "≤",
                        "<="
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "second_statement"
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_logic_and_or",
        "message0": "%1 %2 %3 %4",
        "args0": [{
            "type": "input_value",
            "name": "first_statement",
            "check": "Boolean"
        },
            {
                "type": "field_dropdown",
                "name": "sign",
                "options": [
                    [
                        "and",
                        "&&"
                    ],
                    [
                        "or",
                        "||"
                    ],
                    [
                        "xor",
                        "^"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "second_statement",
                "check": "Boolean"
            }
        ],
        "output": "Boolean",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_logic_not",
        "message0": "не %1",
        "args0": [{
            "type": "input_value",
            "name": "statement",
            "check": "Boolean"
        }],
        "inputsInline": false,
        "output": "Boolean",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_math_deg_rad",
        "message0": "в %1 из %2 %3",
        "args0": [{
            "type": "field_dropdown",
            "name": "convert_to",
            "options": [
                [
                    "градусы",
                    "deg"
                ],
                [
                    "радианы",
                    "rad"
                ]
            ]
        },
            {
                "type": "field_dropdown",
                "name": "convert_from",
                "options": [
                    [
                        "радианов",
                        "rad"
                    ],
                    [
                        "градусов",
                        "deg"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "convert_val",
                "check": "Number"
            }
        ],
        "output": "Number",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_math_spec_num",
        "message0": "%1",
        "args0": [{
            "type": "field_dropdown",
            "name": "numb",
            "options": [
                [
                    "π",
                    "pi"
                ],
                [
                    "e",
                    "e"
                ]
            ]
        }],
        "output": "Number",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_math_random",
        "message0": "случайное %1 от %2 до %3",
        "args0": [{
            "type": "field_dropdown",
            "name": "number_type",
            "options": [
                [
                    "целое",
                    "int"
                ],
                [
                    "действительное",
                    "float"
                ]
            ]
        },
            {
                "type": "input_value",
                "name": "from_number",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "to_number",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_logic_boolean",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "BOOL",
                "options": [
                    [
                        "true",
                        "true"
                    ],
                    [
                        "false",
                        "false"
                    ]
                ]
            }
        ],
        "output": "Boolean",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_begin",
        "message0": "Serial.begin %1 бод %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "bod",
                "check": "Number",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_read",
        "message0": "Serial.read",
        "output": "String",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_available",
        "message0": "Serial.available",
        "output": "Number",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_find",
        "message0": "Serial.find %1 target %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "target",
                "check": "String",
                "align": "RIGHT"
            }
        ],
        "output": "Boolean",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_finduntil",
        "message0": "Serial.findUntil %1 target %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "target",
                "check": "String",
                "align": "RIGHT"
            }
        ],
        "output": "Boolean",
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_flush",
        "message0": "Serial.flush",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_parsefloat",
        "message0": "Serial.parseFloat",
        "output": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_parseint",
        "message0": "Serial.parseint",
        "output": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_print",
        "message0": "Serial.print %1 текст %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "text",
                "check": "String",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_serial_println",
        "message0": "Serial.println %1 текст %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "text",
                "check": "String",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sc_string_numtostr",
        "message0": "Число в строку %1 %2 %3",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_dropdown",
                "name": "num_type",
                "options": [
                    [
                        "целое",
                        "int"
                    ],
                    [
                        "действительное",
                        "float"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "num",
                "check": "Number",
                "align": "RIGHT"
            }
        ],
        "output": "String",
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_string_append",
        "message0": "Склеить строку %1 начало %2 конец %3",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "first_str",
                "check": "String",
                "align": "RIGHT"
            },
            {
                "type": "input_value",
                "name": "second_str",
                "check": "String",
                "align": "RIGHT"
            }
        ],
        "output": "String",
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_i2c_begin",
        "message0": "I2C.begin %1 address %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "check": "Number",
                "name": "addr",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_i2c_write",
        "message0": "I2C.write %1 value %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "check": "Number",
                "name": "val",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_i2c_read",
        "message0": "I2C.read",
        "output": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_i2c_available",
        "message0": "I2C.available",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_spi_begintrans",
        "message0": "SPI.beginTransaction",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 255,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_spi_endtrans",
        "message0": "SPI.endTransaction",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 255,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_spi_transfer",
        "message0": "SPI.tranfer %1 data %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "data",
                "check": "Number",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 255,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "sc_spi_ss",
        "message0": "SPI.ss %1 порт %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "port",
                "check": "Number",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 255,
        "tooltip": "",
        "helpUrl": ""
    }
];