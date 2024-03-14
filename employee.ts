class Employee {
    name: string;
    age: number;
    salary: number;
    FullTime: boolean;

    constructor(name: string, age: number, salary: number, FullTime: boolean) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.FullTime = FullTime;
    }

    displayInfo(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Salary:", this.salary);
        console.log("Full Time:", this.FullTime ? "Yes" : "No");
    }
}

// Example employee data
const employee1 = new Employee("Anatr", 24, 50000, false);

// Display employee information
employee1.displayInfo();

const employee2 = new Employee("Yasmin ", 23, 50000, true);

// Display employee information
employee2.displayInfo();


