(function($) {
	$.fn.scroll = function(options) {
		var opts = $.extend({}, $.fn.scroll.defaults, options);
		return this.each(function() {
			$this = $(this);
			$parent = $(this).parent();
			$this.on("mousedown", function(e) {
				opts.move = true;
				opts.startX = e.pageX;
				opts.left = parseInt($this.css("left"));
				opts.minLimit = $parent.width() - $this.width();
			});
			$(document).on("mousemove", function(e) {
				var left = parseInt($this.css("left"));
				if (opts.move && left <= opts.flex && left >= opts.minLimit - opts.flex) {
					var $move = e.pageX - opts.startX;
					$this.css("left", opts.left + $move);
				}
			});
			$(document).on("mouseup", function() {
				if (opts.move) {
					var left = parseInt($this.css("left"));
					if (left > 0) {
						$this.css("left", 0);
					} else
					if (left < opts.minLimit) {
						$this.css("left", opts.minLimit);
					}

					opts.move = false;
					left = $this.css("left");
					opts.left = parseInt($this.css("left"));

				}
			});
		});
	};
	$.fn.scroll.move = function(target) {
		var timer = "";
	};
	$.fn.scroll.defaults = {
		start: "false",
		startX: 0,
		left: 0,
		flex: 50,
		minLeft: 0
	};
})(jQuery);