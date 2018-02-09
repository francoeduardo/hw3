createCanvas(340,340);

background (0);
noStroke(0);
fill(255,255,255);


for (var x=15; x<width; x=x+30) {
  for (var y=15; y<height; y=y+30)
  ellipse(x,y,20,20);
}
