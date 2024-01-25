(function ($) {
	
	"use strict";

    //Enable or Disable Scroll-Lock
    function disableScroll() {
        $('body').css('overflow', 'hidden');
    }
    function enableScroll() {
        $('body').css('overflow', 'auto');
    }


    //Request Popup Controls
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

    // Popup item Carousel
    $('.owl-popup').owlCarousel({
        startPosition: 0,
        center: true,
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

    function startOwlCarousel() {
        $('.owl-carousel').trigger('play.owl.autoplay', [2000]);
    }

    function stopOwlCarousel() {
        $('.owl-carousel').trigger('stop.owl.autoplay');
        $('.owl-carousel').trigger('to.owl.carousel', 0);
    }

    //Item Popup Menu Controls
    $("#everwin").on('click', function() {	
        $('#everwin-popup').addClass('active');
        disableScroll();
        startOwlCarousel();
    });

    $("#everwin-popup .close-button").on('click', function() {	
        $('#everwin-popup').removeClass('active');
        enableScroll();
        stopOwlCarousel();
    });


    // Works Flip Card
    // Select all the flip buttons
    var flipButtons = document.querySelectorAll (".flip-btn");

    // Loop through each button and add a click event listener
    flipButtons.forEach (function (button) {
    button.addEventListener ("click", function () {
        
        // Find the parent item element
        var item = button.closest (".item");

        // Find the front and back images
        var front = item.querySelector (".front");
        var back = item.querySelector (".back");

        // Toggle the flip classes
        front.classList.toggle ("flipped");
        back.classList.toggle ("flipped");
    });
    });


})(window.jQuery);