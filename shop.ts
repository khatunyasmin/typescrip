class ShoppingCart {
    private items: { [itemName: string]: { price: number; quantity: number } } = {};
  
    addItem(itemName: string, price: number, quantity: number = 1): void {
      this.items[itemName] = this.items[itemName] || { price: 0, quantity: 0 };
      this.items[itemName].price = price;
      this.items[itemName].quantity += quantity;
    }
  
    calculateTotalPrice(): number {
      return Object.values(this.items).reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
  }
  
  // Example usage:
  const cart = new ShoppingCart();
  
  // Adding items to the cart
  cart.addItem("Laptop", 1200);
  cart.addItem("Mouse", 25, 2);
  cart.addItem("Keyboard", 50);
  
  // Calculating the total price
  const totalPrice = cart.calculateTotalPrice();
  
  console.log(`Total Price: $${totalPrice}`);
  
