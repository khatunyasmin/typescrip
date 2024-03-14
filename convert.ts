// var c: number = 25;
// var f: number = 68;

// console.log("Celsius:", (c * 9 / 5) + 32);
// console.log("Fahrenheit:", (f - 32) * 5 / 9);


function ctof(celcius:number):number{

    return(celcius*9/5)+32;
}
console.log(ctof(25));


function ftoc(Fahrenheit:number):number{

    return(Fahrenheit-32)*5/9;
}
console.log(ftoc(68));