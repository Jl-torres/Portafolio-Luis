/*Menu*/ 
$(document).ready(main);

var contador = 1;

function main () {
    $('.menu-bar').click(function(){
     
        if(contador==1){
            $('nav').animate({
                left: '0'
            }); 
            contador=0;        
        } else {
            contador=1
            $('nav').animate({
                left:'-100%'
            })
        }
        
    })
};

/*Proyectos*/

var grid= new Muuri('.grid',{
    layout:{
      rounding: false
    }
}) ;

window.addEventListener('load', () => {
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');

    enlaces.forEach ((elemento)=> {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

  const categoria= evento.target.innerHTML.toLowerCase();
  categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);


        })
    });


});

/*Script Seccion Leer mas*/

let i = 0;

let button= document.querySelector('#boton').addEventListener('click', function(){
    if(!i) {
        document.getElementById('LeerMas').style.display = 'inline';
        document.getElementById('info1').style.height = '500px';
        document.getElementById('item1').style.marginBottom = '200px';
        document.getElementById('boton').innerHTML = 'Leer menos';
        i=1;
    }
 
    else {
        document.getElementById('LeerMas').style.display='none';
        document.getElementById('info1').style.height = '300px';
        document.getElementById('item1').style.marginBottom = '-200px';
        document.getElementById('boton').innerHTML = 'Leer mas';
        i=0;
    }

}) 