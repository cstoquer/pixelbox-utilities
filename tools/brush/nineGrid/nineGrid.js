
var map;
var clipboard;
var mapInit;

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
function drawRectangle(map, x0, y0, x1, y1) {
	// check that rectangle have dimension 
	if (x0 === x1 || y0 === y1) return;

	// set start and end coordinate in correct order
	if (x0 > x1) { var x = x0; x0 = x1; x1 = x; }
	if (y0 > y1) { var y = y0; y0 = y1; y1 = y; }

	// fill rectangle
	for (var x = x0; x <= x1; x++) {
	for (var y = y0; y <= y1; y++) {
		item = clipboard.get(
			x === x0 ? 0 : x === x1 ? 2 : 1,
			y === y0 ? 0 : y === y1 ? 2 : 1
		);
		if (item === null) continue;
		map.set(x, y, item.sprite, item.flipH, item.flipV, item.flipR, item.flagA, item.flagB);
	}}
}

var sx, sy; // start position
var pw, ph; // previous position

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
module.exports = {
	name: '9 grid',
	description: 'Draw rectangular blocs using 9 grid.\nUse a 3 x 3 map stored in the clipboard as template.',
	select: function (toolbox, listItem) {
		map = toolbox.mapEditor.map;
		clipboard = toolbox.mapClipboard;
	},

	start: function (x, y, toolbox) {
		mapInit = map.copy();
		sx = x;
		sy = y;
		pw = ph = 0;
	},

	draw: function (x, y, toolbox, isStart) {
		var h = Math.abs(x - sx);
		var w = Math.abs(y - sy);
		if (w < pw || h < ph) map.paste(mapInit);
		drawRectangle(map, sx, sy, x, y);
		pw = w;
		ph = h;
	},

	end: function (x, y, toolbox) {
		mapInit = null;
	}
}