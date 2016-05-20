define(["jquery", "artTemplate", "rwd-table"], function($, template, rwd) {
	//初始化表格数据
	var init = function(options) {
		var opts = $.extend(true,{}, init.defaults, options);

		template.helper('priority', function(data) {
			if (data == 0) {
				return "";
			} else {
				return 'data-priority=' + data;
			}
		});

		if (opts.hasHead) { //初始化thead
			this.head =
				'<thead><tr>' +
				'{{each head as value i}}<th {{value.priority | priority}}>{{value.colName}}' +
				'</th>{{/each}}' +
				'</tr></thead>';

			this.renderHead = template.compile(this.head);
			this.htmlHead = this.renderHead({
				head: opts.head
			});
			$("#" + opts.id).html(this.htmlHead);
		}

		//初始化tbody
		this.source =
			'<tbody>' +
			'{{each opts.data as value i}}<tr>' +
			'{{if opts.hasNo}}<td>{{i}}</td>{{/if}}' +
			'{{each value as item j}}<td data-type="{{j}}">' +
			'{{item}}' +
			'</td>{{/each}}' +
			'</tr>{{/each}}' +
			'</tbody>';

		this.render = template.compile(this.source);
		this.html = this.render({
			opts: opts
		});
		$("#" + opts.id).append(this.html);
		
		//添加多选框
		if(opts.hasCheckBox){
			$("#"+opts.id+" tr th:first-child").prepend('<input type="checkbox" name="" id="" value="" />');
			$("#"+opts.id+" tr td:first-child").prepend('<input type="checkbox" name="" id="" value="" />');
		}
		$('.table-responsive').responsiveTable(opts.rwdOption);
	}
	init.defaults = {
		id: "", //table id
		data: "", //tbody数据|必须
		hasHead: false, //是否有thead数据|可选
		head: "", //thead数据|可选
		hasNo: false, //是否有行号
		hasCheckBox: false,//是否有多选框
		rwdOption: {
			addDisplayAllBtn: true,//是否添加DisplayAll按钮|默认为true
			addDisplayBtn: true//是否添加Display按钮|默认为true
		}
	};
	return {
		init: init
	};
});