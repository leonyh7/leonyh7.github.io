(function($) {
	$.fn.tab = function(options) {
		if (!this.hasClass('active')) {
			var index = this.index();
			var id = this.parent().data("target");
			$(this).siblings().removeClass('active');
			this.addClass('active');
			$("#" + id + ">.tab-item.active").removeClass('active');
			$("#" + id + ">.tab-item").eq(index).addClass('active');
		}
	};
})(jQuery);