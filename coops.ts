class temperature
{
    c:number;
    f:number;
    constructor(c1:number,f1:number)
    {
        this.c=c1;
        this.f=f1;
    }


    dispaly():void
   {
    var cel=(this.c*9/5)+32;
    var resf=(this.f-32)*5/9;
   console.log(cel);
   console.log(resf);
}


}
let obj1=new temperature(25 ,68);
obj1.dispaly();
