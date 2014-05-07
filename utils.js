(function (root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    Function.prototype.inherits = function (ParentClass) {
        var Surrogate = function () {};

        Surrogate.prototype = ParentClass.prototype;
        this.prototype = new Surrogate();
    };

    Asteroids.randomVec = function() {
        var speed = 2 * Math.random();
        var direction = 2 * Math.PI * Math.random();
        return [speed, direction];
    }

})(this);