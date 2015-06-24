$('.menu').click(function (e) {
	$('nav ul').slideToggle('fast');
	e.preventDefault();
});

$('.testimonials-slider').bxSlider({
	auto: true
});

$('.slideout').click(function() {
	$(this).toggleClass('showslide');
	$(this).children('.content').fadeToggle('fast');
	$(this).prev().fadeToggle('fast');
});