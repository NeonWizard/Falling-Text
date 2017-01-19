var input = document.getElementById("input");

let modifiers = {rainbow: false, reverse: false, beeQuotes: false};


// ---------------------------
//   Falling interval setter
// ---------------------------
let fallingTimer = 0;
function setSpawnRate(msRate) {
	if (fallingTimer) clearInterval(fallingTimer);

	fallingTimer = setInterval(() => {
		if (input.value != "") {
			createFallingText(input.value);
		}
	}, msRate);
}


// -----------
//  Url stuff
// -----------
// Retrieve information from URL
let params = new URLSearchParams(window.location.search);

// Set modifiers
modifiers.rainbow = (params.get("rainbow") === "true");
modifiers.reverse = (params.get("reverse") === "true");
modifiers.beeQuotes = (params.get("beeQuotes") === "true");

// If there's a text or beeQuotes option provided in the URL, don't create a textbox in the middle
let text = params.get("text");
if (text || modifiers.beeQuotes) {
	document.getElementById("inputBox").style.display = "none";
}

// Set the falling text to either the text query or a quote from the bee API
if (text) input.value = text;
if (modifiers.beeQuotes) {
	getBeeQuote().then((quote) => {
		// Set input box's value to the quote (doesn't show up but used for data)
		input.value = quote;
		// Set spawn rate depending on length of the quote
		let lengthMod = Math.floor(quote.length / 20);
		setSpawnRate(100 + lengthMod*25);
	})
}


// ---------------
//  Button events
// ---------------
document.getElementById("toggleRainbow").addEventListener("click", function(e) {
	modifiers.rainbow = !modifiers.rainbow;
});


// Start the falling timer
setSpawnRate(100);
