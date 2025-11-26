//? Problem 1: Age Check

let age=16;
if (age<13){
    console.log("Child");
    
}else if (age>=13 &&age<=19){
    console.log("Teenager");
    
}else{
    console.log("Adult");
    
}


//? Problem 2: Number Checker
let number=2;

if (number>0){
    console.log("Positive");   
}else if (number<0){
    console.log("Negative"); 
}else{
    console.log("Zero");
}


//? Problem 3: Largest Number

let a=10,b=25,c=15;
if(a===b&&b===c){
    console.log("There number are equal");
}else if (a>=b&&a>=c){
    console.log("A is grater");
}else if (b>=a&&b>=c){
    console.log("B is grater");
}else{
    console.log("C is grater");
}


//? Problem 4: Day Name
let dayName=3;
switch(dayName){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Thursday");
        break;
    
    default:
        console.log("Invalid day")
}


//? Problem 5: Simple Calculator (Switch) 
let op = "%";
let num1 = 10;
let num2 = 5;

switch(op){
    case "+":
        console.log("Add tow number: ",num1 + num2);
        break;
    case "-":
        console.log("Subtract tow number: ",num1 - num2);
        break;
    case "*":
        console.log("Product tow number: ",num1 * num2);
        break;
    case "/":
        console.log("Divide tow number: ",num1 / num2);
        break;
    case "%":
        console.log("Remainder : ",num1 % num2);
        break;
    
    default:
        console.log("Invalid operator");
}


//? Problem 6: Even or Odd (Ternary) 
let num=50;
num%2==0 ? console.log("Even") : console.log("Odd");

//? Problem 7: Pass or Fail (Ternary) ---> Print "Pass" if marks ≥ 40 else "Fail"
let marks=30;
marks>=40 ? console.log("Pass") : console.log("Fail");


//? Problem 8: Login Check (Ternary) 
let username="client";
username==="admin" ? console.log("Welcome") : console.log("Access Denied");

  


