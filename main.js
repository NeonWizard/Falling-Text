let modifiers = {rainbow: false, reverse: false};

// Start a 1/10 second timer that spawns a new falling text object with input's text
let input = document.getElementById("input");
setInterval(() => {
	if (input.value != "") {
		createFallingText(input.value);
	}
}, 100);


// Retrieve information from URL
let params = new URLSearchParams(window.location.search);

// If there's a text option provided in the URL, don't create a textbox in the middle and
// set falling text to be the text in the URL
let text = params.get("text");
if (text) {
	// document.getElementById("inputBox").style.visibility = "hidden";
	document.getElementById("inputBox").style.display = "none";
	input.value = text;
}

// Set modifiers
modifiers.rainbow = (params.get("rainbow") === "true");
modifiers.reverse = (params.get("reverse") === "true");


// Buttons
document.getElementById("toggleRainbow").addEventListener("click", function(e) {
	modifiers.rainbow = !modifiers.rainbow;
});