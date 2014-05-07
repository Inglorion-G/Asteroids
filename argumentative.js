

function sum() {
	var args = [].slice.call(arguments);
	var total = 0;
    console.log(args);
	args.forEach(function (ele) {
        total += ele;
	});
    return total;
}

function sum2() {
	var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

Function.prototype.myBind = function () {
    var args = [].slice.call(arguments);
    var obj = args.shift();
    var fun = this;

    return function () {
        fun.apply(obj, args);
    };
}

function Toad(name) {
    this.name = name;
}

Toad.prototype.croak = function () {
    console.log(this.name);
};

t = new Toad("Barry");
// setTimeout(t.croak.myBind(t), 500);

function curriedSum(n) {
    var numbers = [];
    var numArgs = n;

    var _curriedSum = function(num) {
        numbers.push(num);
        if (numbers.length == numArgs) {
            return numbers.reduce(function(x,y) { return x + y; });
        }
        return _curriedSum;
    };

    return _curriedSum;
}
//
// var f0 = curriedSum(3);
// var f1 = f0(1);
// var f2 = f1(4);
// var f3 = f2(5);
// console.log(f3);



Function.prototype.curry = function (n) {
    var args = [];
    var numArgs = n;
    var originalFunc = this;
    var _curriedFunction = function(argEle) {
        args.push(argEle);
        if (args.length === numArgs) {
            return originalFunc.apply(this, args);
        } else {
            return _curriedFunction;
        }
    };
    return _curriedFunction;
};



var f0 = sum2.curry(3);
var f1 = f0(1);
var f2 = f1(4);
var f3 = f2(5);
console.log(f3);



