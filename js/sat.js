$(function(){
	var sn = {
			"names": false
		}
		if(!sn.names) {
		homepage.style.display = "block";
	}
	$('.shopscore').hover(function(){
//	console.log("1");
	$(this).children('span').children('i').removeClass('showup');
	$(this).children('span').children('i').addClass('showdown');
	$(this).children('.satgrade').css('display','block');
},function(){
	$(this).children('span').children('i').removeClass('showdown');
	$(this).children('span').children('i').addClass('showup');
	$(this).children('.satgrade').css('display','none');
})
	$('.barl').hover(function(){
		$('.barlist').css('display','block');
	},function(){
		$('.barlist').css('display','none');
	})
	
	$('.barlistul>li').hover(function(){
		$(this).children('.barl1').css('display','block');
	},function(){
		$(this).children('.barl1').css('display','none');
	})
	
	$('.satmode>ul>li').hover(function(){
      $(this).css('border','1px solid #ddd');
	},function(){
		$(this).css('border','1px solid transparent');
	})
	
//整体的括号
})
