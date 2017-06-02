var fruitObj = function() {
    this.alive = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function() {
    this.alive = Array(this.num).fill(false);
    this.orange.src = './img/fruit.png';
    this.blue.src = './img/blue.png';
}
fruitObj.prototype.draw = function() {
    var num = 0;
    for (var i = 0; i < this.num; i++) {}
}
fruitObj.prototype.born = function() {

}