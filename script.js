function bold() {
	document.getElementById("texto").style.fontWeight = "bold";
}

function italic() {
	document.getElementById("texto").style.fontStyle = "italic";
}

function underline() {
	document.getElementById("texto").style.textDecoration = "underline";
}

function strike() {
	document.getElementById("texto").style.textDecoration = "line-through";
}

function alignLeft() {
	document.getElementById("texto").style.textAlign = "left";
}

function alignCenter() {
	document.getElementById("texto").style.textAlign = "center";
}

function alignRight() {
	document.getElementById("texto").style.textAlign = "right";
}


function fontSize(size) {
	document.getElementById("texto").style.fontSize = size;
}

function fontFamily(family) {
	document.getElementById("texto").style.fontFamily = family;
}

function clear() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("texto").style.fontWeight = "normal";
	document.getElementById("texto").style.textAlign = "left";
	document.getElementById("texto").style.fontStyle = "normal";
	document.getElementById("texto").style.textTransform = "capitalize";
	document.getElementById("texto").value = " ";
}