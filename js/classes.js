class Hamster {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
   draw() {
    console.log("placeholder")
   }

}

class Fist {
    constructor (y) {
        this.x = $canvas.width/2 //mitad de canvas
        this.y = y //y va a cambiar
        // this.img.src = ""
        // this.img.onload = () => {
        //     this.draw()
        // }
    }
    draw() {
        //BORRAR ESTO
        console.log("placeholder")
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Feet {
    constructor (x) {
        this.height = 100 //CAMBIAR
        this.width = 100 //CAMBIAR
        this.x = x
        this.y = $canvas.height-this.height
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
        this.width = 100 //CAMBIAR
        this.height = 100 //CAMBIAR
        // this.img.src = ""
        // this.img.onload = () => {
        //     this.draw()
        // }
    }
    draw() {
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}