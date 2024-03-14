// Function to swap two numbers
function swapNumbers(a: number, b: number): [number, number] {
    return [b, a];
}
let num1: number = 5;
let num2: number = 10;

// Display the original numbers
console.log("Original Numbers: num1 =", num1, "num2 =", num2);

// Swap the numbers
[num1, num2] = swapNumbers(num1, num2);

// Display the swapped numbers
console.log("Swapped Numbers: num1 =", num1, "num2 =", num2);
