$(function(){
	function courseCont()
	{
		$(".courseD .cd-content .cd-c-intro").show();
		$(".courseD .cd-content .cd-c-directory").hide();
		$(".courseD .cd-content .cd-c-comments").hide();
		$(".courseD .cd-nav ul li").eq(0).click(function(){
			courseCont_divHide();
			$(".courseD .cd-content .cd-c-intro").show();
		});
		$(".courseD .cd-nav ul li").eq(1).click(function(){
			courseCont_divHide();
			$(".courseD .cd-content .cd-c-directory").show();
		});
		$(".courseD .cd-nav ul li").eq(2).click(function(){
			courseCont_divHide();
			$(".courseD .cd-content .cd-c-comments").show();
		});
	}
	function courseCont_divHide()
	{
		$(".courseD .cd-content").children().hide();
	}
	
	function ulContr()
	{
		var ul1li = $(".courseD .cd-content .cd-c-directory ul.cd-c-d-1>li");
		var ul2 = $(".courseD .cd-content .cd-c-directory ul.cd-c-d-1 ul.cd-c-d-2");
		ul2.hide();
		ul2.eq(0).show();
		ul1li.each(function(){
			$(this).click(function(){
				$(this).find("ul").slideToggle(500);
			});
		});
	}
	
	function all()
	{
		courseCont();
		ulContr();
	}
	all();
})