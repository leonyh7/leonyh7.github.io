// 星空
(function() {
    var stars = document.getElementById('stars');
    var ctx = stars.getContext('2d');
    var mousePos = [0, 0];
    var nodes = []; // 星星
    var edges = []; // 线

    var easingFactor = 5.0;
    var backgroundColor = '#000';
    var nodeColor = '#fff';
    var edgeColor = '#fff';

    function constructNodes() {
        // 创建点
        for (var i = 0; i < 100; i++) {
            var node = {
                drivenByMouse: i == 0,
                x: Math.random() * stars.width,
                y: Math.random() * stars.height,
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
                radius: Math.random() > 0.9 ? 3 + Math.random() * 3 : 1 + Math.random()
            }
            nodes.push(node);

        }
        nodes.forEach(function(e) {
            nodes.forEach(function(e2) {
                if (e == e2) {
                    return;
                }

                var edge = {
                    from: e,
                    to: e2
                }

                addEdge(edge);
            });
        });
    }

    // 创建边
    function addEdge(edge) {
        var ignore = false;

        edges.forEach(function(e) {
            if (e.from == edge.from & e.to == edge.to) {
                ignore = true;
            }

            if (e.to == edge.from & e.from == edge.to) {
                ignore = true;
            }
        });

        if (!ignore) {
            edges.push(edge);
        }
    }

    // 点运动
    function step() {
        nodes.forEach(function(e) {
            if (e.drivenByMouse) {
                return;
            }

            e.x += e.vx;
            e.y += e.vy;

            function clamp(min, max, value) {
                if (value > max) {
                    return max;
                } else if (value < min) {
                    return min;
                } else {
                    return value;
                }
            }

            if (e.x <= 0 || e.x >= stars.width) {
                e.vx *= -1;
                e.x = clamp(0, stars.width, e.x)
            }

            if (e.y <= 0 || e.y >= stars.height) {
                e.vy *= -1;
                e.y = clamp(0, stars.height, e.y)
            }
        });

        adjustNodeDrivenByMouse();
        render();
        window.requestAnimationFrame(step);
    }

    function adjustNodeDrivenByMouse() {
        nodes[0].x += (mousePos[0] - nodes[0].x) / easingFactor;
        nodes[0].y += (mousePos[1] - nodes[0].y) / easingFactor;
    }

    function lengthOfEdge(edge) {
        return Math.sqrt(Math.pow((edge.from.x - edge.to.x), 2) + Math.pow((edge.from.y - edge.to.y), 2));
    }


    function render() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, stars.width, stars.height);

        edges.forEach(function(e) {
            var l = lengthOfEdge(e);
            var threshold = stars.width / 8;

            if (l > threshold) {
                return;
            }

            ctx.strokeStyle = edgeColor;
            ctx.lineWidth = (1.0 - l / threshold) * 2.5;
            ctx.globalAlpha = 1.0 - l / threshold;
            ctx.beginPath();
            ctx.moveTo(e.from.x, e.from.y);
            ctx.lineTo(e.to.x, e.to.y);
            ctx.stroke();
        });
        ctx.globalAlpha = 1.0;

        nodes.forEach(function(e) {
            if (e.drivenByMouse) {
                return;
            }

            ctx.fillStyle = nodeColor;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI);
            ctx.fill();
        });
    }

    window.onload = function() {
        stars.width = document.body.clientWidth;
        if (nodes.length == 0) {
            constructNodes();
        }

        render();
        step();
    }

    window.onmousemove = function(e) {
        mousePos[0] = e.layerX;
        mousePos[1] = e.layerY;
    }
})();