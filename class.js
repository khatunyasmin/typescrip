var Employee = /** @class */ (function () {
    function Employee(idno, name) {
        this.empcode = idno;
        this.empName = name;
    }
    Employee.prototype.display = function () {
        console.log(this.empcode);
        console.log(this.empName);
    };
    return Employee;
}());
var empobj = new Employee(856, "yasmin Khatun");
// Object creation
var empobj2 = new Employee(956, "uzam usmani");
empobj.display();
empobj2.display();
