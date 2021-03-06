//GLOBAL
let gravity = 1
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

class CoverFist {
    constructor(){
        this.x = 0
        this.y = 50
        this.width = $canvas.width
        this.height = $canvas.height+250
        this.img = new Image()
        this.img.src = "assets/coverSquare.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

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
        this.y = 325 //y va a cambiar
        this.img = new Image()
        this.velY = 0
        this.hidden = true
        this.img.src = "assets/puñoShort-02.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        if (this.hidden === false && this.y <= 500){ //sale puño
            this.velY += gravity
            this.y += this.velY 
            if(this.y = 500){
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
            // ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }
    go() {
        this.hidden = false
    }
    isTouching(persona) {
        let fistLiveX = this.x+(this.width/3)
        let fistLiveWidth = (this.width/3)*2
        let fistLiveY = this.y+((this.height/3)*2)
        let personaLiveX = persona.x + 375
        let personaLiveWidth = 50
        let personaLiveY = persona.y + 75
        let personaLiveHeight = 75
        
        return (
            (fistLiveX < (personaLiveX + personaLiveWidth)) &&
            ((fistLiveX + fistLiveWidth) > personaLiveX) &&
            (fistLiveY < (personaLiveY + personaLiveHeight)) &&
            ((fistLiveY + fistLiveWidth) > personaLiveY)
        )
    }
}

class Persona {
    constructor (x) {
        this.height = 150 //CAMBIAR
        this.width = 800 //CAMBIAR
        this.x = x
        this.y = $canvas.height - this.height
        this.velX = 6
        this.img = new Image()
        this.img.src = "assets/persona.png"
        this.img.onload = () => {
            this.draw()
        }
        this.away = false
    }
    draw() {
      if(this.away === true && this.x <= 300){
            this.velX += gravity
            this.x += this.velX 
            if(this.x = 300) { 
                this.away = false
            } 
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }else if(this.away === false && this.x >= 0){
            this.velX = -5
            this.velX -= gravity 
            this.x += this.velX
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    } 
}

class LoadScreen {
    constructor(){
        this.img = new Image()
        this.img.src = "assets/startScreen.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img, 0, 0, $canvas.width, $canvas.height)
    }
}
   
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

class PersonaHit {
    constructor(){
        this.width = 300
        this.height = 150
        this.x = ($canvas.width-this.width)/2
        this.y = $canvas.height - this.height
        this.img = new Image()
        this.img.src = "assets/personaHit.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        if (hit === true) {
            // ctx.fillStyle = "white"
            // ctx.fillRect(0,0,$canvas.width,$canvas.height)
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
        }
    }
}

//Instances 

const loadScreen = new LoadScreen()
const hamsterLeft = new Hamster(110) 
const hamsterCenter = new Hamster(312)
const hamsterRight = new Hamster(515)
const fist = new Fist() //Max: 500, Min: 325
const machine = new Machine()
const persona = new Persona(0)
const machineFront = new MachineFront()
const teclaLeft = new TeclaLeft(110)
const teclaCenter = new TeclaCenter(312)
const teclaRight = new TeclaRight(517)
const hammer = new Hammer ()
const coverFist = new CoverFist()
const personaHit = new PersonaHit()

