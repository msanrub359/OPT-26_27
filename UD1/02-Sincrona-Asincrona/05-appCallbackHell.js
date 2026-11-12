"use strict"

const tarea1=(callback)=>{
    setTimeout(() => {
        console.log('Primer tiempo muerto completado');
        callback();
    }, 1500);
};
const tarea2=(callback)=>{
    setTimeout(() => {
        console.log('Segundo tiempo muerto completado');
        callback();
    }, 1500);
}
const tarea3=(callback)=>{
    setTimeout(() => {
        console.log('Tercer muerto completado');
        callback();
    }, 1500);
};

//   tarea1(function(){
//     tarea2 (function(){
//         tarea3(function(){
//            console.log('...Finalizando'); 
//         })
//     })
//   })

 
//main script
tarea1(()=>{
    tarea2(()=>{
        tarea3(()=>{
            console.log('...Finalizando');
        })
    })
})