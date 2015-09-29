var yCoord = 0;
var xCoord = 0;
var movAbe = function(){
	document.getElementById(yCoord.toString() + xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
};
var hideAbeDown = function(){
	document.getElementById((yCoord - 1).toString() + xCoord.toString()).innerHTML = "";
};

var hideAbeUp = function(){
	document.getElementById((yCoord + 1).toString() + xCoord.toString()).innerHTML = "";
};

var hideAbeLeft = function(){
	document.getElementById(yCoord.toString() + (xCoord + 1).toString()).innerHTML = "";
};

var hideAbeRight = function(){
	document.getElementById(yCoord.toString() + (xCoord - 1).toString()).innerHTML = "";
};

movAbe();



function movDown() {
	
	
	if (yCoord === 2){
		alert("D'oh!!!");
	}
	else {
		yCoord++;
		hideAbeDown();
		movAbe();
	};
}

function movUp() {
	
	
	if (yCoord === 0){
		alert("D'oh!!!");
	}
	else {
		yCoord--;
		hideAbeUp();
		movAbe();
	};
}

function movLeft() {
	
	
	if (xCoord === 0){
		alert("D'oh!!!");
	}
	else {
		xCoord--;
		hideAbeLeft();
		movAbe();
	};
}

function movRight() {
	
	
	if (xCoord === 2){
		alert("Don't have cow, man!");
	}
	else {
		
		xCoord++;hideAbeRight();
		movAbe();
	};
}

