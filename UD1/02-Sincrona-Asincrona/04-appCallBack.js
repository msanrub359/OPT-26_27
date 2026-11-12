"use strict";

//temporizador
const ejecutarCallBack =(callback)=>{
setTimeout(()=>{
    console.log('progresando...');
    callback();
},1500);
}



const finalizando =()=>{
    console.log('...finalizando');
}
//main script
console.log('iniciando...');
ejecutarCallBack(finalizando);