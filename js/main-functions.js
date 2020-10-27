//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals


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



function drawPersona() {
 let Drawfeet = new Feet()
   Drawfeet.draw()
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