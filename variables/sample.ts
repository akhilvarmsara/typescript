console.log("Welcome to the world of TypeScript!");


let a:number=10;
let b:string="Akhil"

let sum=a+b;
console.log(sum)

//if else

let num:number=6;
if(num%2===0){
    console.log(`Number is even ${num}`)
}
else{
    console.log(`Number is odd ${num}`)
}

//if else if
let marks:number=55;
if(marks>=90){
    console.log("Grade A+");
}
else if(marks>=85 && marks<=90){
    console.log("Grade A");
}
else if(marks>=75 && marks <=85){
    console.log("Grade B");
}
else if(marks>65 && marks<=75){
    console.log("Grade C");
}
else{
    console.log("Grade D")
}

//if else if
let browser:string="firefo";
if(browser=='chrome'){
    console.log("this is chrome browser");
}
else if(browser=='firefox'){
    console.log("this is firefox browser")
}
else{
    console.log("Invalid browser")
}

//switch case
let day_value:number=4;
switch (day_value){
    case 1: 
            console.log("Monday");
            break;
    case 2: 
            console.log("Tuesday");
            break;
    case 3: 
            console.log("Wednesday");
            break;
    default:
            console.log("No week")
            break;
}
