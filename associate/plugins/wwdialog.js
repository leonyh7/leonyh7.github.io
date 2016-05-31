(function ($) {
    $.extend({
    	blackShadow: "",
    	whiteContent: "",
    	dialogTop: "",
    	dialogCenter: "",
    	dialogBottom: "",
    	clickBtn: "",
        "wwdialog": function(options){
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
			this.createDialogWhite(opts.w,opts.h);
			return this;
        },
        /* 创建遮罩窗体中间白色区域 */
        "createDialogWhite": function(w,h) {
        	var $whiteContent = $('<div class="white-content"></div>');
			var $whiteTop = $('<div class="white-top"></div>').appendTo($whiteContent);
			var $whiteCenter = $('<div class="white-center"></div>').appendTo($whiteContent);
			var $whiteBottom = $('<div class="white-bottom"></div>').appendTo($whiteContent);
			var $clickBtn = $('<i class="iconfont btn-close-dialog">&#xe61a;</i>').appendTo($whiteTop);
			
			if(w != "" && h != ""){
				$whiteContent.css({
					'width' : w,
					'height': h
				});
			}
			
			/* 阻止冒泡 */
			$whiteContent.bind('click',function(e){e.stopPropagation()});
			
			/* 解决动态生成的头部跟底部高度为0的bug */
			$whiteTop.height(67);
			$whiteBottom.height(67);
			
			/* 重置中间区域高度 */
			$whiteCenter.height($whiteContent.height() - $whiteTop.height() - $whiteBottom.height());
			
			/* 绑定关闭事件 */
			$clickBtn.bind('click',function(){ $.hideDialog() });
			
			this.whiteContent = $whiteContent;
			this.dialogTop = $whiteTop;
			this.dialogCenter = $whiteCenter;
			this.dialogBottom = $whiteBottom;
			this.clickBtn = $clickBtn;
        },
        /* 显示遮罩窗体 */
		"showDialog": function(){
			this.blackShadow = $('<div class="black-shadow"></div>').appendTo('body').html(this.whiteContent);
			this.blackShadow.bind('click',function(){ $.hideDialog(); })
			return this;
		},
		/* 隐藏遮罩窗体 */
		"hideDialog": function(){
			this.whiteContent.animate({
				"height": 0
			},300,function(){
				$.blackShadow.fadeOut(300,function(){ $(this).remove() });
				return this;
			});
		},
		"setContent": function(el){
			this.whiteContent.html(el);
			return this;
		},
		"getContent": function(){
			return this.whiteContent;
		},
		"setDialogTop": function(el){
			this.dialogTop.html(el).append(this.clickBtn.bind('click',function(){ $.hideDialog() }));
			return this;
		},
		"getDialogTop": function(){
			return this.dialogTop;
		},
		"setDialogCenter": function(el){
			this.dialogCenter.html(el);
			return this;
		},
		"getDialogCenter": function(){
			return this.dialogCenter;
		},
		"setDialogBottom": function(el){
			this.dialogBottom.html(el);
			return this;
		},
		"getDialogBottom": function(){
			return this.dialogBottom;
		},
		"removeDialogBottom": function(){
			this.dialogCenter.height(this.dialogCenter.height() + this.dialogBottom.height());
			this.dialogBottom.remove();
			return this;
		}
    });
    // 默认参数
    var defaluts = {
    	w : 670,
    	h : 700
    };
})(window.jQuery);