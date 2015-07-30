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
    if ($(this).scrollTop() > 3800) {
      $('#suzie').css({ 'position': 'absolute', 'top': '3010px' });
    } else if ($(this).scrollTop() > 910) {
      $('#suzie').css({ 'position': 'fixed', 'top': '220px' });
    } else {
      $('#suzie').css({ 'position': 'absolute', 'top': '100px' });
    }
    if ($(this).scrollTop() > 3000) {
      $('#suzie').css({ 'transform': 'translateX(-150px) scale(.8)' });
      $('#suzie').css({ '-webkit-transform': 'translateX(-150px) scale(.8)' });
    } else if ($(this).scrollTop() > 2400) {
      $('#suzie').css({ 'transform': 'translateX(0) scale(1)' });
      $('#suzie').css({ '-webkit-transform': 'translateX(0) scale(1)' });
    } else if ($(this).scrollTop() > 1650) {
      $('#suzie').css({ 'transform': 'translateX(150px) scale(1)' });
      $('#suzie').css({ '-webkit-transform': 'translateX(150px) scale(1)' });
    } else {
      $('#suzie').css({ 'transform': 'translateX(150px) scale(.8)' });
      $('#suzie').css({ '-webkit-transform': 'translateX(150px) scale(.8)' });
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

    /* REFERRAL PLANE/STAR - Step Three*/
    if ($(this).scrollTop() > 1940) {
      $('#plane-referral').css({ 'position': 'fixed', 'top': '320px' });
    } else {
      $('#plane-referral').css({ 'position': 'absolute', 'top': '0px' });
    }
    if ($(this).scrollTop() > 2160) {
      $('#plane-referral').css({ 'transform': 'translateX(0px)' });
      $('#plane-referral').css({ '-webkit-transform': 'translateX(0px)' });
    } else {
      $('#plane-referral').css({ 'transform': 'translateX(-150px)' });
      $('#plane-referral').css({ '-webkit-transform': 'translateX(-150px)' });
    }

    /* SUZIE'S FRIENDS - Step Four */
   if ($(this).scrollTop() > 3800) {
     $('#suziesfriends').css({ 'position': 'absolute', 'top': '480px' });
   } else if ($(this).scrollTop() > 3340) {
     $('#suziesfriends').css({ 'position': 'fixed', 'top': '190px' });
   } else {
     $('#suziesfriends').css({ 'position': 'absolute', 'top': '0px' });
   }

   /* REFERRAL PLANE - Step Four*/
   if ($(this).scrollTop() > 3400) {
     $('#plane-right2').css({ 'position': 'fixed', 'top': '320px' });
   } else {
     $('#plane-right2').css({ 'position': 'absolute', 'top': '0px' });
   }
   if ($(this).scrollTop() > 3450) {
     $('#plane-right2').css({ 'transform': 'translateX(150px)' });
     $('#plane-right2').css({ '-webkit-transform': 'translateX(150px)' });
   } else {
     $('#plane-right2').css({ 'transform': 'translateX(-150px)' });
     $('#plane-right2').css({ '-webkit-transform': 'translateX(-150px)' });
   }


  });

  /* CHANGE IMAGE */
  $(window).scroll(function() {

    /* MIKE - Step One */
    if ($(this).scrollTop() > 500) {
      $('#mike').css('background', 'url("../images/mike_03.png")');
    } else if ($(this).scrollTop() > 350) {
      $('#mike').css('background', 'url("../images/mike_02.png")');
    } else {
      $('#mike').css('background', 'url("../images/mike_01.png")');
    }

    /* REFERRAL PLANE-STAR - Step Three */
    if ($(this).scrollTop() > 2160) {
      $('#plane-referral').css('background', 'url("../images/referral_03.png")');
    } else {
      $('#plane-referral').css('background', 'url("../images/referral_01.png")');
    }

    /* SUZIE - Step Three */
    if ($(this).scrollTop() > 2700) {
      $('#suzie').css('background', 'url("../images/suzie_03.png")');
    } else if ($(this).scrollTop() > 2400) {
      $('#suzie').css('background', 'url("../images/suzie_02.png")');
    } else {
      $('#suzie').css('background', 'url("../images/suzie_01.png")');
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

    /*REFERRAL PLANE - REFERRAL FOR SUZIE*/
    if ($(this).scrollTop() > 2350) {
      $('#plane-referral').css({ 'opacity': '0' });
    } else if ($(this).scrollTop() > 1940) {
      $('#plane-referral').css({ 'opacity': '1' });
    } else {
      $('#plane-referral').css({ 'opacity': '0' });
    }

    /*REFERRAL PLANE - SUZIE TO FRIENDS*/
    if ($(this).scrollTop() > 3600) {
      $('#plane-right2').css({ 'opacity': '0' });
    } else if ($(this).scrollTop() > 3400) {
      $('#plane-right2').css({ 'opacity': '1' });
    } else {
      $('#plane-right2').css({ 'opacity': '0' });
    }

    /*SUZIE'S FRIENDS*/
    if ($(this).scrollTop() > 3060) {
      $('#suziesfriends').css({ 'opacity': '1' });
    } else {
      $('#suziesfriends').css({ 'opacity': '0' });
    }
  });

  /* SHOW/HIDE/POSITION TEXT CONTENT */
  $(window).scroll(function() {

    /* STEP ONE */
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

    /* STEP TWO */
  	var mymessage2 = $('#mikerefers');
    if ($(this).scrollTop() > 1400) {
      mymessage2.fadeOut('500');
      mymessage2.css({'position': 'absolute', 'top': '0'});
    } else if ($(this).scrollTop() > 800) {
      mymessage2.fadeIn('500');
      mymessage2.css({'position': 'fixed', 'top': '130px'});
    } else {
      mymessage2.fadeOut('200')
    }

    /* STEP THREE */
  	var mymessage3 = $('#suziereceives');
    if ($(this).scrollTop() > 2800) {
      mymessage3.fadeOut('500');
      mymessage3.css({'position': 'absolute', 'top': '0'});
    } else if ($(this).scrollTop() > 1940) {
      mymessage3.fadeIn('500');
      mymessage3.css({'position': 'fixed', 'top': '130px'});
    } else {
      mymessage3.fadeOut('200')
    }

    /* STEP FOUR */
  	var mymessage4 = $('#suzierefers');
    if ($(this).scrollTop() > 3900) {
      mymessage4.fadeOut('500');
      mymessage4.css({'position': 'absolute', 'top': '0'});
    } else if ($(this).scrollTop() > 3350) {
      mymessage4.fadeIn('500');
      mymessage4.css({'position': 'fixed', 'top': '130px'});
    } else {
      mymessage4.fadeOut('200')
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
