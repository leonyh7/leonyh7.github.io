// 封装的一个用于绘制圆角矩形的函数.

function roundedRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.lineTo(x, y + height - radius);
    context.quadraticCurveTo(x, y + height, x + radius, y + height);
    context.lineTo(x + width - radius, y + height);
    context.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    context.lineTo(x + width, y + radius);
    context.quadraticCurveTo(x + width, y, x + width - radius, y);
    context.lineTo(x + radius, y);
    context.quadraticCurveTo(x, y, x, y + radius);
    context.stroke();
}

// 矩形
var canvas = document.getElementById('tutorial');
var context = canvas.getContext('2d');

context.fillStyle = "rgb(255,0,0)";
context.fillRect(10, 10, 100, 100);
context.clearRect(45, 45, 60, 60);
context.strokeRect(50, 50, 50, 50);

// 路径
canvas = document.getElementById('tutorial2');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(75, 50);
context.lineTo(100, 75);
context.lineTo(100, 25);
context.fill();

// 笑脸
canvas = document.getElementById('tutorial3');
context = canvas.getContext('2d');

context.beginPath();
context.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
context.moveTo(110, 75);
context.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
context.moveTo(65, 65);
context.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
context.moveTo(95, 65);
context.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
context.stroke();

// 贝塞尔曲线
canvas = document.getElementById('tutorial4');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(75, 25);
context.quadraticCurveTo(25, 25, 25, 62.5);
context.quadraticCurveTo(25, 100, 50, 100);
context.quadraticCurveTo(50, 120, 30, 125);
context.quadraticCurveTo(60, 120, 65, 100);
context.quadraticCurveTo(125, 100, 125, 62.5);
context.quadraticCurveTo(125, 25, 75, 25);
context.stroke();

// 二次贝塞尔曲线
canvas = document.getElementById('tutorial5');
context = canvas.getContext('2d');

context.beginPath();
context.moveTo(75, 40);
context.bezierCurveTo(75, 37, 70, 25, 50, 25);
context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
context.bezierCurveTo(20, 80, 40, 102, 75, 120);
context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
context.bezierCurveTo(85, 25, 75, 37, 75, 40);
context.fill();

// 组合使用
canvas = document.getElementById('tutorial6');
context = canvas.getContext('2d');

roundedRect(context, 12, 12, 200, 180, 15);
roundedRect(context, 19, 19, 200, 180, 9);
roundedRect(context, 53, 53, 49, 33, 10);
roundedRect(context, 53, 119, 49, 16, 6);
roundedRect(context, 135, 53, 49, 33, 10);
roundedRect(context, 135, 119, 25, 49, 10);

context.beginPath();
context.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
context.lineTo(31, 37);
context.fill();

for (var i = 0; i < 10; i++) {
    context.fillRect(51 + i * 16, 35, 4, 4);
}

for (var i = 0; i < 9; i++) {
    context.fillRect(115, 51 + i * 16, 4, 4);
}
for (var i = 0; i < 10; i++) {
    context.fillRect(51 + i * 16, 99, 4, 4);
}