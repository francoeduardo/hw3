
createCanvas(340,340);

background (240);
strokeWeight(1);

for (var x=1; x<=170; x=x+5) {
  line(0, x, 170, x);
  line(170,x,170+x,0);
  line(170+x,170,340,x);
  line(1,170+x,170-x,360);
  line(x,170,170,360-x);
  line(170+x,170,170+x,340);
}
