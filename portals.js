var tileList = [
//TODO: add favicon, picture and (eventually) last visited date to objects in this list
    // {"title":"name of website",
    // "url":"url",
    // "screenshot":"thumbnail view",
    // "favicon": "static/images/beautiful.ico",
    // "category": "uncategorized"}
]
var grid = document.getElementById("grid");

// onclick event for any tiles -
function printTabInfo(url, favicon, tabId) {
    // console.log("URL is: " + url);
    // console.log("faviconURL is: " + favicon);
    // console.log("tabId is: " + tabId);
    addFavIcon(favicon, url)
}


// if no favicon - tabs.getCurrent to populate the favicon url in tileList
function addFavIcon(favicon, url) {
    let currentTiles = JSON.parse(window.localStorage.tilelist);
    for (var i = 0; i < currentTiles.length; i++) {
        // finds match in our current list
        // console.log("currentTiles url is: " + currentTiles[i].url);
        // console.log("url is: " + url);
        if (currentTiles[i].url === url) {
            // console.log("match found")
            match = true;
            // console.log(currentTiles[i].favicon);
            // checks to see the default favicon is used
            if (currentTiles[i].favicon === "static/images/beautifulicon.ico"){
                // console.log("resetting favicon")
                currentTiles[i].favicon = favicon;
                // console.log(currentTiles[i].favicon);

                //refresh items in grid
                return saveTiles(currentTiles);
            }
        }
    }
}

// TODO:
// set last visited date to current time
// captureVisibleTab - get screenshot image and save to tileList

// Populates grid with items from tileList - title and link to URL only 
function setTiles(tileList) {
    grid.classList.add("grid");
    for (var i = 0; i < gridSize; i++) {
        
        if (i >= tileList.length) {
            var addMenuLink = grid.appendChild(document.createElement("a"));
            addMenuLink.href = "#plusSign";
            // addMenuLink.classList.add("urls");
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
// Logic to pull thumbnails!
//==========================

// listeners don't seem to be applied to node list
// how can we pass tile info to other helper functions?

var tilesWithUrls = document.querySelectorAll("a.urls");
function addGridListeners(list, action, fn){
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener(action, fn, false);   
    }
}
addGridListeners(tilesWithUrls, 'click', function() {
    console.log("Something was clicked!");
})


function getTileInfo(tileUrl) {
    
    // for (var i = 0; i < tileList.length; i++) {
    //     if (tileList[i].url === tileUrl) {
    //         checkThumbnails(tileList[i]);
    //         console.log("tileUrl match found!");
    //         console.log("index is: " + String(i) + " and tile is " + tileList[i].url)
    //     }
    // }
}
function checkThumbnails(tile) {
    console.log("Thumbnails checked!");
}