// inheritance
// class person
// {
//     name:string="David";
//     age:number=25;
//     designation:string="Designer";
//     country:string="Turkey";
// }
// class info extends person
// {
//     display()
//     {    
//     console.log("Name:"+this.name+" Age:"+this.age+" Designation:"+this.designation+" Country:"+this.country);
//     }
// }
// let obj1 = new info();
// obj1.display();
// consturctor use in 
var person = /** @class */ (function () {
    function person(n, a, d, c) {
        this.name = n;
        this.age = a;
        this.designation = d;
        this.country = c;
    }
    person.prototype.info = function () {
        console.log("Name:" + this.name + " Age:" + this.age + " Designation:" + this.designation + " Country:" + this.country);
    };
    return person;
}());
var obj1 = new person("Arpita", 24, "Content-Writer", "UAE");
obj1.info();
var obj2 = new person("Yasmin", 23, "Data Analyst", "Uk");
obj2.info();
var obj3 = new person("Antariksha", 22, "Web Designer", "Brazil");
obj3.info();
