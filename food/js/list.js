var GLOBAL = GLOBAL || {};

$(function(){
	loadArticleList();
	
	$("#listMore").click(function(){

		if(GLOBAL.pageStart < GLOBAL.pageCount){
			loadArticleList();
		}
	})
	
	$('#articleList').delegate(".list_item","click",function(){
		window.open("article.html?type=xiaoniaoNews&articleid="+$(this).attr("articleid"),"_blank");
	})
	
})



function loadArticleList(){
	if(!GLOBAL.pageStart){
		$('#articleList').html("");
		GLOBAL.pageStart = 0;
	}
	
	var itemHtml = '';
	var articleData = listData["listData0"+GLOBAL.pageStart];
	var articleList = articleData.data.list;
	if(!articleList || articleList.length == 0){
		$('#articleList').html("暂时没有内容，敬请期待");
	}else{
		var updatetime;
		for(var i = 0; i < articleList.length; i++){
			itemHtml = $('#itemHtml').html().replace('$articleList$',articleList[i].sysId)
			.replace("$articleCove$",articleList[i].coverImg)
			.replace("$aricleTitle$",articleList[i].title)
			.replace("$articleDatetime$",articleList[i].creatAt)
			.replace("$description$",articleList[i].describe)
			$("#articleList").append(itemHtml);
		}
	}
	
	GLOBAL.pageStart = articleData.data.pageStart + 1;
	GLOBAL.pageCount = Math.ceil(articleData.data.count / articleData.data.pageSize);
	if(GLOBAL.pageStart >= GLOBAL.pageCount){
		$("#listMore").css("opacity","0").prev("img").attr("src","img/list_gomore_bg_nomore.jpg");
	}
}

