var stepSize = 20;

function setup() {
  createCanvas(500, 500);
    
white = color(255);
    black = color(0);
    green = color(0,255,0);
    red = color(255,0,0);
    
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
    
    noStroke();
	var red = color(255, 0, 0);
	var green = color(0, 255, 0);
    var maroon = color(128,0,0);
    var gold = color(255,215,0);
	var scale = 1/(50+mouseX*2);

    // to add color to the grids
	for(var i=0; i<25; i++){
	  	for(var j=0; j<25; j++){
	  		//fill(lerpColor(green, red, noise(i/25, j/25, frameCount*scale)));
            fill(lerpColor(maroon, gold, noise(i/25, j/25, frameCount*scale)));
	  		rect(i*stepSize, j*stepSize, stepSize, stepSize);
	  	}
	  }




}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here
    
    stroke(0);
	var s = 1/(1000+mouseX*100);
	translate(12.5, 12.5);

    // for the lines to rotate in different directions when mouse is near
	for(var i=0; i<25; i++){
	  	for(var j=0; j<25; j++){
	  		push();
	  		translate(i*stepSize, j*stepSize);
			rotate(map(noise(i/250, j/250, frameCount*s),0, 1, 0, 720));
	  		line(0, 0, stepSize, stepSize-stepSize);
	  		pop();
	  	}	
	  }
	
}
