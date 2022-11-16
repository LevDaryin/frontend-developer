/* const { TRUE } = require("sass"); */

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 4500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400 && $(this).scrollTop() < 3800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo__navigation'),
        menuItem = document.querySelectorAll('.promo__link'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__navigation_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('promo__navigation_active');
            })
        })
    })
});