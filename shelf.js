class shelf {
  constructor(){
  this.image=loadImage('shelf.jpg');
  }
    display(){
      imageMode(CENTER);
      image(this.image, 700, 300, 200, 200);
    }
  }