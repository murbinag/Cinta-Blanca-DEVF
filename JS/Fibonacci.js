/*
let fibo=[0,1];

for(i=1;i<10;i++) {
    let numero = fibo[i]+fibo[i-1];
    fibo.push(numero);  
}
console.log(fibo); 
*/

function creaParrafoHTML(numero) {
    let parrafo = document.createElement('p');
    parrafo.textContent = numero + ", ";
    return parrafo;
}


function fibonacci(nveces) {
    let fibo = [0, 1];
    let contenedor = document.createElement('div');

    if(nveces>0){
        let parrafo=creaParrafoHTML(0);
        contenedor.appendChild(parrafo);
    }

    if(nveces>1){
        let parrafo=creaParrafoHTML(0);
        contenedor.appendChild(parrafo);
    }
    
    if(nveces>2){
        for (i = 1; i < nveces - 1; i++) {
            let numero = fibo[i] + fibo[i - 1];
            fibo.push(numero);

            let parrafo = creaParrafoHTML(numero);
            contenedor.appendChild(parrafo);
        }
    }
    document.getElementsByTagName('body')[0].appendChild(contenedor);

    return fibo;
}

function numeros_pares(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if ([i] % 2 == 0) {
            contador++;
        }

    }
    console.log(`tiene ${contador} numeros pares`);
}

function calculaFibo(){
        let cantidad=document.getElementById('cantidad').value;
        if (cantidad>0){    
            fibonacci(cantidad);
        }
        else{
            alert('numero no valido');
        }
    }
 

