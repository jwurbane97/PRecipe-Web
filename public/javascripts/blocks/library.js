Blockly.Blocks['open'] = {
  /**
   * Animation for open the mold.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("open()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
}