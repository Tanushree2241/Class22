var movingBall , fixedBall, rect1 , rect2 , rect3 , rect4;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  movingBall = createSprite(400,200,40,50);
  movingBall.shapeColor = "green";
  fixedBall = createSprite(500,200,50,100);
  fixedBall.shapeColor = "green";
  rect1 = createSprite(600,200,50,50);
  rect1.shapeColor = "green";
  rect2 = createSprite(700,200,50,50);
  rect2.shapeColor = "green";
  rect3 = createSprite(300,200,50,50);
  rect3.shapeColor = "green";
  rect4 = createSprite(300,400,50,50);
  rect4.shapeColor = "green";
  //rect3.velocityX = -1;
  //rect4.velocityX = 1;
  rect3.velocityY = 3;
 rect4.velocityY = -3;
}

function draw() {
  background(255,255,255); 
  // movingBall.x = mouseX;
  // movingBall.y = mouseY;
   console.log(movingBall.x-fixedBall.x);

   if(isTouching (movingBall,fixedBall)) {
    movingBall.shapeColor = "red";
    fixedBall.shapeColor = "red";
   }
   else {
    movingBall.shapeColor = "green";
    fixedBall.shapeColor = "green";
  }
  bounceOff(rect3,rect4);
  drawSprites();
}

