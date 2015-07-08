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

$('.venn a').click(function (e) {
	var vennsec = $(this).attr('class');
	var diagram = $('.diagram');
	$(this).siblings('a').hide();
	
	diagram.attr('src', 'images/' + vennsec + '.png');
	diagram.addClass('active');
	e.preventDefault();
});
$('.venn .diagram').click(function () {
	$(this).siblings('a').show();
	$(this).removeClass('active');
	$(this).attr('src', 'images/venn_all.png');
});

$('.insights a').click(function (e) {
	$(this).siblings().removeClass('active');
	$('.insightsinfo div').hide();
	$(this).addClass('active');
	
	var thisid = $(this).attr('id');
	
	$('.' + thisid).show();
		
	
	$('.insights a').each(function () {
		var current = $(this).attr('id');
		var hover = $(this).attr('data-hover');
		
		if ($(this).hasClass('active')) {
			$(this).find('img').attr('src', '../images/' + hover + '.png');
		} else {
			$(this).find('img').attr('src', '../images/' + current + '.png');
		}
	});
	e.preventDefault();
});

	
	
	
	