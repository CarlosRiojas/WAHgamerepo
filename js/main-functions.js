//DOCUMENT FOR ALL THE MAIN FUNCTIONS
//globals
let ratio = 150
let fistRatio = 20
let feetRatio = 20
let triggered = false
let triggerCounter = 0
let lives = 4
let hit = false
let score = 0
//game main logic starts

function clearCanvas(){
    ctx.clearRect(0,0,$canvas.width,$canvas.height)
}

function randomBox() {
    if (frames % ratio === 0){ 
    const RandomMovement= Math.floor(Math.random() * 3)
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


//START
function triggerPunch(){
    // triggerCounter++
    triggered = true
    // while (triggerCounter>0){
        punch()
    // }
}

function punch() {
    const randomIncoming = Math.floor(Math.random() * (70 + 200) +70)
    if (triggered === true && frames > 200){
        printWarning()
        if (triggered === true && frames % 50 === 0) {
            fist.go()
            triggered = false
            // triggerCounter--
        } 
    }   
}

function checkCollision() {
    if (fist.isTouching(persona) && hit=== false) {
        hit = true
        lives--
    } else if (!fist.isTouching(persona) && hit===true){
        hit=false
    }  
}

//CUSTOM GOOGLE FONTS DOCUMENTATION:
//https://hacks.mozilla.org/2016/06/webfont-preloading-for-html5-games/
const FONT_NAME = 'Press Start 2P'


function yellowBar(percent) {
    let totalLength = 380
    let startX = 250
    let length = totalLength*(percent)
    let redLength = length-totalLength
    let redX = totalLength+startX

    if (percent===0) {
        ctx.fillStyle = "red"
        ctx.shadowColor = "red"
        ctx.fillRect(250,50,totalLength,18)
        ctx.shadowColor = "transparent"
    } else {
    ctx.fillStyle = "yellow"
    ctx.shadowColor = "yellow" 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.fillRect(250,50,length,18)

    
    ctx.fillStyle = "red"
    ctx.shadowColor = "red"
    ctx.fillRect(redX,50,redLength,18)

    ctx.shadowColor = "transparent"
    }
}

function printScore() {
    let color = "yellow"
    ctx.fillStyle = color
    ctx.shadowColor = color 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.font = `20px "${FONT_NAME}"`
    ctx.textAlign = "left"
    ctx.fillText(`SCORE:${score}`, 150, 100)
    ctx.shadowColor = "transparent"
}

function printLife() {
    let color = "yellow"
    ctx.fillStyle = color
    ctx.shadowColor = color 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.font = `20px "${FONT_NAME}"`
    ctx.textAlign = "left"
    ctx.fillText(`LIFE:`, 145, 70)
    switch (lives) {
        case 4:
            yellowBar(1)
            break;
        case 3: 
            yellowBar(.75)
            break;
        case 2: 
            yellowBar(.5)
            break;
        case 1: 
            yellowBar(.25)
            break;
        case 0:
            yellowBar(0)
            return gameOver()
        default:
            break;
    }
    ctx.shadowColor = "transparent"

}

function printWarning() {
    let color = "red"
    ctx.fillStyle = color
    ctx.shadowColor = color 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.font = `40px "${FONT_NAME}"`
    ctx.textAlign = "center"
    // if (triggerCounter > 1) {
    //     ctx.fillText(`INCOMING! x${triggerCounter}`, $canvas.width/2, 150)
    // } else {
        ctx.fillText(`INCOMING!`, $canvas.width/2, 150)
    // }
    ctx.shadowColor = "transparent"
}

function hitMessage() {
    let color = "green"
    ctx.fillStyle = color
    ctx.shadowColor = color 
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.font = `40px "${FONT_NAME}"`
    ctx.textAlign = "center"
    ctx.fillText(`Hit +1`, $canvas.width/2, 150)
    ctx.shadowColor = "transparent"
}

function gameOver() {
    clearInterval(intervalId)
    intervalId = null
    ctx.fillStyle = "#0A0E16"
    ctx.fillRect(0,0,$canvas.width,$canvas.height)
    ctx.fillStyle = "white"
    ctx.font = `60px "${FONT_NAME}"`
    ctx.textAlign = "center"
    ctx.fillText("GAME OVER", $canvas.width/2, $canvas.height/2)
    ctx.font = `30px "${FONT_NAME}"`
    ctx.fillText("Refresh to try again", $canvas.width/2, $canvas.height/2+100)
  } 

WebFont.load({
    google: {families: [FONT_NAME]},
    active: renderText
});
