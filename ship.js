(function (root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var Ship = Asteroids.Ship = function (pos, vel) {
        Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
        this.bearing = 0;
    };

    Ship.inherits(Asteroids.MovingObject);

    Ship.prototype.draw = function (ctx) {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.moveTo(this.pos[0],this.pos[1]);
        ctx.lineTo(this.pos[0] + 20, this.pos[1]);
        ctx.lineTo(this.pos[0] + 10, this.pos[1] + 25);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgb(0,128,0)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    Ship.prototype.fireBullet = function (game) {
        return new Asteroids.Bullet(this.pos, this.bearing, game);
    };

    Ship.prototype.changeVel = function (impulse) {
        var origXComponent = this.vel[0] * Math.cos(this.vel[1]);
        var origYComponent = this.vel[0] * Math.sin(this.vel[1]);

        var newXComponent = impulse[0] * Math.cos(impulse[1]);
        var newYComponent = impulse[0] * Math.sin(impulse[1]);

        var newSpeed = Math.pow(
            Math.pow(origXComponent + newXComponent, 2) +
            Math.pow(origYComponent + newYComponent, 2),
            0.5);
        var newDirection = Math.atan((origYComponent + newYComponent) /
              (origXComponent + newXComponent));

        this.vel = [newSpeed, newDirection];

    };

    Ship.RADIUS = 7;
    Ship.COLOR = "blue";

    key('w', function(event, handler){
        var changeVector = [2, -Math.PI / 2];
        game.ship.changeVel(changeVector);
        console.log(game.ship.vel)
    });

    key('a', function(event, handler){
        // game.ship.vel[1] = 0;
        // game.ship.vel[0] -= 2;
        var changeVector = [2, Math.PI];
        game.ship.changeVel(changeVector);

    });

    key('s', function(event, handler){
        // game.ship.vel[1] = - Math.PI / 2;
        // game.ship.vel[0] -= 2
        var changeVector = [2, Math.PI / 2];
        game.ship.changeVel(changeVector);

    });

    key('d', function(event, handler){
        // game.ship.vel[1] = 0;
        // game.ship.vel[0] += 2;
        var changeVector = [2, 0];
        game.ship.changeVel(changeVector);

    });

    key('space', function(event, handler){
        game.fireBullet();
    });

})(this);