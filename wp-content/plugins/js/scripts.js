(function($){

    "use strict";
    
    
    /* ---------------------------------------------------------------------------
	 * Demos Slider Height
	 * --------------------------------------------------------------------------- */
    function demosSliderH(){
    	var panel = $('#mfn-demo-panel');
		var panelH = panel.height() - panel.find('.header').height();
		$(".demos-slider").height(panelH);
    }

	jQuery(document).ready(function($) {
	
		// Demos Slider Height
		demosSliderH();
		
		/* ---------------------------------------------------------------------------
		 * Show/Hide Panel
		 * --------------------------------------------------------------------------- */
		$('#mfn-demo-panel .control').click(function(e){
			e.preventDefault();
			if ($('#mfn-demo-panel').hasClass('active')){
				
				$('#mfn-demo-panel').removeClass('active');	
				
				if( $('body').hasClass('header-rtl') ){
					$('#mfn-demo-panel').animate({ 'left':-367 },500);
				} else {
					$('#mfn-demo-panel').animate({ 'right':-367 },500);
				}
				
			} else {
				
				$('#mfn-demo-panel').addClass('active');
				
				if( $('body').hasClass('header-rtl') ){
					$('#mfn-demo-panel').animate({ 'left':0 },500);
				} else {
					$('#mfn-demo-panel').animate({ 'right':0 },500);
				}
				
			}
		});
		
		
		/* ---------------------------------------------------------------------------
		 * niceScroll
		 * --------------------------------------------------------------------------- */ 
		$(".demos-slider").niceScroll({
    		autohidemode		: false,
    		cursorborder		: 0,
    		cursorborderradius	: 5,
    		cursorcolor			: '#222222',
    		cursorwidth			: 0,
    		horizrailenabled	: false,
    		mousescrollstep		: 40,
    		scrollspeed			: 60
    	});
		    
	    
	    /* ---------------------------------------------------------------------------
		 * debouncedresize
		 * --------------------------------------------------------------------------- */
	    $(window).bind("debouncedresize", function() {

	    	// Demos Slider Height
			demosSliderH();
	    	
		});
	    
	
	});
	
})(jQuery);