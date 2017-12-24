var gridSize;
var gridSizeForm = document.getElementById("gridSize");

// event listener to listen for changes to gridSize form
gridSizeForm.addEventListener('change', getGridSizeValue);

function getGridSizeValue(){
    // console.log("getGridSizeValue happening now");
    var gridSizeValue = gridSizeForm.value;
    // console.log(gridSizeValue + " is the gridSizeValue");
	setGridSize(gridSizeValue);
}

function setGridSize(value) {
    //contains conditionals for all possible grid size values
    // console.log("setting gridSize now");
    // console.log("value is: " + String(value));
    //console.log("value is type: " + String(typeof(value)));
    gridSize = parseInt(value);
    // console.log("gridSize changed to " + gridSize + " and is type: " + typeof(gridSize));

    saveGridSize(gridSize);
    
}

// function to save updated gridSize to localStorage
function saveGridSize(value) {

    window.localStorage.setItem("gridsize", String(value));
    
    resetGrid(tileList);

}