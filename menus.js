var cog = document.getElementById("cog");
var popupMenu = document.querySelector(".popupMenu");


cog.addEventListener('click', function() {
	console.log("This is working")
	popupMenu.classList.toggle("hidden");
});

