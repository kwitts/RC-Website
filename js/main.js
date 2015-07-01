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