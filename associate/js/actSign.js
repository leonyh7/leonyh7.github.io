var info = []; //客户填写信息
var index = 0; //当前队员信息
var addNum = function(index) {
	//添加队员
	var head, item;
	var index2 = $(".team-wrap .tab-item").eq(index - 1).data("num"); //当前最后一名队员的编号
	index++;
	index2++;
	head = '<li>' + index + '</li>';
	item = '<div class="tab-item" data-num = "' + index2 + '">' +
		'<div class="delete"><button type="button">删除</button></div>' +
		'<div class="team-info">' +
		'<div class="member"><span>' + index + '</span>号队员个人信息</div>' +
		'<div class="input name"><span>姓名</span><input type="text" placeholder="请输入真实姓名" /></div>' +
		'<div class="input tel"><span>联系电话</span><input type="text" placeholder="请输入11位数字" /></div>' +
		'<div class="input sex">' +
		'<span>性别</span>' +
		'<input type="radio" id="male' + index2 + '" name="sex' + index2 + '" checked />' +
		'<label for="male' + index2 + '">男</label>' +
		'<input type="radio" id="female' + index2 + '" name="sex' + index2 + '" />' +
		'<label for="female' + index2 + '">女</label>' +
		'</div>' +
		'<div class="input identify"><span>身份证</span><input type="text" placeholder="请输入正确数字" /></div>' +
		'</div>' +
		'</div>';

	$(".tab-num").append(head);
	$(".team-wrap").append(item);
};
var deleteNum = function(index) {
	//删除队员
	$(".tab-num li").eq(index).remove();
	$(".team-wrap .tab-item").eq(index).remove();
	$(".tab-num li").eq(index - 1).tab();

};
//tab切换
$(".tab>ul").on("click", "li", function() {
	$(this).tab();
});

//
$(".tab-num").on("click", "li", function() {
	index = $(this).index();
});
//增加队员
$(".add").on("click", function() {
	var length = $(".tab-num li").length;
	if (length < 10) {
		if (length == 2) { //添加第三名队员时，第二名队员可删除
			var second = $(".team-wrap .tab-item:nth-child(2) .delete");
			if (second.hasClass('hidden')) {
				second.removeClass('hidden');
			}
		}
		addNum(length);
		index = length;
		$(".tab-num li").eq(index).tab();
	}
});
//删除队员
$(".team-wrap").on("click", ".delete>button", function() {
	var num = $(".tab-num li").length;
	if (num != index + 1) { //删除的不是最后一个
		for (var i = index + 1; i <= num - 1; i++) {
			$(".tab-num li").eq(i).text(i);
			$(".team-wrap .tab-item").eq(i).find(".member>span").text(i);
		}
	}
	if (num > 2) {
		deleteNum(index);
		if (num == 3) { //3个人删除1个无法再删除
			$(".team-wrap .tab-item:nth-child(2) .delete").addClass('hidden');
		}
	}
	index--;
});
var isComplete,complete;
$('.team-wrap').on('input', 'input[type="text"]', function() {
	//检测当前队员是否填写完整     
	isComplete = $(".tab-num li").eq(index).hasClass('complete');
	var $info = $(".team-wrap .tab-item").eq(index).find('input[type = "text"]');
	complete = true;
	$info.each(function(i){
		if($($info[i]).val()==""){
			complete = false;
			return false;
		}
	});
	if(complete&&!isComplete){//填写完整并且之前未填写完整
		$(".tab-num li").eq(index).addClass('complete');
	}
	if(!complete&&isComplete){//未填写完整并且之前已填写完整
		$(".tab-num li").eq(index).removeClass('complete');
	}
});
//确认报名
$("#confirm").on("click", function() {
	var top = '<div>选择付款方式</div>',
		center = '<div><input type="radio" name="pay" id="alipay" value="" checked/><label for="alipay"><img src="images/icon-alipay.png"/></label>' +
		'<input type="radio" name="pay" id="weixin" value=""/><label for="weixin"><img src="images/icon-weixin.png"/></label></div>' +
		'<div class="chose-pay">已选择使用<span>支付宝</span>支付</div>',
		bottom = $('<button type="button">确认付款</button>');
	$.createDialogWhite(480, 350);
	$.showDialog(); // 显示遮罩
	$.setDialogTop(top);
	$.setDialogCenter(center);
	$.setDialogBottom(bottom);
	//选择支付方式
	$('.black-shadow input[type="radio"]').on('click', function() {
		var id = $(this).attr('id');
		var method = "支付宝";
		switch (id) {
			case "alipay":
				method = "支付宝";
				break;
			case "weixin":
				method = "微信";
				break;
		}
		$(".chose-pay span").text(method);
	});
});