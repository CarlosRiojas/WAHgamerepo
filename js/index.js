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
    machineFront.draw()
    teclaLeft.draw()
    teclaCenter.draw()
    teclaRight.draw()
    goDown()
    randomBox()
    //Fistret()
    printScore()
    printWarning()
}

function startGame() {
    if (intervalId) return
    intervalId = setInterval (updateGame, 1000/60)
}

