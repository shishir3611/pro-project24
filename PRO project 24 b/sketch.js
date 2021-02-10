
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Bin1 = new Bin(500,630,20,100);
	Bin2 = new Bin(610,670,200,20);
	Bin3 = new Bin(720,630,20,100);
	
	Ground1 = new Ground();

	Paper1 = new Paper(100,500,25);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Bin1.display();
  Bin2.display();
  Bin3.display();
  Ground1.display();
  Paper1.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x: 100, y:-100})
	}
}

