var app = angular.module("myapp", ['ng']);

app.controller('myCtrl', ['$scope', function($scope) {
	
		$scope.list = data;
	
	
		$scope.list1 = cook;
	
}]);

//第一个轮播
function lunbo(clas, di) {
	var go = 0;
	var star = 0;
	var i = 0;
	var timer;
	$('.' + di).each(function(i) {
		$(this).click(function() {
			go = i;
			$('.' + clas).eq(i).fadeIn('slow').siblings('.' + clas).fadeOut('slow');
			$(this).addClass("imgSelected").siblings().removeClass("imgSelected");
		});
	});	
	timer = setInterval(function() {
		var star = (go + 1) % 3;
		$("." + di).eq(star).click();
	}, 3000);
	$( "." + di).hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			var star = (go + 1) % 3;
			$("." + di).eq(star).click();
		}, 3000);
	});
}
$(function() {
	lunbo('lu', 'xiao');
})

$(function() {
	//第二个轮播
	var curr = 0;
	var i = 0;
	var l = $(".linebtn_one");
	var li = l.find("i");

	$(".line span").each(function(i) {
		$(this).click(function() {
			curr = i;
			$(".t_1").eq(i).fadeIn().siblings(".t_1").fadeOut("fast");
			doFade("fadeInRight");
			li.css("display", "none").eq(i).css("display", "block");
		});
	});
	$(".next1").click(function() {
		if(curr == 5) {
			var go = 0;
		} else {
			var go = (curr + 1) % 6;
		}
		$(".line span").eq(go).click();
		doFade("fadeInRight");
	});

	$(".prev1").click(function() {
		if(curr == 0) {
			var go = 5;
		} else {
			var go = (curr - 1) % 6;
		}
		$(".line span").eq(go).click();
		doFade("fadeInLeft");
	});

	function doFade(action) {

		$(".t_1").hide();
		$(".t_1").eq(curr).find("h1, p, img,h2").attr("class", "").addClass("animated " + action);
		$(".t_1").eq(curr).fadeIn();

	}
});

//	环球美食
$(function() {
	$(".d2").each(function(index, ele) {
		$(ele).attr("thisId", index);
	})
	$(".d2").children().click(function() {
		var index = $(this).parent().attr("thisId");
		console.log(index)
		$(".cc").eq(index).toggleClass("close").end().not(":eq(" + index + ")").removeClass("close");
		$(".daun").eq(index).slideToggle().end().not(":eq(" + index + ")").slideUp();
	})
});
//第三个轮播
$(function() {
	var curr = 0;
	var i = 0;
	var oDiv = $('.teamcontent_wrap');
	var moveDiv = oDiv.find(".team_move");

	$(".middle1 span").each(function(i) {
		$(this).click(function() {
			curr = i;
			$(".twoteam_wrap").eq(i).fadeIn("fast").siblings(".twoteam_wrap").fadeOut("fast");
			$(this).addClass("imgSelected1").siblings("span").removeClass("imgSelected1");
		});
	});

	var timer = setInterval(function() {
		var go = (curr + 1) % 3;
		$(".middle1 span").eq(go).click();
	}, 3000);
	
	$(".team_move").delegate(".twoteam_wrap","click",function(){
		console.log(1111);
	})
	
	
	$(".prev1, .next1, .middle1").hover(function() {
		
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			var go = (curr + 1) % 3;
			$(".middle1 span").eq(go).click();
		}, 3000);
	});

	$(".next1").click(function() {
		if(curr == 2) {
			var go = 0;
		} else {
			var go = (curr + 1) % 3;
		}

		$(".middle1 span").eq(go).click();
	});

	$(".prev1").click(function() {

		moveDiv.find(".twoteam_wrap:last").insertBefore(moveDiv.find(".twoteam_wrap:first"));
		moveDiv.animate({
			"left": "-1100px"
		}, 0);
		moveDiv.animate({
			"left": "0px"
		}, 1000, 'backOut');

		if(curr == 0) {
			var go = 2;
		} else {
			var go = (curr - 1) % 3;
		}
		$(".middle1 span").eq(go).click();
	});
});
//返回顶部
$(function() {

	$(window).scroll(function() {
		if($(this).scrollTop() > 500) {
			$('.fanhui').fadeIn();
		} else {
			$('.fanhui').fadeOut(0);
		}
	});

	$('.scrollTop').click(function() {

		$(this).parent().animate({
			"bottom": 1000,
			"opacity": 0
		}, 400, function() {
			$('.scrollTop_wrap').css("opacity", 1).fadeOut(0).css("bottom", 200);
		});
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});

})