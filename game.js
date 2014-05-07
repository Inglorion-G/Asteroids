(function (root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var Game = Asteroids.Game = function (ctx) {
        this.ctx = ctx;
        this.asteroids = [];
        this.addAsteroids(10);

        var pos = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y / 2];
        var vel = [0, 0];
        this.ship = new Asteroids.Ship(pos, vel);
    };

    Game.DIM_X = 500;
    Game.DIM_Y = 500;
    Game.FPS = 60;

    Game.prototype.addAsteroids = function (astNum) {
        for (var i = 0; i < astNum; i++) {
            this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
        }
    };

    Game.prototype.checkCollisions = function () {
        var ship = this.ship;

        for (var i = 0; i < this.asteroids.length; i++) {
          if (this.asteroids[i].isCollidedWith(ship)) {
              return true;
            }
        }
        return false;
    };

    Game.prototype.checkAsteroids = function () {
        var remainingAsteroids = [];
        var astRadius = Asteroids.Asteroid.RADIUS;
        var limit = Game.DIM_X + astRadius;
        for (var i = 0; i < this.asteroids.length; i++) {
            if (this.asteroids[i].pos[0] < limit &&
                this.asteroids[i].pos[1] < limit) {
                remainingAsteroids.push(this.asteroids[i]);
            }
        }
        this.asteroids = remainingAsteroids;
    };

    Game.prototype.draw = function (ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.ship.draw(ctx);

        this.asteroids.forEach( function (asteroid) {
            asteroid.draw(ctx);
        });
    };

    Game.prototype.move = function () {

        this.ship.move();

        this.asteroids.forEach( function (asteroid) {
            asteroid.move();
        });
    };

    Game.prototype.step = function () {
        this.move();
        this.checkAsteroids();
        this.draw(this.ctx);
        if (this.checkCollisions()) {
            this.stop();
        }
    };

    Game.prototype.stop = function () {
        clearInterval(this.intervalID);
        alert("Despite your valiant ship flying. You have died.");
    };

    Game.prototype.start = function () {
        this.intervalID =
        setInterval(this.step.bind(this), 1000 * (1 / Game.FPS));
    };


})(this);
