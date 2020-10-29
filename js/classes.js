//GLOBAL
let gravity = 1.5
let hamsterUP= 240
let hamsterDOWN = 350 //315


class Machine {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img = new Image()
        this.img.src = "assets/machineNOborder.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   }
}

class MachineFront {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img = new Image()
        this.img.src = "assets/machineFrontNoborder.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

// class CoverFist {
//     constructor(){
//         this.x = 0
//         this.y = 0
//         this.width = $canvas.width
//         this.height = $canvas.height+250
//         this.img = new Image()
//         this.img.src = "assets/coverSquare.png"
//         this.img.onload = () => {
//             this.draw()
//         }
//     }
//     draw(){
//         ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
//     }
// }

class Hammer {
    constructor(){
        this.x = 0
        this.y = 40
        this.width = 300
        this.height = 300
        this.img = new Image()
        this.img.src = "assets/hammer.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        if (hamsterLeft.wasHit === true) {
            this.x = 120
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            this.x = 0
        } else if (hamsterCenter.wasHit === true){
            this.x = 320
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            this.x = 0
        } else if (hamsterRight.wasHit === true){
            this.x = 530
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            this.x = 0
        } else {
        }

    }
}

class Fist {
    constructor (y) {
        this.width = 250
        this.height = 250
        this.x = ($canvas.width - this.width)/2 //mitad de canvas
        this.y = y //y va a cambiar
        this.img = new Image()
        this.velY = 0
        this.hidden = true
        this.img.src = "assets/puñoShort-01.png"
        this.img.onload = () => {
            this.draw()
        }
        
    }
    draw() {
        if (this.hidden === false && this.y <= 500){ //sale puño
            this.velY += gravity
            this.y += this.velY 
            if(this.y = 500){
                console.log("fist return")
                this.velY = 0
                if(frames % fistRatio === 0){ 
                    this.hidden = true
                    ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
                }
            }
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        } else if (this.hidden === true && this.y > 325) {//regresa el puño
            this.velY = 20
            this.hidden = true
            this.velY += gravity 
            this.y -= this.velY
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        } else {
            this.hidden = true
            this.velY = 0
            this.y = 325
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }
    go() {
        this.hidden = false
    }
}

class Persona {
    constructor (x) {
        this.height = 150 //CAMBIAR
        this.width = 800 //CAMBIAR
        this.x = x
        this.y = ($canvas.height - this.height) + 15
        this.velX = 6
        this.img = new Image()
        this.img.src = "assets/persona.png"
        this.img.onload = () => {
            this.draw()
        }
        this.away = false
    }
    draw() {
      if(this.away === true && this.x <= 200){
            this.velX += gravity
            this.x += this.velX 
            console.log("check")
            if(this.x = 200) { 
                console.log("second condition")
                this.away = false
            } 
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }else if(this.away === false && this.x >= 0){
            console.log("thirdcondition")
            this.velX = -5
            this.velX -= gravity 
            this.x += this.velX
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    } 




    // moveAway(){
    //     for(let i = 0;i <= 200; i++){
    //         this.velX += gravity
    //         this.x += velX 
    //         console.log("check")
    //     }
      
    //    if(this.x === 200) { 
    //     console.log("second condition")
    //     this.away = false
    //     this.velX = 20
    //     this.velX += gravity 
    //     this.x -= this.velX
    //     }else {
    //     console.log("third condition")
    //     this.x = 0
    //     }
    //  }
   } // DO NOT TOUCH
   
class Hamster {
    constructor (x) {
        this.x = x
        this.y = hamsterDOWN //INITIAL
        this.width = 170 
        this.height = 170
        this.velY = 0
        this.wasHit = false
        this.img = new Image()
        this.img.src = "assets/hamster.png"
        this.imgHit = new Image()
        this.imgHit.src = "assets/hamsterSurprised.png"
        this.img.onload = () => {
             this.draw()
        }
    }
    draw() {
        if (this.wasHit === true && this.y < hamsterDOWN-8) {
            this.velY += gravity
            this.y += this.velY
            ctx.drawImage(this.imgHit, this.x, this.y, this.width, this.height)
        } else {
            this.wasHit = false
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }
    up() {
        this.y = hamsterUP
        this.wasHit = false
    }
    down() {
        console.log("down")
        this.y = hamsterDOWN
        this.wasHit = false
    }
    hit() {
        this.velY = -15 //JUMP
        this.wasHit = true
    }
}

let teclaSquare = 170 //basado en los pngs
let teclaY = hamsterDOWN-65

class TeclaLeft {
    constructor (x) {
        this.x = x
        this.y = teclaY
        this.width = teclaSquare
        this.height = teclaSquare
        this.img = new Image()
        this.img.src = "assets/teclaL.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
    }
}

class TeclaCenter {
    constructor (x) {
        this.x = x
        this.y = teclaY
        this.width = teclaSquare
        this.height = teclaSquare
        this.img = new Image()
        this.img.src = "assets/teclaC.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
    }
}

class TeclaRight {
    constructor (x) {
        this.x = x
        this.y = teclaY
        this.width = teclaSquare
        this.height = teclaSquare
        this.img = new Image()
        this.img.src = "assets/teclaR.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
    }
}

//Instances 

const hamsterLeft = new Hamster(110) 
const hamsterCenter = new Hamster(312)
const hamsterRight = new Hamster(515)
const fist = new Fist(325) //Max: 500, Min: 325
const machine = new Machine()
const persona = new Persona(0)
const machineFront = new MachineFront()
const teclaLeft = new TeclaLeft(110)
const teclaCenter = new TeclaCenter(312)
const teclaRight = new TeclaRight(517)
const hammer = new Hammer ()
