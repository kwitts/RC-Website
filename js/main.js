/*main.js for Referralclix website - Kristi Witts*/

/*-- GLOBAL --*/
/*inview scroll function*/
(function ($) {
  var inviewObjects = {}, viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, expando = $.expando, timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };

      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      if (!timer && !$.isEmptyObject(inviewObjects)) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch(e) {}

      // Clear interval when we no longer have any elements listening
      if ($.isEmptyObject(inviewObjects)) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    var $elements = [], elementsLength, i = 0;

    $.each(inviewObjects, function(i, inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      $elements.push(selector ? $element.find(selector) : $element);
    });

    elementsLength = $elements.length;
    if (elementsLength) {
      viewportSize   = viewportSize   || getViewportSize();
      viewportOffset = viewportOffset || getViewportOffset();

      for (; i<elementsLength; i++) {
        // Ignore elements that are not in the DOM tree
        if (!$.contains(documentElement, $elements[i][0])) {
          continue;
        }

        var $element      = $($elements[i]),
            elementSize   = { height: $element.height(), width: $element.width() },
            elementOffset = $element.offset(),
            inView        = $element.data('inview'),
            visiblePartX,
            visiblePartY,
            visiblePartsMerged;

        if (!viewportOffset || !viewportSize) {
          return;
        }

        if (elementOffset.top + elementSize.height > viewportOffset.top &&
            elementOffset.top < viewportOffset.top + viewportSize.height &&
            elementOffset.left + elementSize.width > viewportOffset.left &&
            elementOffset.left < viewportOffset.left + viewportSize.width) {
          visiblePartX = (viewportOffset.left > elementOffset.left ?
            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
            'left' : 'both');
          visiblePartY = (viewportOffset.top > elementOffset.top ?
            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
            'top' : 'both');
          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
          if (!inView || inView !== visiblePartsMerged) {
            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
          }
        } else if (inView) {
          $element.data('inview', false).trigger('inview', [false]);
        }
      }
    }
  }

  $(w).bind("scroll resize scrollstop", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }
})(jQuery);


$(document).ready(function() {

  /*current year function - for copyright footer*/
  var currentYear = (new Date).getFullYear();
  $(".year").text( (new Date).getFullYear() );

  /*mobile navigation menu icon*/
  $('.menu').click(function(e) {
    $('nav ul').slideToggle('fast');
    $('.menu i').toggleClass('fa-navicon fa-times');
    e.preventDefault();
  });

  /*request modal popup*/
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
});

/*-- HOMEPAGE --*/
$(document).ready(function() {
  /*testimonials/quotes slider*/
  $('.testimonials-slider').bxSlider({
    auto: true
  });

  /*venn diagram*/
  $('.venn-sec').click(function(e) {
    $('.venn .overlay').fadeIn('fast');
    $('.venn-info-box').fadeIn('fast');
    $('.venn-info-box').children('div').hide();

    var thiselem = $(this);

    if (thiselem.hasClass('owned')) {
      $('.info-owned').show();
    } else if (thiselem.hasClass('earned')) {
      $('.info-earned').show();
    } else if (thiselem.hasClass('paid')) {
      $('.info-paid').show();
    } else if (thiselem.hasClass('center')) {
      $('.info-center').show();
    }
    e.preventDefault();
  });
  $('.venn-info-box .close, .venn .overlay').click(function(e){
    $('.venn-info-box').fadeOut('fast');
    $('.venn .overlay').fadeOut('fast');
    $('.venn-info-box').children('div').fadeOut('fast');
    e.preventDefault();
  });

  /*funnel*/
  $('.funnelspin').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('flipper');
      $('.top').addClass('drop');
      $('.bottom1').delay(2600).animate({opacity:'1'},1000);
      $('.bottom2').delay(2800).animate({opacity:'1'},1000);
      $('.bottom3').delay(2900).animate({opacity:'1'},1000);
    } else {
      // element has gone out of viewport
    }
  });

  // /*pathway scroll pop-in information*/
  // $(window).scroll(function(event) {
  //
  //   $(".pop").each(function(i, el) {
  //     var el = $(el);
  //     if (el.visible(true)) {
  //       el.addClass("come-in");
  //     }
  //   });
  //
  // });

});

/*-- FEATURES PAGE --*/
$(document).ready(function() {

  /*marketers slideout information*/
  $('.slideout-btn').click(function(e) {
    $(this).parent().toggleClass('showslide');
    $(this).parent().children('.content').fadeToggle('fast');
    $(this).parent().prev().fadeToggle('fast');
    $(this).toggleClass('active');
    e.preventDefault();
  });

  $('.flip a').click(function(e) {
    $(this).closest('.card').toggleClass('flipped');
    e.preventDefault();
  })

});

/*-- ANALYTICS PAGE --*/
$(document).ready(function() {

  /*analytics funnel*/
  $('.insights a').click(function(e) {
    $(this).siblings().removeClass('active');
    $('.insightsinfo div').hide();
    $(this).addClass('active');

    var thisid = $(this).attr('id');

    $('.' + thisid).show();
    e.preventDefault();
  });

});
