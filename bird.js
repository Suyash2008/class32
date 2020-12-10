class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.Image = loadImage("sprites/bird.png");
        this.smoke = loadImage("sprites/smoke.png");
        this.traj = [];
        
    }
    display(){
        super.display();
        if(this.body.velocity.x>10&&this.body.position.x>220){
        var pos = [this.body.position.x,this.body.position.y]
        this.traj.push(pos);
    }
    for(var i = 0;i<this.traj.length;i++){
        image(this.smoke,this.traj[i][0],this.traj[i][1])
    }
    }
}