$(document).ready(function () {
	$('.header__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplayspeed: 5000,

	});
	$('.slider__text').slick({
		arrows: false,
		centerMode: true,

		slidesToShow: 1,
		fade: true,
		asNavFor: ".slider__photo"
	});

	$('.slider__photo').slick({
		arrows: true,
		slidesToShow: 3,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		asNavFor: ".slider__text"
	});
});