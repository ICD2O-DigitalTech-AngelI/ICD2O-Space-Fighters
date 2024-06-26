/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020  
// This is the Title Scene

class TitleScene extends Phaser.Scene { 
 constructor() { 
    super({ key: "titleScene" })

    this.titleSceneBackroundImage = null
    this.titleSceneText = null
      this.titleSceneTextStyle = {font: "200px Times",fill: "#fde4b9" ,align: "center"}
 }

  init (data) { 
    this.cameras.main.setBackgroundColor("#3d3d45")
  }

  preload() { 
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "./assets/titleSceneImage.jpg")
  }

  create(data) {
    this.titleSceneBackground = this.add.sprite(0, 0, "titleSceneBackground").setScale(2.75)
    this.titleSceneBackground.x = 1920 / 2
    this.titleSceneBackground.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, 1080 / 2, "Space Fighters", this.titleSceneTextStyle).setOrigin(0.5)
  }
  
 update (time, delta) {
   if (time > 6000) { 
     this.scene.switch("menuScene")
   }
 }
}

export default TitleScene

 
