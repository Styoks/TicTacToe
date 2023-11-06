let pomelo = "hola"

const personajes = {
    name: "Dave",
    score: 0,
    wins:0,
    losses:0
};

let pepe = Object.create(personajes);
pepe.name ="pepe"


console.log(pepe);
