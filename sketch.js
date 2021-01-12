const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground1,ground2;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;

var polygon,polygonImage;
var polypos;

var catapault;

var score = 0;
var bg;

function preload()
{
  BG();
  polygonImage = loadImage("polygon.png");
}

function setup() 
{
  createCanvas(1280,720);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(200,300,50);
  World.add(world,polygon);

  polypos = polygon.position;


  ground1 = new ground(975,400,375,20);
  ground2 = new ground(975,600,250,20);

  block1 = new block(900,375,50,50);
  block2 = new block(925,375,50,50);
  block3 = new block(950,375,50,50);
  block4 = new block(975,375,50,50);
  block5 = new block(1000,375,50,50);
  block6 = new block(1025,375,50,50);
  block7 = new block(1050,375,50,50);

  block8 = new block(925,350,50,50);
  block9 = new block(950,350,50,50);
  block10 = new block(975,350,50,50);
  block11 = new block(1000,350,50,50);
  block12 = new block(1025,350,50,50);

  block13 = new block(950,325,50,50);
  block14 = new block(975,325,50,50);
  block15 = new block(1000,325,50,50);

  block16 = new block(975,300,50,50);


  block17 = new block(925,575,50,50);
  block18 = new block(950,575,50,50);
  block19 = new block(975,575,50,50);
  block20 = new block(1000,575,50,50);
  block21 = new block(1025,575,50,50);

  block22 = new block(950,550,50,50);
  block23 = new block(975,550,50,50);
  block24 = new block(1000,550,50,50);

  block25 = new block(975,525,50,50);

  catapault = new slingshot(polygon,{x:200,y:300});
}

function draw() 
{
  Engine.update(engine);

  background(bg);  
  BG();

  imageMode(CENTER);
  image(polygonImage,polypos.x,polypos.y,50,50);

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();

  block16.display();


  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  
  block22.display();
  block23.display();
  block24.display();

  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  
  block13.score();
  block14.score();
  block15.score();

  block16.score();


  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  
  block22.score();
  block23.score();
  block24.score();

  block25.score();

  catapault.display();

  textSize(20);
  text("SCORE : "+score,750,40)
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.launch();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(polygon,{x:200,y:300})
    catapault.attach(polygon);
  }
}

async function BG()
{
  var getData = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var dataType = await getData.json();
  var dateTime = await dataType.datetime;
  var hour = dateTime.slice(11,13);

  if(hour>=6 && hour <= 19)
  {
    bg = loadImage("light.png");
  }
  else
  {
    bg = loadImage("loadImage("dark.png");;
  }
}
