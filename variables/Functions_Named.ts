// Function is a block of code that executes when we call the function.
// Functions are written without class and called directly
// Methods are written inside class and called with objects.

//Named fuctions
//1. Named function with parameters and return type
function add(a:number, b:number):number{
    let sum = a+b;
    return sum;
}

let sum=add(5,6);
console.log(sum)

//Rest parameters of a functions does not restrict the parameters
//2. Rest parameters with same data type
function add1(...num:number[])
{
    //statements
}

//3. Rest paramteres with different data type
function elements(...ele:(number|string)[])
{
    //statements
}

// We can make any parameter as optional by using ?
//4. Named functions with optional parameters
function display(id:number, name:string, email?:string)
{
    console.log("ID: "+id);
    console.log("Name: "+name);
    if (email !== undefined)
    {
        console.log("Email: "+email);
    }
}

display(55,'Akhil')

//5. Named function with default parameters
function calculateRate(price:number, quantity:number=6):void
{
    let rate:number= price*quantity;
    console.log("Final Rate:",rate);
}

calculateRate(5);