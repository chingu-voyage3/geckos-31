// TODO: FIX IMPORT/EXPORT FOR THE FOLLOWING:
//===========================================

var gridSize;
var gridSizeForm = document.getElementById("gridSize");

// event listener to listen for changes to gridSize form
gridSizeForm.addEventListener('change', getGridSizeValue);

function getGridSizeValue(){
    // console.log("getGridSizeValue happening now");
	var gridSizeValue = gridSizeForm.value;
	setGridSize(gridSizeValue);
}

function setGridSize(value) {
    // contains conditionals for all possible grid size values
    // console.log("setting gridSize now");
    // console.log("value is: " + String(value));
    // console.log("value is type: " + String(typeof(value)));
    if (value == "3") {
        gridSize = 3;
    } else if (value == "4") {
        gridSize = 4;
    } else if (value == "9") {
        gridSize = 9;
    } else if (value == "12") {
        gridSize = 12;
    } else if (value == "18") {
        gridSize = 18;
    }

    return saveGridSize(gridSize);
    
}

// function to save updated gridSize to localStorage
function saveGridSize(value) {

    window.localStorage.setItem("gridsize", String(value));
    var toDelete = document.getElementsByClassName("urls");
    while (toDelete.length > 0) {
        toDelete[0].remove();
    }
    grid.classList.remove("grid");
    return setSquares(gridList);

}

// END OF GRIDSIZE STUFF
// ===================================

var gridList = [
//TODO: add favicon, picture and (eventually) last visited date to objects in this list
    // {"title":"name of website",
    // "url":"url",
    // "screenshot":"thumbnail view",
    // "favicon": "static/images/beautiful.ico"}
]

var grid = document.getElementById("grid");

// onclick event for any tiles -

    // if no favicon - tabs.getCurrent to populate the favicon url in gridList
    // set last visited date to current time

//

// captureVisibleTab - get screenshot image and save to gridList

// after any changes to gridList, save to localStorage


// Populates grid with items from gridList - title and link to URL only 

function setSquares(gridList) {
    grid.classList.add("grid");
    for (var i = 0; i < gridSize; i++) {
        
        var link = grid.appendChild(document.createElement("a"));
        link.href = gridList[i].url;
        link.classList.add("urls");
        
        var square = link.appendChild(document.createElement("div"));
        square.classList.add("square");
        // square.style.background = "url(static/images/image.png)";
        
  
        var tileHeader = square.appendChild(document.createElement("div"));
        tileHeader.classList.add("tileheader");

        var iconDiv = tileHeader.appendChild(document.createElement("div"));
        var icon = iconDiv.appendChild(document.createElement("img"));
        icon.src = "static/images/beautifulicon.ico";
        icon.classList.add("favicon");
        
        var titleDiv = tileHeader.appendChild(document.createElement("div"));
        titleDiv.classList.add("titlediv");

        var siteName = titleDiv.appendChild(document.createElement("span"));
        siteName.innerHTML = gridList[i].title;
        
        var thumbnail = square.appendChild(document.createElement("img"))
        thumbnail.src = "static/images/image.png";
        thumbnail.classList.add("thumbnail");

        
    }
}

// TODO: write test to see if changes made to gridList, and if not, show most recent grid

// pushes topSites to gridList list
function buildPopupDom(mostVisitedURLs) {

  for (var i = 0; i < gridSize; i++) {
    gridList.push(mostVisitedURLs[i]);

    // var li = ol.appendChild(document.createElement('li'));
    // var a = li.appendChild(document.createElement('a'));
    // a.href = mostVisitedURLs[i].url;
    // a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
  }
  return setSquares(gridList);
}

// loads page topSites
// TODO : figure out persistence to load user-selected sites
// TODO: else if - gridList.length < gridSize - fill in rest of grid with topSites

if (window.localStorage.gridsize) {
    gridSize = window.localStorage.gridsize;
    gridSizeForm.value = gridSize;
} else {
    gridSize = 9;
    gridSizeForm.value = gridSize;
}
if (gridList.length === 0) {
    chrome.topSites.get(buildPopupDom);
    // console.log("gridSize is: " + String(gridSize));
 } else {
    setSquares(gridList);
}

