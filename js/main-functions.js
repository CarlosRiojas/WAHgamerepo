//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let ratio = 150
let fistRatio = 20
let feetRatio = 20
let triggered = false
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
            hamsterLeft.wasHit = false
            break;
        case 1:
            hamsterCenter.up()
            hamsterCenter.wasHit = false
            break;
        case 2:
            hamsterRight.up()
            hamsterRight.wasHit = false
            break;
        default:
            break;   
    }
    }
}

function goDown() {
    let downRatio = 50
    if (hamsterLeft.y === hamsterUP) {
        if(frames > 200 && frames % downRatio === 0) {hamsterLeft.down()}
    } else if (hamsterCenter.y === hamsterUP) {
        if(frames > 200 && frames % downRatio === 0) {hamsterCenter.down()}
    } else if (hamsterRight.y === hamsterUP) {
        if(frames > 200 && frames % downRatio === 0) {hamsterRight.down()}
    } else return
}

//CUSTOM GOOGLE FONTS DOCUMENTATION:
//https://hacks.mozilla.org/2016/06/webfont-preloading-for-html5-games/
const FONT_NAME = 'Press Start 2P'
let score = 0

function printScore() {
    let color = "yellow"
    ctx.fillStyle = color
    ctx.shadowColor = color 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.font = `20px "${FONT_NAME}"`
    ctx.textAlign = "center"
    ctx.fillText(`SCORE: ${score}`, 225, 70)
    
    ctx.shadowColor = "transparent"
}
WebFont.load({
    google: {families: [FONT_NAME]},
  active: renderText
});

//START
function triggerPunch(){
    triggered = true
    printWarning()
}

function warning() {
    let color = "red"
    ctx.fillStyle = color
    ctx.shadowColor = color 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.font = `40px "${FONT_NAME}"`
    ctx.textAlign = "center"
    ctx.fillText(`INCOMING!`, $canvas.width/2, 150)
    ctx.shadowColor = "transparent"
}

let lives = 4

function livesBar() {
    switch (lives) {
        case 4:
            break;
        case 3: 
            break;
        case 2: 
            break;
        case 1: 
            break;
        case 0:
            return gameOver()
        default:
            break;
    }
}

function gameOver(){
    console.log("game over")
}

function printWarning() {
    const randomIncoming = Math.floor(Math.random() * (100 + 300) + 100)
    if (triggered === true){
        warning()
        if (triggered === true && frames % randomIncoming === 0) {
            console.log(randomIncoming)
            fist.go()
            triggered = false
        } 
    }   
}
//END
