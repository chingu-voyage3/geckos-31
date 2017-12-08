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

// export { 
//     gridSize, 
//     gridSizeForm, 
//     getGridSizeValue, 
//     setGridSize, 
//     saveGridSize 
// };