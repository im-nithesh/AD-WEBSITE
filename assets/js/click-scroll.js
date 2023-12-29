//jquery-click-scroll

var sectionArray = [1, 2, 3, 4, 5];

	$.each(sectionArray, function(index, value){
			
		$(document).scroll(function(){
			var offsetSection = $('#' + 'section_' + value).offset().top - 200;
			var docScroll = $(document).scrollTop();
			var docScroll1 = docScroll + 1;
			
			if ( docScroll1 >= offsetSection ){
				$('.main-nav .nav .nav-link a').removeClass('active');
				$('.main-nav .nav .nav-link:link a').addClass('inactive');  
				$('.main-nav .nav .nav-link a').eq(index).addClass('active');
				$('.main-nav .nav .nav-link a').eq(index).removeClass('inactive');
			}
			
		});
		
		$('.click-scroll').eq(index).click(function(e){
			var offsetClick = $('#' + 'section_' + value).offset().top - 100;
			e.preventDefault();
			$('html, body').animate({
				'scrollTop':offsetClick
			}, 700)
		});
		
	});

	$(document).ready(function(){
		$('.main-nav .nav .nav-link:link a').addClass('inactive');    
		$('.main-nav .nav .nav-link a').eq(0).addClass('active');
		$('.main-nav .nav .nav-link:link a').eq(0).removeClass('inactive');
	});