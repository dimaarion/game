import Matter from "matter-js";
export default class Player {
    player;
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }


    setup() {
        this.player = Matter.Bodies.circle(this.x , this.y, this.w / 2);
    }


    display(p5) {

        p5.fill(0);
        p5.ellipseMode(p5.RADIUS)
        p5.ellipse(this.player.position.x, this.player.position.y, this.w / 2);
    }
}