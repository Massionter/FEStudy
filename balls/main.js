// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

/*x 和 y 坐标 —— 小球在屏幕上最开始时候的坐标。坐标的范围从 0 （左上角）到浏览器视口的宽和高（右下角）。
水平和竖直速度（velX 和 velY）—— 我们会给每个小球一个水平和竖直速度。实际上，当我们让这些球开始运动时候，每过一帧都会给小球的 x 和 y 坐标加一次这些值。
color —— 每一个小球会有自己的颜色。
size —— 每一个小球会有自己的大小 — 也就是小球的半径，以像素为单位。*/
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//在屏幕上画出小球
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}

var balls = [];

function loop() {
/*将整个画布的颜色设置成半透明的黑色。
然后使用  fillRect()（这四个参数分别是起始的坐标、绘制的矩形的宽和高）
画出一个填充满整个画布的矩形。这是在下一个视图画出来时用来遮住之前的视图的。
如果不这样做得话，你就会在屏幕上看到一条蛇的形状而不是小球的运动了。
用来填充的颜色设置成半透明的rgba(0,0,0,0.25)，也就是让之前的视图留下来一点点，
从而你可以看到小球运动时的轨迹。如果你将 0.25 设置成 1 时，
你就完全看不到了。试着改变其中的值查看造成的影响。*/
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      randomColor(),
      random(10,20)
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
	balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

/*对于每个小球，我们都要检查其他的小球是否和当前这个小球相撞了。为了达到此目的，我们构造另外一个 for 循环来遍历 balls[] 数组中的小球。
在循环里面，我们使用一个 if 语句来检查遍历的小球是否是当前的小球。我们不希望检测到一个小球撞到了自己！为了达到这个目的，我们需要检查当前小球 (即正在调用 collisionDetect 方法的球) 是否和被循环到的小球 (for 循环检测中的当前遍历所引用的球) 是不是同一个。我们使用 ! 来否定判断，因此只有两个小球不是同一个时，条件判断中的代码才会运行。
我们使用了一个常见的算法来检测两个小球是否相撞了，两个小球中心的距离是否小于两个小球的半径之和。这些会在 2D 碰撞检测 介绍地更加详细。
如果检测到了碰撞，会运行 if 语句中的代码。我们会将两个小球的颜色都设置成随机的一种。我们也可以将这步操作变得复杂一点，比如让两个小球弹开，那样需要植入更加复杂的代码。像这样的物理场景，有以下专门的库比如 PhysicsJS，matter.js，Phaser 等。*/