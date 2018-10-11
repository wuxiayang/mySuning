$(function(){
		/*四   导航条部分*/
	/*1   下拉列表*/
	$('.pubox').hover(function(event) {
		$(this).children('a').children('i').addClass('hover-up');
		$(this).children('div').css('display', 'block');
		$(this).children('a').addClass('aw1');
	}, function(event) {
		$(this).children('a').children('i').removeClass('hover-up');
		$(this).children('div').css('display', 'none');
		$(this).children('a').removeClass('aw1');
	});

	/*2   点击第一个列表关闭*/
	$('.list-close').click(function() {
		$(this).parent().css('display', 'none');
	})

})