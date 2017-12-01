const html = document.querySelector('html');
var backgroundForm = document.getElementById('background-choice');

// Event listeners
// ==================================================
backgroundForm.addEventListener('change', getValue);

// Generates random gradient
// ==================================================
function getRandom(upper, lower=0){
	var randomNum;
	if(lower === 0){ //range 0 to upper limit
		randomNum = Math.random() * (upper + 1);
		randomNum = Math.floor(randomNum);
	} else{ //range lower to upper range
		randomNum = Math.random() * (upper - lower) + lower;
		randomNum = Math.round(randomNum);
	}
	return randomNum;
}

function randomRGB(){
	var r = getRandom(255);
	var g = getRandom(255);
	var b = getRandom(255);
	// console.log(r + ", " + g + ", " + b);
	return r + ", " + g + ", " + b;
}


// Sets background style based on drop-down selection
// ==================================================
function getValue(){
	var backgroundSelection = backgroundForm.value;
	setBackground(backgroundSelection);
}

function setBackground(style){
	// TODO add animated gradient
	// TODO change solid-fill to open color-picker and apply selection
	if (style === "gradient") {
		html.style.background = "linear-gradient(" + getRandom(360) + "deg, rgb(" + randomRGB() + "), rgb(" + randomRGB() + ")";
	}else if (style === "solid-fill") {
		html.style.background = "none";
		html.style.backgroundColor = "rgb(" + randomRGB() + ")";
	}else {
		html.style.background = "none";
		html.style.backgroundColor = "white";
	}
} 

// Set initial background to gradient 
setBackground("gradient");