//GLOBAL
let gravity = 1.5
let hamsterUP= 240
let hamsterDOWN = 315


class Machine {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img = new Image()
        this.img.src = "assets/machineNOpixel.png"
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
        this.img.src = "assets/machineFrontNopixel.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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
        this.img.src = "assets/puño.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
      if (this.hidden === false && this.y < 500 ){ 
        this.velY += gravity
        this.y += this.velY
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
       }else{
           this.hidden = true
           ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
       }
    }
    
    punch() {
    // let counter  = 4
    // for (let i = 0;i < counter;i++){
    //     this.x += 5 
    //     this.x -= 5
    //  }
    this.hidden = false
    
    if (intervalId % 10 === 0){
        this.punchReturn()
     }
    }

    punchReturn() {
        if (this.hidden === false && this.y > 325 ){
            this.velY += gravity
            this.y -= this.velY
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        //this.y = 325
    }else{
        this.hidden= true
    }  
 }     
}

class Persona {
    constructor (x) {
        this.height = 150 //CAMBIAR
        this.width = 800 //CAMBIAR
        this.x = 0
        this.y = ($canvas.height - this.height) + 15
        this.img = new Image()
        this.img.src = "assets/persona.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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
        this.img.onload = () => {
             this.draw()
        }
    }
    draw() {
        if (this.wasHit === true && this.y < hamsterDOWN-8) {
            this.velY += gravity
            this.y += this.velY
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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

//Instances 

const hamsterLeft = new Hamster(110) 
const hamsterCenter = new Hamster(312)
const hamsterRight = new Hamster(515)
const fist = new Fist(325) //Max: 500, Min: 325
const machine = new Machine()
const persona = new Persona(0)
const machineFront = new MachineFront()


