var thickness,wall;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
bullet =  createSprite(50, 200, 50, 50);
wall = createSprite(1200, 200, thickness, 250);

}

function draw() {
  background(255,255,255); 
  console.log(thickness);
  bullet.velocityX = speed;

    if(bullet.collide(wall)) {
       bullet.velocityX = 0;
      damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage<100000000 && damage>0){
        wall.shapeColor = "green"
    }
    if(damage>100000000){
        wall.shapeColor = "red"
    }
}
  drawSprites();
}
