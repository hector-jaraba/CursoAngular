function holaMundo( mensaje:string ){
    console.log(`Hola ${ mensaje.toUpperCase() }`);
}

var persona = {
    nombre : "Héctor"
}

holaMundo(persona.nombre);
