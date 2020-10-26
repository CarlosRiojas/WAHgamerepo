//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let hamsterLeft = new Hamster(100,200)
let hamsterCenter = new Hamster(315, 200)
let hamsterRight = new Hamster(530, 200)

function startGame() {
    console.log('started')
    let feet = new Feet(10)
    feet.draw()
    drawMachine()
    drawHamsters()
    drawFist()
}


function drawHamsters() {
    hamsterLeft.draw()
    hamsterCenter.draw()
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

function hit(select) {
    switch (select) {
        case "LEFT":
            return hamsterLeft.PressHit()
        case "RIGHT":
            return  hamsterRight.PressHit()
        case "CENTER":
            return  hamsterCenter.PressHit()
        default:
            break;
    }
}
//prueba