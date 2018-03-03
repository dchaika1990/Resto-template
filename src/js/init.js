$(document).ready(function () {

    //Navbar
    $(window).scroll(function () {
       if ($(this).scrollTop() > 10 ) {
           $('.header').addClass('scrolled');
       } else {
           $('.header').removeClass('scrolled');
       }
    });
    $(window).change(function () {
       console.log($(this).width())
    });
    $('.mobile-btn').on('click', function () {
        if ( $('.mobile-nav').is(':hidden') ){
            $('.mobile-nav').slideDown(500).css('display','flex');
            $(this).css('justify-content', 'center');
            $('.mobile-btn span:first').css('transform', 'rotate(-45deg) translateX(-3px) translateY(2px)');
            $('.mobile-btn span:eq(1)').css('opacity', 0);
            $('.mobile-btn span:last').css('transform', 'rotate(45deg)');
        } else {
            $('.mobile-nav').slideUp(500);
            $(this).css('justify-content', 'space-around');
            $('.mobile-btn span:first').css({'transform': ''});
            $('.mobile-btn span:eq(1)').css('opacity', 1);
            $('.mobile-btn span:last').css({'transform': ''});
        }
    });

    if ( $(window).width() > 767 ) $('.mobile-nav').css('display','none');

    //Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.slick-arrow, .slick-dots').hide();
    $('.slider').hover(
        function () {
            $('.slick-arrow, .slick-dots').stop().fadeIn();
        },
        function () {
            $('.slick-arrow, .slick-dots').stop().fadeOut();
        }
    );

});