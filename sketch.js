const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var divisons = [];
var particles = [];
var plinkos = [];
var divisonHeight = 200
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(490, 700);
  ground = new Ground(width / 2, height - 10, width, 10)
  for (var k = 0; k <= width; k = k + 80) {
    divisons.push(new Divisons(k, height - divisonHeight / 2, 10, divisonHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 15));
  }



  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 15));
  }

  Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);
  if(frameCount%60 === 0)
  {
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
  }
  ground.display();
  for (var k = 0; k < divisons.length; k++) {
    divisons[k].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
  drawSprites();
}