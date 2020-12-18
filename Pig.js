class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //255 is completely visible
    this.alpha = 255
  }
display() {
  if(this.body.speed<3) {
    super.display()                     
  }
  else {
    push()
    World.remove(world, this.body)
    this.alpha = this.alpha - 5
    tint(255, this.alpha)
    image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    pop()
  }
}
};