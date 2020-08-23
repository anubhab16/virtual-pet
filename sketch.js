//Create variables here
var dog,happydog,database,foodS,foodstock;
function preload()
{
  //load images here
  dog1 = loadImage("dog3.png")
  happydog1 = loadImage("dogimg.png")
}

function setup() {
  createCanvas(500, 500);
  dog.addImage(dog1)
  happydog.addImage(happydog1)
  database = firebase.database();
   foodstock = database.ref("Food")
   foodstock.on("value",readstock)
  
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writestock(foodS);
   happydog.addImage(happydog1);
 }
  drawSprites();
  //add styles here

}
function readstock(data){
  foodS = data.val();
}
 function writestock(x){
   if(x<=0){
     x = 0
   }
   else{
   x = x-1;
   }
   database.ref("food").update({
     Food:x
   })
 }



