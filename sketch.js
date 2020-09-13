const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;

var count = 0;

var score = 0;

var particles = [];
var plinkos = [];

var gameState = "play";

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  wall = new Ground(0,700,5,150);
  wall2 = new Ground(90,700,5,150);
  wall3 = new Ground(180,700,5,150);
  wall4 = new Ground(270,700,5,150);
  wall5 = new Ground(360,700,5,150);
  wall6= new Ground(450,700,5,150);

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,75,10));
  }
  
  for(var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,275,10));
  }
  
  for(var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,375,10));
  }

}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  
  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();

  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(gameState === "end") {
    textSize(50);
    text("Game Over", 100, 350);
  }  

  //for(var i = 0; i < particles.length; i++) {
   // particles[i].display();
  //}

  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 760) {

      if(particle.body.position.x < 90) {

        score = score + 500;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }
      }
      else

      if(particle.body.position.x > 90 && particle.body.position.x < 180){

        score = score + 400;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }
      }
      else

      if(particle.body.position.x > 180 && particle.body.position.x < 270){

        score = score + 300;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }
      }
      else

      if(particle.body.position.x > 270 && particle.body.position.x < 360){

        score = score + 200;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }
      }
      else

      if(particle.body.position.x > 360 && particle.body.position.x < 450){

        score = score + 100;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }
      }
      else

      if(particle.body.position.x > 450 && particle.body.position.x < 480){

        score = score + 0;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }
      }
    }
}

  drawSprites();

  textSize(20);
  text("Score: " + score, 20, 20);

  text("500", 30, 650);
  text("400", 120, 650);
  text("300", 210, 650);
  text("200", 300, 650);
  text("100", 390, 650);
  text("0", 460, 650);

}

function keyPressed() {
  if(keyCode === 32) {
    if(gameState != "end") {
      count++;
      particle = new Particle(mouseX, 10, 10);
    }
  }
}