define(["jquery", "artTemplate"], function($, template) {
	//表格信息初始化
	var init = function(options) {
		var opts = $.extend({}, init.defaults, options);
		if (opts.hasHead) {

		}
		this.source =
			'<tbody>' +
			'{{each data as value i}}<tr>' +
			'{{each value as item j}}<td data-type="{{j}}">' +
			'{{if j == "operation"}}' +
			'{{each item as option k}}' +
			'<span>{{option}}</span>' +
			'{{/each}}' +
			'{{else}}{{item}}' +
			'{{/if}}' +
			'</td>{{/each}}' +
			'</tr>{{/each}}' +
			'</tbody>';

		this.render = template.compile(this.source);
		this.html = this.render({
			data: opts.data
		});
		$("#" + opts.id).append(this.html);
	};
	init.defaults = {
		id: "", //table id
		data: "", //tbody数据|必须
		hasHead: false, //是否有thead数据|可选
		head: "" //thead数据|可选
	};
	return {
		init: init
	};
});