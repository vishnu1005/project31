const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionHeight=300;

var particles=[];
var plinkos=[];
var divisions=[];

function preload()
{

}



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1,790,1000,20);
 
}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  for(var k=0;k<=width;k=k+80)
  {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  ground.display();
  displaydivisions();
  drawSprites();
}

function displaydivisions()
{
  
}