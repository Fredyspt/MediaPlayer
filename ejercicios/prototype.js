// -----------------------
// Version 1: No eficiente
// -----------------------
function Hero (name){
    const hero = {
        name: name
    }

    hero.saludar = function() {
        console.log(`Hola soy ${this.name}`)
    }

    return hero
}

const zelda = Hero("Zelda")
zelda.saludar()

// ------------------------
// Version 2: Object.create
// ------------------------
const heroMethods = {
    saludar: function(){
        console.log(`Hola soy ${this.name} V2`)
    }
}

function Hero2 (name){
    // Crea un objeto nuevo obteniendo todas las propiedades de heroMethods y se las asigna a hero
    const hero = Object.create(heroMethods)
    hero.name = name;
    return hero
}

const zelda2 = Hero2("Zelda")
zelda2.saludar()

// --------------------
// Version 3, prototype
// --------------------
function Hero3 (name){
    const hero = Object.create(Hero3.prototype)
    hero.name = name;
    return hero
}

Hero3.prototype.saludar = function(){
    console.log(`Hola soy ${this.name} V3`)
}

const zelda3 = Hero3("Zelda")
zelda3.saludar()

// ---------------
// Version 4, new
// ---------------
function Hero4 (name){
    // La palabra hace esto automaticamente vvv
    // this = Object.create(Hero4.prototype)
    this.name = name;
    // Esto tambien se hace explicitamente cuando se usa new.
    // return this
}

Hero4.prototype.saludar = function(){
    console.log(`Hola soy ${this.name} V4`)
}

const zelda4 = new Hero4("Zelda")
zelda4.saludar()