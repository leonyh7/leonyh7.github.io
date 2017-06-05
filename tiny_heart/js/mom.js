var momObj = function() {
    this.x = canWidth / 2;
    this.y = canHeight / 2;
    this.angle = 0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
}
momObj.prototype.init = function() {
    this.bigEye.src = './img/bigEye0.png';
    this.bigBody.src = './img/bigSwim0.png';
    this.bigTail.src = './img/bigTail0.png';
}
momObj.prototype.draw = function() {
    this.x = lerpDistance(mx, this.x, 0.99);
    this.y = lerpDistance(my, this.y, 0.99);

    var deltaY = this.y - my;
    var deltaX = this.x - mx;
    var beta = Math.atan2(deltaY, deltaX);
    this.angle = lerpAngle(beta, this.angle, 0.6);

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);

    ctx1.restore();

}