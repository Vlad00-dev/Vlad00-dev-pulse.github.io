$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev_arrow.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_arrow.png" alt="prev"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
      });
  });
  