// 背景海葵
var aneObj = function() {
    // this.x = [];
    this.rootX = []; //根X
    this.headX = []; // 头X
    this.headY = []; // 头Y
    this.alpha = 0; // 摆动周期
    this.amp = []; // 振幅
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.headX[i] = this.rootX[i] = i * 12 + Math.random() * 10;
        this.headY[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
}
aneObj.prototype.draw = function() {
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = 'round';
    ctx2.strokeStyle = '#3b154e';
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.rootX[i], canHeight);
        ctx2.quadraticCurveTo(this.rootX[i], canHeight - 100, this.headX[i] + l * this.amp[i], this.headY[i]);
        ctx2.stroke();

    }
    ctx2.restore();
}