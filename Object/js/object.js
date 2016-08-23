var checkObject = function() {};
checkObject.prototype = {
	checkName:function(){
		console.log('Name');
		return this;
	},
	checkEmail:function(){
		console.log('Email');
		return this;
	}
}
var a = new checkObject();
a.checkName().checkEmail();

var Book = function(id,name,price){
	//私有属性
	var num = 1;
	//私有方法
	function checkId(){
		
	};
	//特权方法
	this.getName = function(){};
	this.getPrice = function(){};
	this.setName = function(){};
	this.setPrice = function(){};
	//公有属性
	this.id = id;
	//公有方法
	this.copy = function(){};
	//构造器
	this.setName(name);
	this.setPrice(price);
	
}
Book.prototype = {
	//静态公有属性
	isJSBook:false,
	//静态公有方法
	display:function(){}
}
var book = new Book(10,'js',100);
console.log(book)

function SuperClass(){
	this.superValue = true;
}
SuperClass.prototype.getSuperValue = function(){
	return this.superValue;
}
function SubClass(){
	this.subValue = false;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function(){
	return this.subValue;
}
var instance = new SubClass();
console.log(instance);