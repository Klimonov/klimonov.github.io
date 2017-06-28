jQuery(document).ready(function() {
	// Библиотека Fullpage
	$('#fullpage').fullpage({
		sectionsColor:['#363338', '#6E857D', '#756F68', '#979C93'],
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu:'#menu',
		navigation: true,
		slidesNavigation: true,
	})

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