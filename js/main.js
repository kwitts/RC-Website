(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
    $(function () {
        $(window).scroll();
    });
})(jQuery);

$('.menu').click(function (e) {
	$('nav ul').slideToggle('fast');
	$('.menu i').toggleClass('fa-navicon fa-times');
	e.preventDefault();
});

$('.testimonials-slider').bxSlider({
	auto: true
});

$('.slideout img').click(function() {
	$(this).parent().toggleClass('showslide');
	$(this).parent().children('.content').fadeToggle('fast');
	$(this).parent().prev().fadeToggle('fast');
});
$('.bars').bind('inview', function (event, visible) {
    if (visible == true) {
        $(function() {
		  $(".bars li .bar").each( function( key, bar ) {
			var number = $(this).data('number');

			$(this).animate({
			  'height' : number*10
			}, 1000).delay(500);
		  });
		});
    } else {
        // element has gone out of viewport
    }
});

$(function() {
    $('.owned').hover(function () {
        $(this).attr('src', 'images/hover_01.png');
    }, function() {
        $(this).attr('src', 'images/venn_01.png');
    });
	$('.paid').hover(function () {
        $(this).attr('src', 'images/hover_02.png');
    }, function() {
        $(this).attr('src', 'images/venn_02.png');
    });
	$('.earned').hover(function () {
        $(this).attr('src', 'images/hover_03.png');
    }, function() {
        $(this).attr('src', 'images/venn_03.png');
    });
});
$('.owned').click(function () {
	$('.center').attr('src', 'images/venncenter_01.png');
	 $(this).attr('src', 'images/hover_01.png');
});
$('.paid').click(function () {
	$('.center').attr('src', 'images/venncenter_02.png');
	 $(this).attr('src', 'images/hover_02.png');
});
$('.earned').click(function () {
	$('.center').attr('src', 'images/venncenter_03.png');
	 $(this).attr('src', 'images/hover_03.png');
});
$('.center').click(function () {
		$(this).attr('src', 'images/venncenter.png');
});

	
	
	
	
	
	