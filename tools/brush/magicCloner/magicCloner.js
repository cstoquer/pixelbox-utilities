// clone from tilesheet

var sx, sy; // start position relative to tilesheet position 

var mapEditor;
var tilesheet;
var keyboard;


module.exports = {
	name: 'magic cloner',
	select: function (toolbox, listItem) {
		mapEditor = toolbox.mapEditor;
		tilesheet = toolbox.tilesheet;
		keyboard  = toolbox.keyboard;
	},

	start: function (x, y, toolbox) {
		var tile = tilesheet.tile;
		sx =   (tile % 16) - x;
		sy = ~~(tile / 16) - y;
	},

	draw: function (x, y, toolbox, isStart) {
		// alt is used for map scroll
		if (keyboard.shift) {
			mapEditor.map.remove(x, y);
		} else {
			// TODO: handle overflow
			var tile = (x + sx) + (y + sy) * 16;
			mapEditor.map.set(x, y, tile, tilesheet.flipH, tilesheet.flipV, tilesheet.flipR);
		}
	}
}