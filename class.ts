class Employee
{
  empcode:number;
  empName:string;
 
  constructor(idno:number,name:string)
  {
      this.empcode = idno;
      this.empName = name;
  }
 
  display():void
  {
    console.log(this.empcode);
    console.log(this.empName);
  }
}
 
let empobj = new Employee(856,"yasmin Khatun");  

// Object creation
let empobj2 = new Employee(956,"uzam usmani");
 
empobj.display();
empobj2.display();