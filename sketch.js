function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  
  var particles =[];
  var plinkos =[];
  var division =[];
  var division =300;

  for (var k=0;k<=Width;K=K+80){
   divisions.push(new Divisions(k,height=divisionHeight/2,10,divisionHeight));
  }

  for(varj=40;j<=width;J=J+50)
  {
    plinkos.push(new plinkos(j,75));
  }

 for(var J= 15; j<width-10;j=j+50)
 {
   plinkos.push(new plinko(j,175));
 }

  ground = new Ground(600,height,1200,20);
}
for(var j=0;j<particles.length;j++){
  particles[j].display();
}
for(var k=0;k<divisions.length.length;k++) {
  divisions[k].display();
}


if (frameCount%60===0)
particles.push(new particle(random(width/2-10,width/2+10),10,10));



function draw() {
  background(255,255,255); 
  
  ground.display()
  drawSprites();
}