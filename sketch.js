var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background("pink");  
  // display distance between two objects.
  console.log(fixedRect.x-movingRect.x);

  //Making your sprite move with mouseX and mouseY
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  // Collision detction- The algorithim states that whenever two objects collide the distance 
  // between them will be (equal to or) less than sum of half of their width or height.

   if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
      movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
      movingRect.y-fixedRect.y < fixedRect.height/2+ movingRect.height/2&&
      fixedRect.y-movingRect.y < fixedRect.height/2+ movingRect.height/2){

     movingRect.shapeColor="red";
     fixedRect.shapeColor="red";
   }
   else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
   }


  drawSprites();
}