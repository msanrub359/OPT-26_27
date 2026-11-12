"use strict"
/**
 * Pedir datos de estudiantes (nombre y notas)
 * guardar esos datos en un fichero
 */
import inquirer from "inquirer"
import { readFile, writeFile } from "fs/promises"
import { throws } from "assert/strict";
import { NOTIMP } from "dns";

const appEstudiante = (() => {
    //ruta y el nombre del fichero donde se va
    //a guardar los estudiantes
    const FICHERO = new URL("./estudiantes.json", import.meta.url);

    /**
     * @description leer el fichero estudiantes
     */
    const leerEstudiantes = async () => {
        try {
            return JSON.parse(await readFile(FICHERO, "utf8"))
        } catch (error) {
            if (error.code = "ENOENT") return []; //No existe el fichero
            throw new Error("Error en la lectura del fichero")
        }
    }
    /**
     * @description Guardar los estudiantes en un fichero
     * @param {Array} estudiantes 
     * @returns {Promise|trhow}
     */
    const guardarEstudiantes = async (estudiantes) => {
        try {
            return await writeFile(FICHERO, JSON.stringify(estudiantes, null, 2), "utf8")
        } catch (error) {
            throw new Error("Error en la grabación del fichero")
        }
    }
    const registrarEstudiante = async () => {
        const aNotas = []; //guardar las notas del estudiante
        let finalizar = false; //controlar el bucle para introducir notas
        //introducir el nombre del alumno
        const { nombre } = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Introduzca el nombre del estudiante',
                validate: (dato => {
                    if (dato.trim().length >= 3) {
                        return true;
                    }
                    return 'El nombre debe tener al menos 3 caracteres.'
                })
            }
        ]);
        //introducir las notas
        while (!finalizar) {
            const { nota } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'nota',
                    message: 'Introzduzca una nota [0-10]. fin->Terminar',
                    validate: (dato => {
                        if (dato.trim().toLocaleLowerCase() == 'fin') return true;
                        if (dato.trim() !== "" && dato >= 0 && dato <= 10) return true;
                        return 'La nota debe ser un número entre 0 y 10 o "fin" para terminar';
                    })

                }
            ]);
            if (nota.trim().toLocaleLowerCase() == 'fin') {
                finalizar = true; //salir del bucle
            } else {
                aNotas.push(Number(nota));
            }
        }
        //calcular promedio
        const promedio = (aNotas.reduce((acumulado, nota) => acumulado + nota, 0) / aNotas.length);
        // promedio =promedio/aNotas.length
        //crear objeto con nombre, notas y promedio del estudiante
        const estudiante = {
            nombre,
            notas: aNotas,
            promedio:promedio.toFixed(2),
            observacion: promedio >= 5 ? 'Aprobado' : 'Suspenso'
        }
         try {
            //grabar el estudiante en el fichero
            const estudiantes = await leerEstudiantes() ; //leer del fichero
            estudiantes.push(estudiante); //añade el nuevo estudiante en el array
            await guardarEstudiantes(estudiantes);
            console.log(`El estudiante ${nombre} ha sido grabado con éxito`);
        } catch (error) {
            console.log(`Se ha producido un error ${error.message}`);
        }

    }
    const listarEstudiantes = async() => {
        try {
           const estudiantes = await leerEstudiantes();
           if (estudiantes.length==0){
            console.log('No hay estudiantes registsrados');
            return;
           };
           const listado=estudiantes.map(estudiante =>(
            {
                Nombre: estudiante.nombre,
                Promedio: estudiante.promedio,
                Observacion:estudiante.observacion
            }
           ))
           console.log("===== ESTUDIANTES REGISTRADOS =====");
           console.table(listado)
        } catch (error) {
            console.log(`Error-> ${error.message}`);
        }
        
    }
    const consultarEstudiante = () => {

    }
    const init = async () => {
        let opcion;

        do {
            ({ opcion } = await inquirer.prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'Seleccione opción',
                    choices: [
                        {
                            name: 'Registrar estudiante y notas',
                            value: 'registrar'
                        },
                        {
                            name: 'Listar estudiantes',
                            value: 'listar'
                        },
                        {
                            name: 'Consultar calificaciones',
                            value: 'consultar'
                        },
                        {
                            name: 'Salir',
                            value: 'salir'
                        },
                    ]
                }
            ]));
            console.log(opcion);
            try {
                switch (opcion) {
                    case "registrar":

                        await registrarEstudiante();
                        break;
                    case "listar":
                        await listarEstudiantes();
                        break;
                    case "consultar":
                        await consultarEstudiante();
                        break;
                    case "salir":
                        console.log('Saliendo del script ...');
                        break;
                }
            } catch (error) {
                console.error(`Ocurrío un error ${error}`);
            }
        } while (opcion != 'salir')

    }
    return { init }
})();

appEstudiante.init();
