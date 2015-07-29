/*story.js for Referralclix How It Works page - Kristi Witts*/
/*-- "Mike Makes a Purchase" --*/

$(document).ready(function() {

  /* Scroll positions */
  $(window).scroll(function() {

    /* Mike - Step One and Two */
    if ($(this).scrollTop() > 0) {
      $('#mike').css({ 'position': 'fixed', 'top': '340px', 'opacity': '1' });
    } else {
      $('#mike').css({ 'position': 'absolute', 'top': '0px', 'opacity': '0.6' });
    }
    // if ($(this).scrollTop() > 150) {
    //   $('#mike').css({ 'transform': 'translateX(-100px)' });
    // } else {
    //   $('#mike').css({ 'transform': 'translateX(0)' });
    // }


  });

  /* Change Image */
  $(window).scroll(function() {

    /* Mike - Step One and Two */
    if ($(this).scrollTop() > 700) {
      $('#mike').css('background', 'url("../images/mike_03.png")');
    } else if ($(this).scrollTop() > 200) {
      $('#mike').css('background', 'url("../images/mike_02.png")');
    } else {
      $('#mike').css('background', 'url("../images/mike_01.png")');
    }

  });

  /* Disappear */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 4500) {
      $('#mike').css({ 'opacity': '0' });
    } else {
      $('#mike').css({ 'opacity': '1' });
    }
  });

  /* Show/Hide Content */
  $(window).scroll(function() {
  	var mymessage = $('#mikepurchase');
    if ($(this).scrollTop() > 200) {
      mymessage.fadeIn('500');
    } else {
      mymessage.fadeOut('200')
    }
  });
  // function isScrolledIntoView(elem) {
	//     var docViewTop = $(window).scrollTop();
	//     var docViewBottom = docViewTop + $(window).height();
  //
	//     var elemTop = $(elem).offset().top;
	//     var elemBottom = elemTop + $(elem).height();
  //
	//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
	// 	}
  //
	// var myelement = $('#cloud6');
	// var mymessage = $('#description');
	// $(window).scroll(function() {
  //   if(isScrolledIntoView(myelement)) {
  //       mymessage.fadeIn('500');
  //   } else {
  //       mymessage.fadeOut('200')
  //   }
  //
  // var myelement1 = $('#hill');
  // var mymessage1 = $('#red');
  //   if(isScrolledIntoView(myelement1)) {
  //     mymessage1.fadeIn('500');
  //   } else {
  //     mymessage1.fadeOut('200')
  //   }
  // });
});
