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

class Fist {
    constructor (y) {
        this.x = 300 //mitad de canvas
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

class Hamster {
    constructor (x,y) {
        this.x = x
        this.y = y
        this.width = 170 
        this.height = 170
        this.img = new Image()
        this.img.src = "assets/hamster.png"
        this.img.onload = () => {
             this.draw()
        }
        this.alive = false
        
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
   hitCheck() {
        if (this.alive = false){
            this.y -= 100
        }else{
            this.y += 100
        }
    }
    PressHit(){
        this.alive = false
    }
}

class Persona {
    constructor(x) {
        this.x = x
        this.y = 600
        this.width = 400
        this.height = 200
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