
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	Bin1 = new Bin(800,530,250,300);
	
	Ground1 = new Ground();

	Paper1 = new Paper(200,500,200,200);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Bin1.display();
  Ground1.display();
  Paper1.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x: 1500, y:-2300})
	}
}

