var editMode = false;
var currentTile;
var position;
var aTileTags = Array.from(document.querySelectorAll("a.urls"));
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
	deleteTile(position);
})

cancelEditTile.addEventListener('click', cancelEditTileMenu);

// Functions
function toggleEditMode() {
	console.log("toggleEditMode running");
	if (minusSignMenu.classList.contains('hidden')) {
		editMode = false;
		console.log("editMode should be false and is " + editMode);
		//resetGrid(tileList);
	} if (!minusSignMenu.classList.contains('hidden')) {
		editMode = true;
		console.log("editMode should be true and is " + editMode);

		for (var i = 0; i < aTileTags.length; i++) {
			disableLink(aTileTags[i]);
			console.log("forloop running");
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
	console.log("disableLink running");
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
	cancelEditTileMenu();
	resetGrid(tileList);
	console.log(currentTile.url);
	console.log(tileList[index].url);
}

function deleteTile(index) {
	tileList.splice(position, 1);
	console.log("calling CancelEditTileMenu");
	cancelEditTileMenu();
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