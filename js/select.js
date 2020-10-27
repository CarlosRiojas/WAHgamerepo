//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            if (hamsterLeft.y === 250){
                return hamsterLeft.hit()//console.log("L")
            }
            // return hit("LEFT")
        case "ArrowRight":
            if (hamsterRight.y === 250){
                return hamsterRight.hit()//console.log("R")
            }
            // return hit("RIGHT") 
        case "ArrowUp":
            if (hamsterCenter.y === 250){
                return hamsterCenter.hit()//console.log("C")
            }
            // return hit("UP"); 
        case "ArrowDown":
            return; 
        default:
            break;
    }
}