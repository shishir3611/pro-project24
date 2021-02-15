class Paper{
    constructor(x,y,width,height){
        var options ={
            'restitution': 0.4,
            'friction':0.6,
            'density':1,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        this.image = loadImage('paper.png');
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //push();
        //translate(pos.x, pos.y)
        //fill('white');
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.r,this.r);
        //pop();
    }
}
