var arithmetic = /** @class */ (function () {
    function arithmetic(a1, b1) {
        this.a = a1;
        this.b = b1;
    }
    arithmetic.prototype.display = function () {
        console.log("Addition:", this.a + this.b);
        console.log("subtraction:", this.a - this.b);
        console.log("multiplication:", this.a * this.b);
        console.log("Division:", this.a / this.b);
        console.log("Modules:", this.a % this.b);
    };
    return arithmetic;
}());
var sumobj = new arithmetic(10, 100);
sumobj.display();
