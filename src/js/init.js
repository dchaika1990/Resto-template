$(document).ready(function () {

    $(window).scroll(function () {
       if ($(this).scrollTop() > 10 ) {
           $('.header').addClass('scrolled');
       } else {
           $('.header').removeClass('scrolled');
       }
    });

});