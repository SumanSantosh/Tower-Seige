const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function preload(){
  polygonImg=loadImage("polygon.png")
}
function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level

  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);

  BlockBlue5 = new Box(280, 182, 20, 20);

  BlockBlue6 = new Box(300, 182, 20, 20);

  BlockBlue7 = new Box(320, 182, 20, 20);

  //second level
  BlockPink1 = new Box(201, 2, 20, 20);

  BlockPink2 = new Box(220, 2, 20, 20);

  BlockPink3 = new Box(240, 2, 20, 20);

  BlockPink4 = new Box(260, 2, 20, 20);

  BlockPink5 = new Box(280, 2, 20, 20);

  BlockPink6 = new Box(300, 2, 20, 20);

  BlockPink7 = new Box(320, 2, 20, 20);

  //third level

  BlockBlue8  = new Box(202, 182, 20, 20);

  BlockBlue9  = new Box(220, 182, 20, 20);

  BlockBlue10 = new Box(240, 182, 20, 20);

  BlockBlue11 = new Box(260, 182, 20, 20);

  BlockBlue12 = new Box(280, 182, 20, 20);

  BlockBlue13 = new Box(300, 182, 20, 20);

  BlockBlue14 = new Box(320, 182, 20, 20);

  polygon = Bodies.circle(70,90,20)
  World.add(world,polygon)

  sling = new SlingShot(this.polygon, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();
  fill("blue")
  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();
  fill("pink")
  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();
  fill("blue")
  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,30,30)
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

