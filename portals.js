// TODO: FIX IMPORT/EXPORT FOR THE FOLLOWING:
//===========================================

var gridSize = 18;
var gridSizeForm = document.getElementById("gridSize");

// event listener to listen for changes to gridSize form
gridSizeForm.addEventListener('change', getGridSizeValue);

function getGridSizeValue(){
	var gridSizeValue = gridSizeForm.value;
	setGridSize(gridSizeValue);
}

function setGridSize(value) {
    // contains conditionals for all possible grid size values
    if (value == "3") {
        gridSize = 3;
    } else if (value = "4") {
        gridSize = 4;
    } else if (value = "9") {
        gridSize = 9;
    } else if (value = "12") {
        gridSize =12;
    } else if (value = "18") {
        gridSize = 18;
    }

    return saveGridSize(gridSize);
    
}

// function to save updated gridSize to localStorage
function saveGridSize(value) {

    window.localStorage.setItem("gridsize", String(value));

}

// END OF GRIDSIZE STUFF
// ===================================

var gridSites = [
//TODO: add favicon, picture and (eventually) last visited date to objects in this list
    // {"title":"name of website",
    // "url":"url",
    // "screenshot":"thumbnail view",
    // "favicon": "static/images/beautiful.ico"}
]

var grid = document.getElementById("grid");

// onclick event for any tiles -

    // if no favicon - tabs.getCurrent to populate the favicon url in gridSites
    // set last visited date to current time

//

// captureVisibleTab - get screenshot image and save to gridSites

// after any changes to gridSites, save to localStorage


// Populates grid with items from gridSites - title and link to URL only 

function setSquares(gridSites) {
    grid.classList.add("grid");
    for (var i = 0; i < gridSize; i++) {
        
        var link = grid.appendChild(document.createElement("a"));
        link.href = gridSites[i].url;
        
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
        siteName.innerHTML = gridSites[i].title;
        
        var thumbnail = square.appendChild(document.createElement("img"))
        thumbnail.src = "static/images/image.png";
        thumbnail.classList.add("thumbnail");

        
    }
}

// TODO: write test to see if changes made to gridSites, and if not, show most recent grid

// pushes topSites to gridSites list
function buildPopupDom(mostVisitedURLs) {

  for (var i = 0; i < gridSize; i++) {
    gridSites.push(mostVisitedURLs[i]);

    // var li = ol.appendChild(document.createElement('li'));
    // var a = li.appendChild(document.createElement('a'));
    // a.href = mostVisitedURLs[i].url;
    // a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
  }
  return setSquares(gridSites);
}

// loads page topSites
// TODO : figure out persistence to load user-selected sites
// TODO: else if - gridSites.length < gridSize - fill in rest of grid with topSites
 if (gridSites.length === 0) {
    chrome.topSites.get(buildPopupDom);
 } else {
    setSquares(gridSites);
}

