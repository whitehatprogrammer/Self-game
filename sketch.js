var road,roadimg
var fuel,fuelimg,fuelsGroup
var car,carimg;
var gameState="play";
var obstacle,obstacleimg,obstacleGroup;

function preload()
{

roadimg=loadImage("download (7).jpg");
fuelimg=loadImage("fuel.png");
carimg=loadImage("Audi.png");
obstacleimg=loadImage("Daco_5035768.png");

}


function setup()
{
createCanvas(400,600);
road=createSprite(200,300,50,50);
road.addImage("road",roadimg)
road.scale=3.8
car=createSprite(190,500,50,50);
car.addImage("car1",carimg)
car.scale=0.5
obstacle=createSprite(10,10,20,20);
obstacle.addImage("obstacle",obstacleimg)
obstacle.scale=0.1
}

function draw()
{
background("black");
    console .log ("Hello");
    drawSprites();

}