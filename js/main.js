(function($) {
  function getViewportHeight() {
    var height = window.innerHeight; // Safari, Opera
    var mode = document.compatMode;

    if ((mode || !$.support.boxModel)) { // IE, Gecko
      height = (mode == 'CSS1Compat') ?
        document.documentElement.clientHeight : // Standards
        document.body.clientHeight; // Quirks
    }
    return height;
  }

  $(window).scroll(function() {
    var vpH = getViewportHeight(),
      scrolltop = (document.documentElement.scrollTop ?
        document.documentElement.scrollTop :
        document.body.scrollTop),
      elems = [];

    // naughty, but this is how it knows which elements to check for
    $.each($.cache, function() {
      if (this.events && this.events.inview) {
        elems.push(this.handle.elem);
      }
    });

    if (elems.length) {
      $(elems).each(function() {
        var $el = $(this),
          top = $el.offset().top,
          height = $el.height(),
          inview = $el.data('inview') || false;

        if (scrolltop > (top + height) || scrolltop + vpH < top) {
          if (inview) {
            $el.data('inview', false);
            $el.trigger('inview', [false]);
          }
        } else if (scrolltop < (top + height)) {
          if (!inview) {
            $el.data('inview', true);
            $el.trigger('inview', [true]);
          }
        }
      });
    }
  });
  $(function() {
    $(window).scroll();
  });
})(jQuery);
(function($) {
  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $(".year").text( (new Date).getFullYear() );
});
$('.menu').click(function(e) {
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
$('.bars').bind('inview', function(event, visible) {
  if (visible == true) {
    $(function() {
      $(".bars li .bar").each(function(key, bar) {
        var number = $(this).data('number');

        $(this).animate({
          'height': number * 10
        }, 1000).delay(500);
      });
    });
  } else {
    // element has gone out of viewport
  }
});

$(window).scroll(function(event) {

  $(".pop").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});

$('.venn a').click(function(e) {
  var vennsec = $(this).attr('class');
  var diagram = $('.diagram');
  $(this).siblings('a').hide();

  diagram.attr('src', 'images/' + vennsec + '.png');
  diagram.addClass('active');
  e.preventDefault();
});
$('.venn .diagram').click(function() {
  $(this).siblings('a').show();
  $(this).removeClass('active');
  $(this).attr('src', 'images/venn_all.png');
});
$('.insights a').click(function(e) {
  $(this).siblings().removeClass('active');
  $('.insightsinfo div').hide();
  $(this).addClass('active');

  var thisid = $(this).attr('id');

  $('.' + thisid).show();
  e.preventDefault();
});
$('#insights_02').click(function() {
  $(".socialbar li").each(function(key, bar) {
    var number = $(this).data('number');

    $(this).animate({'width': number + '%'}, 1000);
  });
});


$('.funnelspin').load(function() {
  $(this).addClass('flip');
  $('.top').addClass('drop');
  $('.bottom1').delay(2600).animate({opacity:'1'},1000);
  $('.bottom2').delay(2800).animate({opacity:'1'},1000);
  $('.bottom3').delay(2900).animate({opacity:'1'},1000);
});

$('.infopop').click(function(e){
  $('#request').fadeIn("slow");
  $('.overlay').fadeIn("slow");
  e.preventDefault();
});
$('.overlay, .close').click(function(e){
  $('#request').fadeOut("slow");
  $('.overlay').fadeOut("slow");
  e.preventDefault();
});
