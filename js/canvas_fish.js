var can1, can2;
var ctx1, ctx2;
var lastTime, deltaTime;
var bgPic = new Image();
var ane;

// 背景海葵
var aneObj = function() {
    this.x = [];
    this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = i * 15 + Math.random() * 20;
        this.len[i] = 200 + Math.random() * 50;
    }
}
aneObj.prototype.draw = function() {
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = 'round';
    ctx2.strokeStyle = '#3b154e';
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], canHeight);
        ctx2.lineTo(this.x[i], canHeight - this.len[i]);
        ctx2.stroke();

    }
    ctx2.restore();
}

document.body.onload = game();


function gameLoop() {
    requestAnimFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
}

// 背景
function drawBackground() {
    ctx2.drawImage(bgPic, 0, 0, canWidth, canHeight);
}

function init() {
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');

    bgPic.src = './img/background.jpg';
    canWidth = can1.width;
    canHeight = can2.height;
    bgPic.onload = function() {
        drawBackground();
        ane = new aneObj();
        ane.init();
        ane.draw();
    }

    gameLoop();

}

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameLoop();
}