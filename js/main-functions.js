//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let ratio = 150
//game main logic starts

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
}

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

function FistDown(){

    let downRatio = 50
    let counter  = 4
    for (let i = 0;i < counter;i++){
        Fist.x += 5 
        Fist.x -= 5
    }
        if(frames > 200 && frames % downRatio === 0) {
            Fist.down()}else{
                return
            } 
}

