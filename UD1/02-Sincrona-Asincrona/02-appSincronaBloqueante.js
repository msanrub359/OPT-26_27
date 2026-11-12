"use strict"
const funcionLargaDuracion=()=>{
    const inicio=Date.now();
    while (Date.now() - inicio <5000){
        //bloquea durante 5 segundos
        //Este bucle se ejecuta continuamente durante 5 segundos
        //consumiendo la CPU y deteniendo cualquier otra ajecución.
    }
    return 'hola'
}

//main script
console.log("Iniciando...");
console.log(funcionLargaDuracion());
console.log("...finalizado.")
