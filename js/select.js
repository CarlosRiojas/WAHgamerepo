//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            return hamsterLeft.hit()
        case "ArrowRight":
            return hamsterRight.hit() 
        case "ArrowUp":
            return hamsterCenter.hit(); 
        case "ArrowDown":
            return; 
        default:
            break;
    }
}