//js

//append
/*var node = document.createElement("DIV"),
	divNode = document.createTextNode("append");
node.appendChild(divNode);
document.getElementById('container').appendChild(node);

console.log(document.charset);*/

document.getElementsByTagName('body')[0].innerHTML = "<div>&nbsp;</div><script defer>alert('hi');<\/script>";

var myobject = {
	key1: "value1",
	key2: "value2"
};
with(myobject){
	var mykey = key1;
	
}
console.log(mykey);
