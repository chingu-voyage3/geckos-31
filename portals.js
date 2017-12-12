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
    gridSize = parseInt(window.localStorage.gridsize);
    console.log(gridSize + ", is type " + typeof gridSize)
    gridSizeForm.value = String(gridSize);
} else {
    gridSize = 9;
    gridSizeForm.value = gridSize;
}
if (gridList.length === 0) {
    chrome.topSites.get(buildPopupDom);
    console.log("gridSize is: " + String(gridSize));
 } else {
    setSquares(gridList);
}

