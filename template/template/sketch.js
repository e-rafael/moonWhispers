//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,50); //an RGB color for the canvas' background, blue-black
  //circle
    ellipse(random(width),random(height),1,1);//twinkling stars
  stroke(255,255,127); // an RGB color for the circle's border
  ellipse(width/2,height/2,300,300); // center of canvas, 300px dia  
	var r = map(mouseX, 0, width, 0, 255); // red
	var g = map(mouseX, 0, width, 0, 255); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
	fill(r, g, b);
	var x = width / 2;
	var y = height / 2;
	var s = width / 2;
	ellipse(x, y, s);
  ellipse(width/2,height/2,300,300); // center of canvas, 300px dia
  stroke(255,255,255);  
  fill(255,255,255,255);  
  ellipse(190,225,75,75);//left eye 
  ellipse(310,225,75,75);//right eye
  stroke(227,227,227,255);
  fill(227,227,227,255);
  ellipse(190,230,75,75);//left eye overlap
  ellipse(310,230,75,75);//right eye overlap
  ellipse(mouseX,mouseY,5,5)//mouse ellipse like shooting star 
  textSize(12);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("and the moon whispers...",390,40)//text in upper right
    rectMode(CENTER);
	var x = width/2;
	var y = height/2;
	var s = 100; // size
	var o = 50; // offset
	var mouthSize = map(mouseX, 0, width, 5, 30); // move mouth with mouse x
	mouthSize = max(0, mouthSize); // prevents negative value error
	rect(x, y + o, s/2, mouthSize, 5); // mouth    
}
