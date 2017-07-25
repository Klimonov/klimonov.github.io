jQuery(document).ready(function() {
	// Библиотека Fullpage
	$('#fullpage').fullpage({
		sectionsColor:['#363338', '#6E857D', '#756F68', '#979C93'],
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu:'#menu',
		navigation: false,
		slidesNavigation: false,
		loopHorizontal: false,
		loopBottom: false,
		afterLoad: function (link) {
			if (link == 'firstPage') {
					$('#menu').delay(2800).animate({'left':'0%'}, 400);
					$('#section0 h1').delay(400).animate({'margin-left':'0%', 'opacity':'1'}, 800);
					$('#section0 h3').delay(1200).animate({'margin-right':'0%', 'opacity':'1'}, 800);
					$('.wrapperSection0').delay(2000).animate({'opacity':'1'}, 800);
					$('.intro>img').delay(3600).animate({'opacity':'0.3'}, 800);
					} 
		}
	});
// ----------------- Определение геолокации
ymaps.ready(function() {
      var geolocation = ymaps.geolocation;

      alert("Ваш город: " + geolocation.region); //geolocation.region, geolocation.country
});


	// --------Самодельный скрол (недоработан)
// 	var
// 		screen = 0,
// 		container = $('.maincontent'),
// 		pages = $('.section'),
// 		inscroll = false;

// 	$('body').on('mousewhell', function(event) {

// 			if (event.deltaY > 0) {
// 				screen--;


// 			} else {

// 					screen++;

// 			}

// 			var position = (-screen * 100) + '%';
// console.log(position);
// 				container.css('top', '100');

// 	});



// Табы на главной секции
	$('.wrapperSection0>div').not(':first-of-type').hide();


	$('.screen li').each(function(i) {

		$(this).attr('data-tab', 'tab'+i);

	});
		$('.mobile li').each(function(i) {

		$(this).attr('data-tab', 'tab'+i);

	});

		$('.wrapperSection0>div').each(function(i) {

		$(this).attr('data-tab', 'tab'+i);

	});


				$('.tab-menu li').on('click', function() {

				var dataTab = $(this).data('tab');

				$('.tab-menu li').removeClass('active');
				$(this).addClass('active');

				$('.wrapperSection0>div').fadeOut(400);
				$('.wrapperSection0>div[data-tab='+dataTab+']').fadeIn(400);
			});


});