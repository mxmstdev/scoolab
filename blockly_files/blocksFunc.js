Blockly.JavaScript['delay'] = function (block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `{
  "block": "delay",
  "args": [{
    "id": 0,
    "value": ${Number(value_time)},
    "type": "time"
  }]
}, `;
  return code;
};


Blockly.JavaScript['start'] = function (block) {
  var code = `{
  "block": "start",
  "args": []
}, `;
  return code;
};

Blockly.JavaScript['end'] = function (block) {
  var code = `{
  "block": "end",
  "args": []
}, `;
  return code;
};

Blockly.JavaScript['loop_for'] = function (block) {
  var value_forcount = Blockly.JavaScript.valueToCode(block, 'forCount', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  var code = `{
  "block": "loop_for",
  "args": [{
    "id": 0,
    "value": ${Number(value_forcount)},
    "type": "repeats"
  }, {
    "id": 1,
    "value": ${statements_blocks}
    "type": "repeatingCode"
  }]
}, `;
  return code;
};

Blockly.JavaScript['loop_while'] = function (block) {
  var dropdown_looptype = block.getFieldValue('loopType');
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  var code = `{
  "block": "loop_while",
  "args": [{
    "id": 0,
    "value": ${dropdown_looptype},
    "type": "looptype"
  }, {
    "id": 1,
    "value": ${value_condition},
    "type": "condition"
  }, {
    "id": 2,
    "value": ${statements_blocks}
    "type": "repeatingCode"
  }]
}, `;
  return code;
};

Blockly.JavaScript['sc_if'] = function (block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  var code = `{
  "block": "sc_if",
  "args": [{
    "id": 0,
    "value": ${value_condition},
    "type": "condition"
  }, {
    "id": 1,
    "value": ${statements_blocks}
    "type": "code"
  }]
}, `;
  return code;
};


Blockly.JavaScript['digital_write'] = function (block) {
  var dropdown_action = block.getFieldValue('action');
  var dropdown_port = block.getFieldValue('port');
  var code = `{
  "block": "digital_write",
  "args": [{
    "id": 0,
    "value": ${dropdown_port},
    "type": "port"
  }, {
    "id": 1,
    "value": ${dropdown_action}
    "type": "action"
  }]
}, `;
  return code;
};

Blockly.JavaScript['sc_digital_prowrite'] = function (block) {
  var dropdown_port = block.getFieldValue('port');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  console.log(value_value);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "digital_write",
    "args": [{
      "id": 0,
      "value": ${dropdown_port},
      "type": "port"
    }, {
      "id": 1,
      "value": ${value_value}
      "type": "value"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['digital_read'] = function (block) {
  var dropdown_port = block.getFieldValue('port');
  var code = `{
  "block": "digital_read",
  "args": [{
    "id": 0,
    "value": ${dropdown_port},
    "type": "port"
  }]
}, `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['analog_write'] = function (block) {
  var dropdown_port = block.getFieldValue('port');
  var value_power = Blockly.JavaScript.valueToCode(block, 'power', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `{
  "block": "analog_write",
  "args": [{
    "id": 0,
    "value": ${dropdown_port},
    "type": "port"
  }, {
    "id": 1,
    "value": ${value_power}
    "type": "power"
  }]
}, `;
  return code;
};

Blockly.JavaScript['analog_read'] = function (block) {
  var dropdown_port = block.getFieldValue('port');
  var code = `{
  "block": "analog_read",
  "args": [{
    "id": 0,
    "value": ${dropdown_port},
    "type": "port"
  }]
}, `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_main'] = function (block) {
  var value_firstnum = Blockly.JavaScript.valueToCode(block, 'firstNum', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_sign = block.getFieldValue('sign');
  var value_secondnum = Blockly.JavaScript.valueToCode(block, 'secondNum', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_firstnum}${dropdown_sign}${value_secondnum}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_sqrt'] = function (block) {
  var value_base = Blockly.JavaScript.valueToCode(block, 'base', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `sqrt(${value_base})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_tryg'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_base = Blockly.JavaScript.valueToCode(block, 'base', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_type}(${value_base})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_spec_num'] = function (block) {
  var dropdown_symb = block.getFieldValue('symb');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_symb}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_if_else'] = function (block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  var statements_blocks_else = Blockly.JavaScript.statementToCode(block, 'blocks_else');
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_if_else",
    "args": [{
      "id": 0,
      "value": ${value_condition},
      "type": "condition"
    }, {
      "id": 1,
      "value": ${statements_blocks}
      "type": "code_if"
    }, {
      "id": 2,
      "value": ${statements_blocks_else}
      "type": "code_else"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_logic_main_compare'] = function (block) {
  var dropdown_sign = block.getFieldValue('sign');
  var value_first_statement = Blockly.JavaScript.valueToCode(block, 'first_statement', Blockly.JavaScript.ORDER_ATOMIC);
  var value_second_statement = Blockly.JavaScript.valueToCode(block, 'second_statement', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(${value_first_statement} ${dropdown_sign} ${value_second_statement})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_logic_and_or'] = function (block) {
  var dropdown_sign = block.getFieldValue('sign');
  var value_first_statement = Blockly.JavaScript.valueToCode(block, 'first_statement', Blockly.JavaScript.ORDER_ATOMIC);
  var value_second_statement = Blockly.JavaScript.valueToCode(block, 'second_statement', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(${value_first_statement} ${dropdown_sign} ${value_second_statement})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_logic_boolean'] = function (block) {
  var dropdown_sign = block.getFieldValue('BOOL');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_sign;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_logic_not'] = function (block) {
  var value_statement = Blockly.JavaScript.valueToCode(block, 'statement', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(!${value_statement})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_spec_num'] = function (block) {
  var value_numb = block.getFieldValue('numb');
  var ret = Number();
  // TODO: Assemble JavaScript into code variable.
  switch (value_numb) {
    case 'pi':
      ret = Math.PI;
      break;
    case 'e':
      ret = Math.E;
      break;
  }
  var code = ret;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_random'] = function (block) {
  var value_type = block.getFieldValue('number_type');
  var value_from = Blockly.JavaScript.valueToCode(block, 'from_number', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'to_number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var ret = '';
  switch (value_type) {
    case 'int':
      ret = `random(${value_from}, ${value_to})`;
      break;
    case 'float':
      ret = `(random(${value_from}, ${value_to}) + (random(0, 1000) / 1000))`;
      break;
  }
  var code = ret;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_math_deg_rad'] = function (block) {
  var value_type_from = block.getFieldValue('convert_from');
  var value_type_to = block.getFieldValue('convert_to');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'convert_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var ret = Number();
  if (value_type_from == 'deg' && value_type_to == 'rad') {
    ret = `radians(${value_angle})`;
  } else if (value_type_from == 'rad' && value_type_to == 'deg') {
    ret = `degrees(${value_angle})`;
  } else {
    ret = value_angle;
  }
  var code = ret;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_begin'] = function (block) {
  var value_bod = Blockly.JavaScript.valueToCode(block, 'bod', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_serial_begin",
    "args": [{
      "id": 0,
      "value": ${value_bod},
      "type": "bod"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_serial_read'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Serial.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_available'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Serial.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_find'] = function (block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `Serial.find(${value_target})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_finduntil'] = function (block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `Serial.findUntil(${value_target})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_flush'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_serial_flush",
    "args": []
  }, `;
  return code;
};

Blockly.JavaScript['sc_serial_parsefloat'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `Serial.parseFloat()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_parseint'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `Serial.parseInt()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_serial_print'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_serial_print",
    "args": [{
      "id": 0,
      "value": ${value_text},
      "type": "text"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_serial_println'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_serial_println",
    "args": [{
      "id": 0,
      "value": ${value_text},
      "type": "text"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_string_numtostr'] = function (block) {
  var dropdown_num_type = block.getFieldValue('num_type');
  var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `numtostr(${value_num}, ${dropdown_num_type})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_string_append'] = function (block) {
  var value_first_str = Blockly.JavaScript.valueToCode(block, 'first_str', Blockly.JavaScript.ORDER_ATOMIC);
  var value_second_str = Blockly.JavaScript.valueToCode(block, 'second_str', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `appendString(${value_first_str}, ${value_second_str})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_i2c_begin'] = function(block) {
  var value_addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_i2c_begin",
    "args": [{
      "id": 0,
      "value": ${value_addr},
      "type": "address"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_i2c_write'] = function(block) {
  var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_i2c_write",
    "args": [{
      "id": 0,
      "value": ${value_val},
      "type": "val"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_i2c_read'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'i2cRead()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_i2c_available'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'i2cAvailable()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sc_spi_begintrans'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_spi_begintrans",
    "args": []
  }, `;
  return code;
};

Blockly.JavaScript['sc_spi_endtrans'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_spi_endtrans",
    "args": []
  }, `;
  return code;
};

Blockly.JavaScript['sc_spi_transfer'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    "block": "sc_spi_transfer",
    "args": [{
      "id": 0,
      "value": ${value_data},
      "type": "data"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['sc_spi_ss'] = function(block) {
  var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `{
    "block": "sc_spi_ss",
    "args": [{
      "id": 0,
      "value": ${value_port},
      "type": "port"
    }]
  }, `;
  return code;
};


/* Blockly.JavaScript['stop_motors'] = function (block) {
  var dropdown_ports = block.getFieldValue('ports');
  var code = `{
    "block": "stop_motors",
    "args": [{
      "id": 0,
      "value": ${Number(dropdown_ports)},
      "type": "port"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['servo_turn'] = function (block) {
  var dropdown_port = block.getFieldValue('port');
  var angle_angle = block.getFieldValue('angle');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var angle = (String(value_angle) === '') ? Number(angle_angle) : Number(value_angle);

  var code = `{
    "block": "servo_turn",
    "args": [{
      "id": 0,
      "value": ${dropdown_port},
      "type": "port"
    }, {
      "id": 1,
      "value": ${angle},
      "type": "angle"
    }]
  }, `;
  return code;
};

Blockly.JavaScript['led'] = function (block) {
  var dropdown_choosenport = block.getFieldValue('choosenPort');
  var dropdown_action = block.getFieldValue('action');

  var code = `{
    "block": "led",
    "args": [{
      "id": 0,
      "value": ${Number(dropdown_choosenport)},
      "type": "port"
    }, {
      "id": 1,
      "value": ${dropdown_action},
      "type": "action"
    }]
  }, `;
  return code;
}; */