function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(244,67,54);
  } else if (key == 'G') {
    fill(139, 195, 74);
  } else if (key == 'B') {
    fill(3, 169, 244); 
  } else if (key == 'O') {
    fill (255,152,0);
	} else if (key == 'P') {
    fill (233,30,99);
  } else if (key == 'C') {
    fill (0,188,212);
  }
}
