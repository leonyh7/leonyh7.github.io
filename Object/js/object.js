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

var Book = function(id,bookname,price){
	var num = 1;
	this.id = id;
	this.bookname = bookname;
	this.price = price;
}
Book.prototype = {
	display:function(){
		console.log(this);
	}
}
var book = new Book(10,'js',100);
book.display();