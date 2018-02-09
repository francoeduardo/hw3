createCanvas(340,340);

background (255);
strokeWeight(2);
noFill();

//for (var x=10; x<340; x=x+10) {
//  line(170, 0, x, 340);
//}

//line(160,0,180,0);
//line(150,10,190,10);
//line(140,20,200,20);
//line(130,30,210,30);

for (var x=160; x>10; x=x-10) {
  for (var y=1; y>170; y=y+10) {
    for (var z=180; z<340; z=z+10) {
      line(x,y,z,y);
    }
  }
