var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = {};
    }
    ShoppingCart.prototype.addItem = function (itemName, price, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.items[itemName] = this.items[itemName] || { price: 0, quantity: 0 };
        this.items[itemName].price = price;
        this.items[itemName].quantity += quantity;
    };
    ShoppingCart.prototype.calculateTotalPrice = function () {
        return Object.values(this.items).reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
    };
    return ShoppingCart;
}());
// Example usage:
var cart = new ShoppingCart();
// Adding items to the cart
cart.addItem("Laptop", 1200);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 50);
// Calculating the total price
var totalPrice = cart.calculateTotalPrice();
console.log("Total Price: $".concat(totalPrice));
