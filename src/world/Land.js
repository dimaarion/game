import Matter from "matter-js";
export default class Land{
    land;
    constructor(x,y,w,h){
           this.x = x;
           this.y = y;
           this.w = w;
           this.h = h;
           
    }
     

    setup(){
     this.land =  Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:true});
     
    }


    display(p5){
    p5.fill(0,255,255);
    p5.rectMode(p5.CENTER);
    p5.rect(this.land.position.x + this.w / 2,this.land.position.y,this.w,this.h);
    }
}