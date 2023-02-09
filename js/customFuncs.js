function getCode() {
    console.log(Blockly.JavaScript.workspaceToCode(workspace).slice(0, -2));
}