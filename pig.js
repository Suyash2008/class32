class Pig extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      this.Image = loadImage("sprites/enemy.png");
      this.visibility = 255;
    }
    
    display(){
      if(this.body.speed < 4){
        super.display();
      }
     else{
       push();
       this.visibility = this.visibility -5;
       World.remove(world,this.body)
       tint(255,this.visibility)
       image(this.Image,this.body.position.x,this.body.position.y);
       pop();
        }
      
    }
    score(){
      if(this.visibility<0&&this.visibility>-1005){
        score = score + 5
      }
    }
}