var temperature = /** @class */ (function () {
    function temperature(c1, f1) {
        this.c = c1;
        this.f = f1;
    }
    temperature.prototype.dispaly = function () {
        var cel = (this.c * 9 / 5) + 32;
        var resf = (this.f - 32) * 5 / 9;
        console.log(cel);
        console.log(resf);
    };
    return temperature;
}());
var obj1 = new temperature(25, 68);
obj1.dispaly();
