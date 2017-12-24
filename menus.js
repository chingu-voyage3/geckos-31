// Event listener on cog icon - opens/closes settings menu
var plusSign = document.getElementById("plusSign");
var cog = document.getElementById("cog");
// var placeholders = document.querySelectorAll('.placeholder');

var plusSignMenu = document.querySelector(".plusSignMenu");
var settingsMenu = document.querySelector(".settingsMenu");

plusSign.addEventListener('click', function() {
	console.log("plus sign menu is working")
	plusSignMenu.classList.toggle("hidden");
});

// for (var i = 0; i< placeholders.length; i++) {
// 	placeholders[i].addEventListener('click', function (){
// 		plusSignMenu.classList.toggle('hidden');
// 	})
// }

cog.addEventListener('click', function() {
	console.log("settings menu is working")
	settingsMenu.classList.toggle("hidden");
});


// Event listener on plus sign icon - open/closes add item menu

