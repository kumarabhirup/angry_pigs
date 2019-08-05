const { Constraint, World } = Matter

class Slingshot {
  constructor(x, y, body) {
    const options = {
      pointA: { x, y },
      bodyB: body,
      stiffness: 0.05,
      length: 70
    }

    this.sling = Constraint.create(options)
    
    World.add(world, this.sling)
  }

  fly() {
    this.sling.bodyB = null
  }

  attach(body) {
    this.sling.bodyB = body
  }

  show() {
    this.sling.bodyB && (() =>{
      stroke(255)

      const positionA = this.sling.pointA
      const positionB = this.sling.bodyB.position

      line(positionA.x, positionA.y, positionB.x, positionB.y)
    })()
  }
}
