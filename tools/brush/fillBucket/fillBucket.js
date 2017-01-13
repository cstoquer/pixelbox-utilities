//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
function fill(x, y, map, tilesheet) {
	if (x >= map.width  || x < 0) return;
	if (y >= map.height || y < 0) return;
	if (map.get(x, y)) return;
	map.set(x, y, tilesheet.tile, tilesheet.flipH, tilesheet.flipV, tilesheet.flipR);

	fill(x + 1, y, map, tilesheet);
	fill(x - 1, y, map, tilesheet);
	fill(x, y + 1, map, tilesheet);
	fill(x, y - 1, map, tilesheet);
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
module.exports = {
	name: 'Fill Bucket',
	description: 'Fill an empty area with tile currently selected in tilesheet.',
	draw: function (x, y, toolbox) {
		fill(x, y, toolbox.mapEditor.map, toolbox.tilesheet);
	}
};