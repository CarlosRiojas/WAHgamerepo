//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let ratio = 150
//game main logic starts
function updateGame() {
    console.log('started')
    frames++
    clearCanvas()
    drawPersona()
    drawMachine()
    drawFist()
    drawHamsters()
    randomBox()
    
}


function drawHamsters() {
    let hamsterLeft = new Hamster(100,200)
    let hamsterCenter = new Hamster(315, 200)
    let hamsterRight = new Hamster(530, 200)
    hamsterLeft.draw()
    hamsterCenter.draw()
    hamsterRight.draw()
}

function drawMachine() {
    let machine = new Machine()
    machine.draw()
}

function drawFist() {
    let fist = new Fist(325)
    fist.draw()
}

function drawPersona() {
    let persona = new Persona()
    persona.draw()
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

function clearCanvas(){
    ctx.clearRect(0,0,$canvas.width,$canvas.height)
}

function randomBox() {
    if (frames % ratio === 0){ 
    const RandomMovement= Math.floor(Math.random() * 3)
    switch(RandomMovement){
        case 0:
            hamsterLeft.alive = true
            hamsterLeft.hitCheck()
            break;
        case 1:
            hamsterRight.alive = true
            hamsterRight.hitCheck()
            break;
        case 2:
            hamsterCenter.alive = true
            hamsterCenter.hitCheck()
            break;
        default:
            break;   
    }
    }
}