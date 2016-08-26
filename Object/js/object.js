var checkObject = function() {};
checkObject.prototype = {
	checkName: function() {
		console.log('Name');
		return this;
	},
	checkEmail: function() {
		console.log('Email');
		return this;
	}
}
var a = new checkObject();
a.checkName().checkEmail();

var Book = function(id, name, price) {
	//私有属性
	var num = 1;
	//私有方法
	function checkId() {

	};
	//特权方法
	this.getName = function() {};
	this.getPrice = function() {};
	this.setName = function() {};
	this.setPrice = function() {};
	//公有属性
	this.id = id;
	//公有方法
	this.copy = function() {};
	//构造器
	this.setName(name);
	this.setPrice(price);

}
Book.prototype = {
	//静态公有属性
	isJSBook: false,
	//静态公有方法
	display: function() {}
}
var book = new Book(10, 'js', 100);
console.log(book);

//继承
function SuperClass() {
	this.superValue = true;
}
SuperClass.prototype.getSuperValue = function() {
	return this.superValue;
}

function SubClass() {
	this.subValue = false;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
	return this.subValue;
}
var instance = new SubClass();
console.log(instance);
//安全工厂模式
var Factory = function(type, content) {
	if(this instanceof Factory) {
		var s = new this[type](content);
		return s;
	} else {
		return new Factory(type, content);
	}
}
Factory.prototype = {
	Javascript: function(content) {
		this.content = content;
		(function(content) {
			var div = document.createElement('div');
			div.innerHTML = content;
			div.style.border = 'solid 1px #ddd';
			document.getElementById('container').appendChild(div);
		})(content);
	}
}
new Factory('Javascript', 'Javascript is Good!');

//原型继承
function prototypeExtend() {
	var F = function() {},
		args = arguments,
		i = 0,
		len = args.length;
	for(; i < len; i++) {
		for(var j in args[i]) {
			F.prototype[j] = args[i][j];
		}
	}
	return new F;
}
var penguin = prototypeExtend({
	swimSpeed: 20,
	swim: function() {
		console.log('swim-speed:' + this.swimSpeed);
	}
}, {
	runSpeed: 10,
	run: function() {
		console.log('run-speed:' + this.runSpeed);
	}
});
penguin.run();

//静态变量
var Conf = (function() {
	var conf = {
		MAX_NUM: 100,
		MIN_NUM: 1,
		COUNT: 1000
	}
	return {
		get: function(name) {
			return conf[name] ? conf[name] : null;
		}
	}
})();
var count = Conf.get('COUNT');
console.log(count);
