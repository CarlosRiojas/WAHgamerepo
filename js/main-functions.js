//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let ratio = 150
//game main logic starts

function updateGame() {
    // console.log('started')
    frames++
    clearCanvas()
    persona.draw()
    machine.draw()
    hamsterLeft.draw()
    hamsterCenter.draw()
    hamsterRight.draw()
    fist.draw()
    machineFront.draw()

    goDown()
    randomBox()
}
// function drawHamsters() { //UP: 200, DOWN: 350
    
   
// }

// function drawMachine() {
//      let machine = new Machine()
//      machine.draw()
// }

// function drawMachineFront() {
//     let machineFront = new MachineFront()
//     machineFront.draw()
// }

// function drawFist() { //AT MIN POSITION
//      //Max: 500, Min: 325
    
// }

// function drawPersona() {
    
    
// }

// function hit(select) {
//     switch (select) {
//         case "LEFT":
//             return hamsterLeft.PressHit()
//         case "RIGHT":
//             return  hamsterRight.PressHit()
//         case "CENTER":
//             return  hamsterCenter.PressHit()
//         default:
//             break;
//     }
// }
//prueba

function clearCanvas(){
    ctx.clearRect(0,0,$canvas.width,$canvas.height)
}

function randomBox() {
    if (frames % ratio === 0){ 
    const RandomMovement= Math.floor(Math.random() * 3)
    console.log(RandomMovement)
    switch(RandomMovement){
        case 0:
            hamsterLeft.up()
            break;
        case 1:
            hamsterCenter.up()
            break;
        case 2:
            hamsterRight.up()
            break;
        default:
            break;   
    }
    }
}

function goDown() {
    let downRatio = 50
    if (hamsterLeft.y === 250) {
        if(frames > 200 && frames % downRatio === 0) {hamsterLeft.down()}
    } else if (hamsterCenter.y === 250) {
        if(frames > 200 && frames % downRatio === 0) {hamsterCenter.down()}
    } else if (hamsterRight.y === 250) {
        if(frames > 200 && frames % downRatio === 0) {hamsterRight.down()}
    } else return
}