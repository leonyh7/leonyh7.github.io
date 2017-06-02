var can1, can2;
var ctx1, ctx2;
var lastTime, deltaTime;
var bgPic = new Image();

var fruit;
var ane;

document.body.onload = game();

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameLoop();
}

function init() {
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');

    // 背景初始化
    bgPic.src = './img/background.jpg';
    canWidth = can2.width;
    canHeight = can2.height;
    // 海葵初始化
    ane = new aneObj();
    ane.init();
    // 食物初始化
    fruit = new fruitObj();
    fruit.init();


}

function gameLoop() {
    requestAnimFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    // 绘制背景
    drawBackground();
    // 绘制海葵
    ane.draw();
    // 绘制食物
    fruit.draw();
}