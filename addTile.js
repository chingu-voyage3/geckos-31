var newTile = {};

var addTileForm = document.querySelector('.plusSignMenu'); 
var addTileButton = document.getElementById('addTileButton');
var formUrl = document.getElementById('tileUrl');
var formTitle = document.getElementById('tileTitle');
var cancelAddTileButton = document.getElementById('cancelAddTile');

// Event Listeners
addTileButton.addEventListener('click', getTileData);
cancelAddTileButton.addEventListener('click', cancelAddTile);


// Listener Functions
function getTileData(){
    // checks that URL and Title fields have content
    if (formTitle.value !== "" && formUrl.value !== "") {
        // assign new Tile data
        newTile.title = formTitle.value,
        newTile.url = formUrl.value,
        newTile.favicon = "static/images/beautifulicon.ico",
        newTile.screenshot = "static/images/image.png"

        // add to tileList and repopulate grid
        tileList.push(newTile);    
        cancelAddTile();
        resetGrid(tileList);
    }if (formTitle.value === "") {
        formTitle.classList.add("error");

    }if (formUrl.value === "") {
        formUrl.classList.add("error");
    }


}

function cancelAddTile(){
    clearAddTileFields();
    toggleHideMenu(plusSignMenu);
}

function clearAddTileFields(){
    // reset text input fields
    formUrl.value = "";
    formTitle.value = "";
    formTitle.classList.remove("error");
    formUrl.classList.remove("error");

}