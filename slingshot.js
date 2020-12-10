class Slingshot{
    constructor(bodyA,pointB)
    {
        var option = {
            bodyA:bodyA,pointB:pointB,
            stiffness : 0.04,
            length : 10

        }
        this.pointB = pointB
        this.chain = Matter.Constraint.create(option)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world,this.chain);
    }
    display(){
        image(this.sling1,200,135)
        image(this.sling2,170,135)
        if(this.chain.bodyA){
        var pa = this.chain.bodyA.position
        var pb =  this.pointB
        push();
        stroke(48,22,8);
        if(pa.x < 220){

        
        strokeWeight(7)
        line(pa.x-20,pa.y,pb.x-10,pb.y)
        line(pa.x-20,pa.y,pb.x+30,pb.y)
        image(this.sling3,pa.x-30,pa.y-10,15,30);
        }
        else{
            strokeWeight(4)
            line(pa.x+25,pa.y,pb.x-10,pb.y)
            line(pa.x+25,pa.y,pb.x+30,pb.y)
            image(this.sling3,pa.x+25,pa.y-10,15,30);   
        }
        pop();
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
      this.chain.bodyA = body;  
    }
}