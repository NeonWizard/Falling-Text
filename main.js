let input = document.getElementById("input");

setInterval(() => {
	if (input.value != "") {
		createFallingText(input.value);
	}
}, 100);
