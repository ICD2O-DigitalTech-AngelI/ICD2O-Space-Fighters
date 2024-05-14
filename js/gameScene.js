/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020  
// This is the Game Scene

class GameScene extends Phaser.Scene { 
 constructor () { 
   super({ key: "gameScene" })

   this,background = null
   this.ship = null
   this.fireMissile = false
 }
  
  init (data) { 
    this.cameras.main.setBackgroundColor("#3d3d45")
  }
  
 preload() { 
    console.log("Game Scene")

   // images
   this.load.images("startBackground", "./assets/start_screen_image.png")
   this.load.images("ship", "assets/spaceShip.png")
   this.load.image("missile", ".assets/missile.png")
  }
 
  create (data) {
    this.background = this.add.sprite(0, 0, "startBackground").setScale(2.75)
    this.background.set0rigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // called a group for the missiles
    this.missileGroup = this.physics.add.group()
  }
  
   update (time, delta) { 
        // called 60 times a second, hopefully!

     const keyLeftObj = this.input.keyboard.addKey("LEFT")
     const keyRightObj =this.input.keyboard.addKey("RIGHT")
     const keySpaceObj = this.input.keyboard.addKey("SPACE")

     if (keyLeftObj.isDown === true)
       this.ship.x -= 15
     if (this.ship.x < 0) {
       this.ship.x = 0
     }
   }

   if (keyRightObj.isDown === true) {
    this.ship.x += 15
    if (this.ship.x < 1920) { 
     this.ship.x = 1920
    }
   }

     if (keySpaceObj.isDown === true)
        if(this.fireMissile === false)
          // fire missile
          this.fireMissiile = true
          const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
         this.missileGroup.add(aNewMissile)
       }
     }

     if (keySpaceOnj.isUp === true) { 
      this.fireMissile = false
    }
  }
}
export default GameScene