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