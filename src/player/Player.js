import Matter, { World } from "matter-js";
export default class Player{
    static player;
    constructor(x,y,w,h){
           this.x = x;
           this.y = y;
           this.w = w;
           this.h = h;
           
    }
     

    setup(world){
     this.player =  Matter.Bodies.circle(this.x,this.y,this.w,this.h);
     World.add(world,this.player);
    }


    display(p5){
    p5.fill(0);
    p5.ellipse(this.player.position.x,this.player.position.y,this.w,this.h);
    }
}