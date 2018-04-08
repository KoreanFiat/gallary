function drawCloud( x, y, z,w, k){
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}

function drawFrog( x,  y,  size) {  
  noStroke();

  /*head*/
  fill(53, 182, 44);
  ellipse(x, y-size/4.8, size/1.25, size/1.5); 
  ellipse(x-size/4.8, y-size/2, size/4, size/4); 
  ellipse(x+size/4.8, y-size/2, size/4, size/4); 

  /*body*/
  ellipse(x, y+size/4, size, size); 
  fill(109, 200, 59);
  ellipse(x, y+size/3.7, size/1.6, size/1.5);

  /*legs*/
 
  fill(53, 182, 44);
  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);
  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);
  rect(x+size/3, y+size/2, size/3, size/4.8, 100);
  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);
/*eyes*/
  fill(255); 
  ellipse(x-size/4.8, y-size/2, size/6, size/6); 
  ellipse(x+size/4.8, y-size/2, size/6, size/6); 

  fill(0); 
  ellipse(x-size/4.8, y-size/2, size/8, size/8); 
  ellipse(x+size/4.8, y-size/2, size/8, size/8);   

  ellipse(x-size/24, y-size/2.7, size/40, size/40); 
  ellipse(x+size/24, y-size/2.7, size/40, size/40); 

  fill(255); 
  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 
  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 

  /*cheek*/
  fill(200, 0, 0); 
  ellipse(x-size/4, y-size/3.9, size/4, size/4); 
  ellipse(x+size/4, y-size/3.9, size/4, size/4);

  /*mouth*/
  noFill();
  stroke(0);
  strokeWeight(size/55);
  arc(x, y-size/3.5, size/3, size/4, 0, PI);
} 

function drawHouse( x,  y) {
  drawBodyOfHouse(x+-2,y+2);
  drawTallWindow(x+243,y+495);
  drawTallWindow(x+458,y+495);
  drawWideWindow(x+320,y+380);
  drawDoor(x+339,y+495);
  drawRoof(x+119,y+319);
  drawChimney(x+213,y+256);
}
function drawBodyOfHouse( x,  y) {
  fill(255,150,0);
  rect(x+203,y+318,364,364);
}

function drawTallWindow(x,  y) {
  fill(160,200,255); // skyblue
  rect(x, y, 69, 129);
  strokeWeight(3);
  line(x,y+62,x+69,y+62);
  line(x+33,y,x+33,y+126);
}
function drawWideWindow( x,  y) {
  fill(98,164,255); // skyblue
  rect(x,y,125,76);
  strokeWeight(3);
  line(x,y+40,x+124,y+40);
  line(x+63,y,x+63,y+74);
}
function drawDoor( x,  y) {
  fill(193,94,0); // brown
  rect(x,y,93, 186);
  fill(0);
  ellipse(x+22,y+95,20,20);
}

function drawRoof(x, y) {
  fill(170,0,0); // red
  triangle(x, y, x+266, y+-177, x+530, y+0);
}
function drawChimney ( x,  y) {
  fill(227,240,232); // gray
  quad(x, y, x+70, y+-46, x+70, y+-150, x+0, y+-150);
}

function drawRabbit( f, x, y){
 
  
  ellipseMode(CENTER);
  rectMode(CENTER);

  noStroke();
  //Body
  fill(255,255,255);
  ellipse(x, y, 3*f/4 , 3*f/2);
   //face
  fill(255,255,255);
  ellipse(x, y-9*f/8,f,f);
  
   //mouse
  fill(0);
  triangle(x-f/8,y-9*f/8,x+f/8,y-9*f/8,x,y-15*f/16);

  //legs
  fill(255);
  ellipse(x-3*f/16,y+3*f/4,f/4,f*3/4);
  ellipse(x+3*f/16,y+3*f/4,f/4,f*3/4);
  
  //arms
  fill(255);
  ellipse(x-f/5,y-f/2,3*f/4,3*f/8);
  ellipse(x+f/5,y-f/2,3*f/4,3*f/8);
 
  //ears
  fill(255);
  ellipse(x-(3*f)/16, y-3*f/2,f/4,f*3/4);
  ellipse(x+(3*f)/16,y-3*f/2,f/4, f*3/4);
    
  //ear pink
  fill(255,128,204,80);
  ellipse(x-(3*f)/16,y-10*f/6, f/8,f/8);
  ellipse(x+(3*f)/16, y-10*f/6,f/8,f/8);
    
    
    
   //eyes
  fill(0);  
  ellipse(x+f/8,y-5*f/4, f/26,  f/26);
  fill(0);
  ellipse(x-f/8,y-5*f/4,  f/26,  f/26);
  
}



function drawRose( x,y, diameter){
  translate(x, y);
  stroke(42, 116, 32);
  strokeWeight(25);
  curve(-100, 0, 0, diameter / 2,
       0, diameter * 2, -400, diameter * 2 + 50); 
  stroke(0);
  strokeWeight(5);
  fill(222, 11, 15);
  for( i = 0; i < 6; i++) {
    arc(-(diameter / 2) * 0.5, 0, (diameter / 2) * sqrt(3),
        (diameter / 2) * sqrt(3), radians(90), radians(270));
    rotate(radians(60));
  }
  fill(245, 95, 25);
  for ( i = 0; i < 6; i++) {
    arc(0, -((diameter / 2) * sqrt(3) * 0.5),
        diameter / 2, diameter / 2, radians(180), radians(360));
    rotate(radians(60));
  }
 
 fill(255, 128, 0);
  ellipseMode(CENTER);
  ellipse(0, 0, diameter, diameter);
  fill(232, 94, 96);
  rectMode(CENTER);
  rectwid= diameter / sqrt(2);
  for ( i = 0; i < 7; i++) {
    rect(0, 0, rectwid, rectwid);
    rectwid = (rectwid / 2) * sqrt(2);
    rotate(radians(45));
  }
  rotate(radians(45));
  fill(84, 178, 70);
 x1 = 47;
 y1 = diameter + diameter / 3;
 x2 = diameter / 6 + diameter / 2;
 y2 = diameter + diameter / 80;
 x3 = diameter / 6 + diameter / 1.1;
 y3 = diameter + diameter / 10;
 x4 = diameter / 6 + diameter / 1.5;
 y4 = diameter + diameter / 2.5;
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  line(x1, y1, x3, y3);
  translate(-x, -y);
}

function drawManbo( x, y,size){ 
/* x= x position
   y= y position
   size= size
   */
  strokeWeight(size*0.007);
    stroke(0);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
  stroke(0);
 ellipse(x,y-0.48*size,size*0.55,size*0.4);
//face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
  //eye
 strokeWeight(size*0.007);
 stroke(0);
 line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
 line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
 //tooth
 noFill();
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
 arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
 arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
 //mouse
 arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
ellipse(x,y-size*0.02, size*0.98,size*0.75);
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(230), radians(310));
  arc(x,y-size*0.353,size,size*0.9,radians(48),radians(133));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(340.8),radians(368));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(172),radians(199)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(222),radians(318));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
 //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
  
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);
}



function setup ()
{
  createCanvas(1280,800);
 background(106,174,255);
   fill(23,188,54);
   rect(0, 600, 1280, 200);
   
  drawCloud(200,100,70,50,248);
  drawCloud(400,150,70,50,248);
  drawCloud(600,110,70,50,248);
  drawFrog(220,600,80);
  drawHouse(600,50);
  drawRabbit(70,750,600);
  drawRose(400,550,50);  
  drawManbo(600,600,200);
}