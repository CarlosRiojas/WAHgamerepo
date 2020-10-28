//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            if (hamsterLeft.y === hamsterUP){
                score++
                return hamsterLeft.hit()
            } else return fist.hidden= false
        case "ArrowRight":
            if (hamsterRight.y === hamsterUP){
                score++
                return hamsterRight.hit()
            } else return fist.hidden= false
        case "ArrowUp":
            if (hamsterCenter.y === hamsterUP){
                score++
                return hamsterCenter.hit()
            } else return fist.hidden= false
        case " ":
               persona.moveAway()
            break;
        default:
            break;
    }
}