let fallInterval = 5;

setInterval(fall, fallInterval);

function fall() {
	fallItems = document.getElementsByClassName("falling");
	for (let i = 0; i < fallItems.length; i++) {
		let fallItem = fallItems[i];
		
		// Increase the position property
		let speed = fallInterval * ((fallItem.depth + 4) / 4)
		fallItem.fallPos += speed * .1;

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
	faller.depth = Math.floor(Math.random() * 4 + 1); // Start at random depth (1, 5) exclusive
	faller.style.color = "rgb(" + 63*faller.depth + ", " + 63*faller.depth + ", " + 63*faller.depth + ")";
	faller.style.fontSize = (1 + (faller.depth-4)*.1) + "em";

	document.body.appendChild(faller);
}

setInterval(function() { createFallingText("penis from sky"); }, 100);
