//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            return hit("LEFT")
        case "ArrowRight":
            return hit("RIGHT") 
        case "ArrowUp":
            return hit("UP"); 
        case "ArrowDown":
            return; 
        default:
            break;
    }
}