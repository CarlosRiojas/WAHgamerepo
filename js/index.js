//globals
let intervalId = 0
let frames = 0

function startGame() {
    if (intervalId) return
    intervalId = setInterval (updateGame, 1000/60)
    // console.log(intervalId)
}

