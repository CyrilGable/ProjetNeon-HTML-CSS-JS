var tour = document.getElementById("tour");


var red = 1;
var yellow = 2;

var currentColor = "yellow";
var currentColorGrid = yellow;
var compteur = 0

function changementjoueur() {
	if ((compteur % yellow) == 0) {
		tour.innerHTML = '<span class="yellow">C\'est au tour du joueur jaune</span>';
		currentColor = "yellow";
		currentColorGrid = yellow;
		compteurjoueur()
	}

	else {
		tour.innerHTML = '<span class="red">C\'est au tour du joueur rouge</span>';
		currentColor = "red";
		currentColorGrid = red;
		compteurjoueur()
	}
}
function compteurjoueur() {
	compteur = compteur + 1
}
changementjoueur()
var storage = window.localStorage;

// zone nb colone et ligne
var rows = 7;
var columns = 6;
//taille pixel
var rowsPixel = "80px";
var columnsPixel = "80px";
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
		cell.style.borderRadius = "50px"

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


	});
	// quand la souris est cliqué
	cell.addEventListener('mousedown', function () {
		click = true;
		cell.style.backgroundColor = currentColor;
		storage.setItem(cell.className, cell.style.backgroundColor);
		changementjoueur()
	});
	// quand la souris est relaché
	cell.addEventListener('mouseup', function () {
		click = false;
	});
});