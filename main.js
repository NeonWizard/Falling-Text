let curFaller = null;

function input_onKeyPress() {
	if (curFaller) { window.clearInterval(curFaller); }

	let inputbox = document.getElementById("input");
	curFaller = setInterval(function() { createFallingText(inputbox.value); }, 100);
}
