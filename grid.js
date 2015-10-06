//var grid = [0][0, 1, 2], [1] [0, 1, 2], [2] [0,1,2];

//function coordinate(x,y) {
	//this.x = x;
	//this.y = y;
//}

 //var makegrid = new coordinate();



 //};


//var grid = function(){
	// for{i=0, i < 3, }

	//}
	
//}

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  //var bC = document.getElementById("tableColor").value;
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblbody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < document.getElementById("xValue").value; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < document.getElementById("yValue").value; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      //var cellText = document.createTextNode("cell in row "+i+", column "+j);
      //cell.appendChild(cellText);
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblbody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblbody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "3");
  //tbl.setAttribute("background-color", "bC");
}

// generate_table() {
	
// }