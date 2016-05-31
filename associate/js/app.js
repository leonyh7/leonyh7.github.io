$(function(){
	var $settingPnl = $(".setting-pnl");
	var $settingBtn = $('<div class="">编辑</div>').addClass('setting-btn').appendTo($settingPnl);
	$settingBtn.bind('click',function(){
		$thisSetPnl = $(this).parent();
		if($thisSetPnl.hasClass('logo-img')){	// logo的编辑按钮按下事件
		}else if($thisSetPnl.hasClass('header-nav')){	// 导航栏的编辑按钮按下事件
			alert(2);
		}
	})
})
