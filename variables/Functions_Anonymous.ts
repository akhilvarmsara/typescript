// Anonymous Function/Unnamed Function/Nameless function
// Anonymous is a function which does not have any name, instead it is assigned to a variable that acts as name of the function

//1. Anonymous function
let names=function():string{
    return "Anonymous Function"
}

let msg=names();
console.log(msg)

//1. Anonymous function with parameters
let multiply=function(a:number, b:number):number 
{
    let mul=a*b;
    return mul
    
}
let mul=multiply(5,5);
console.log(mul);