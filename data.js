// class info{
//     display():void{
var employees = [
    ["John Doe", 30, 50000, true],
];
function displayEmployeeInfo(employee) {
    console.log("Name:", employee[0]);
    console.log("Age:", employee[1]);
    console.log("Salary:", employee[2]);
    console.log("Full Time:", employee[3] ? "Yes" : "No");
}
employees.forEach(function (employee) {
    displayEmployeeInfo(employee);
});
