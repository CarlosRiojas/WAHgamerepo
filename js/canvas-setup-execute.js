//EXECUTED AFTER WINDOW LOADS. 
//>>>> OTHER FUNCTIONS ARE LOCATED IN main-functions.js

const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')

window.onload = () => {
    loadScreen.draw()
    document.getElementById("start-button").onclick = () => {
        startGame()
    }
}
