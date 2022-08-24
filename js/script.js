$(function () {
    'use strict';

    // Nav Fix
    // var navoffset = $('#main_nav').offset().top;

    // $(window).on('scroll', function () {
    //     var nav = $(this).scrollTop();
    //     if (nav > navoffset) {
    //         $('#main_nav').addClass('fixed_nav');
    //     } else {
    //         $('#main_nav').removeClass('fixed_nav');
    //     }
    // });



    // // CounDown js start
    // $('.counDown').countdown('2021/10/30', function (event) {
    //     $(this).html(event.strftime('%d days %H:%M:%S'));
    // });

    // slider in banner part start
    // $('#banner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    //     nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    //   });
    // slider in banner part start
    $('.text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });
    // slider in banner part end

    
    // slider in Testimonial part end


    // Countdown in Happy Hour part start
    $('.happ_day').countdown('2022/08/28', function (event) {
        $(this).html(event.strftime('%D'));
    });

    $('.happ_mins').countdown('2022/08/28', function (event) {
        $(this).html(event.strftime('%M'));
    });

    $('.happ_hours').countdown('2022/08/28', function (event) {
        $(this).html(event.strftime('%H'));
    });

    $('.happ_secs').countdown('2022/08/28', function (event) {
        $(this).html(event.strftime('%S'));
    });
    // Countdown in Happy Hour part end

});