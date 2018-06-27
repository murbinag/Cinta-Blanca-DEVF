function eventoEnter(){
    event.preventDefault();
    if (event.keyCode ===13) { //el numero 13 es el numero de la tecla enter en el orden
        muestraNombre();
    }
}

function limpiaTodo(){
    document.getElementById('el_contenedor').innerHTML='';
}

function eliminaElemento(elId){
    let elemento=document.getElementById(elId);
    //Eliminamos el elemento del padre (el_contenedor)
    document.getElementById('el_contenedor').removeChild(elemento);
}

function muestraNombre(){
    //Obtenemos nombre del input usando el id que tiene el input de html
    let elnombre=document.getElementById('el_nombre').value;

    if(elnombre.length>0){
        //Creamos un elemento H2 para mostrar el texto
        let encabezado = document.createElement('h2');
        //Le asignamos valor a la variable al contenido de texto del H2
        encabezado.textContent=elnombre;
        //Definimos el atributo ID del elemento unico usando get Time()
       let elId=new Date().getTime();
        encabezado.setAttribute('id',elId);
        //Asignamos el evento 'click' y creamo una función anonima 
        //que mande llamar elemininaElemento()
        encabezado.onclick=function(){eliminaElemento(elId)};
        //Agrego el elemento H2 a el contenedor
        document.getElementById('el_contenedor').appendChild(encabezado);

        //Vamos a limpiar el input
        document.getElementById('el_nombre').value='';
    }    
}
