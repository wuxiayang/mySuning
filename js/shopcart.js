$(function(){
//	放大看商品的功能
	$('.smallimg').hover(function(){
		$(this).siblings('.goodsimg').css('display','block');
	},function(){
		$(this).siblings('.goodsimg').css('display','none');
	})
//已选商品列表
$('.selectshow').click(function(event){
	$('.down').toggleClass('hover-up');
	if($('.down').hasClass('hover-up')){
		$(this).children('.showsel').css('display','block');
	}else{
		$(this).children('.showsel').css('display','none');
	}
})
//默认选中
$('input[type="checkbox"]').attr('checked','checked');
addALL();
addNum();
addImg();
function addALL(){
	for(b=0;b<$('.checkgoodsonly').length;b++){	
		var a=parseFloat($('.total').html());
		var j=parseFloat($('.checkgoodsonly').eq(b).parent().siblings().children('.allprice').html());
		if($('.checkgoodsonly').eq(b).prop('checked')){
	    a+=j;
    $('.total').html(a.toFixed(2));
	 }
}
}
function addNum(){
	for(b=0;b<$('.checkgoodsonly').length;b++){
		var N=parseInt($('.selnum').html());
		var n=parseInt($('.checkgoodsonly').eq(b).parent().siblings().children('.count-input').attr('value'));
		if($('.checkgoodsonly').eq(b).prop('checked')){
			N+=n;
		}
		$('.selnum').html(N);
	}
}
function addImg(){
	for(b=0;b<$('.checkgoodsonly').length;b++){
		var tag=$('<img class="smallimg"></img>');
	var c=$('.checkgoodsonly').eq(b).parent().siblings('.goods').children('.smallimg').attr('src');
	if($('.checkgoodsonly').eq(b).prop('checked')){
			tag.attr('src',c);
			tag.html();
			$('.upimg').prepend(tag);
		}
	
	}
	
	
	
	
}
//点击全选
//价格要改变
$('.cartall').click(function(){
	if($(this).prop('checked')==false){
    	$('input[type="checkbox"]').prop('checked',false);
    	$('.total').html('0.00');
    	$('.selnum').html('0');
    	 $('.upimg').empty();
	    $('.showsel').css('display','none');
    	$('.buyall>button').css('background','#DDD');
	}else{
    	$('input[type="checkbox"]').prop('checked',true);
    	addALL();
    	addNum();
    	 $('.upimg').empty();
    	addImg();
    	$('.buyall>button').css('background','#ff5a00');
	}
})

//单选框点击，加入当前选框的价钱到总价  减掉当前价格到总价
//单个点击上下改变
//单选加入图片到下面选框
$('.checkgoodsonly').click(function(){
//	var c=$(this).parent().siblings('.goods').children('.smallimg').attr('src');
 $('.upimg').empty();
addImg();
//	console.log(c);

})
//添加数量 + 单行总价改变
//单行的功能--------------------------------------
//	单行的删除商品功能
   $('.cartgoodlist>.goodsdel').click(function(){
// 	$(this).parent('ul').remove();
   	console.log($(this).parent('.cartgoodlist').siblings().length);
// 	写法一
   	if($(this).parent('.cartgoodlist').siblings().length==1){
// 		写法二
// 	if($(this).parent('.cartgoodlist').siblings('ul').length==0){
   		$(this).parent().siblings('.cartshopname').remove();
   	}
//$(this).parent().siblings('.cartshopname').remove();
	$(this).parent('ul').remove();
// 	$(this).parent().parent('.cartgoodboxx').remove();
   if($(this).siblings('.cartonly').children('.checkgoodsonly').prop('checked')){
	$('.total').html('0.00');
	$('.selnum').html('0');
	$('.upimg').empty();
    addALL();
    addNum();
    addImg();
}
})
//添加数量+单行总价改变
$('.add').click(function(){
	var i=parseInt($(this).siblings('.count-input').attr('value'));
    var j=parseFloat($(this).parent('.goodscount').siblings('.goodonlyprice').children('.onlyprice').html());
	i=i+1;
	$(this).siblings('.count-input').attr('value',i);
    $(this).parent('.goodscount').siblings('.goodsallprice').children('.allprice').html((i*j).toFixed(2));
    if($(this).parent().siblings('.cartonly').children('.checkgoodsonly').prop('checked')){
	$('.total').html('0.00');
	$('.selnum').html('0');
//	$('.upimg').children().remove();
    addALL();
    addNum();
    }
})
//删除数量 + 单行总价改变
$('.reduce').click(function(){
	var i=parseInt($(this).siblings('.count-input').attr('value'));
    var j=parseFloat($(this).parent('.goodscount').siblings('.goodonlyprice').children('.onlyprice').html());
    if(i==1){
    	return false;
    }else{
    	i=i-1;
	$(this).siblings('.count-input').attr('value',i);
	 $(this).parent('.goodscount').siblings('.goodsallprice').children('.allprice').html((i*j).toFixed(2));
	 if($(this).parent().siblings('.cartonly').children('.checkgoodsonly').prop('checked')){
	$('.total').html('0.00')
	$('.selnum').html('0');
    addALL();
    addNum();
   }
    }
})


//每一个店铺前的单选框一点,就会让下面所属的单选框选中
$('.cartshopname>span>.checkstoreonly').click(function(){
	console.log($(this).parent().parent().parent('.cartgoodboxx').children());
	if($(this).prop('checked')){
		$(this).parent().parent().siblings('ul').children().children('.checkgoodsonly').prop('checked',true);
		$('.buyall>button').css('background','#ff5a00');
		addALL();
		
		$('.selnum').html('0');
		addNum();
		$('.upimg').empty();
		addImg();
		
	}else{
		$(this).parent().parent().siblings('ul').children().children('.checkgoodsonly').prop('checked',false);
		$('input[type="checkbox"]').prop('checked',false);
		$('.total').html('0.00');
		$('.selnum').html('0');
//	    console.log($('.upimg').children());
	    $('.upimg').empty();
	    $('.showsel').css('display','none');
		$('.buyall>button').css('background','#DDD');
	}
	
})

//总功能
//删除所选商品功能   
   $('.delall').click(function(){
   	for(b=0;b<$('.checkgoodsonly').length;b++){
   		if($('.checkgoodsonly').eq(b).prop('checked')){
   	 	$('.checkgoodsonly').eq(b).parent().parent().parent('.cartgoodboxx').remove();
   	 }
   	}
   	$('.total').html('0.00');
		$('.selnum').html('0');
		  $('.upimg').empty();
	    $('.showsel').css('display','none');
		$('.buyall>button').css('background','#DDD');
   })


	
//整体括号
})