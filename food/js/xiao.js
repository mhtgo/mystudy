for(var i = 0; i < $('.specialImg').length; i++){
	$('.specialImg').eq(i).attr("src",specailDishes[i].imgsrc);
	$('.specialName').eq(i).text(specailDishes[i].name);
	$('.specialDes').eq(i).text(specailDishes[i].description);
}
for(var i = 0; i < $('.number').length; i++){
	$('.number>img').eq(i).attr("src",french[i].imgsrc);
	$('.des>p').eq(i).text(french[i].description);
}
for(var i = 0; i < $('.en').length; i++){
	$('.en>img').eq(i).attr("src",two[i].imgsrc);
	$('.enh').eq(i).text(two[i].title);
	$('.end').eq(i).text(two[i].description);
}

	$('.welcome_text_container').delay(1000).animate({
		top: "40%"
	}, 600, function() {
		$('.welcome_animate').show().addClass("animated fadeInUp");
	});
	
	setTimeout(function(){
        $("#welcomePage").slideUp(1000).hide(500);
    },3000);
    
	$('#welcomePage').dblclick(function(){
		$(this).slideUp(600);
	})
	
var oWrap = $('.main_wrap');
	var containerBox = $(".container");
	var oItems = $(".wrap_block");

	var index = 0;

	ifMove = true;

	setSize();
	window.onresize = setSize;

	
	
	function setSize() {
		var screenHeight = $(window).height() - 53;
		var screenWidth = $(window).width();
		oWrap.height(screenHeight);
		oWrap.width(screenWidth);
		$('welcome_wrap').width($(window).width())
		$('.welcome_wrap').height(screenHeight+53);
		$('.main_wrap').height(screenHeight);
		$('.gaishu_block').width(screenWidth);
		$('.gaishu_block').height(screenHeight);
		$('.gaishu_slider').width(screenWidth*$('.gaishu_block').length);
		$('.wrap_block').height($('.main_wrap').height());
		containerBox.height(screenHeight * oItems.length);
		for(var i = 0; i < oItems.length; i++) {
			$(oItems[i]).height(screenHeight);
		}
	}

	function moveUp() {
		index--;
		index = index < 0 ? 0 : index;
		move(index);
		console.log(index);
	}

	function moveDown() {
		index++;
		index = index >= oItems.length ? oItems.length - 1 : index;
		move(index);
		console.log(index);
	}
	
	$('.nav_wrap').find('li').click(function(){
		index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		move(index+1);
	})

		
	function change(e) {
		e = e || event;
		if(e.detail < 0 || e.wheelDelta > 0) {
			if(ifMove) {
				ifMove = false;
				moveUp();
				setTimeout(function() {
					ifMove = true;
				}, 1000);
			}
		} else {
			if(ifMove) {
				ifMove = false;
				moveDown();
				setTimeout(function() {
					ifMove = true;
				}, 1000);
			}
		}

	}

	function getUrlParams(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)
	         return  r[2];
	     else 
	         return "";
	    }
	
	    //首页点击判断
	    if(index = getUrlParams('thisid')){
	    	$("#welcomePage").hide();
	    	move(index);
	    }
	    
	function move(index) {
		var itemsHeight = oItems[0].offsetHeight;
		console.log(itemsHeight)
		var nowTop = -index * itemsHeight;
		$('.container').animate({
			top: nowTop
		}, 500);
		//获取参数工具函数
	   
	}
	document.onmousewheel = change;
	document.addEventListener("DOMMouseScroll", change, false);

	$(function() {
		var gaishuIndex = 0;
		var $gaishuItem = $('.gaishu_block');
		var $gaishuWrap = $('.gaishu_slider');

		$('.gaishu_goleft').click(function() {
			gaishuIndex--;
			$('.gaishu_goright').css("opacity", 1);
			if(gaishuIndex < 0) {
				gaishuIndex = 0;
				$(this).css("opacity", 0.3);
			}
			slide(gaishuIndex);
		});
		$('.gaishu_goright').click(function() {
			gaishuIndex++;
			$('.gaishu_goleft').css("opacity", 1);
			if(gaishuIndex >= $gaishuItem.length) {
				gaishuIndex = $gaishuItem.length - 1;
				$(this).css("opacity", 0.3);
			}
			slide(gaishuIndex);
		});

		function slide(gaishuIndex) {
			var nowLeft = -gaishuIndex * $gaishuItem.width();
			$gaishuWrap.stop().animate({
				left: nowLeft
			}, 600);
		}
	})

	$('.yunmove_btn_left').click(function() {
		$('.yun_slide').stop().animate({
			left: 0
		}, 600);
		$(this).find('span').addClass("now").animate({
			left: 0
		}, 600);
		$('.yunmove_btn_right>span').removeClass("now").css("left", -78);
	})
	$('.yunmove_btn_right').click(function() {
		$('.yun_slide').stop().animate({
			left: -910
		}, 600);
		$(this).find('span').addClass("now").animate({
			left: 0
		}, 600);
		$('.yunmove_btn_left>span').removeClass("now").css("left", 78);
	})

	$(function() {
		setInterval(function() {
			$('.breathLight').animate({
				opacity: 1
			}, 1000, function() {
				$(this).css("display", "inline");
			}).delay(1000).animate({
				opacity: 0.2
			}, 1000, function() {
				$(this).css("display", "none");
			})
		}, 2000);
	})






