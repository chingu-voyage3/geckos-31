var editMode = false;
var currentTile;
var position;
var aTileTags = Array.from(document.querySelectorAll("a.urls"));
var assignedTiles = document.querySelectorAll(".square");
var editTileUrl = document.getElementById('editTileUrl');
var editTileTitle = document.getElementById('editTileTitle');
var editTileButton = document.getElementById('editTileButton');

// Event listeners for edit menu
editTileButton.addEventListener('click', function() {
	changeTileInfo(position);
})


// Functions
function toggleEditMode() {
	if (minusSignMenu.classList.contains('hidden')) {
		editMode = false;
		console.log("editMode should be false and is " + editMode);
		resetGrid(tileList);
	} if (!minusSignMenu.classList.contains('hidden')) {
		editMode = true;
		console.log("editMode should be true and is " + editMode);

		for (var i = 0; i < aTileTags.length; i++) {
			disableLink(aTileTags[i]);
		}
	}
}

function populateEditMenu(index) {
	currentTile =  tileList[index];
	console.log(currentTile);
	editTileUrl.value = currentTile.url;
	editTileTitle.value = currentTile.title;
	position = index;

}


function disableLink(tile){
	tile.href = "#minusSignMenu";
	tile.addEventListener('click', function() {
	//console.log(aTileTags[i].href + " event listener");
	populateEditMenu(tile.id);
});
}

function changeTileInfo(index) {
	currentTile =  tileList[index];
	currentTile.url = editTileUrl.value;
	currentTile.title = editTileTitle.value;
	resetGrid(tileList);
	console.log(currentTile.url);
	console.log(tileList[index].url);
}