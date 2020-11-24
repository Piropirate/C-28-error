class Tree{
    constructor(x,y){
        var options={
        isStatic : true
        }
        this.body = Bodies.rectangle(x,y,500,500,options);
        this.width = 500;
        this.height = 500;
        this.image =loadImage("Sprites/tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}
