$(function(){
	function fxContr()
	{
		var fxNav = $(".fxN .lr>div");
		$(".course-show .c-show .c-show-false").hide();
		fxNav.each(function(){
			$(this).click(function(){
				fxNav.each(function(){
					$(this).css({
						"background" : "#ddd",
						"color" : "black"
					});
				});
				$(".course-show .c-show>div").hide();
				if($(this).index() == 0)
				{
					$(".courseTip").show(1000);
					$(".course-show .c-show .c-show-ture").show(1000);
				}
				else if($(this).index() == 1)
				{
					$(".courseTip").hide(1000);
					$(".course-show .c-show .c-show-false").show(1000);
				}
				$(this).css({
					"background" : "rgba(0,123,255, 1)",
					"color" : "white"
				});
			});
		});
	}
	
	function all()
	{
		fxContr();
	}
	all();
	
});