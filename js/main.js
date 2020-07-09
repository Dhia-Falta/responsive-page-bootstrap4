$(function (){
	'use strict';
	$(window).scroll(function (){
		var navbar = $('.navbar')
		if ($(window).scrollTop() >= navbar.height()) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
	});
	// work section
	$('.work ul li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');

		if ($(this).data('class') === 'all') {
			$('.work .gallery img').show();
		} else {
			$('.work .gallery img').hide();
			$($(this).data('class')).show();
		}
	});
});