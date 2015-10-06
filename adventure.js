

function Adventure(startX, startY, endX, endY, bound) {
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;	
	this.endY = endY;
	this.bound = bound;
};

var Adventure = new Adventure(0, 0, 2, 2, 3);


adventure.movAbe = function(){
	document.getElementById(
		adventure.yCoord.toString() + adventure.xCoord.toString()
		).innerHTML = "<img src=\"small_abe.png\"></img>";
};
	
adventure.killAbe= function() {
	document.getElementById(adventure.endY.toString() + 
		adventure.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

adventure.hideAbe = function (xChange, yChange) {
	document.getElementById((adventure.yCoord + yChange).toString() + 
		(adventure.xCoord + xChange).toString()).innerHTML = "";
};

adventure.target = function(){
	document.getElementById(adventure.endY.toString() + 
		adventure.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};