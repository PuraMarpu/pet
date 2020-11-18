class milk{
    constructor(x,y){
      this.image = loadImage("Milk.png");

      this.hat = createSprite(x,y,10,10);
      this.hat.addImage(this.image);
      this.hat.scale = 0.15;

      this.x = x;
      this.y = y;
    }
    display(){
        imageMode(CENTER);
        rect(this.x,this.y,10,10);
    }
}