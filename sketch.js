
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer;
var stone;
var rubber;

function setup() {
 var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,100);
  Plane  = new Plane(600,height,1200,20);
  Stone  = new Stone(700,320,70,70);
  Rubber = new Rubber(400,450,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  hammer.display();
  Plane.display();
  Stone.display();
  Rubber.display();
  drawSprites();
 
}



