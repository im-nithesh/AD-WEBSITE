(function ($) {
	
	"use strict";
    
    const itemData = {
        everwin_kids: {
            name: 'Everwin Kids School',
            tArea: '3000 m<sup>2</sup>',
            bArea: '2500 m<sup>2</sup>',
            floor: '3',
            add: 'Kolathur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        everwin_mathur: {
            name: 'Everwin CBSE School',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Mathur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        vivekanandha: {
            name: 'Vivekanandha Vidhyalaya',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Maduranthakam',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        rizvena_sameera: {
            name: 'Mrs. Rizvena',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Poonamalle',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        daniel_newry: {
            name: 'Mr. Daniel John',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Poonamalle',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        sumathi_vgn: {
            name: 'Mrs. Sumathi',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Ambattur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        anand_vgn: {
            name: 'Mr. Anand',
            tArea: '600 m<sup>2</sup>',
            bArea: '545 m<sup>2</sup>',
            floor: '2',
            add: 'Ambattur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        baskar_sameera: {
            name: 'Mr. Baskar',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Poonamalle',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        sujith_vgn: {
            name: 'Mr. Sujith Reddy',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Ambattur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        sathish_vgn: {
            name: 'Mr. Sathish Kumar',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Ambattur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        srinivas_madipakkam: {
            name: 'Mr. Srinivas',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Madipakkam',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
        karthickn_vgn: {
            name: 'Mr. Karthick Narayanan',
            tArea: '1000 m<sup>2</sup>',
            bArea: '700 m<sup>2</sup>',
            floor: '2',
            add: 'Ambattur',
            moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.'
        },
    };

	//Scroll-Lock
	// Disable scrolling when popup is displayed
    function disableScroll() {
		$('html, body').css('overflow', 'hidden');
	}
	// Enable scrolling when popup is closed
	function enableScroll() {
		$('html, body').css('overflow', 'auto');
	}


    // Popup item Carousel
    $(document).ready(function() {
        $('.owl-popup').owlCarousel({
            startPosition: 0,
            items: 1,
            loop: true,
            nav: true,
            navText: ['<i class="fa-solid fa-angle-left" aria-hidden="true"></i>','<i class="fa-solid fa-angle-right" aria-hidden="true"></i>']
        });
    });

    function startOwlCarousel() {
        $('.owl-carousel').trigger('play.owl.autoplay', [2000]);
    }

    function stopOwlCarousel() {
        $('.owl-carousel').trigger('stop.owl.autoplay');
        $('.owl-carousel').trigger('to.owl.carousel', 0);
    }


    // Completed Works Item Flip Card
    // Select all the flip buttons
    var flipButtons = document.querySelectorAll (".flip-btn");

    // Loop through each button and add a click event listener
    flipButtons.forEach (function (flip_button) {
    flip_button.addEventListener ("click", function () {
        
        // Find the parent item element
        var item = flip_button.closest (".item");

        // Find the front and back images
        var front = item.querySelector (".front");
        var back = item.querySelector (".back");

        // Toggle the flip classes
        front.classList.toggle ("flipped");
        back.classList.toggle ("flipped");
    });
    });


    //Ongoing Works Item Popup Menu Controls
    var items = document.querySelectorAll ("#ongoing .item");

    // Loop through each button and add a click event listener
    items.forEach (function (item_button) {
        item_button.addEventListener ("click", function () {
            
            // Find the item id
            var item_id = item_button.id;
            
            if (item_id in itemData) {
                const data = itemData[item_id];
                $('.popup-works .name').text(data.name);
                $('.popup-works .t-area').html(data.tArea);
                $('.popup-works .b-area').html(data.bArea);
                $('.popup-works .floor').text(data.floor);
                $('.popup-works .add').text(data.add);
                $('.popup-works .more-info').text(data.moreInfo);
                $('.popup-works .item-1').css('background-image', 'url(../assets/images/projects/ongoing/' + item_id + '/item-01.jpg)');
                $('.popup-works .item-2').css('background-image', 'url(../assets/images/projects/ongoing/' + item_id + '/item-02.jpg)');
                $('.popup-works .item-3').css('background-image', 'url(../assets/images/projects/ongoing/' + item_id + '/item-03.jpg)');
                $('.popup-works .item-4').css('background-image', 'url(../assets/images/projects/ongoing/' + item_id + '/item-04.jpg)');
            }

            $('#projects-popup').addClass('active '+ item_id);
            disableScroll();
            startOwlCarousel();
        });
    });

    // Closing Item pop-up
    $("#projects-popup .close-button").on('click', function() {	
        $('#projects-popup').removeClass().addClass("popup-works");
        enableScroll();
        stopOwlCarousel();
    });

})(window.jQuery);