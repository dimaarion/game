import React from "react";
import Sketch from "react-p5";
import Matter, { World } from "matter-js";
import Player from "./player/Player";
import Land from "./world/Land";
export default function App() {
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

     

  const preload = (p5) => {

  };
  let engine;
  let world;
  let box;
  const player = new Player(100,100,100,100);
  const land = new Land(0,800,800,50);
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 25).parent(
      canvasParentRef
    );
    // create engine
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);
        player.setup();
        land.setup()
        World.add(world,[player.player,land.land]);
  }

  const draw = (p5) => {
   p5.background(255);
   player.display(p5);
   land.display(p5)
  }

  function keyPressed(e) {

  }

  function keyReleased(e) {

  }

  return (<Sketch
    setup={setup}
    draw={draw}
    preload={preload}
    keyPressed={keyPressed}
    keyReleased={keyReleased}
  />)



}


