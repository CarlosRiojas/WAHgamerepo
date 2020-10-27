//globals



//game main logic starts
function startGame() {
    console.log('started')
    frames++
    clearCanvas()
    drawPersona()
    drawMachine()
    drawHamsters()
    drawFist()
}

function start() {
    if (intervalId) return
    intervalId = setInterval (update, 1000/60)
}

