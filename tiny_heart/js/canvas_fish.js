var can1, can2;
var ctx1, ctx2;
var lastTime, deltaTime;
var bgPic = new Image();

var fruit;
var ane;
var mom;

var mx, my; //鼠标位置

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
    can1.addEventListener('mousemove', onmMusemove, false);

    // 背景初始化
    bgPic.src = './img/background.jpg';
    canWidth = can2.width;
    canHeight = can2.height;
    // 鼠标位置初始化
    mx = canWidth / 2;
    my = canHeight / 2;
    // 海葵初始化
    ane = new aneObj();
    ane.init();
    // 食物初始化
    fruit = new fruitObj();
    fruit.init();
    // 大鱼初始化
    mom = new momObj();
    mom.init();


}

function gameLoop() {
    requestAnimFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - lastTime;
    deltaTime = deltaTime > 40 ? 40 : deltaTime;
    lastTime = now;
    // 绘制背景
    drawBackground();
    // 绘制海葵
    ane.draw();
    // 绘制食物
    fruit.draw();
    // 绘制大鱼
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    // 大鱼碰撞检测
    momFruitsCollosion();
}

function onmMusemove(e) {
    if (e.offSetX || e.layerX) {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}