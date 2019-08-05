class Level {
  constructor(level) {
    this.level = level

    // setup
    switch (this.level) {
      case 2:
        for (let i = 0; i < 4; i++) {
          boxes[i] = new Box(width - 100 - 150 * i, height - 300, 150, 150, { image: boxImage }) // line them up in a line 
        }
        break

      case 1:
        for (let i = 0; i < 3; i++) {
          boxes[i] = new Box(width - 300, 100-i*200, 150, 150, { image: boxImage }) // line them up in a line 
        }
        enemies[0] = new Bird(width - 300, 100-3*200, birdCordinates.radius, { image: enemyImages[0], type: 'enemyBird' }) // 3 is the top box
        break
    
      default:
        break
    }
  }

  show() {
    switch (this.level) {
      case 2:
        for (let box of boxes) {
          box.show()
        }
        break

      case 1:
        for (let box of boxes) {
          box.show()
        }
        enemies[0].show()
        break
    
      default:
        break
    }
  }
}