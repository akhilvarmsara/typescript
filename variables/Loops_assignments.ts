// WHILE loop executes as long as the condition is true. if condition is false the loop exits
// WHILE and DO-WHILE loops are used when we don't know how many times the loop will execute.
//print 1 to 5 numbers
let i1:number=1;
while(i1<=5){
    console.log(i1);
    i1++;
}

//print even numbers 1 to 10
let j=1;
while(j<=10){
    if (j % 2 == 0){
        console.log(j);
    }
    j++;
}

//print 10 to 1
let m:number=10;
while(m >= 1 ){
    console.log(m);
    m--;
}

//DO-WHILE
//The do-while loop executes the code at least once before checking the condition. 
//print 1 to 5 numbers
let p:number=1;
do{
    console.log('do-while')
    console.log(p);
    p++;
}while(p<=5);

//print 10 to 1
let s:number=10;
do{
    console.log(`do while second: ${s}`);
    s--;
}while(s>=1);

// FOR loop is used when we know how many times the loop will execute. 
// It consists of three parts: initialization, condition, and increment/decrement.
//print 1 to 10 numbers
for(let i=1; i<=10; i++){
    console.log("For loop 1")
    console.log(i)
}

//print even numbers 1 to 10
for (let x=1; x<=10; x++){
    if(x % 2 == 0){
        console.log("Is even"+x)
    }
}

//print 10 to 1
for(let b=10; b>=0; b--){
    console.log("reverse: "+b)
}

//1.  Write a program to calculate the sum of the first 10 natural numbers using a while loop. 
let nat:number=1;
let sum1:number=0;
while(nat<=10){
    sum1=sum1+nat;
    nat++;
}
console.log("Sum is "+sum1);

//2.  Write a program to calculate the factorial of a given number using a while loop. 