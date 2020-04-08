/*INDICE:


*/

//aqui creo una serie de eventos para que se produzca un efecto 
//de colores cuando el mouse pase sobre los diferentes divs
var formulario = document.querySelector('form');
formulario.addEventListener('mouseover',function(){
    formulario.style.backgroundColor="#0a3d62";
});

formulario.addEventListener('mouseout',function(){
    formulario.style.backgroundColor="#60a3bc";
});

var nombre = document.getElementById('nombre');
 nombre.addEventListener('mouseover',function(){
     nombre.style.backgroundColor="#f5f6fa";
 });

 nombre.addEventListener('mouseout',function(){
     nombre.style.backgroundColor="#95afc0";
 });

 var apell = document.getElementById('apellidos');
 apell.addEventListener('mouseover',function(){
     apell.style.backgroundColor="#f5f6fa";
 });

 apellidos.addEventListener('mouseout',function(){
     apellidos.style.backgroundColor="#95afc0";
 });


var naci = document.getElementById('nacimiento');
naci.addEventListener('mouseover',function(){
    naci.style.backgroundColor="#f5f6fa"
});
naci.addEventListener('mouseout',function(){
    naci.style.backgroundColor="#95afc0";
});

var dire = document.getElementById('direccion');
dire.addEventListener('mouseover',function(){
    dire.style.backgroundColor="#f5f6fa";
});

dire.addEventListener('mouseout',function(){
    dire.style.backgroundColor="#95afc0";
});

var num = document.getElementById('numero');
num.addEventListener('mouseover',function(){
    num.style.backgroundColor="#f5f6fa";
});

num.addEventListener('mouseout',function(){
    num.style.backgroundColor="#95afc0";
});

var number = document.getElementById('numeropi');
number.addEventListener('mouseover',function(){
    number.style.backgroundColor="#f5f6fa";
});

number.addEventListener('mouseout',function(){
    number.style.backgroundColor="#95afc0";
});

var local = document.getElementById('localidad');
local.addEventListener('mouseover',function(){
    local.style.backgroundColor="#f5f6fa";
});

local.addEventListener('mouseout',function(){
    local.style.backgroundColor="#95afc0";
});

var dni = document.getElementById('dni');
dni.addEventListener('mouseover',function(){
    dni.style.backgroundColor="#f5f6fa";
});

dni.addEventListener('mouseout',function(){
    dni.style.backgroundColor="#95afc0";
});



//Aqui voy a construir unas clases usando el metodo constructor

class form{
    constructor(nombre , apellidos , nacimiento , direccion , numero , numeropi , localidad , dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacimiento = nacimiento;
        this.direccion  = direccion;
        this.numero = numero;
        this.numeropi = numeropi;
        this.localidad = localidad;
        this.dni = dni;
    }
}


class UI {
    addForm(){

    }


    resetForm(){

    }


    deleteForm(){

    }


    showMessage(){


    }
}


//Eventos del DOM

//En este primer evento atrapo cada uno de los ID de mi formulario
//en una constante ID ,creo un evento de la clase submit .


var formu = document.getElementById('formulario');
formu.addEventListener('submit', function(e){                     //aqui capturo el dato que me da cada vez que ejecuto 
   const nombre = document.getElementById('nombre').value;        //ese dato se llama evento "e"
   const apellidos = document.getElementById('apellidos').value;
   const nacimiento = document.getElementById('nacimiento').value;
   const direccion = document.getElementById('direccion').value;
   const numero = document.getElementById('numero').value;
   const numeropi = document.getElementById('numeropi').value;
   const localidad = document.getElementById('localidad').value;
   const dni = document.getElementById('dni').value;
   

   
  
   console.log(dni);
   //cada vez que el user le da a "save" el cuestionario se refresca
   //para prevenir ese comportamiento por defecto uso este comando
   e.preventDefault();
   
});