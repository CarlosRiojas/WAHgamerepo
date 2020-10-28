//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            if (hamsterLeft.y === 250){
                score++
                return hamsterLeft.hit()
            } else return fist.punch()
        case "ArrowRight":
            if (hamsterRight.y === 250){
                score++
                return hamsterRight.hit()
            } else return fist.punch()
        case "ArrowUp":
            if (hamsterCenter.y === 250){
                score++
                return hamsterCenter.hit()/
            } else return fist.punch()
        case " ":

            return 
        default:
            break;
    }
}