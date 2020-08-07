
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world;

var bob1 , bob2 , bob3 , bob4;

var s1 , s2 , s3 , s4;

function setup() {
	createCanvas(600, 600);

	var base = createSprite(300,150,200,50);
	base.shapeColor = color(rgb(0, 8, 255));


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	bob1 = new Bob(240,350,60);
	bob2 = new Bob(280,350,60);
	bob3 = new Bob(320,350,60);
	bob4 = new Bob(360,350,60);

	s1 = new Rope(bob1.body,{x: 240, y:150});
	s2 = new Rope(bob2.body,{x: 280, y:150});
	s3 = new Rope(bob3.body,{x: 320, y:150});
	s4 = new Rope(bob4.body,{x: 360, y:150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  s1.display();
  s2.display();
  s3.display();
  s4.display();

  drawSprites();
 
}

/*function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: 85, y: 85});
	}
}*/



