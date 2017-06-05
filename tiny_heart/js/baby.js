var babyObj = function() {
    this.x;
    this.y;
    this.angle = 0;
    // this.babyEye = new Image();
    this.babyEye = Array(2);
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;
    this.babyBody = new Image();
    // this.babyTail = new Image();
    this.babyTail = Array(8);
    this.babyTailTimer = 0;
    this.babyTailCount = 0;
}
babyObj.prototype.init = function() {
    this.x = canWidth / 2 - 50;
    this.y = canHeight / 2 + 50;
    this.babyEye.src = "./img/babyEye0.png";
    this.babyBody.src = "./img/babyFade0.png";
    this.babyTail.src = "./img/babyTail0.png";
    for (var i = 0; i < this.babyTail.length; i++) {
        this.babyTail[i] = new Image();
        this.babyTail[i].src = './img/babyTail' + i + '.png';
    }
    for (var j = 0; j < this.babyEye.length; j++) {
        this.babyEye[j] = new Image();
        this.babyEye[j].src = './img/babyEye' + j + '.png';
    }
}
babyObj.prototype.draw = function() {
    this.x = lerpDistance(mom.x, this.x, 0.99);
    this.y = lerpDistance(mom.y, this.y, 0.99);

    var deltaY = this.y - mom.y;
    var deltaX = this.x - mom.x;
    var beta = Math.atan2(deltaY, deltaX);
    this.angle = lerpAngle(beta, this.angle, 0.6);

    //尾巴摆动
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }

    // 眨眼睛
    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;

        if (this.babyEyeCount == 0) {
            this.babyEyeInterval = Math.random() * 1000 + 2000; // 睁开时间
        } else {
            this.babyEyeInterval = 200; // 闭眼时间
        }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail[this.babyTailCount], -this.babyTail[this.babyTailCount].width / 2 + 23, -this.babyTail[this.babyTailCount].height / 2);
    ctx1.drawImage(this.babyBody, -this.babyBody.width / 2, -this.babyBody.height / 2);
    ctx1.drawImage(this.babyEye[this.babyEyeCount], -this.babyEye[this.babyEyeCount].width / 2, -this.babyEye[this.babyEyeCount].height / 2);
    ctx1.restore();
}