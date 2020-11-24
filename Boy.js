class Boy{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,200,400,options);
        this.width = 250;
        this.height = 400;
        this.image = loadImage("Sprites/boy.png");
        
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}