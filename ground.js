class Ground{
constructor(x,y,width,height){
  var options = {
      isStatic : true
  }  
  this.body = Bodies.rectangle(x,y,width,height,options)
  this.width = width;
  this.height = height;
  this.Image = loadImage("sprites/base.png")
  World.add(world,this.body)
}
display(){
    var pos = this.body.position
    push();
    imageMode(CENTER)
    fill("blue")
    image(this.Image,pos.x,pos.y,this.width,this.height)
    pop();
}
}