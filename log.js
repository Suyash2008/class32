class Log extends BaseClass{
    constructor(x,y,width,height,angle){
        super(x,y,width,height);
        this.Image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle)
       
    }
    
    
}