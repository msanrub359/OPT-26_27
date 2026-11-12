"use strict"
/**
 * Script que permita introducir nombre y edad
 * También se mostrará por consola
 */
import readline from "readline/promises"; //permite leer datos
import {stdin as input, stdout as output } from "process"; //permite la entrada de datos por consola

//crear la interfaz para leer datos del teclado
const entradaDatos =readline.createInterface({input, output});

console.log('Bienvenid@s al primer programa de Node.js');

const nombre = await entradaDatos.question("Instroduzca su nombre");
const edad = Number(await entradaDatos.question("Instroduzca su edad"));
//mostrar datos
console.log(`Hola ${nombre}, tienes ${edad}`);
//cerrar el intefaz
entradaDatos.close(); //cierra la interfaz de lectura de datos por consola