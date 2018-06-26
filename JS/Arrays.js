/*let numeros=[2,66,78,98,4,5,6,27,13,56,78];
console.log(numeros);
console.log(numeros.sort() );

let nombres=['Israel','Mauricio','Michel','Jorge','José'];
console.log(nombres);
console.log(nombres.sort());
console.log(nombres.reverse());
*/

let palabra1='Trama';
let palabra2='TRama';

//verificar que sean del mismo tamaño
if(palabra1.length==palabra2.length){
     

    palabra1=palabra1.toLowerCase().split("").sort().join("");
    palabra2=palabra2.toLowerCase().split("").sort().join("");


    if (palabra1==palabra2){
        console.log('Tienes una anagrama');
    }
    else{
        console.log('No tienes un anagrama');
    }
}
else{
    console.log(palabra1, 'y', palabra2, 'No son iguales') 
}


function numero_mayor(arreglo){
    arreglo=arreglo.sort(function(a, b){return a-b});
    let mayor=arreglo[arreglo.length-1];
    return mayor;
}
let listas= [
            [1,3,5,7,67,35,3464574,45745,23,4,7,9,98,45],
            [1,3,5,7,67,35,3464574,45745,23,4,7,9,98,45],
]

 for (let i=0;i<listas.length;i++){
     let mayor=numero_mayor(listas[i]);
     console.log(mayor);
 }
    


/*
1 Crear un arreglo con 40 numeros random
2 Regresar el número mayor de ese arreglo
3 Hacer lo mismo N cantidad de veces
*/
     


function numero_mayor(arreglo){
    arreglo=arreglo.sort(function(a, b){return a-b});
    let mayor=arreglo[arreglo.length-1];
    return mayor;
}

function generaArregloRandom(){
    return Array.from({length: 40}, () => Math.floor(Math.random() * 10000)); 
}

let lista=generaArregloRandom()
console.log(lista);
console.log(numero_mayor(lista));

for (let listaN=0;listaN<100;listaN++){
    let lista=generaArregloRandom()
    console.log(lista);
    console.log(numero_mayor(lista));

}
console.log()
    

