class arithmetic{
    a:number;
    b:number;
    constructor(a1:number,b1:number)
    {
        this.a=a1;
        this.b=b1;

    }
    display():void
    {
        console.log("Addition:",this.a + this.b);
        console.log("subtraction:",this.a - this.b);
        console.log("multiplication:",this.a * this.b);
        console.log("Division:",this.a / this.b);
        console.log("Modules:",this.a % this.b);

        
    }
}

let sumobj = new arithmetic(10,100)
 sumobj.display();