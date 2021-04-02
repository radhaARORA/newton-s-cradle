
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImg;
function preload()
{
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var bobObj1=createSprite(circle(350,120,10));
var bobObj2=createSprite(circle(380,120,10));
var bobObj3=createSprite(circle(410,120,5));
var bobObj4=createSprite(circle(440,120,5));
var bobObj5=createSprite(circle(490,120,5));

rope1=new Chain(bobObj1.body.roofObj.body,bobDiameter*2,8);
rope2=new Chain(bobObj2.body.roofObj.body,bobDiameter*2,8);
rope3=new Chain(bobObj3.body.roofObj.body,bobDiameter*2,8);
rope4=new Chain(bobObj4.body.roofObj.body,bobDiameter*2,8);
rope5=new Chain(bobObj5.body.roofObj.body,bobDiameter*2,8);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



