var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var Shelf

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas( 1080,430);
  
  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  //create feed the dog button here

  addFood=createButton("ADD FOOD");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  addFood.style("color:red");

  feed = createButton("FEED DOG");
  feed.position(700,95);
  feed.mousePressed(FeedDog);
  feed.style("color:red");

}

function draw() {
  background(46,139,87);
  foodObj.display();
  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods(){
  dog.addImage(sadDog)
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function FeedDog(){

  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
   database.ref('/').update({
     Food:foodObj.getFoodStock(),
     FeedTime:hour()
   })
  }
