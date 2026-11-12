"use strict"

/**
 * Ampliar la pizzeria: ahora el pedido tiene tres pasos que dependen del anterior
 * preparar la pizza, preparar la bebida y repartir en moto.
 */

/**
 * @description Promesa donde se prepara la pizza
 * 
 */
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

const prepararBebida = () => {
    return new Promise((resolve, reject) => {
        console.log('Barra: preparando tu bebida...');
        const exito = Math.random(); //genera un número entre 0 y 1
        setTimeout(() => {
            if (exito >= 0.5) {
                resolve("Bebida lista para el reparto...");
            } else {
                reject("No hay bebida. Pedido cancelado");
            }
        }, 2000);

    })
}

const repartirPizza = () => {
    return new Promise((resolve, reject) => {
        console.log('Reparto: gestionando...');
        const exito = Math.random(); //genera un número entre 0 y 1
        setTimeout(() => {
            if (exito >= 0.5) {
                resolve("Pedido enviado");
            } else {
                reject("No hay vehículo. Pedido cancelado");
            }
        }, 2000);

    })
}


const pedido =async()=>{
    try {
        console.log(await pedidoPizza());
        console.log(await prepararBebida());
        console.log(await repartirPizza());
        console.log('Fin del pedido');
    } catch (error) {
        console.log(error);
    }

}
//console.log('Fin del pedido');