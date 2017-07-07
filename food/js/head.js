$(function() {
	$(".biao").each(function(index, ele) {
		$(ele).attr("thisId", index);
	})
	$(".biao").mouseenter(function() {
		var index = $(this).attr("thisId");
		$(".xia").eq(index).slideDown(1500, "elasticOut");
		$(".xia").eq(index).css("display", "block");

	})
	$(".biao").mouseleave(function() {
		var index = $(this).attr("thisId");
		$(".xia").eq(index).css("display", "none");
	})
	$('.xiala_1').find("li").click(function() {
		console.log($(this).index())
		window.open("cuisine.html?thisid=" + $(this).index())
	})
});