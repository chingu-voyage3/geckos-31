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
	// TODO adjust randomization of animated gradient
	// TODO change solid-fill to open color-picker and apply selection
	if (style === "animated-gradient") {
		// Randomizes between linear and radial animated gradient
		var randomGradientStyle = getRandom(1);
		console.log(randomGradientStyle);
		if (randomGradientStyle === 0) {
			html.style.background = "radial-gradient(rgb(" + randomRGB() + "), rgb(" + randomRGB() + ")) 0% 0% / 200% 200%";
			html.style.animation = "CustomAnimationRad 10s ease infinite";
		} else if (randomGradientStyle === 1) {
			html.style.background = "linear-gradient(" + getRandom(360) + "deg, rgb(" + randomRGB() + "), rgb(" + randomRGB() + ")) 0% 0% / 200% 200%";
			html.style.animation = "CustomAnimationLin 7s ease infinite";
		}

	}else if (style === "gradient") {
		// Randomizes between linear and radial gradient
		var randomGradientStyle = getRandom(1);
		console.log(randomGradientStyle);
		if (randomGradientStyle === 0) {
			html.style.background = "radial-gradient(rgb(" + randomRGB() + "), rgb(" + randomRGB() + ")";
		} else if (randomGradientStyle === 1) {
			html.style.background = "linear-gradient(" + getRandom(360) + "deg, rgb(" + randomRGB() + "), rgb(" + randomRGB() + ")";
		}

	}else if (style === "solid-fill") {
		html.style.background = "none";
		html.style.backgroundColor = "rgb(" + randomRGB() + ")";
	}else {
		html.style.background = "none";
		html.style.backgroundColor = "white";
	}

	saveBackgroundChoice(style);
} 

// function to save background selection to localStorage
function saveBackgroundChoice(style) {

    window.localStorage.setItem("backgroundchoice", style);
}

// Set initial background to gradient 
if (window.localStorage.backgroundchoice) {
	setBackground(window.localStorage.backgroundchoice);
	backgroundForm.value = window.localStorage.backgroundchoice;
} else {
	setBackground("gradient");
}


