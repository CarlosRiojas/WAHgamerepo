//globals
let hamsterLeft = new Hamster(100,200)
let hamsterCenter = new Hamster(315, 200)
let hamsterRight = new Hamster(530, 200)
let feet = new Feet(10)

//game main logic starts
function startGame() {
    console.log('started')
    frames++
    clearCanvas()
    feet.draw()
    drawMachine()
    drawHamsters()
    drawFist()
    
}

function start() {
    if (intervalId) return
    intervalId = setInterval (update, 1000/60)
}

