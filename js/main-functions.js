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
    ctx.fillText(`SCORE: ${score}`, $canvas.width/2, 120)
    
    ctx.shadowColor = "transparent"
}
WebFont.load({
    google: {families: [FONT_NAME]},
  active: renderText
});


function Fistret(){
    if (frames % ratio === 0){ 
         fist.y=325
    }
}

//function dodging {

//}


function FistDown(){
if(score % 3 === 0){ 

    fist.punch()
    // let downRatio = 50
    // let counter  = 4
    // if(frames > 200 && frames % downRatio === 0){ 
    // for (let i = 0;i < counter;i++){
    //     Fist.x += 5 
    //     Fist.x -= 5
    // }
    //     }else{
    //       Fist.y = 325
    //  scorecounter = 0
    //  }
  
  }
}

