
/* sprint */
document.addEventListener('DOMContentLoaded' ,function (){
    const a = document.querySelector(".set-sprint");
    const b = document.querySelector(".sprint__img");
    const c = document.querySelector(".sprint__text");

    const a2 = document.querySelector(".set-sprint_mod");
    const b2 = document.querySelector(".sprint__img_mod");
    const c2 = document.querySelector(".sprint__text_mod");

    const a3 = document.querySelector(".question-kit-1");
    const b3 = document.querySelector(".question__img-1");
    const c3 = document.querySelector(".question__text-1");

    const a4 = document.querySelector(".question-kit-2");
    const b4 = document.querySelector(".question__img-2");
    const c4 = document.querySelector(".question__text-2");

    const a5 = document.querySelector(".question-kit-3");
    const b5 = document.querySelector(".question__img-3");
    const c5 = document.querySelector(".question__text-3");

    const a6 = document.querySelector(".question-kit-4");
    const b6 = document.querySelector(".question__img-4");
    const c6 = document.querySelector(".question__text-4");

    const a7 = document.querySelector(".question-kit-5");
    const b7 = document.querySelector(".question__img-5");
    const c7 = document.querySelector(".question__text-5");

    const a8 = document.querySelector(".question-kit-6");
    const b8 = document.querySelector(".question__img-6");
    const c8 = document.querySelector(".question__text-6");

    const a9 = document.querySelector(".question-kit-7");
    const b9 = document.querySelector(".question__img-7");
    const c9 = document.querySelector(".question__text-7");

    //Двойное открывание 
    const x1 = document.querySelector(".sprint__btn");
    const x2 = document.querySelector(".sprint__info");
    
    const x4 = document.querySelector(".sprint__btn_mod");
    const x5 = document.querySelector(".sprint__info_mod");
   
    
    x1.addEventListener('click', () => {
      x2.classList.toggle('opacity-1');
    });
    
    x4.addEventListener('click', () => {
      x5.classList.toggle('opacity-1');
    });
    

    //

    a.addEventListener('click', () => {
        b.classList.toggle('rotate-45');
        c.classList.toggle('opacity-1');
    });
    a2.addEventListener('click', () => {
        b2.classList.toggle('rotate-45');
        c2.classList.toggle('opacity-1');
    });
    a3.addEventListener('click', () => {
        b3.classList.toggle('rotate-45');
        c3.classList.toggle('opacity-1');
    });
    a4.addEventListener('click', () => {
        b4.classList.toggle('rotate-45');
        c4.classList.toggle('opacity-1');
    });
    a5.addEventListener('click', () => {
        b5.classList.toggle('rotate-45');
        c5.classList.toggle('opacity-1');
    });
    a6.addEventListener('click', () => {
        b6.classList.toggle('rotate-45');
        c6.classList.toggle('opacity-1');
    });
    a7.addEventListener('click', () => {
        b7.classList.toggle('rotate-45');
        c7.classList.toggle('opacity-1');
    });
    a8.addEventListener('click', () => {
        b8.classList.toggle('rotate-45');
        c8.classList.toggle('opacity-1');
    });
    a9.addEventListener('click', () => {
        b9.classList.toggle('rotate-45');
        c9.classList.toggle('opacity-1');
    });

    
});
//

//slider

$('.center').slick({
    centerMode: true,
    centerPadding: '50px',
    autoplay:true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 1
        }
      }
    ]
  });

//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.menu').toggleClass('active-menu');

  });
});  

//Скрол 

$('.menu__item_mod').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 1200,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
  });

  return false;
})

$('.price-btn').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 1200,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
  });

  return false;
})
$('.btn-blue').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 1200,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
  });

  return false;
})

//кнопка вверх

jQuery(document).ready(function() {
  var btn = $('#arrow-top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});
var btn = $('#arrow-top');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   }); 

//header 

$(function() {
  let header = $('.header');
  let hederHeight = header.height(); // вычисляем высоту шапки
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
     $('body').css({
        'paddingTop': hederHeight+ 'px' // делаем отступ у body, равный высоте шапки
     });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
 });