// Event listener on cog icon - opens/closes settings menu
var plusSign = document.getElementById("plusSign");
var minusSign = document.getElementById("minusSign");
var cog = document.getElementById("cog");
var plusSignMenu = document.querySelector(".plusSignMenu");
var minusSignMenu = document.querySelector(".minusSignMenu");
var settingsMenu = document.querySelector(".settingsMenu");


// Menu Event Listeners
plusSign.addEventListener('click', function() {
	toggleHideMenu(plusSignMenu);
});

minusSign.addEventListener('click', function() {
	toggleHideMenu(minusSignMenu);
})

cog.addEventListener('click', function() {
	toggleHideMenu(settingsMenu);
});


// Functions for Event Listeners
function toggleHideMenu(menu) {
	menu.classList.toggle("hidden");
	if (menu === plusSignMenu) {
		clearAddTileFields();
	}
	if (menu === minusSignMenu) {
		toggleEditMode();
		console.log("calling toggleEditMode");
	}
}