//GLOBAL


class Machine {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img = new Image()
        this.img.src = "assets/machine.png"
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
        this.img.src = "assets/machineFront.png"
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
        this.width = 300
        this.height = 300
        this.x = ($canvas.width - this.width)/2 //mitad de canvas
        this.y = y //y va a cambiar
        this.img = new Image()
        this.img.src = "assets/puño.png"
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Persona {
    constructor (x) {
        this.height = 100 //CAMBIAR
        this.width = 100 //CAMBIAR
        this.x = 200
        this.y = 400
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
        this.y = 350 //INITIAL
        this.width = 170 
        this.height = 170
        this.img = new Image()
        this.img.src = "assets/hamster.png"
        this.img.onload = () => {
             this.draw()
        }
        // this.alive = false
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    up() {
        this.y = 250

    }
    down() {
        this.y = 350
    }
    // hitCheck() {
    //     if (this.alive = false){
    //         this.y -= 100
    //     }else{
    //         this.y += 100
    //     }
    // }
    // PressHit(){
    //     return this.alive = false
    // }
}

//Instances 

const hamsterLeft = new Hamster(100) 
const hamsterCenter = new Hamster(315)
const hamsterRight = new Hamster(530)
const fist = new Fist(325) //Max: 500, Min: 325
const machine = new Machine()
const persona = new Persona()
const machineFront = new MachineFront()

/*  





*/


