function Hero (name){
    this.name = name;
}

Hero.prototype.saludar = function(){
    console.log(`Hola soy ${this.name}`)
}

const zelda = new Hero("Zelda")

console.log(`Name: ${zelda.name}`)
console.log(`Saludar: ${zelda.saludar}`)

// zelda.hasOwnProperty('name') verifica si el prototype de Zelda tiene una propiedad name,
// si la tiene, pero fue heredada, regresa false.
console.log(`zelda.hasOwnProperty('name'): ${zelda.hasOwnProperty('name')}`)