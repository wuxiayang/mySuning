$(function() {
	/* 全局变量部分*/
	var timer;
	var num = 0;
	var sn = {
			"names": false
		}
		/*一     页面加载还没有完毕，而js开始执行，会产生延时*/
	setTimeout(function() {
		$(window).scrollTop(0, 0);
	}, 1);
	/*二   导航条首页图框隐藏*/
	if(!sn.names) {
		homepage.style.display = "none";
	}
	/*三    广告部分*/
	/*1  定时关闭广告*/
	setTimeout(function() {
		$('#ad').css('height', '0px');
		$('#open').css('display', 'block');
	}, 30000);
	clearTimeout();
	/*2  点击关闭广告*/
	$('#close').click(function() {
		clearTimeout();
		$('#ad').css('height', '0px');
		$('#open').css('display', 'block');
	});
	/*3   点击打开广告*/
	$('#open').click(function() {
		$('#ad').css('height', '100px');
		$('#open').css('display', 'none');
	});

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

	/*五    导航栏板块*/
	/* 1  滑动显示*/
			$('.banner-ul').children('li').hover(function() {
				$(this).children('div').css('display', 'block');
				$(this).children('p').children('a').css('color', '#2B2B2B');
				$(this).children('p').addClass('current');
			}, function() {
				$(this).children('div').css('display', 'none');
				$(this).children('p').children('a').css('color', '#ffffff');
				$(this).children('p').removeClass('current');
			})

	/*2  横板导航条的下标图滑动*/
	$('.cross-index ul li').hover(function() {
		$(this).children('span').css('margin-top', '-7px');
		$(this).siblings().children('span').css('margin-top', '3px');
	}, function() {
		$(this).children('span').css('margin-top', '3px');
	});

	/*3  轮播图部分*/
	/*3.1  自动播放部分*/

	function rollimg() {
		if(num == 0) {
//			$('.banner-bgad').css('background', '#bee6ff');
			$('.ll').css('background', '#bee6ff');
		}
		timer = setInterval(function() {
			num = num + 1;
			//改变背景颜色
			if(num == 0) {
				$('.ll').css('background', '#bee6ff');
			} else
			if(num == 1) {
				$('.ll').css('background', '#70a3b8');
			} else if(num == 2) {
				$('.ll').css('background', '#19053a');
			} else if(num == 3) {
				$('.ll').css('background', '#ffb2bd');
			} else if(num == 4) {
				$('.ll').css('background', '#654ee6');
			} else if(num == 5) {
				$('.ll').css('background', '#000000');
			} else if(num == 6) {
				$('.ll').css('background', '#d1075d');
			} else if(num == 7) {
				$('.ll').css('background', '#feb005');
			} else if(num == 8) {
				$('.ll').css('background', '#bee6ff');
			}
			//循环控制部分
			var a = 0;
			if(num == 8) {
				a = 0;
				$('.roll-point ol li').eq(a).addClass('current').siblings().removeClass('current');
			}
			if(num > 8) {
				num = 0;
				$('.roll-img ul').css('left', -830 * num + 'px');
				$('.ll').css('background', '#bee6ff');
				num = 1;
				$('.ll').css('background', '#70a3b8');
			}

			$('.roll-img ul').animate({
				'left': -830 * num + 'px'
			}, 500);
			$('.roll-point ol li').eq(num).addClass('current').siblings().removeClass('current');

		}, 2000);
	}
	rollimg();
	//3.2 左右箭头图标的控制
	$('.roll-img').hover(function() {
		clearInterval(timer);
		$(".left-roll").css('display', 'block');
		$(".right-roll").css('display', 'block');

	}, function() {
		rollimg();
		$(".left-roll").css('display', 'none');
		$(".right-roll").css('display', 'none');
	})

	//3.3向左滑动
	//3.4向右滑动
	$('.left-roll').click(function(event) {
		clearInterval(timer);
		num = num - 1;
		console.log(num);
		//改变背景颜色
		if(num == 0) {
			$('.banner-bgad').css('background', '#bee6ff');
		} else if(num == 1) {
			$('.banner-bgad').css('background', '#70a3b8');
		} else if(num == 2) {
			$('.banner-bgad').css('background', '#19053a');
		} else if(num == 3) {
			$('.banner-bgad').css('background', '#bebebe');
		} else if(num == 4) {
			$('.banner-bgad').css('background', '#654ee6');
		} else if(num == 5) {
			$('.banner-bgad').css('background', '#000000');
		} else if(num == 6) {
			$('.banner-bgad').css('background', '#d1075d');
		} else if(num == 7) {
			$('.banner-bgad').css('background', '#feb005');
		} else if(num == 8) {
			$('.banner-bgad').css('background', '#bee6ff');
		}
		if(num < 0) {
			num = 8;
			$('.roll-img ul').css('left', -830 * num + 'px');
			num = 7;
			$('.banner-bgad').css('background', '#feb005');
		}
		$('.roll-img ul').animate({
			'left': -830 * num + 'px'
		})
		$('.roll-point ol li').eq(num).addClass('current').siblings('').removeClass('current');

	});
	$('.right-roll').click(function(event) {
		clearInterval(timer);
		num = num + 1;
		//改变背景颜色
		if(num == 0) {
			$('.banner-bgad').css('background', '#bee6ff');
		} else if(num == 1) {
			$('.banner-bgad').css('background', '#70a3b8');
		} else if(num == 2) {
			$('.banner-bgad').css('background', '#19053a');
		} else if(num == 3) {
			$('.banner-bgad').css('background', '#bebebe');
		} else if(num == 4) {
			$('.banner-bgad').css('background', '#654ee6');
		} else if(num == 5) {
			$('.banner-bgad').css('background', '#000000');
		} else if(num == 6) {
			$('.banner-bgad').css('background', '#d1075d');
		} else if(num == 7) {
			$('.banner-bgad').css('background', '#feb005');
		} else if(num == 8) {
			$('.banner-bgad').css('background', '#bee6ff');
		}
		if(num == 8) {
			n = 0;
			$('.roll-point ol li').eq(n).addClass('current').siblings('').removeClass('current');
		}
		if(num > 8) {
			num = 0;
			$('.roll-img ul').css('left', -830 * num + 'px');
			num = 1;
		}
		$('.roll-point ol li').eq(num).addClass('current').siblings('').removeClass('current');
		$('.roll-img ul').animate({
			'left': -830 * num + 'px'
		})
	});
	/* 4   用户栏的热点轮播*/

	/*5 下部手风琴的滑动效果*/
	/*当手风琴出现时,删除整个clean div,改变li的宽度,控制白色小块的出现*/
	$('.accordion-img').hover(function() {
		$('.cl-clean').css('display', 'none');
		$('.four-tile').css('display', 'none');
		$('.move-img').css('display', 'block');
	}, function() {
		$('.four-tile').css('display', 'block');
		$('.cl-clean').css('display', 'block');
		$('.move-img').css('display', 'none');
	})
	$('.movelist').hover(function() {
		$(this).css('width', '656px');
		$(this).children('.vtitle').css('display', 'none');
		$(this).siblings().css('width', '53px');
		$(this).siblings().children('.vtitle').css('display', 'block');
	})

	/*6.倒计时选项栏部分*/
	$('.toplist ul>li').click(function() {
		var index = $(this).index();
		//		1.改变背景色
		$(this).addClass('currentlist');
		$(this).siblings().removeClass('currentlist');
		//		2.对应上自己的商品栏
		$('.goodstab>.goodsbox').eq(index).css('display', 'block');
		$('.goodstab>.goodsbox').eq(index).siblings('.goodstab>.goodsbox').css('display', 'none');
	})

	/* 7.抢购的进度条*/
	/* 进度条的长度和已抢数量的连接*/
	function progressHandler() {
		var pinkwidth = $('.goodstime>span').width();
		var num = 0;
		var timer = setInterval(function() {
			pinkwidth = pinkwidth - 1;
			num = num + 1;
			//console.log(num);
			$('.goodstime>span').css('width', pinkwidth);

			$('.goodsnum>span>i').html(num);
			//console.log(num);
			if(pinkwidth <= 0 && num == 100) {
				clearInterval(timer);
			}
		}, 1000);
	}
	progressHandler();

	/* 8.倒计时栏内嵌的列表*/
	$('.goodsbox').hover(function() {
		$('.goodsleft').css('display', 'block');
		$('.goodsright').css('display', 'block');
	}, function() {
		$('.goodsleft').css('display', 'none');
		$('.goodsright').css('display', 'none');
	})

	/*左移效果*/
	$('.goodsleft').click(function() {
		$('.goodsboxcon>ul').css('left', '0px');
	})

	/*右移效果*/
	$('.goodsright').click(function() {
			$('.goodsboxcon>ul').css('left', '-800px');
		})
		/*9.倒计时装置*/
	var a = $('#nexttime2').html();
	var b = $('#nexttime1').html();
	var c = $('#nowtime').html();

	//console.log(a);
	// console.log(b);
	// console.log(c);
	var restT = parseInt(b - c) * 60 * 60 * 1000 / 1000;
	//console.log(restT);
	if(restT > 0) {
		h = parseInt((restT / 3600) % 24);
		//console.log(h);
		m = parseInt((restT / 60) % 60);
		//console.log(m);
		s = parseInt(restT % 60);
		//console.log(s);
		
	}
//彩色卡位广告栏
$('.rad>.downrad').hover(function(event){
	var i=$(this).index();
//	console.log(i);
	$('.toprad').children('.imga').eq(i-1).addClass('showimg');
	$('.toprad').children('.imga').eq(i-1).siblings().removeClass('showimg');
})
//左侧栏跟随广告
function go(n){
				return $('.leftbarlist li').eq(n).addClass('leftbarshow').siblings().removeClass('leftbarshow');
			}
$(window).scroll(function(event){
	var st=$(window).scrollTop();
//	console.log(st);
	if(st>=2352 && st<=5853){
		$('.leftbar').css('display','block');
	}else{
		$('.leftbar').css('display','none');
	}
//滚动变色
	if(st>=2600 && st<=2850){
		go(0);
	}else if(st>=2851 && st<=3301){
		go(1);
	}else if(st>=3302 && st<=3952){
		go(2);
	}else if(st>=3953 && st<=4303){
		go(3);
	}else if(st>=4304 && st<=4799){
		go(4);
	}else if(st>=4800 && st<=5105){
		go(5);
	}else if(st>=5106 && st<=5506){
		go(6);
	}
})
//点击对应的位置
          num =0;
           $('.leftbarlist li').click(function(event) {
	          var num = $(this).index();
               $('.leftbarlist li').eq(num).addClass('leftbarshow');
				$('.leftbarlist li').eq(num).siblings().removeClass('leftbarshow');
				if(num==0){
					$('html,body').animate({'scrollTop':'2600px'},1000);
				}
				if(num==1){
					$('html,body').animate({'scrollTop':'3200px'},1000);
				}
				if(num==2){
					$('html,body').animate({'scrollTop':'3800px'},1000);
				}
				if(num==3){
					$('html,body').animate({'scrollTop':'4400px'},1000);
				}
				if(num==4){
					$('html,body').animate({'scrollTop':'4800px'},1000);
				}
				if(num==5){
					$('html,body').animate({'scrollTop':'5300px'},1000);
				}
				if(num==6){
					$('html,body').animate({'scrollTop':'5700px'},1000);
				}
//				if(num==7){
//					$('html,body').animate({'scrollTop':'5000px'},1000);
//				}
})

$('.leftbartop').click(function(event){
	$('html,body').animate({'scrollTop':'0px'},1000);
})
$('.rightbar .mytop').click(function(event){
	$('html,body').animate({'scrollTop':'0px'},1000);
})
	/*整体的括号*/
})