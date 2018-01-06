var editMode = false;
var currentTile; // - was causing bug while adding - doesn't seem to break without this
//var position
var assignedTiles = document.querySelectorAll(".square");
var editTileUrl = document.getElementById('editTileUrl');
var editTileTitle = document.getElementById('editTileTitle');
var editTileButton = document.getElementById('editTileButton');
var deleteTileButton = document.getElementById('deleteTileButton');
var cancelEditTile = document.getElementById('cancelEditTile');

// Event listeners for edit menu
editTileButton.addEventListener('click', function() {
	changeTileInfo(position);
})

deleteTileButton.addEventListener('click', function() {
	// this is here to avoid deleting when no tile is selected
	// no response/feedback given until fields are populated
	if (position != null) {
		deleteTile(position);
	} 
})

cancelEditTile.addEventListener('click', cancelEditTileMenu);

// Functions
function populateEditMenu(index) {
	currentTile = tileList[index];
	console.log(currentTile);
	editTileUrl.value = currentTile.url;
	editTileTitle.value = currentTile.title;
	position = index;

}


function disableLink(tile){
	console.log("disableLink running");
	tile.href = "#minusSignMenu";
	tile.addEventListener('click', function() {
	//console.log(aTileTags[i].href + " event listener");
	populateEditMenu(tile.id);
});
}

function enableLinks(allTiles) {
	for (var i = 0; i < allTiles.length; i++) {
		console.log("Tile and url to re-enable are: " + allTiles[i].title + ", " + allTiles[i].url)
		allTiles[i].href = tileList[i].url;
	}

}

function changeTileInfo(index) {
	currentTile = tileList[index];
	currentTile.url = editTileUrl.value;
	currentTile.title = editTileTitle.value;
	cancelEditTileMenu();
	enableLinks(tileList);
	resetGrid(tileList);
	console.log(currentTile.url);
	console.log(tileList[index].url);
}

function deleteTile(index) {
	tileList.splice(position, 1);
	console.log("calling CancelEditTileMenu");
	cancelEditTileMenu();
	enableLinks(tileList);
	resetGrid(tileList);
}

function cancelEditTileMenu(){
	console.log("Running cancelEditTileMenu");
    clearEditTileFields();
	toggleHideMenu(minusSignMenu);
	console.log("calling toggleHideMenu from menus.js");
}

function clearEditTileFields(){
    // reset text input fields
    editTileUrl.value = "";
    editTileTitle.value = "";
    editTileTitle.classList.remove("error");
	editTileUrl.classList.remove("error");
	console.log("EDIT TILES CLEARED");

}

function toggleEditMode() {
	console.log("toggleEditMode running");
	if (minusSignMenu.classList.contains('hidden')) {
		editMode = false;
		console.log("editMode should be false and is " + editMode);
		enableLinks(tileList);
		resetGrid(tileList);
	} if (!minusSignMenu.classList.contains('hidden')) {
		editMode = true;
		var aTileTags = Array.from(document.querySelectorAll("a.urls"));
		console.log("editMode should be true and is " + editMode);

		for (var i = 0; i < aTileTags.length; i++) {
			disableLink(aTileTags[i]);
			console.log("forloop running");
		}
	}
}