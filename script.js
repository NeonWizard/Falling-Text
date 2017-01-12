let fallInterval = 5;

setInterval(fall, fallInterval);

function fall() {
	fallItems = document.getElementsByClassName("falling");
	for (let i = 0; i < fallItems.length; i++) {
		let fallItem = fallItems[i];
		
		// Increase the position property
		fallItem.fallPos += (fallInterval*fallItem.fallSpeed) * .1;

		// Delete the element once it's fallen too far
		if (fallItem.fallPos > window.innerHeight) {
			document.body.removeChild(fallItem);
		}

		// Set the actual CSS styling to the position property
		fallItem.style.top = fallItem.fallPos + "px";
	}
}

function createFallingText(text) {
	var faller = document.createElement("P");

	faller.appendChild(document.createTextNode(text));
	faller.className = "falling";

	// Set properties of the faller
	faller.fallPos = 0; // Start at top of screen
	faller.style.left = (Math.random() * (window.innerWidth - 200)) + "px"; // Start at random x location
	faller.fallSpeed = Math.random() * 3 + 1; // Start at random speed (1, 4)

	document.body.appendChild(faller);
}

setInterval(function() { createFallingText("penis from sky"); }, 500);
createFallingText("this is falling text");
