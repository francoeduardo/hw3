createCanvas(340,340);

background (255);
strokeWeight(2);
noFill();

for (var x=10; x<340; x=x+10) {
  ellipse(170, 170, x, x);
}
