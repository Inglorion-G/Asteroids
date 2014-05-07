(function (root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var Ship = Asteroids.Ship = function (pos, vel) {
        Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
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

    Ship.prototype.power = function (impulse) {

    }

    key('w', function(event, handler){
        game.ship.vel[1] = - Math.PI / 2;
        game.ship.vel[0] += 2;
        console.log(game.ship.vel)
        console.log(handler.shortcut, handler.scope);
    });

    key('a', function(event, handler){
        game.ship.vel[1] = 0;
        game.ship.vel[0] -= 2;
        console.log(handler.shortcut, handler.scope);
    });

    key('s', function(event, handler){
        game.ship.vel[1] = - Math.PI / 2;
        game.ship.vel[0] -= 2
        console.log(handler.shortcut, handler.scope);
    });

    key('d', function(event, handler){
        game.ship.vel[1] = 0;
        game.ship.vel[0] += 2;
        console.log(handler.shortcut, handler.scope);
    });

    Ship.RADIUS = 7;
    Ship.COLOR = "blue";

})(this);