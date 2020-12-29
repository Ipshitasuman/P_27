
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

roofObject=new Roof(width/2,height/4,width/4,20); 
bobDiameter=40; 
startBobPositionX=width/2;
startBobPositionY=height/4+300;
bobObject1=new Bob(startBobPositionX-bobDiameter*3,startBobPositionY,bobDiameter);
bobObject2 = new Bob(startBobPositionX-bobDiameter*1.5,startBobPositionY,bobDiameter);
bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
bobObject4=new Bob(startBobPositionX+bobDiameter*1.5,startBobPositionY,bobDiameter); 
bobObject5=new Bob(startBobPositionX+bobDiameter*3,startBobPositionY,bobDiameter);
rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*3, 0) 
rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1.5, 0)
rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1.5, 0)
rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*3, 0)
}


function draw() {
  background("grey");
  Engine.update(engine);
  keyPressed();
  rectMode(CENTER);
  // drawLine();

  fill(0);
  textSize(20)
  text("Press Down Arrow key after pressing Up Arrow key",width/2-200,100);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW ){
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50, y:55});
  }
}

/*function drawLine(constraint) { 
  bobBodyPosition=constraint.bodyA.position; 
  roofBodyPosition=constraint.bodyB.position; 
  roofBodyOffset=constraint.pointB; 
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x ;
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y ;
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }*/
