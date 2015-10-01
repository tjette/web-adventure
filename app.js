var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav')


adventure.movAbe();
adventure.target();


var mov =function(xDel, yDel, x, y, bound){
    
    if(adventure.xCoord === (adventure.endX + xDel) && adventure.yCoord === (adventure.endY + yDel)) {
        adventure.xCoord += x;
        adventure.yCoord += y;
        adventure.hideAbe(xDel, yDel);  
        adventure.killAbe();
        dead.play();
        alert("Whuuthaa!!??");
    }
    else if (adventure.yCoord === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (adventure.xCoord === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
        else {
        adventure.xCoord += x;
        adventure.yCoord += y;
        adventure.hideAbe(xDel, yDel);
        adventure.movAbe();
    }
};


var movDown = function () {
     mov(0, -1, 0, 1, 2);
};
var movUp = function () {
     mov(0, 1, 0, -1, 0);
};
var movLeft = function () {
     mov(1, 0, -1, 0, 0);
};
var movRight = function () {
    mov(-1, 0, 1, 0, 2);
};

var reset = function () {
    adventure.hideAbe(0,0);
    adventure.xCoord = 0;
    adventure.yCoord = 0;
    adventure.movAbe();
    adventure.target();
};




