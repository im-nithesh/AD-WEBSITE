(function ($) {
	
	"use strict";
	
	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');
    });

	AOS.init();
	
	//Smooth-Scroll
	let easeInOutQuint = t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; // Easing function found at https://gist.github.com/gre/1650294

	// With this attempt I tried to make the scroll by mouse wheel look smooth
	let delay = ms => new Promise(res => setTimeout(res, ms));
	let dy = 0;
	window.addEventListener("wheel", async e => {
		// Prevent the default way to scroll the page
		e.preventDefault();

		dy += e.deltaY;
		let _dy = dy; // Store the value of "dy"
		await delay(50); // Wait for .05s

		// If the value hasn't changed during the delay, then scroll to "start + dy"
		if (_dy === dy) {
			let start = window.scrollY || window.pageYOffset;
			customScrollTo(start + dy, 600, easeInOutQuint);
			dy = 0;
		}
	}, { passive: false });

	function customScrollTo(to, duration, easingFunction) {
		let start = window.scrollY || window.pageYOffset;
		let time = Date.now();
		let timeElapsed = 0;
		let speed = (to - start) / duration;
		
		(function move() {
			if (timeElapsed > duration) {
				return;
			}
			timeElapsed = Date.now() - time;

			// Get the displacement of "y"
			let dy = speed * timeElapsed;
			let y = start + dy;

			// Map "y" into a range from 0 to 1
			let _y = (y - start) / (to - start);
			// Fit "_y" into a curve given by "easingFunction"
			_y = easingFunction(_y);
			// Expand "_y" into the original range
			y = start + (to - start) * _y;

			window.scrollTo(0, y);
			window.requestAnimationFrame(move);
		})();
	}

	
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
        320:{
            items:1
		}
      }
	});

	// Team Slider Carousel
	$(".team-slider").owlCarousel({
		loop: true,
		autoplay: true,
		items:4,
		autoplayTimeout: 2000, //2000ms = 2s;
		autoplayHoverPause: true,
		responsive:{
			320:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		  }
	});
      
	//Popup Form Controls
	if (window.matchMedia('(min-width: 767px)').matches) {
		setTimeout (function () {
			$('.popup-request').addClass('active');
			disableScroll();
		}, 15000);
	}
	$(".popup-request .close-button").on('click', function() {	
		$('.popup-request').removeClass('active');
		enableScroll();
	});


	//Quote Popoup Controls
	
	var form = document.getElementById('quote-search-form');
	var popupQuote = document.querySelector('.popup-quote');
	var sqft = document.querySelector('#quote-search-form input[type="number"]');
	var category = document.querySelector('#quote-search-form select[name="category"]');
	var plan = document.querySelector('#quote-search-form select[name="plan"]');
	var premium = plan.querySelector('option[value="5"]');
	window.price = 0;

	//disabling premium option
	category.addEventListener('change', function() {
		var value = this.value;
		if (value == "2" || value == "3") {
			premium.disabled = true;
		} else {
			premium.disabled = false;
		}

		plan.selectedIndex = 1;
	});

	// Code to display the popup and Price
	form.addEventListener('submit', e => {
		e.preventDefault();
		let sqftValue = sqft.value;
		let categoryValue = category.value;
		let planValue = plan.value;
		
		window.price = categoryValue == "1" ? (planValue == "4" ? sqftValue*2500 : sqftValue*3000) : sqftValue*2000;
		
		popupQuote.classList.add('active');
		disableScroll();
	});

	$(".popup-quote .close-button").on('click', function() {	
		$('.popup-quote').removeClass('active');
		enableScroll();
	});

	// Location reload on Device-Width Change
	var width = $(window).width();
	$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})


	// Responsive Section heading 
	const sectionHeadings = document.querySelectorAll('.section-heading');
	
	if (window.matchMedia('(max-width: 992px)').matches) {
	sectionHeadings.forEach(sectionHeading => {
		const parentElement = sectionHeading.parentElement;
		if (sectionHeading.classList.contains('right')) {
			sectionHeading.classList.remove('right');
			sectionHeading.classList.add('center');
			parentElement.setAttribute('data-aos', 'fade-up');
		}
		if (sectionHeading.classList.contains('left')) {
			sectionHeading.classList.remove('left');
			sectionHeading.classList.add('center');
			parentElement.setAttribute('data-aos', 'fade-up');
		}

	});
	}
	
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
			$(".header-area .main-nav .logo").toggleClass('hidden');
			setTimeout(function() {
				$(".header-area .main-nav .logo").toggleClass('d-none');
			}, 200);
		});
	}


	// Menu elevator animation
	$('.nav-link a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 767) {
					$('.menu-trigger').removeClass('active');
					setTimeout(function() {
						$(".header-area .main-nav .logo").removeClass('hidden');
					}, 300);
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