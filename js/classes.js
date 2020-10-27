//GLOBAL

let ratio = 150


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

class Feet {
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

function randomBox() {
    if (frames % ratio === 0){ 
    const RandomMovement= Math.floor(Math.random() * 3)
   switch(RandomMovement){
         case 0:
            hamsterLeft.alive = true
            break;
        case 1:
            hamsterRight.alive = true
            break;
        case 2:
            hamsterCenter.alive = true
            break;
         default:
             break;   
   }
 
  }
  
}


/*  





*/

let hamsterLeft = new Hamster(100,200)
let hamsterCenter = new Hamster(315, 200)
let hamsterRight = new Hamster(530, 200)