
(function (root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
        Asteroids.MovingObject.call(this, pos, vel, radius, color);

    };

    Asteroid.COLOR = "black";
    Asteroid.RADIUS = 20;

    Asteroid.inherits(Asteroids.MovingObject);


    Asteroid.randomAsteroid = function (maxX, maxY) {
        var posX = maxX * Math.random();
        var posY = maxY * Math.random();
        while (posX > 200 && posX < 300 && posY > 200 && posY < 300) {
            posX = maxX * Math.random();
            posY = maxY * Math.random();
        }
        var astPos = [posX, posY];

        return new Asteroid(
            astPos,
            Asteroids.randomVec(),
            Asteroid.RADIUS,
            Asteroid.COLOR
        );
    };


})(this);


// var MKXIII = Asteroids.Asteroid.randomAsteroid(100,100);
// console.log(MKXIII);
// var test = new Asteroids.Asteroid([50,50],[2,3], 1, "black");