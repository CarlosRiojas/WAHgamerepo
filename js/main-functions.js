//DOCUMENT FOR ALL THE MAIN FUNCTIONS

function startGame() {
    console.log('started')
    let feet = new Feet(10)
    feet.draw()
    let machine = new Machine()
    machine.draw()
    let hamster = new Hamster(100,200)
    hamster.draw()
}