var fruitObj = function() {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = []; //果实大小
    this.lMax = 14; // 果实最大大小
    this.spd = []; // 果实成长、上漂速度
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 20;
fruitObj.prototype.init = function() {
    this.alive = Array(this.num).fill(false);
    this.x = Array(this.num).fill(0);
    this.y = Array(this.num).fill(0);
    // this.l = Array(this.num).fill(0);
    this.orange.src = './img/fruit.png';
    this.blue.src = './img/blue.png';
    for (var i = 0; i < this.num; i++) {
        this.spd[i] = Math.random() * 0.017 + 0.003;
        this.fruitType[i] = '';
        this.born(i);
    }
}
fruitObj.prototype.draw = function() {
    var num = 0;
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            if (this.l[i] <= this.lMax) {
                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * 3 * deltaTime;
            }
            if (this.fruitType[i] == 'orange')
                ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            else
                ctx2.drawImage(this.blue, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        }
        if (this.y[i] < -10) {
            this.born(i);
        }
    }
}
fruitObj.prototype.born = function(i) {
    var aneID = Math.floor(Math.random() * ane.num);
    var type = Math.random();
    this.x[i] = ane.headX[aneID];
    this.y[i] = ane.headY[aneID];
    this.l[i] = 0;
    if (type < 0.3) this.fruitType[i] = 'blue';
    else this.fruitType[i] = 'orange';
    this.alive[i] = true;
}
fruitObj.prototype.dead = function(i) {
    this.alive[i] = false;
    this.born(i);
}