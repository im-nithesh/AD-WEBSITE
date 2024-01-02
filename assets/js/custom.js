(function ($) {
	
	"use strict";
	
	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	//Scroll-Lock
	// Disable scrolling when popup is displayed
	function disableScroll() {
		$('body').css('overflow', 'hidden');
	}
	
	// Enable scrolling when popup is closed
	function enableScroll() {
		$('body').css('overflow', 'auto');
	}

	
	// Navbar Animation
	window.onscroll = function() {
		if (window.scrollY > window.innerHeight * 0.9) {
			$("header.main").addClass("background-header");
	  } else {
	    	$("header.main").removeClass("background-header");
	  }
	}

	// Main Banner Carousel
	$('.owl-banner').owlCarousel({
	  center: true,
	  autoplay: true,
	  autoplayTimeout: 2000,
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

	// Works Flip Card

	$("front-button").on('click', function() {
		console.log("1");
		$('front').addClass('FrontToBack');
		$('back').addClass('BackToFront');
	});

	$("back-button").on('click', function() {	
		$('front').removeClass('FrontToBack');
		$('back').removeClass('BackToFront');
	});

	// Team Slider Carousel
	$(".team-slider").owlCarousel({
		loop: true,
		autoplay: true,
		items:4,
		autoplayTimeout: 2000, //2000ms = 2s;
		autoplayHoverPause: true,
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

	//Popup Menu Controls
	$(".item.Everwin").on('click', function() {	
		$('.popup-item.Everwin').addClass('active');
		disableScroll();
	});

	$(".popup-item .close-button").on('click', function() {	
		$('.popup-item').removeClass('active');
		enableScroll();
	});


	//Popup Form Controls
	setTimeout (function () {
		$('.popup-request').addClass('active');
		disableScroll();
	  }, 15000);

	$(".popup-request .close-button").on('click', function() {	
		$('.popup-request').removeClass('active');
		enableScroll();
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
	$('.nav-link a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
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