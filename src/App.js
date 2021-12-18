import React, { useEffect } from "react";
import Sketch from "react-p5";
import Matter, { World } from "matter-js";
import Player from "./player/Player";
import Land from "./world/Land";
import { labirintGenerator } from "./action";
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

  useEffect(() => {
    labirintGenerator(5, 5);
  }, [])

  const preload = (p5) => {

  };
  let engine;
  let world;
  let box;
  let player;

  const land = new Land(0, 800, 800, 50);
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 25).parent(
      canvasParentRef

    );
    // create engine
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    player = new Player(300, p5.height / 2, 100, 100);
    player.setup();
    land.setup()
    World.add(world, [player.player, land.land, land.land2]);
  }

  const draw = (p5) => {
    p5.background(255);
    player.display(p5);
    land.display(p5, player);
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


