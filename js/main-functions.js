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

//CUSTOM GOOGLE FONTS DOCUMENTATION:
//https://hacks.mozilla.org/2016/06/webfont-preloading-for-html5-games/
const FONT_NAME = 'Press Start 2P'
let score = 0
function printScore() {
    ctx.fillStyle = "yellow"
    ctx.font = `20px "${FONT_NAME}"`
    ctx.textAlign = "center"
    ctx.fillText(`SCORE: ${score}`, $canvas.width/2, 120)
}
WebFont.load({
    google: {families: [FONT_NAME]},
  active: renderText
});



