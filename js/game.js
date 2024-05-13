   /*global Phaser*/

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// This is the Game Scene

class GameScenes extends Phaser.Scene { 
  constructor () { 
    super({ key: 'gameScene' })
  }

  init (data) { 
  this.cameras.main.setBackgroundColor("#3d3d45")
}

preload () { 
console.log("Game Scene")
}

create (data) {
}

update (time, delta) {
}
}

export default GameScenes
  

 