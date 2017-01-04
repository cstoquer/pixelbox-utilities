
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
module.exports = {
	name: 'randomizer',
	description: 'Draw a random tile from the clipboard',

	draw: function (x, y, toolbox, isStart) {
		var clipboard = toolbox.mapClipboard;
		var item = clipboard.get(
			~~(Math.random() * clipboard.width),
			~~(Math.random() * clipboard.height)
		);
		toolbox.mapEditor.map.set(x, y, item.tile, item.flipH, item.flipV, item.flipR, item.flagA, item.flagB);
	},
	erase: function (x, y, toolbox) {
		toolbox.mapEditor.map.remove(x, y);
	}
}