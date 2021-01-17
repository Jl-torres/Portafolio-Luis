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



/*Carousel*/

window.addEventListener('load', function(){

new Glider(document.querySelector('.carousel__lista'), {

    slidesToShow:1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },

    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 800,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    
  }); 



});