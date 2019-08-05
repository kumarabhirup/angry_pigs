class Bird extends GameObject {
  constructor (
    cordinates = {x: null, y: null}, // positioning
    sizing = {width: null, height: null, radius: null}, // if the shape is circle, provide radius, else... width and height
    settings = {shape: 'circle', image: null, color: { r: 255, g: 255, b: 255, a: 1 }, rotate: true, movable: false} // shape can either be a circle or a rectangle
  ) {
    super(cordinates, sizing, settings)
  }

  // below code won't work. use different mechanism
  bust(other) {
    this.options.type === 'enemyBird' && (() => {
      if (dist(this.body.position.x, this.body.position.y, other.body.position.x, other.body.position.y) <= this.r + other.r) {
        enemies = enemies.filter(enemy => enemy.id !== this.id) // clear the enemy
      }
    })()
  }
}
