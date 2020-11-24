class Ground{
    constructor(x,y,width){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,50,options);
        this.width = width;
        this.height = 75;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(rgb(102,52,12));
        rect(0,0,this.width,this.height);
        pop();
    }
}