"use strict"

//Simular un pedido de una pizza
const pedidoPizza = () => {
    return new Promise((resolve, reject) => {
        console.log('Pizzería: preparando tu pizza...');
        const exito = Math.random(); //genera un número entre 0 y 1
        setTimeout(() => {
            if (exito >= 0.5) {
                resolve("Pizza lista");
            } else {
                reject("No hay ingredientes. Pedido cancelado");
            }
        }, 2000);

    })
}

//main script
pedidoPizza()
.then (mensaje=>{
    console.log(mensaje);
})
.catch (error =>{
    console.log(error);
})
.finally (()=>{
    console.log('Fin del pedido');
})
//console.log('Fin del pedido');