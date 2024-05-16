/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020  
// This is the Game Scene

class GameScene extends Phaser.Scene {
  
  // create an alien
  createAlien () { 
    const alienXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920;
    let alienXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const anAlien = this.physics.add.sprite(alienXLocation, -100, "alien")
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.aliens.add(anAlien)
  }
  
  constructor () { 
   super({ key: "gameScene" })

   this.background = null
    this.fireMissile = false
   this.ship = 0
   this.scoreText = null
    this.scoreTextStyle = {font: "65px Arial", fill: "#fde4b9", align: "center" }
    this.gameOvertTextStyle = { font: "65px Arial", fill: "#463f48", align: "center" }
  }
  
  init (data) { 
    this.cameras.main.setBackgroundColor("#3d3d45")
  }
  
 preload() { 
    console.log("Game Scene")

   // images
   this.load.image("starBackground", "./assets/starBackground.png")
   this.load.image("ship", "./assets/spaceShip.png")
   this.load.image("missile", "./assets/missile.png")
   this.load.image("alien", "./assets/alien.png")
   // sound
   this.load.audio("laser", "./assets/laser1.wav")
   this.load.audio("explosion", "./assets/explosion.wav")
   this.preload,Audio("bomb", "./assets/bomb.wav")
  }
 
  create (data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    // this.background.set0rigin(0, 0)

    this.scoreText = this.add.text(10, 10, "Score: " + this.scoreText.toString(), this.scoreTextStyle)
    
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // called a group for the missiles
    this.missileGroup = this.physics.add.group()
  
  // create a group for the aliens
  this.alienGroup = this.add.group()
  this.createAlien()

    // Collisins between missiles and aliens
   this.physics.add.callider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) { 
  alienCollide.destroy()
    missileCollide.destroy()
     this.sound.play("explosion")
     this.score = this.score + 1
     this.scoreText.setText("Score: " + this.score.toString())
     this.createAlien()
     this.createAlien()
   }.bind(this))

    // Collisions between the ship and the aliens
    this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) { 
      this.sound.play("bomb")
      this.physics.pause()
      alienCollide.destroy()
      shipCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, "Game Over!\nClick to play again.", this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true })
      this.gameOverText.on("pointerdown", () => this.scene.start("gameScene"))
    }.bind(this))

  }
  
