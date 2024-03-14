var numbers = [2, 3, 2, 5, 2, 5, 7, 3, 3, 2];
var frequency = {};
numbers.forEach(function (num) {
    frequency[num] = (frequency[num] || 0) + 1;
});
console.log("Numbers in the array:", numbers);
console.log("Frequency of each number:", frequency);
