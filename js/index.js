//globals
let intervalId = 0
let frames = 0

function updateGame() {
    frames++
    clearCanvas()
    persona.draw()
    machine.draw()
    fist.draw()
    hamsterLeft.draw()
    hamsterCenter.draw()
    hamsterRight.draw()
    machineFront.draw()
    goDown()
    randomBox()
    printScore()
    FistDown()
}

function startGame() {
    if (intervalId) return
    intervalId = setInterval (updateGame, 1000/60)
}

