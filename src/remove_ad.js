function RemoveAd()
{
	//左侧的“十年”小广告
	$("#j_ten_years").remove(); 
	
	//右侧的福利彩蛋
	$("#tbmall_score_region").remove();	
	//右侧的游戏推荐
	$("ul.game_tab").remove(); 
	$("div.game_content").remove();	
	//右侧的足彩
	$("div.lot_wrap").remove();	
	//右侧吧友热玩游戏排行
	$("#game_rank").remove();
	//右侧的广告（查看贴内容页）
	$("div.union_mod").remove();

	//贴吧顶部的个性化背景图（太占屏幕空间了)
	$("div.card_banner").remove();
	$("div.card_head").remove();
	//贴吧顶部的广告(查看帖子内容页）
	$("#pb_adbanner").remove();

	//帖列表中“冒充”吧友发的“推广帖子”（没有标注推广）
	$("li.dasense").remove();
	
	//帖内容--“冒充”吧友发楼层（没有标注推广）
	$("div.dasense").remove();
	//帖内容--帖子中间楼层穿插的广告
	$("div.BAIDU_CLB_AD").remove();

	console.log("RemoveAd v0.0 run end.");
}
RemoveAd();
