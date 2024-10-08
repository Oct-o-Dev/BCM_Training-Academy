(function($) {
    'use strict';
	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	

	
    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });
	
 // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
	
// to wow Jquery
    new WOW().init();


// Loder  
    $(function () {
      $('body').addClass('loaded');
    });  
 


     //======< scrollcue js >======
    $(function(){
          scrollCue.init({
          duration : 1500,
          interval : -0.7,
          percentage : 0.90,
          smartSpeed: 500 
          
        })
    });

 // slider Active
    $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    }) 


 // slider Active
    $('.testis_lists').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 

 // slider Active
    $('.testimo_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: true,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 


 // slider Active
    $('.blog_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 





$(document).ready(function(){ 
// sticky menu===================
        var wind = $(window);
        var sticky = $('#sticky-header');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll <100) {
                sticky.removeClass('sticky-nav');
            } else {
                sticky.addClass('sticky-nav');
            }
        });
});


    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    }); 

// Skills Bars
$('.skill-percent').each(function(){
  $(this).animate({
    width:$(this).attr('data-percent')},"fast");
  });

// scroll strat============================

         $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });





    

    
	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })
})(jQuery);




