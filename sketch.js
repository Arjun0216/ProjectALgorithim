var stillrect;
var movingrect;

function setup() {
  createCanvas(1200, 800);
stillrect=createSprite(600, 400, 50, 80);
movingrect=createSprite(400, 200, 80, 30);
stillrect.debug=true;
movingrect.debug=true;
stillrect.shapeColor="green";
movingrect.shapeColor="green";
 
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-stillrect.x<movingrect.width/2+stillrect.width/2&&stillrect.x-movingrect.x<movingrect.width/2+stillrect.width/2&&movingrect.y-stillrect.y<movingrect.height/2+stillrect.height/2&&stillrect.y-movingrect.y<movingrect.height/2+stillrect.height/2)
  {movingrect.shapeColor="red";
  stillrect.shapeColor="red";

  }
  else{
    movingrect.shapeColor="green";
    stillrect.shapeColor="green";
  }

  
  drawSprites();
}