function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

var length: number = 10;  //  length of the rectangle
var width: number = 5;   //  width of the rectangle

var area: number = calculateRectangleArea(length, width);

console.log("The area of the rectangle is", area);
