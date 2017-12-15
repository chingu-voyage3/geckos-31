var tileList = [
//TODO: add favicon, picture and (eventually) last visited date to objects in this list
    // {"title":"name of website",
    // "url":"url",
    // "screenshot":"thumbnail view",
    // "favicon": "static/images/beautiful.ico"}
]

var grid = document.getElementById("grid");

// onclick event for any tiles -

    // if no favicon - tabs.getCurrent to populate the favicon url in tileList
    // set last visited date to current time

//

// captureVisibleTab - get screenshot image and save to tileList

// after any changes to tileList, save to localStorage


// Populates grid with items from tileList - title and link to URL only 

function setTiles(tileList) {
    console.log("setting tiles now");
    grid.classList.add("grid");
    // if (gridSize >  tileList.length)
    for (var i = 0; i < gridSize; i++) {
        console.log("current tile is: " + String(tileList[i].title));
        console.log("i is: " + i);
        //TODO: Create placeholder tiles when gridSize exceeds number of sites 
        // if (i >= tileList.length) {
        //     var placeholder = grid.appendChild(document.createElement("div"));
        //     placeholder.classList.add("square");
        //     var plusIcon = placeholder.appendChild(document.createElement("img"));
        //     plusIcon.src = "static/images/plussign.png";     
        // }
        var link = grid.appendChild(document.createElement("a"));
        link.href = tileList[i].url;
        link.classList.add("urls");
        
        var square = link.appendChild(document.createElement("div"));
        square.classList.add("square");        
  
        var tileHeader = square.appendChild(document.createElement("div"));
        tileHeader.classList.add("tileheader");

        var iconDiv = tileHeader.appendChild(document.createElement("div"));
        var icon = iconDiv.appendChild(document.createElement("img"));
        icon.src = tileList[i].favicon;
        icon.classList.add("favicon");
        
        var titleDiv = tileHeader.appendChild(document.createElement("div"));
        titleDiv.classList.add("titlediv");

        var siteName = titleDiv.appendChild(document.createElement("span"));
        siteName.innerHTML = tileList[i].title;
        
        var thumbnail = square.appendChild(document.createElement("img"))
        thumbnail.src = tileList[i].screenshot;
        thumbnail.classList.add("thumbnail");

        saveTiles(tileList);
    }
}

function saveTiles(tiles) {

    window.localStorage.setItem("tilelist", JSON.stringify(tiles));
}

// TODO: write test to see if changes made to tileList, and if not, show most recent grid

// pushes topSites to tileList list
function buildPopupDom(mostVisitedURLs) {

    for (var i = 0; i < mostVisitedURLs.length; i++) {
        tileList.push(mostVisitedURLs[i]);
        if (tileList[i] != undefined) {
            tileList[i].screenshot = "static/images/image.png";
            tileList[i].favicon = "static/images/beautifulicon.ico";
        }

    console.log(tileList[i]);
    console.log("tileList length built by topSites is: " + tileList.length);
  }
  return setTiles(tileList);
}

function buildFromLS(tiles) {
    console.log("building tileList from localStorage");
    for (var i = 0; i < tiles.length; i++) {
        tileList.push(tiles[i]);
    }
    console.log("Done, tileList is : " + tileList.length);
    setTiles(tileList);
}

// loads page topSites
// TODO : figure out persistence to load user-selected sites
// TODO: else if - tileList.length < gridSize - fill in rest of grid with topSites

if (window.localStorage.gridsize) {
    gridSize = parseInt(window.localStorage.gridsize);
    gridSizeForm.value = String(gridSize);
} else {
    gridSize = 9;
    gridSizeForm.value = gridSize;
}

if (window.localStorage.tilelist) {

    tiles = JSON.parse(window.localStorage.tilelist);
    console.log("tilelist coming from localStorage and is this long: " + String(tiles.length));
    console.log("gridSize is: " + window.localStorage.gridsize);
    buildFromLS(tiles);
    
} else {
    console.log("Tilelist is probably: " + String(tileList.length));
    chrome.topSites.get(buildPopupDom);
}