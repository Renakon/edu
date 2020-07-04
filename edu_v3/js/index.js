$(function(){
	// 隐藏悬浮导航栏,返回顶部图标
	$(".header-floatNav").hide();
	$(".footer-backTop").hide();
	// 轮播时间
	var lunBoSeconds = 1000 * 4;
	// 轮播隐藏时间
	var lunBoHides = 500;
	// 轮播显示时间
	var lunBoShows = 500;
	// 轮播子项对象数组
	var lb = $("section.lunbo .lb ul li");
	// 记录切换的次数
	var lbCount = 0;
	
	
	// 设置轮播
	var lunbos = setInterval(function(){ lunbo() }, lunBoSeconds);
	
	// 轮播切换
	function lunbo()
	{
		if(lbCount % 3 == 0)
		{
			lb.eq(0).hide(lunBoHides);
			lb.eq(1).show(lunBoShows);
		}
		else if(lbCount % 3 == 1)
		{
			lb.eq(1).hide(lunBoHides);
			lb.eq(2).show(lunBoShows);
			// $("section.lunbo").css("background", "url(../images/main-slider/1.jpg)");
		}
		else
		{
			lb.eq(2).hide(lunBoHides);
			lb.eq(0).show(lunBoShows);
		}
		lbCount++;
	}
	
	// 鼠标控制轮播
	function mouseControlLb()
	{
		lb.mouseover(function(){
			clearInterval(lunbos);
		});
		lb.mouseout(function(){
			lunbos = setInterval(function(){ lunbo() }, lunBoSeconds)
		});
	}
	
	// 鼠标控制头部导航栏
	function mouseControlTopNav()
	{
		var km_scrollTop = $(document).scrollTop();
		$(window).scroll(function(){
			var km_scrollTopY = $(document).scrollTop();
			if(km_scrollTopY > 124){
				$(".header-floatNav").slideDown(500);
				$(".footer-backTop").show();
			}
			else {
				$(".header-floatNav").hide();
				$(".footer-backTop").hide();
			}
		});
	}
	
	// 悬浮导航栏跳转
	function floatNavHref()
	{
		var floatNavLi = $(".header-floatNav .floatNav-nav ul li");
		
		floatNavLi.eq(0).click(function(){ window.location.href = "#"; });
		floatNavLi.eq(1).click(function(){ window.location.href = "#course"; });
		floatNavLi.eq(2).click(function(){ window.location.href = "#"; });
		floatNavLi.eq(3).click(function(){ window.location.href = "#"; });
		floatNavLi.eq(4).click(function(){ window.location.href = "#footer"; });
		floatNavLi.eq(5).click(function(){ window.location.href = "#"; });
	}
	
	
	// 返回顶部
	function backTop()
	{
		$(".footer-backTop").click(function(){
			window.location.href = "#head";
		});
	}
	
	function courseEachEffect()
	{
		$("div.course .course-concent .course-right .course-panel").mouseover(function(){
			$(this).find("img").css({
					"width" : "120%",
					"height" : "120%"
				});
		});
		$("div.course .course-concent .course-right .course-panel").mouseout(function(){
			$(this).find("img").css({
					"width" : "100%",
					"height" : "100%"
				});
		});
	}
	
	function prevNext()
	{
		var div = $("div.recommend .recommend-content>div");
		/// 总页数
		var npPage = 0;
		/// 当前页
		var npPageFlag = 1;
		var divWidth = 0;
		var divLen = div.children().length;
		
		if((divLen % 4) != 0)
		{
			npLen = parseInt(divLen / 4) + 1;
		}
		
		$("div.recommend .recommend-title .next").click(function(){
			if(npPageFlag < npLen)
			{
				divWidth -= 1132;
				div.css("left", divWidth);
				npPageFlag++;
			}
			$("div.recommend .recommend-title .prev").show();
			// alert(npPageFlag);
			// alert(npLen);
			// alert(npPageFlag >= npLen);
			if(npPageFlag >= npLen)
			{
				$("div.recommend .recommend-title .next").hide();
			}
		});
		
		$("div.recommend .recommend-title .prev").click(function(){
			if(npPageFlag > 1)
			{
				divWidth += 1132;
				div.css("left",  divWidth);
				npPageFlag--;
			}
			$("div.recommend .recommend-title .next").show();
			if(npPageFlag <= 1)
			{
				$("div.recommend .recommend-title .prev").hide();
			}
		});
		
		// alert(npLen);
		$("div.recommend .recommend-title .prev").hide();
		
	}
	
	function loginRegist()
	{
		$(".header-nav-top ul li:nth-child(2) span").eq(0).click(function(){
			window.location.href = "../registered_login/login.html";
		});
		$(".header-nav-top ul li:nth-child(2) span").eq(1).click(function(){
			window.location.href = "./registered_login/registered.html";
		});
	}
	
	function headerNav()
	{
		var hv = $(".header-nav ul li");
		hv.eq(0).click(function(){ window.location.href = "#"; });
		hv.eq(1).click(function(){ window.location.href = "#course"; });
		hv.eq(2).click(function(){ window.location.href = "#"; });
		hv.eq(3).click(function(){ window.location.href = "#"; });
		hv.eq(4).click(function(){ window.location.href = "#footer"; });
		hv.eq(5).click(function(){ window.location.href = "#"; });
	}
	
	function coursePanel()
	{
		$("div.course .course-concent .course-right .course-panel").click(function(){
			window.location.href = "./html/courseIntro.html";
		});
	}
	
	function runAll()
	{
		backTop();
		mouseControlLb();
		mouseControlTopNav();
		floatNavHref();
		courseEachEffect();
		prevNext();
		loginRegist();
		headerNav();
		coursePanel();
	}
	runAll();

})