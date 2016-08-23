var func1 = (x, y) => x + y;
func1(1, 2); // 得到 3

var func2 = (x, ...args) => {
	console.log(args)
};
func2(1, 2, 3); // 输出 [2, 3]

function* range(start, stop) {
	for(var i = start; i < stop; i++) {
		yield i;
	}
}
var range = range(1, 4);
for(var i of range) { // 输出1,2,3
	console.log(i);
}

function User() {
	this.name = "red";
}

User.prototype = {
	hasPrivilege: function() {
		return false;
	}
};
/*var user = Object.create(User.prototype);
user.name = "green";
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      `用户 ${user.name} 未被授权执行 ${action} 操作。`);
  }
}
authorize(user,"xxoo");*/

var myArray = new Array("1", "2", "3");
var [first, second, third] = myArray;
console.log(first);
console.log(second);
console.log(third);

var {
	foo,
	bar
} = {
	foo: "lorem",
	bar: "ipsum"
};
console.log(foo);
// 输出"lorem"
console.log(bar);
// 输出"ipsum"

var map = new Map();
map.set(window, "the global");
map.set(document, "the document");
for(var [key, value] of map) {
	console.log(key);
	console.log(value);	
}

function countdown(n) {
  while (n --> 0)  // "n goes to zero"
    console.log(n);
}
countdown(3);

var mySymbol = Symbol("ok");
console.log(mySymbol);

var mySet = new Set("13579");
console.log(mySet.size);

function Tree() {
  return new Proxy({}, handler);
}
var handler = {
  get: function (target, key, receiver) {
    if (!(key in target)) {
      target[key] = Tree();  // 自动创建一个子树
    }
    return Reflect.get(target, key, receiver);
  }
};
var tree = Tree();
tree.branch1.branch2.twig = "green";
console.log(tree);

class People {
    constructor(name) { //构造函数
          this.name = name;
    }
    sayName() {
          console.log(this.name);
    }
    
    
    
}
var p1 = new People('name');
console.log(p1);
