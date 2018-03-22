(function(){
	$('.main').hide();
	$('.main').first().show();
	$('.header__item').on('click', function(e){
		e.preventDefault();
		var attr = $(this).data('count'),
			mains = $('.main');
		for (var i = 0; i < mains.length; i++) {
			// var a[i]= $(mains[i]).attr('id');
			// console.log(a)
			if($(mains[i]).attr('id') == attr){
				$(mains[i]).show();
			} else $(mains[i]).hide();
		}
		$('.header__item').removeClass('active');
		$(this).addClass('active');
	})
	
})();