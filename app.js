var yCoord = 0;
var xCoord = 0;

// Initializing the corrdinates of the target cell 
var endX = 2;
var endY = 2;

//Adding a function to replace the winning cell with a picture of dead Abe Simpson
var killAbe = function () {
	document.getElementById(endY.toString() + endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

//Adding a function to place an image at the target cell
var target = function(){
	document.getElementById(endY.toString() + endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};
    
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

//Adding a function to delete abe from the current cell when 'reset' is pressed
var hideAbeNow = function(){
	document.getElementById(yCoord.toString() + xCoord.toString()).innerHTML = "";
};

movAbe();
target();



function movDown() {
	
	
	if(xCoord === endX && yCoord === (endY - 1)) {
        yCoord++;
        hideAbeDown();	
        killAbe();
        alert("Whuuthaa!!??");
	}
	else if (yCoord === 2) {
        alert("D'oh!!!");
    }
        else {
        yCoord++;
		hideAbeDown();
		movAbe();
	};
}

function movUp() {
	
	if(xCoord === endX && yCoord === endY) {
        killAbe();
	   alert("WhuuThe!!??");
    }
	else if (yCoord === 0){
		alert("D'oh!!!");
	}
	else {
		yCoord--;
		hideAbeUp();
		movAbe();
	};
}

function movLeft() {
	
	if(xCoord === endX && yCoord === endY) {
        killAbe();
	   alert("WhuuThe!!??");
    }
	else if (xCoord === 0){
		alert("D'oh!!!");
	}
	else {
		xCoord--;
		hideAbeLeft();
		movAbe();
	};
}

function movRight() {
	
	if(xCoord === (endX - 1) && yCoord === endY) {
        xCoord++;
        hideAbeRight();
        killAbe();
	   alert("WhuuThe!!??");
    }
	else if (xCoord === 2){
		alert("Don't have cow, man!");
	}
	else {
		xCoord++;
        hideAbeRight();
		movAbe();
	};
}

function reset() {
    hideAbeNow();
    xCoord = 0;
    yCoord = 0;
    movAbe();
    target();
}
