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
        this.x = x
        this.y = $canvas.height-this.height
        // this.img = new Image()
        // this.img.src = ""
        // this.img.onload = () => {
        //     this.draw()
        // }
    }
    draw() {
        
        //BORRAR ESTO
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "white"
        ctx.fillText("Pies",this.x,this.y,this.width, this.height)
        console.log('drawn')
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}