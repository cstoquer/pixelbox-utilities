// clone from spritesheet

var sx, sy; // start position relative to spritesheet position 

var mapEditor;
var spritesheet;
var keyboard;


module.exports = {
	name: 'magic cloner',
	select: function (toolbox, listItem) {
		mapEditor   = toolbox.mapEditor;
		spritesheet = toolbox.spritesheet;
		keyboard    = toolbox.keyboard;
	},

	start: function (x, y, toolbox) {
		var sprite = spritesheet.sprite;
		sx =   (sprite % 16) - x;
		sy = ~~(sprite / 16) - y;
	},

	draw: function (x, y, toolbox, isStart) {
		// alt is used for map scroll
		if (keyboard.shift) {
			mapEditor.map.remove(x, y);
		} else {
			// TODO: handle overflow
			var sprite = (x + sx) + (y + sy) * 16;
			mapEditor.map.set(x, y, sprite, spritesheet.flipH, spritesheet.flipV, spritesheet.flipR);
		}
	}
}