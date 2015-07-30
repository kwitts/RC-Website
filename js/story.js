/*story.js for Referralclix How It Works page - Kristi Witts*/
/*-- "Mike Makes a Purchase" --*/

/*--LOADER IMG--*/
// $(window).load(function() {
// 	$(".loader").fadeOut("slow");
// })

/*DEV PURPOSES ONLY*/
$(document).scroll(function() {
    console.log($(document).scrollTop());
})

/*--SCROLL ANIMATIONS ON DOC LOAD--*/
$(document).ready(function() {

  /* SCROLL POSITIONS */
  $(window).scroll(function() {

    /* MIKE - Step One and Two */
    if ($(this).scrollTop() > 1400) {
      $('#mike').css({ 'position': 'absolute', 'top': '1240px' });
    } else if ($(this).scrollTop() > 200) {
      $('#mike').css({ 'position': 'fixed', 'top': '220px' });
    } else {
      $('#mike').css({ 'position': 'absolute', 'top': '0px' });
    }
    if ($(this).scrollTop() > 700) {
      $('#mike').css({ 'transform': 'translateX(-150px) scale(0.8)' });
      $('#mike').css({ '-webkit-transform': 'translateX(-150px) scale(0.8)' });
    } else {
      $('#mike').css({ 'transform': 'translateX(0) scale(1)' });
      $('#mike').css({ '-webkit-transform': 'translateX(0) scale(1)' });
    }

    /* SUZIE - Step Two, Three, and Four */
    if ($(this).scrollTop() > 910) {
      $('#suzie').css({ 'position': 'fixed', 'top': '220px' });
      // $('#suzie').css({ 'transform': 'translateX(150px) scale(0.8)' });
      // $('#suzie').css({ '-webkit-transform': 'translateX(150px) scale(0.8)' });
    } else {
      $('#suzie').css({ 'position': 'absolute', 'top': '100px' });
    }

     /* MIKE'S FRIENDS - Step Two */
    if ($(this).scrollTop() > 1400) {
      $('#mikesfriends').css({ 'position': 'absolute', 'top': '510px' });
    } else if ($(this).scrollTop() > 910) {
      $('#mikesfriends').css({ 'position': 'fixed', 'top': '120px' });
    } else {
      $('#mikesfriends').css({ 'position': 'absolute', 'top': '0px' });
    }

    /* REFERRAL PLANE - Step Two*/
    if ($(this).scrollTop() > 950) {
      $('#plane-right').css({ 'position': 'fixed', 'top': '320px' });
    } else {
      $('#plane-right').css({ 'position': 'absolute', 'top': '0px' });
    }
    if ($(this).scrollTop() > 1000) {
      $('#plane-right').css({ 'transform': 'translateX(150px)' });
      $('#plane-right').css({ '-webkit-transform': 'translateX(150px)' });
    } else {
      $('#plane-right').css({ 'transform': 'translateX(-150px)' });
      $('#plane-right').css({ '-webkit-transform': 'translateX(-150px)' });
    }

    // if ($(this).scrollTop() > 700) {
    //   $('#suzie').css({ 'transform': 'translateX(150px) scale(0.8)' });
    //   $('#suzie').css({ '-webkit-transform': 'translateX(150px) scale(0.8)' });
    // } else {
    //   $('#suzie').css({ 'transform': 'translateX(0) scale(1)' });
    //   $('#suzie').css({ '-webkit-transform': 'translateX(0) scale(1)' });
    // }


  });

  /* CHANGE IMAGE */
  $(window).scroll(function() {

    /* MIKE - Step One and Two */
    if ($(this).scrollTop() > 500) {
      $('#mike').css('background', 'url("../images/mike_03.png")');
    } else if ($(this).scrollTop() > 350) {
      $('#mike').css('background', 'url("../images/mike_02.png")');
    } else {
      $('#mike').css('background', 'url("../images/mike_01.png")');
    }

  });

  /* APPEAR/DISAPPEAR */
  $(window).scroll(function() {
    /*MIKE*/
    if ($(this).scrollTop() > 4500) {
      $('#mike').css({ 'opacity': '0' });
    } else {
      $('#mike').css({ 'opacity': '1' });
    }

    /*SUZIE*/

    /*MIKE*/
    if ($(this).scrollTop() > 910) {
      $('#suzie').css({ 'opacity': '1' });
    } else {
      $('#suzie').css({ 'opacity': '0' });
    }

    /*MIKE'S FRIENDS*/
    if ($(this).scrollTop() > 910) {
      $('#mikesfriends').css({ 'opacity': '1' });
    } else {
      $('#mikesfriends').css({ 'opacity': '0' });
    }

    /*REFERRAL PLANE - MIKE TO FRIENDS*/
    if ($(this).scrollTop() > 1200) {
      $('#plane-right').css({ 'opacity': '0' });
    } else if ($(this).scrollTop() > 1000) {
      $('#plane-right').css({ 'opacity': '1' });
    } else {
      $('#plane-right').css({ 'opacity': '0' });
    }
  });

  /* SHOW/HIDE/POSITION TEXT CONTENT */
  $(window).scroll(function() {
  	var mymessage = $('#mikepurchase');
    if ($(this).scrollTop() > 740) {
      mymessage.fadeOut('500');
      mymessage.css({'position': 'absolute', 'top': '0'});
    } else if ($(this).scrollTop() > 320) {
      mymessage.fadeIn('500');
      mymessage.css({'position': 'fixed', 'top': '130px'});
    } else {
      mymessage.fadeOut('200');
    }
  });
  $(window).scroll(function() {
  	var mymessage = $('#mikerefers');
    if ($(this).scrollTop() > 1400) {
      mymessage.fadeOut('500');
      mymessage.css({'position': 'absolute', 'top': '0'});
    } else if ($(this).scrollTop() > 800) {
      mymessage.fadeIn('500');
      mymessage.css({'position': 'fixed', 'top': '130px'});
    } else {
      mymessage.fadeOut('200').css({'positon': 'fixed', 'top': '130px'})
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
