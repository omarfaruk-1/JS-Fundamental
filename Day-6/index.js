// Problem 1 — Default Parameter 

function func (name="Guest"){
    console.log(name);
}

func();

// Problem 2 — Rest Parameter

function restFun (...rest){
    let sum=0;
    for (const i of rest){
        sum +=i;
    }
    return sum;
}
console.log(restFun(2,4,6,1));


// Problem 3 — Callback Use
function calculate(a,b,add){
    return add(a,b);
}

function add(a,b){
    return a+b;
}

let calFun = calculate(10,5,add);
console.log(calFun);


// Problem 4 — HOF Return Function 

function higherOrderFunc (a){
    return function (){
        if ( a % 2 === 0) {
            console.log("even");
            
        } else {
            console.log("odd");
            
        }
    }
}

let check=higherOrderFunc(10);
check();


//  Problem 5 — Pure Function Check

function sum(a,b){
    return a+b;
}
console.log(sum(10,10));


// Problem 6 — IIFE
(function (){
    console.log("Function Loaded");
    
}())

// Problem 7 — Callback Logic Change

function funcAdd (a,b,func){
    return func(a,b);
}

function product(a,b){
    return a*b;
}

let funCal=funcAdd(10,5,product);
console.log(funCal);


// Problem 8 — HOF with Multiplier 
function multiplier(a){
    return function(b) {
        return a *b
    }
}

let result=multiplier(5); //outer function argument
console.log(result(10)); //inner function argument


// Problem 9 — Default + Rest Mix 

function taxCal( tax=5,...rest){
    let sum=0;
    for (const i of rest){
        sum +=i;
    }
    let totalTax= Math.floor(((sum*tax)/100));
    console.log(totalTax);
    
    return sum+totalTax;
}

console.log(taxCal(15,200,50));




// PROBLEM 10 — Pure Function Validation

function validation(n){
    if(n<0){
        return "invalid";
        
    }else{
        return n*n;
    }
    
}

console.log(validation(5));

