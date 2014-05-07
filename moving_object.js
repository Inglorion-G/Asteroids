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
        this.pos = this.pos + this.vel;
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

