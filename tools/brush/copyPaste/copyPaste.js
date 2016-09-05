var sx, sy; // start position
var isCopy;

module.exports = {
	name: 'copy paste',
	description: 'copy rectangle with SHIFT key, \ndraw to paste',

	start: function (x, y, toolbox) {
		isCopy = !!(toolbox.keyboard.shift);
		sx = x;
		sy = y;
	},

	end: function (x, y, toolbox) {
		var map = toolbox.mapEditor.map;
		var clipboard = toolbox.mapClipboard;

		if (isCopy) {
			var w = x - sx;
			var h = y - sy;

			if (w < 0) { sx = x; w *= -1; }
			if (h < 0) { sy = y; h *= -1; }

			w += 1;
			h += 1;

			
			clipboard.resize(w, h);
			clipboard.paste(map.copy(sx, sy, w, h));
		} else {
			map.paste(clipboard.copy(), x, y, true);
		}
	}
}