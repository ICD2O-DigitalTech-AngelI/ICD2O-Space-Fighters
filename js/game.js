/*global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rughts reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Phaser3 configurationfile


//* Game scene */
  const config = {      
    type:Phaser.AUTO,
    width:1920,
    height:1080,
    physics: {      
     default: 'arcade',
      arcade: {
      debug: true
      }
    },
    // set background color
    backgroundcolor: 0x6B7876,
     scale: { 
       mode: Phaser.Scale.FIT,
      // we place it in the middle of the page.
      autoCenter: Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.Game(config)
console.log(game)
console.log("Testing game scene")

