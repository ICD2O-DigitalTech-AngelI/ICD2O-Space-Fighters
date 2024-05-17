   /*global Phaser*/

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// This is the Phaser3 game configuration file
console.log(4)
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

// Our game scenes
console.log(3)
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()
console.log(2)
//* Game scene */ 
const config = {      
    type:Phaser.AUTO,
  width:1920,
  height:1080,
  physics: {      
     default: "arcade",
     arcade: {
        debug: false
     }
  },
   // set background color
   backgroundcolor: "#3d3d45",
   scale: { 
      mode: Phaser.Scale.Fit,
      // we place it in the middle of the page.
      autoCenter: Phaser.Scale.CENTER_BOTH
   }
}

const game = new Phaser.Game(config)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// start title
game.scene.start("splashScene")
