//Check if a character is uppercase. 

let char1:string='M';
if(char1>='A' && char1<='Z'){
    console.log("Is upper case");
}
else{
    console.log("Is lower case")
}

//Check if a number is a multiple of 10.
let number1:number=21;
if(number1 % 10 === 0){
    console.log("number is multiple of 10")
}
else{
    console.log("number is not multiple of 10")
}

//Check if a person is a teenager (age between 13 and 19).
let age:number=20;
if (age>=13 && age<=19){
    console.log("Person is teenage")
}
else{
    console.log("Person is not teenage")
}

//Compare two numbers and print the larger one
let number2:number=31;
let number3:number=30;
if(number2 > number3){
    console.log(`${number2} is greater`)
}
else{
    console.log(`${number3} is greater`)
}

//Print the corresponding month name for a given month number
let month:number=5;
switch(month){
    case 1:
           console.log("Jan");
           break;
    case 2:
           console.log("Feb");
           break;
    case 3:
           console.log("Mar");
           break;
    case 4:
    case 5:
           console.log("April, May");
           break;
    default:
           console.log("Not a valid month")
}