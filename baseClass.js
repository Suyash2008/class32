class BaseClass{
 constructor(x,y,width,height,angle){
  var option = {
      restitution : 0.4,
      friction : 1.0,
      density : 1.0
  }
   this.body = Bodies.rectangle(x,y,width,height,option);
   this.width = width
   this.height = height
   this.Image = loadImage("sprite/base.png");
   World.add(world,this.body);
}


display(){
var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
  imageMode(CENTER);
  image(this.Image,0,0,this.width,this.height);
  pop();

   }
 
}