var tileList = [
//TODO: add favicon, picture and (eventually) last visited date to objects in this list
    // {"title":"name of website",
    // "url":"url",
    // "screenshot":"thumbnail view",
    // "favicon": "static/images/beautiful.ico",
    // "category": "uncategorized"}
]
var grid = document.getElementById("grid");

function assignScreenshot(index, url) {
    tileList[index].screenshot = url;
}

function addFavIcon(favicon, index) { 
    let currentTiles = JSON.parse(window.localStorage.tilelist);
    currentTiles[index].favicon = favicon;
    return saveTiles(currentTiles);    
}

// TODO:
// set last visited date to current time

// Populates grid with items from tileList 
function setTiles(tileList) {
    grid.classList.add("grid");
    for (var i = 0; i < gridSize; i++) {
        
        if (i >= tileList.length) {
            var addMenuLink = grid.appendChild(document.createElement("a"));
            addMenuLink.href = "#plusSign";
            var placeholder = addMenuLink.appendChild(document.createElement("div"));
            placeholder.classList.add("placeholder");
            var plusIcon = placeholder.appendChild(document.createElement("img"));
            plusIcon.src = "static/images/plussign.png"; 
            plusIcon.classList.add("plus-sign");
            placeholder.addEventListener('click', function () {
                toggleHideMenu(plusSignMenu);
            })
        
        } else {
            var link = grid.appendChild(document.createElement("a"));
            link.href = tileList[i].url;
            link.classList.add("urls");
            link.addEventListener('click', checkTileData.bind( null, i) );
            link.id = i;
            
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
        }
        saveTiles(tileList);
    }
}

function saveTiles(tiles) {

    window.localStorage.setItem("tilelist", JSON.stringify(tiles));

}

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

function resetGrid(tiles) {
    var toDelete = grid.children;
    while (toDelete.length > 0) {
        toDelete[0].remove();
    }
    grid.classList.remove("grid");
    
    return setTiles(tiles);
}

// loads page topSites
// TODO : load user-added sites

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
// Logic to pull favicons!
//==========================

function checkTileData(index) {
    var currentTile = tileList[index];    
    if (currentTile.favicon === "static/images/beautifulicon.ico"){
        chrome.runtime.sendMessage(
            String(index)
        );
    }
    // TODO: add check to see when updated last here
}
