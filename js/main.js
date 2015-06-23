$('.menu').click(function (e) {
	$('nav ul').slideToggle('fast');
	e.preventDefault();
});

$('.testimonials-slider').bxSlider({
	auto: true
});