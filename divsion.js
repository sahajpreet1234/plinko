class Division{
    constructor(x,y,w,h){
        var options={
            isStstic:true
        }
        this.body=bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
       World.add.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
}