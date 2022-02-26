
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine=Engine.create()
	world=engine.world


	engine = Engine.create();
	world = engine.world;

	var balloptions= {
		restitution: 1,
	}

	var groundoptions= {
		isStatic: true
	}

	ground=Bodies.rectangle(0,670,300,10,groundoptions)
	lside=Bodies.rectangle(500,620,0,0,groundoptions)
	rside=Bodies.rectangle(700,620,10,0,groundoptions)
	World.add(world,ground)
	World.add(world,lside)
	World.add(world,rside)
	//Create the Bodies Here.
	ball=Bodies.circle(130,500,20,balloptions)
	World.add(world,ball)
	Engine.run(engine);

	
	
  
}


function draw() {
  ellipseMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,width,height)
  rect(lside.position.x,lside.position.y,10,50)
  rect(rside.position.x,rside.position.y,10,50)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		
	}
}