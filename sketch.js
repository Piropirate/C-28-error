
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var ground1;
var stone1;
var boy1;
var mango1, mango2, mango3, mango4, mango5;
var catapult1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Tree(500,150);
	ground1 = new Ground(500,665,1000);
	stone1 = new Stone(100,475,70);
	mango1 = new Mango(800,300);
	mango2 = new Mango(700,250);
	mango3 = new Mango(600,300);
	mango4 = new Mango(900,300);
	mango5 = new Mango(800,200);
	boy1 = new Boy(100,370);
	catapult1 = new Sling(stone1.body,{x:150,y:475});

	Engine.run(engine);
  
}


function draw() {
  background(255);
  
  tree1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy1.display();
  stone1.display();
  catapult1.display();



  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    catapult1.fly();
}

function detectCollision(stone, mango){
mbp = mango.body.position;
sbp = stone.body.position;

var distance = dist(sbp.x , sbp.y , mbp.x , mbp.y);
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
 }
}

function keyPressed(){
	if(keyCode === 32){
		catapult1.attach(stone1.body);
	}
}