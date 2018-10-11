$(function(){
	$(function(){
		var sn = {
			"names": false
		}
		if(!sn.names) {
		homepage.style.display = "block";
	}
        		var num=0;
        		var timee;
                var n=0;
        		function zou(){
        			timee=setInterval(function(){
        			num=num+1;
        			if(num==2){
                        n=0;
                        $('.huaroll ol li').eq(n).addClass('huacurrent').siblings('').removeClass('huacurrent');
                    }
        			if(num>2)
        			{
        				num=0; 
                        $('.huaroll ul').css('left', -991*num+'px'); 
                        num=1;
        			}
        			
                 $('.huaroll ol li').eq(num).addClass('huacurrent').siblings('').removeClass('huacurrent');
        		$('.huaroll ul').animate({'left':-991*num+'px'})

        		},3000);	
        		}
        		zou();
        		$('.huaroll').hover(function() {		
        			clearInterval(timee);
        		}, function() {
        			zou();
        		});
        		$('.huaroll').hover(function() {
                    console.log($(this).index());
        			$(this).children('span').css('display', 'block');
        		}, function() {
        			$(this).children('span').css('display', 'none');
        		});

        		$('.hualeft').click(function(event) {
        			num=num-1;
        			if(num<0)
        			{
        				num=2;
                        $('.huaroll ul').css('left', -991*num+'px'); 
                        num=1;
        			}
        			$('.huaroll ul').animate({'left':-991*num+'px'})
                    $('.huaroll ol li').eq(num).addClass('huacurrent').siblings('').removeClass('huacurrent');

        		});
        		$('.huaright').click(function(event) {
        			num=num+1;
                    if(num==2){
                        n=0;
                        $('.huaroll ol li').eq(n).addClass('huacurrent').siblings('').removeClass('huacurrent');
                    }
        			if(num>2)
        			{
                        num=0; 
                        $('.huaroll ul').css('left', -991*num+'px'); 
                        num=1;
        			}
                    $('.huaroll ol li').eq(num).addClass('huacurrent').siblings('').removeClass('huacurrent');
        			$('.huaroll ul').animate({'left':-991*num+'px'})
        		});


        		$('.huaroll span').click(function(event) {
                    console.log(event.target)
        			console.log($(this).index());
        			
        		});
        		

        	})

	           $('.huaup').click(function(){
	           	$('.tab1 ul').css('display','none');
	            $('.huaphone1box1').css('height','248px');
	            $(this).toggleClass('huadown');
			      if($('.tab1 span i').hasClass('huaup')){
	           		$('.tab1 span i').removeClass('huaup');
	           	}
	           })
	           $('.huadown').click(function(){
	           	console.log("1");
	           	  $('.tab1 ul').css('display','block');
	            $('.huaphone1box1').css('height','276px');
	            $(this).toggleClass('huaup');
	           	});

				$('.rightbar .mytop').click(function(event){
				$('html,body').animate({'scrollTop':'0px'},1000);
})
	
	
	
	
	
	
	
	
	
	
//整体的括号
})