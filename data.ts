// class info{
//     display():void{

// var EmployeeData : [string, number, number, boolean]=["yasu",23,5000,true]

// console.log(EmployeeData[3]);

//     }
// }
// let obj4=new info();
// obj4.display();



type EmployeeData = [string, number, number, boolean];

const employees: EmployeeData[] = [
    ["John Doe", 30, 50000, true],
    
];

function displayEmployeeInfo(employee: EmployeeData): void {
    console.log("Name:", employee[0]);
    console.log("Age:", employee[1]);
    console.log("Salary:", employee[2]);
    console.log("Full Time:", employee[3] ? "Yes" : "No");
    
}

employees.forEach(employee => {
    displayEmployeeInfo(employee);
});
