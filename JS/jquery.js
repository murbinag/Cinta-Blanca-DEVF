//Creamos un elemento en Javascript puro
let encabezado=document.createElement('h2');
//Le ponemos un texto interno
encabezado.textContent='Este es un texo';
//Lo agregamos al elemento deseado, en este caso body
document.getElementsByTagName('body')[0].appendChild(encabezado);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++
+ Ahora Creamos otro elemento igual pero con jQuery +
++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//Creamos un elemento de texto en este caso
let encabezado2=$('<h2></h2>').text('Otro elemento');
//Lo agregamos al bodu
$('body').append(encabezado2)
