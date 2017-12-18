// Event listener on cog icon - opens/closes settings menu

var cog = document.getElementById("cog");
var settingsMenu = document.querySelector(".popupMenu");


cog.addEventListener('click', function() {
	console.log("This is working")
	settingsMenu.classList.toggle("hidden");
});

// Event listener on plus sign icon - open/closes add item menu

