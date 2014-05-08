(function (root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var MovingObject = Asteroids.MovingObject =
            function (pos, vel, radius, color) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    };

    MovingObject.prototype.move = function () {
        // velocity in pixels/second
        var fps = Asteroids.Game.FPS;
        var pxPerSec = this.vel[0] / fps;
        var newx = this.pos[0] + pxPerSec * Math.cos(this.vel[1]);
        var newy = this.pos[1] + pxPerSec * Math.sin(this.vel[1]);
        this.pos = [newx, newy];
    };

    MovingObject.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
          this.pos[0],
          this.pos[1],
          this.radius,
          0,
          2 * Math.PI,
          false
      );
      ctx.fill();
    };

    MovingObject.prototype.isCollidedWith = function (otherObject) {
      var distance = Math.pow((
                        Math.pow((otherObject.pos[0] - this.pos[0]), 2) +
                        Math.pow((otherObject.pos[1] - this.pos[1]), 2)
                     ), 0.5);

      return (this.radius + otherObject.radius) > distance;
    };

})(this);
console.log(this);

