//KEYS OR CLICKS, WILL DECIDE LATER

document.onkeydown = e => {
    switch (e.key) {
        case "ArrowLeft":
            return console.log("left");
        case "ArrowRight":
            return console.log("right"); 
        case "ArrowUp":
            return console.log("up"); 
        case "ArrowDown":
            return console.log("down"); 
        default:
            break;
    }
}