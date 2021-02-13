var palette = document.querySelector('#palette');
var currentColor = palette.value;
var click = false;

palette.addEventListener('change', (event) => {
	console.log(event.target.value);
	currentColor = event.target.value;

});
var storage = window.localStorage;

// zone nb colone et ligne
var rows = 80;
var columns = 80;
//taille pixel
var rowsPixel = "10px";
var columnsPixel = "10px";
//grille
var zone = document.getElementById("zone");
zone.style.gridTemplateColumns = "repeat(" + rows + ", " + rowsPixel + ")"; // css en js
zone.style.gridTemplateRows = "repeat(" + columns + ", " + columnsPixel + ")";

// De la ligne 0 a ligne max
for (var line = 0; line < rows; line++) {
	for (var column = 0; column < columns; column++) {
		let cell = document.createElement("div"); // creation de div
		cell.className = "x" + '' + column + '' + line;
		if (storage.getItem(cell.className) === null) { //storage
			cell.style.backgroundColor = '#F3F3F3';
		}
		else {
			cell.style.backgroundColor = storage.getItem(cell.className);
		}


		cell.style.width = rowsPixel;
		cell.style.height = columnsPixel;

		storage.getItem(cell.className);

		zone.appendChild(cell);
	}
}

cells = document.querySelectorAll("#zone > div");
cells.forEach(function (cell) {
	cell.addEventListener('mouseover', function () {
		if (currentColor != undefined && click) {
			cell.style.backgroundColor = currentColor;
			storage.setItem(cell.className, cell.style.backgroundColor)
		}

		console.log(cell.className);
	});
	// quand la souris est cliqué
	cell.addEventListener('mousedown', function () { //insipiré du commentaire de Damien dans le channel groupe 6
		click = true;
		cell.style.backgroundColor = currentColor;
		storage.setItem(cell.className, cell.style.backgroundColor);
	});
	// quand la souris est relaché
	cell.addEventListener('mouseup', function () { //insipiré du commentaire de Damien dans le channel groupe 6
		click = false;
	});
});