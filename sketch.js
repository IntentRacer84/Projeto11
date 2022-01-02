
var runner,runner_running;
var path,pathimg;
var rightBoundary;
var leftBoundary;

function preload(){
  //imagens pré-carregadas
  pathimg = loadImage ("path.png")
  runner_running = loadAnimation("Runner-1.png","Runner-2.png") 
}

function setup(){
  createCanvas(320,500)
  background ("black")

  //crie sprite aqui
  path = createSprite(160,200,100,100)
  path.addImage("path",pathimg)
  path.y = path.height/2
  rightBoundary = createSprite (310,200,10,600)
  leftBoundary = createSprite (15,200,10,600)
  runner = createSprite (250,150)
  runner.addAnimation("runner",runner_running)
  runner.scale = 0.05
  runner.y = 350
  leftBoundary.visible = false
  rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 2
  if(path.y > 400){
  path.y = height/2
  }
  runner.x=World.mouseX;
  runner.collide(rightBoundary)
  runner.collide(leftBoundary)
  drawSprites()
}
