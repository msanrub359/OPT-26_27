"use strict"
/**
 * script que pedirá el ingreso de varias notas de un
 * estudiante y calcular su promedio
 */
import readline from "readline/promises"; //permite leer datos
import {stdin as input, stdout as output } from "process"; //permite la entrada de datos por consola

const appPromedio=(()=>{
    const aNotas=[];
    


/**
 * @description Entrada de notas
 */
    const init = async()=>{
        const entradaDatos=readline.createInterface({input, output});
        console.log('Bienvenid@ al cálculo de tu promedio');
        let nota= await entradaDatos.question("Introduzca una nota [0-10]. 'fin'->Terminar: ");
        while (nota.toLocaleLowerCase()!='fin'){
           
            if (!isNaN(nota) && nota >=0 && nota <=10){
             
                aNotas.push(Number(nota))
            }else{
                console.log('Error!! La nota debe ser numérica entre 0 y 10');
            }
            nota= await entradaDatos.question("Introduzca una nota [0-10]. 'fin'->Terminar: ");
        }
        entradaDatos.close();
        console.log(calcularPromedio());
    }

    /**
     * @description Calcula el promedio de todas las notas y devuelve el resultado
     * @returns {cadena} devuelve el texto con el resultado
     */
    const calcularPromedio= ()=>{
        const suma= aNotas.reduce((acumulado, nota)=>acumulado+nota,0);
        
        const promedio =suma/aNotas.length
        return `El promedio de notas es ${promedio.toFixed(2)} ${promedio >=5 ? 'Aprobado': 'Suspenso'}`

    }
    return {init}
}) ();
appPromedio.init()
