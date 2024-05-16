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
