var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3,wall4;

var divider1,divider2,divider3

var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight4;
var thickness1,thickness2,thickness3,thickness4;

var formula;

function setup() {
  createCanvas(1200,400);

  speed1=random(223,321);
  weight1=random(30,52);
  speed2=random(223,321);
  weight2=random(30,52);
  speed3=random(223,321);
  weight3=random(30,52);
  speed4=random(223,321);
  weight4=random(30,52);

  bullet1=createSprite(100, 50, 20, 10);
  bullet1.velocityX=speed1;
  bullet1.shapeColor=255;
  bullet2=createSprite(100, 150, 20, 10);
  bullet2.velocityX=speed2;
  bullet2.shapeColor=255;
  bullet3=createSprite(100, 250, 20, 10);
  bullet3.velocityX=speed3;
  bullet3.shapeColor=255;
  bullet4=createSprite(100, 350, 20, 10);
  bullet4.velocityX=speed4;
  bullet4.shapeColor=255;
  
  thickness1=random(22,83);
  thickness2=random(22,83);
  thickness3=random(22,83);
  thickness4=random(22,83);

  wall1=createSprite(1100, 50, thickness1, 50);
  wall1.shapeColor=rgb(80,80,80)
  wall2=createSprite(1100, 150, thickness2, 50);
  wall2.shapeColor=rgb(80,80,80)
  wall3=createSprite(1100, 250, thickness3, 50);
  wall3.shapeColor=rgb(80,80,80)
  wall4=createSprite(1100, 350, thickness4, 50);
  wall4.shapeColor=rgb(80,80,80)
  
  divider1=createSprite(600, 100, 1200, 10);
  divider1.shapeColor=255;
  divider2=createSprite(600, 200, 1200, 10);
  divider2.shapeColor=255;
  divider3=createSprite(600, 300, 1200, 10);
  divider3.shapeColor=255;
}

function draw() {
  background(0);

  collide(bullet1,wall1,speed1,weight1,thickness1);
  collide(bullet2,wall2,speed2,weight2,thickness2);
  collide(bullet3,wall3,speed3,weight3,thickness3);
  collide(bullet4,wall4,speed4,weight4,thickness4);

  drawSprites();
}

function collide (bullet,wall,speed,weight,thickness) {

  if (bullet.x-wall.x < bullet.width/2 + wall.width/2 && wall.x-bullet.x < bullet.width/2 + wall.width/2 && bullet.y-wall.y < bullet.height/2 + wall.height/2 && wall.y-bullet.y < bullet.height/2 + wall.height/2) {

    bullet.velocityX=0;

    formula = (0.5*weight*speed*speed)/thickness*thickness*thickness;

    if (formula <= 10) {
      bullet.shapeColor=rgb(0,255,0);
    }

    if (formula >= 10) {
      bullet.shapeColor=rgb(255,0,0);
    }
  }
}