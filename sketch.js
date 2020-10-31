var car;
var wall;
var speed;
var weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200, 50, 50);
  car.shapeColor = "white";
  wall = createSprite(1500,200, 60, 200);
  wall.shapeColor = "grey";
  speed=Math.round(random(45,100));
  weight=Math.round(random(400,3000));
  car.velocityX = speed;  
}

function draw() {
  background("black");
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}