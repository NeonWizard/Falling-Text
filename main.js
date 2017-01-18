let input = document.getElementById("input");

let modifiers = {rainbow: false, reverse: false, beeQuotes: false};

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
		input.value = quote;
	})
}


// ---------------
//  Button events
// ---------------
document.getElementById("toggleRainbow").addEventListener("click", function(e) {
	modifiers.rainbow = !modifiers.rainbow;
});


// ----------------------------
//   Start the falling timer
// ----------------------------
// Start a 1/10 second timer that spawns a new falling text object with input's text
setInterval(() => {
	if (input.value != "") {
		createFallingText(input.value);
	}
}, 100);
