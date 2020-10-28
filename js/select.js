//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            if (hamsterLeft.y === 250){
                score++
                return hamsterLeft.hit()//console.log("L")
            } else return fist.punch()
            // return hit("LEFT")
        case "ArrowRight":
            if (hamsterRight.y === 250){
                score++
                return hamsterRight.hit()//console.log("R")
            } else return fist.punch()
            // return hit("RIGHT") 
        case "ArrowUp":
            if (hamsterCenter.y === 250){
                score++
                return hamsterCenter.hit()//console.log("C")
            } else return fist.punch()
            // return hit("UP"); 
        case " ":
            break;
        default:
            break;
    }
}