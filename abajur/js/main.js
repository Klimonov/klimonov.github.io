$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

