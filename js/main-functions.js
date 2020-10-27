//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let ratio = 150
//game main logic starts

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

let score = 0
function printScore() {
    ctx.fillStyle = "white"
    ctx.font = "30px PressStart"
    ctx.textAlign = "center"
    // if (hamsterLeft.hit() || hamsterCenter.hit() || hamsterRight.hit()){
    //     score++
    // }
    ctx.fillText(`Score: ${score}`, $canvas.width/2, 200)
}