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
(function() {
    var canvas = document.getElementById('tutorial');
    var context = canvas.getContext('2d');

    context.fillStyle = "rgb(255,0,0)";
    context.fillRect(10, 10, 100, 100);
    context.clearRect(45, 45, 60, 60);
    context.strokeRect(50, 50, 50, 50);
})();

// 路径
(function() {
    var canvas = document.getElementById('tutorial2');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100, 25);
    context.fill();
})();

// 笑脸
(function() {
    var canvas = document.getElementById('tutorial3');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    context.moveTo(110, 75);
    context.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
    context.moveTo(65, 65);
    context.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    context.moveTo(95, 65);
    context.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    context.stroke();

})();

// 贝塞尔曲线
(function() {
    var canvas = document.getElementById('tutorial4');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(75, 25);
    context.quadraticCurveTo(25, 25, 25, 62.5);
    context.quadraticCurveTo(25, 100, 50, 100);
    context.quadraticCurveTo(50, 120, 30, 125);
    context.quadraticCurveTo(60, 120, 65, 100);
    context.quadraticCurveTo(125, 100, 125, 62.5);
    context.quadraticCurveTo(125, 25, 75, 25);
    context.stroke();

})();

// 二次贝塞尔曲线
(function() {
    var canvas = document.getElementById('tutorial5');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(75, 40);
    context.bezierCurveTo(75, 37, 70, 25, 50, 25);
    context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    context.bezierCurveTo(20, 80, 40, 102, 75, 120);
    context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    context.bezierCurveTo(85, 25, 75, 37, 75, 40);
    context.fill();
})();

// 组合使用
(function() {

    var canvas = document.getElementById('tutorial6');
    var context = canvas.getContext('2d');

    roundedRect(context, 12, 12, 200, 180, 15);
    roundedRect(context, 19, 19, 200, 180, 9);
    roundedRect(context, 53, 53, 49, 33, 10);
    roundedRect(context, 53, 119, 49, 16, 6);
    roundedRect(context, 135, 53, 49, 33, 10);
    roundedRect(context, 135, 119, 25, 49, 10);

    context.fillStyle = "green";
    context.beginPath();
    context.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    context.lineTo(31, 37);
    context.fill();

    context.fillStyle = "white";
    context.beginPath();
    context.arc(34, 30, 3, Math.PI / 7, -Math.PI / 7, false);
    context.fill();

    context.fillStyle = "black";

    for (var i = 0; i < 10; i++) {
        context.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (var i = 0; i < 9; i++) {
        context.fillRect(115, 51 + i * 16, 4, 4);
    }
    for (var i = 0; i < 10; i++) {
        context.fillRect(51 + i * 16, 99, 4, 4);
    }

    context.beginPath();
    context.moveTo(83, 116);
    context.lineTo(83, 102);
    context.bezierCurveTo(83, 94, 89, 88, 97, 88);
    context.bezierCurveTo(105, 88, 111, 94, 111, 102);
    context.lineTo(111, 116);
    context.lineTo(106.333, 111.333);
    context.lineTo(101.666, 116);
    context.lineTo(97, 111.333);
    context.lineTo(92.333, 116);
    context.lineTo(87.666, 111.333);
    context.lineTo(83, 116);
    context.fill();

    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(91, 96);
    context.bezierCurveTo(88, 96, 87, 99, 87, 101);
    context.bezierCurveTo(87, 103, 88, 106, 91, 106);
    context.bezierCurveTo(94, 106, 95, 103, 95, 101);
    context.bezierCurveTo(95, 99, 94, 96, 91, 96);
    context.moveTo(103, 96);
    context.bezierCurveTo(100, 96, 99, 99, 99, 101);
    context.bezierCurveTo(99, 103, 100, 106, 103, 106);
    context.bezierCurveTo(106, 106, 107, 103, 107, 101);
    context.bezierCurveTo(107, 99, 106, 96, 103, 96);
    context.fill();

    context.fillStyle = "black";
    context.beginPath();
    context.arc(101, 102, 2, 0, Math.PI * 2, true);
    context.fill();

    context.beginPath();
    context.arc(89, 102, 2, 0, Math.PI * 2, true);
    context.fill();
})();

// fillStyle
(function() {
    var canvas = document.getElementById('tutorial7');
    var context = canvas.getContext('2d');

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            context.fillStyle = 'rgba(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0,.6)';
            context.fillRect(j * 25, i * 25, 25, 25);
        }
    }
})();

// strokeStyle
(function() {
    var canvas = document.getElementById('tutorial8');
    var context = canvas.getContext('2d');

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            context.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
            context.beginPath();
            context.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            context.stroke();
        }
    }
})();

// globalAlpha
(function() {
    var ctx = document.getElementById('tutorial9').getContext('2d');
    // 画背景
    ctx.fillStyle = '#FD0';
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = '#F30';
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = '#FFF';

    // 设置透明度值
    ctx.globalAlpha = 0.2;

    // 画半透明圆
    for (var i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        ctx.fill();
    }
})();

// linearGradient
(function() {
    var ctx = document.getElementById('tutorial10').getContext('2d');

    var line1 = ctx.createLinearGradient(0, 0, 0, 150);
    line1.addColorStop(0, '#00ABEB');
    line1.addColorStop(0.5, '#fff');
    line1.addColorStop(0.5, '#26C000');
    line1.addColorStop(1, '#000');
    ctx.fillStyle = line1;

    var line2 = ctx.createLinearGradient(0, 50, 0, 95);
    line2.addColorStop(0.5, '#000');
    line2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.strokeStyle = line2;

    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
})();

// radialGradient
(function() {
    var ctx = document.getElementById('tutorial11').getContext('2d');

    var radial = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
    radial.addColorStop(0, '#A7D30C');
    radial.addColorStop(0.9, '#019F62');
    radial.addColorStop(1, 'rgba(1, 159, 98, 0)');

    var radial2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
    radial2.addColorStop(0, '#FF5F98');
    radial2.addColorStop(0.75, '#FF0188');
    radial2.addColorStop(1, 'rgba(255, 1, 136, 0)');

    var radial3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
    radial3.addColorStop(0, '#00C9FF');
    radial3.addColorStop(0.8, '#00B5E2');
    radial3.addColorStop(1, 'rgba(0, 201, 255, 0)');

    var radial4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
    radial4.addColorStop(0, '#F4F201');
    radial4.addColorStop(0.8, '#E4C700');
    radial4.addColorStop(1, 'rgba(228, 199, 0, 0)');

    ctx.fillStyle = radial4;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radial3;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radial2;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, 150, 150);
})();

// createPattern
(function() {
    var ctx = document.getElementById('tutorial12').getContext('2d');
    var into = document.createElement("canvas");
    var ctx2 = into.getContext('2d');
    into.width = 50;
    into.height = 50;

    var img = new Image();
    img.src = './logo.png';
    img.onload = function() {
        ctx2.drawImage(img, 0, 0, 50, 50);
        var pattern = ctx.createPattern(into, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, 150, 150);
    }
})();

// 文字
(function() {
    var context = document.getElementById('tutorial13').getContext('2d');
    context.font = "48px serif";
    context.fillStyle = "#0000ff";
    context.strokeText("Hello world", 0, 100);
})();

// save restore
(function() {
    var context = document.getElementById('tutorial14').getContext('2d');
    context.fillRect(0, 0, 150, 150);
    context.save();

    context.fillStyle = '#09F';
    context.fillRect(15, 15, 120, 120);
    context.save();

    context.fillStyle = '#fff';
    context.globalAlpha = 0.5;
    context.fillRect(30, 30, 90, 90);

    context.restore();
    context.fillRect(45, 45, 60, 60);

    context.restore();
    context.fillRect(60, 60, 30, 30);
})();

// rotate
(function() {
    var ctx = document.getElementById('tutorial15').getContext('2d');
    ctx.translate(75, 75);
    for (var i = 1; i < 6; i++) { // Loop through rings (from inside to out)
        ctx.save();
        ctx.fillStyle = 'rgb(' + (51 * i) + ',' + (255 - 51 * i) + ',255)';

        for (var j = 0; j < i * 6; j++) { // draw individual dots
            ctx.rotate(Math.PI * 2 / (i * 6));
            ctx.beginPath();
            ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
            ctx.fill();
        }
        ctx.restore();
    }
})();