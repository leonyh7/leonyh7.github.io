var fruitObj = function() {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = []; //果实大小
    this.lMax = 14; // 果实最大大小
    this.spd = []; // 果实成长、上漂速度
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 20;
fruitObj.prototype.init = function() {
    this.alive = Array(this.num).fill(false);
    this.x = Array(this.num).fill(0);
    this.y = Array(this.num).fill(0);
    this.l = Array(this.num).fill(0);
    this.orange.src = './img/fruit.png';
    this.blue.src = './img/blue.png';
    for (var i = 0; i < this.num; i++) {
        this.spd[i] = Math.random() * 0.005 + 0.005;
        this.born(i);
    }
}
fruitObj.prototype.draw = function() {
    var num = 0;
    for (var i = 0; i < this.num; i++) {
        // if (this.alive[i]) {
        if (this.l[i] <= this.lMax) {
            this.l[i] += this.spd[i] * deltaTime;
        } else {
            this.y[i] -= this.spd[i] * 2 * deltaTime;
        }
        ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        // }
        if (this.y[i] < -10) {
            this.born(i);
        }
    }
}
fruitObj.prototype.born = function(i) {
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.alive[i] = true;
}