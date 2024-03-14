var Employee = /** @class */ (function () {
    function Employee(name, age, salary, FullTime) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.FullTime = FullTime;
    }
    Employee.prototype.displayInfo = function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Salary:", this.salary);
        console.log("Full Time:", this.FullTime ? "Yes" : "No");
    };
    return Employee;
}());
// Example employee data
var employee1 = new Employee("Anatr", 24, 50000, false);
// Display employee information
employee1.displayInfo();
var employee2 = new Employee("Yasmin ", 23, 50000, true);
// Display employee information
employee2.displayInfo();
var info = /** @class */ (function () {
    function info() {
    }
    info.prototype.display = function () {
        var _a;
        var EmployeeData = (_a = ["yasu", 23, 5000, true], string = _a[0], number = _a[1], number = _a[2], boolean = _a[3], _a);
        console.log(EmployeeData);
    };
    return info;
}());
var obj4 = new info();
obj4.display();
