import Matter from "matter-js";

export default class Land{
    land;
    land2;
    constructor(x,y,w,h){
           this.x = x;
           this.y = y;
           this.w = w;
           this.h = h;
           
    }
     

    setup(){
     this.land =  Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:true});
     this.land2 =  Matter.Bodies.rectangle(0,this.y,100,100,{isStatic:true});
    }


    display(p5, player){
    Matter.Body.translate(this.land,{x:-player.player.position.x + player.x, y: -player.player.position.y + player.y});
    Matter.Body.translate(this.land2,{x:-player.player.position.x + player.x, y: -player.player.position.y + player.y});
    p5.fill(0,255,255);
    p5.rectMode(p5.CENTER);
    p5.rect(this.land.position.x,this.land.position.y,this.w,this.h);
    p5.rect(this.land2.position.x,this.land.position.y,100,100);
    }
}