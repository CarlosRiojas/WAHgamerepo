//globals
let intervalId = 0
let frames = 0

function start() {
    if (intervalId) return
    intervalId = setInterval (update, 1000/60)
    console.log(intervalId)
}

