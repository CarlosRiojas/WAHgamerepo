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
    hamsterRight.draw()
    fist.draw()
    // coverFist.draw()
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
    punch()
}

function startGame() {
    if (intervalId) return
    intervalId = setInterval (updateGame, 1000/60)
}


function gameOver() {
  clearInterval(intervalId)
  intervalId = null
  ctx.fillStyle = "white"
  ctx.font = "40px Arial"
  ctx.fillText("Game Over", 140, $canvas.height / 2)
}   
