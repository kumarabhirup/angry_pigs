// This function runs when the Game Screen is ON
function gamePlay() {
  // Update all floating text objects
  for (let i = 0; i < floatingTexts.length; i++) {
      floatingTexts[i].update()
      floatingTexts[i].render()
  }

  // InGame UI

  // Score draw
  let scoreX = width - objSize / 2
  let scoreY = objSize / 3
  textSize(objSize * 2)
  fill(Koji.config.colors.scoreColor)
  textAlign(RIGHT, TOP)
  text(score, scoreX, scoreY)

  // Lives draw
  let lifeSize = objSize
  for (let i = 0; i < lives; i++) {
      image(imgLife, lifeSize / 2 + lifeSize * i, lifeSize / 2, lifeSize, lifeSize)
  }

  // Make the mouse constraint only work for movable bodies
  World.remove(world, mConstraint) // No mouse movement by default
  toBeMovedBody = mConstraint.body ? mConstraint.body : null
  if (toBeMovedBody && toBeMovedBody.movable) {
    // If the body is movable, let mouse do it's work!
    mConstraint.pointA = mouse.position
    mConstraint.bodyB = toBeMovedBody
    mConstraint.pointB = { x: mouse.position.x - toBeMovedBody.position.x, y: mouse.position.y - toBeMovedBody.position.y }
    mConstraint.angleB = toBeMovedBody.angle
    World.add(world, mConstraint)
  }

  cleanup()
}
