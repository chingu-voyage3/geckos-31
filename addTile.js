var newTile = {};

var addTileForm = document.querySelector('.plusSignMenu'); 
var button = document.getElementById('addTileButton');
var formUrl = document.getElementById('tileUrl');
var formTitle = document.getElementById('tileTitle');


button.addEventListener('click', getTileData);


function getTileData(){
    console.log("button was clicked");
    console.log("url is: " + formUrl.value);
    console.log("title is: " + formTitle.value);
    
    // assign new Tile data
    newTile.title = formTitle.value,
    newTile.url = formUrl.value,
    newTile.favicon = "static/images/beautifulicon.ico",
    newTile.screenshot = "static/images/image.png"

    console.log(newTile);
    console.log("tilelist length is: " + tileList.length);
    // add to tileList
    tileList.push(newTile);
    console.log("after adding, tileList length is: " + tileList.length);
    
    //reset text input fields
    formUrl.value = "";
    formTitle.value = "";

    resetGrid(tileList);

}