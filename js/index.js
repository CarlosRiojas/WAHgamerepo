//globals
let intervalId = 0
let frames = 0

function updateGame() {
    frames++
    clearCanvas()
    persona.draw()
    machine.draw()
    hamsterLeft.draw()
    hamsterCenter.draw()
    coverFist.draw()
    hamsterRight.draw()
    checkCollision()
    fist.draw()
    machineFront.draw()
    teclaLeft.draw()
    teclaCenter.draw()
    teclaRight.draw()
    goDown()
    randomBox()
    //Fistret()
    printScore()
    printLife()
    hammer.draw()
    personaHit.draw()
    punch()
}

function startGame() {
    if (intervalId) return
    intervalId = setInterval (updateGame, 1000/60)
}
  
