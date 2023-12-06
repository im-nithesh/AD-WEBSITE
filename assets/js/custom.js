(function ($) {
	
	"use strict";
	
	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Navbar Animation
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  if (scroll >= 510) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	})


	// Main Banner Carousel
	$('.owl-banner').owlCarousel({
	  center: true,
	  autoplay: true,
      items:1,
      loop:true,
      dots:true,
	  margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});

	
	$(".team-slider").owlCarousel({
		loop: true,
		autoplay: true,
		items:4,
		autoplayTimeout: 2000, //2000ms = 2s;
		autoplayHoverPause: true,
	});
      


	//Popup Menu Controls
	$(".item.Everwin").on('click', function() {	
		$('.popup-item.Everwin').addClass('active');
	});

	$(".popup-item .close-button").on('click', function() {	
		$('.popup-item').removeClass('active');
	});

	setTimeout (function () {
		$('.popup-request').addClass('active');
	  }, 10000);

	$(".popup-request .close-button").on('click', function() {	
		$('.popup-request').removeClass('active');
	});

	// Popup item Carousel
	$('.owl-popup').owlCarousel({
		center: true,
		autoplay: true,
		autoplayTimeout: 2000,
		items:1,
		loop:true,
		nav:true,
		navText: ['<i class="fa-solid fa-angle-left" aria-hidden="true"></i>','<i class="fa-solid fa-angle-right" aria-hidden="true"></i>'],
		margin:30,
		responsive:{
		  992:{
			  items:1
		  },
		  1200:{
			  items:1
		  }
		}
	});

	var width = $(window).width();
		$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});
    


})(window.jQuery);