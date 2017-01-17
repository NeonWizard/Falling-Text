let input = document.getElementById("input");

setInterval(() => {
	if (input.value != "") {
		createFallingText(input.value);
	}
}, 100);

// If there's a text option provided in the URL, don't create a textbox in the middle and
// set falling text to be the text in the URL
let params = new URLSearchParams(window.location.search);
let text = params.get("text");
if (text) {
	document.getElementById("inputBox").style.visibility = "hidden";
	input.value = text;
}
