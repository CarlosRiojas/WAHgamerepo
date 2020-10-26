//DOCUMENT FOR ALL THE MAIN FUNCTIONS

function startGame() {
    console.log('started')
    let feet = new Feet(10)
    feet.draw()
    drawMachine()
    drawHamsters()
    drawFist()
}


function drawHamsters() {
    let hamsterLeft = new Hamster(100,200)
    hamsterLeft.draw()
    let hamsterCenter = new Hamster(315, 200)
    hamsterCenter.draw()
    let hamsterRight = new Hamster(530, 200)
    hamsterRight.draw()
}

function drawMachine() {
    let machine = new Machine()
    machine.draw()
}

function drawFist() {
    let fist = new Fist(30)
    fist.draw()
}
