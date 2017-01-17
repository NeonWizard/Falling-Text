let fallInterval = 10;

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

	// Start at top of screen
	faller.fallPos = -50;
	faller.style.top = "-50px";

	// Style to give depth
	faller.depth = Math.floor(Math.random() * 4 + 1); // Start at random depth (1, 5) exclusive
	faller.style.color = "rgb(" + 63*faller.depth + ", " + 63*faller.depth + ", " + 63*faller.depth + ")";
	faller.style.fontSize = (1 + (faller.depth-4)*.1) + "em";

	// Position the text horizontally without overflowing the right side of the screen
	setTimeout(() => {
		faller.style.left = (Math.random() * (window.innerWidth - faller.clientWidth)) + "px"; // Start at random x location		
	}, 0);

	// Apply modifiers
	if (modifiers.rainbow) {
		faller.style.color = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
	}

	document.body.appendChild(faller);
}
