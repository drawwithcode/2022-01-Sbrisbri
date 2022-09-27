function preload() {
}

function setup() {
  //I want the Canvas big as my screen
  createCanvas(windowWidth, windowHeight);
  //Set angleMode and strokeCap in the setup() because they are not going to change in the sketch
  angleMode(DEGREES); 
  strokeCap(SQUARE);
}

function draw() {
  background(220, 209, 192);

//The first things that I draw are the two line bundles generated with the "for" cicle
push();//I use the push() function and the pop() function to isolate each block of code in order to create inter-independent transformations
stroke(236, 195, 113, 160);//set stroke color of each line, the fourth parameter is the alpha value and set the transparency of the color
strokeWeight(1);//Set stroke weight of each line
for(let a = 400; a < 500; a += 1.5){ //I want to draw a line each 1.5 pixels, the line starts when x = 400 and the cycle will stop when x gets close to x = 500
    line(a, 0, a * 3, windowHeight);
}
//This is the code for the second line bundle, it is generated with the "for" cycle like the previous one
stroke(133, 161, 172, 160);
strokeWeight(1);
for(let b = 400; b < 500; b += 1.5){
  line(windowWidth - b, 0, windowWidth - (b * 2), windowHeight);
}
pop();

//This is the code to draw the circles that are on the canvas. For each circle I set the stroke color, stroke weight and the fill (not all of the have the stroke, in that case I just use the function noStroke())
push();
noStroke();
fill(142, 178, 174, 130);
circle(810, windowHeight / 2 + 15, 210, 210);//The first two parameters of the circle correspond to the position on the center of the circle, while the other two parameters correspond to the width and the height of the circle
noStroke();
fill(232, 50, 62, 190);
circle(900, windowHeight / 2, 120, 120);
noStroke();
fill(174, 102, 139, 160);
circle(955, windowHeight / 2 - 45, 75, 75);
stroke(0, 0, 0, 160);
noStroke();
fill(253, 150, 61, 130);
circle(945, windowHeight / 2 + 50, 35, 35);
noStroke();
fill(0, 0, 0, 160);
circle(945, windowHeight / 2 + 50, 15, 15);
stroke(0, 0, 0, 160);
strokeWeight(4);
fill(253, 150, 61, 130);
circle(855, windowHeight / 2 - 60, 160, 160);
strokeWeight(6);
stroke(0, 0, 0, 160);
fill(174, 102, 139, 160);
circle(680, windowHeight / 2 + 150, 40, 40);
pop();

//This is the code to draw the four static lines close to the purple circle that has the black stroke. I set the coordinates of their start and end points so that the lines were parallel
push();
strokeWeight(1);
stroke(0, 0, 0, 160);
translate(650, windowHeight / 2 + 170);//Translation applied to all lines, translation from the starting point of each line
rotate(-70);//Counterclockwise rotation because there is the minus sign
line(30, 0, 30, 80);
line(40, 0, 40, 80);
line(50, 0, 50, 80);
line(60, 0, 60, 80);
pop();

//Translation and draw the orange triangle
push();
noStroke();
fill(253, 150, 61, 190);
translate(550, 300);
triangle(45, 0, 90, 75, 15, 75);
pop();

//Translation, scaling, rotation and draw the purple triangle
push();
fill(174, 102, 139, 160);
stroke(0, 0, 0, 160);
strokeWeight(4 + 2 / 3);
translate(550, 300);
scale(2 / 3);
rotate(-frameCount);//The speed of the rotation depends on the FrameCount and the rotation is counterclockwise because there is the minus sign
triangle(45, 0, 90, 75, 15, 75);
pop();

//Translation, scaling, rotation and draw the red triangle
push();
noStroke();
fill(232, 50, 62, 130);
translate(550, 300);
scale(1.5);
rotate(frameCount);//The movement depends on the frameCount and the rotation this time is clockwise 
triangle(45, 0, 90, 75, 15, 75);
pop();

//Draw the three lines that are moving along the x-axis 
push();
stroke(0, 0, 0, 160);
strokeWeight(1);
line(frameCount + 500, 320, frameCount  + 650, 320);//The movement depends on the frameCount
line(frameCount + 500, 340, frameCount  + 650, 340);
line(frameCount + 500, 360, frameCount  + 650, 360);
pop();

//Draw the three lines that are moving along the y-axis 
push();
stroke(0, 0, 0, 160);
strokeWeight(1);
line(800, frameCount + 100, 800, frameCount + 250);//The movement depends on the frameCount
line(820, frameCount + 100, 820, frameCount + 250);
line(840, frameCount + 100, 840, frameCount + 250);
pop();

//Draw the circle with the black stroke whose width and height depend on the movement of the mouse 
push();
stroke(0, 0, 0, 160);
strokeWeight(10);
noFill();
circle(windowWidth / 2, windowHeight / 2, mouseX, mouseY);//MouseX and mouseY say that the diameter depends on the movement of the mouse
pop();

//Translation, rotation and then draw two lines (the transformation that is written last is the one that occurs last)
push();
stroke(0, 0, 0, 160);
strokeWeight(2);
translate(550, 220);
rotate(-25);
line(300, 0, 0, 35);
line(370, 0, 100, 45);
pop();

//Translation and then draw five lines 
push();
stroke(0, 0, 0, 160);
strokeWeight(2);
translate(770, 450);
line(70, 0, 280, 80);
line(120, 0, 340, 90);
line(360, 0, 60, 90);
line(300, 0, 10, 80);
line(410, 0, 60, 120);
pop();

//Translation and then draw two lines 
push();
stroke(0, 0, 0, 160);
strokeWeight(1);
translate(500, 100);
line(50, 0, 400, 250);
line(65, 0, 440, 210);
pop();

//Draw three lines that are dynamics: some coordinates of these lines depend on mouse movement
push();
strokeWeight(1);
line(500, mouseY, mouseX, 350);
line(mouseX, windowHeight / 2 - 100, 500, mouseY);
line(700, mouseY, mouseX, 150);
pop();

//Translation before drawing each circle (three circle in total) and before writing the text. Either the circles and the text disappear when the mouse is clicked thanks to the "if" statement 
//First circle
push();
translate(0, 640);
if(mouseIsPressed){ //With this "if" statement I'm saying that if I click with the mouse the circle won't have a fill, but if I don't click with the mouse th circle will have a fill
  noFill();
}else{
  fill(133, 161, 172, 160);
}
noStroke();
circle(35, 20, 45, 45);
pop();

//Second circle
push();
translate(0, 640);
if(mouseIsPressed){
  noFill();
}else{
  fill(253, 150, 61, 160);
}
noStroke();
circle(390, 40, 35, 35);
pop();

//Third circle
push();
translate(0, 640);
if(mouseIsPressed){
  noFill();
}else{
  fill(174, 102, 139, 160);
}
noStroke();
circle(400, 55, 20, 20);
pop();

//Text
push();
translate(0, 640);
if(mouseIsPressed){
  noFill();
}else{
  fill(0, 0, 0);
}
textSize(14);//Set the text size
text("Move the mouse to edit the artwork and then click to save it", 20, 40);
pop();

}

//I want all the movements to stop when I click with the mouse and that each element become a static element. Do do it I need to use the mousePressed() funcion
function mousePressed(){
  noLoop();//noLoop() means that all the elements that were moving, now they are not moving anymore
}
