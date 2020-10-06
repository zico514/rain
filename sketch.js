const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop=[];
var bat;
function preload(){
    bat = loadImage("images/Walking Frame/walking_1.png");

}

function setup(){
   createCanvas(400,500);
   engine = Engine.create();
   world = engine.world;

   ba=createSprite(200,400,70,70);
   ba.addImage(bat);
   ba.scale=0.3

}

function draw(){
    Engine.update(engine);
    background(0);
    for(i=0;i<drop.length;i++){
        drop[i].display();
      }
    spawn();
    drawSprites();
}   

function spawn(){
    if(frameCount%1==0){
      drop.push(new Drops(random(0,400),0,3,3))
    
    }
    }