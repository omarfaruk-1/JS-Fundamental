//? Problem 1 — Sum of Digits 

let num=45231, sum=0;
while (num>0){
    let lastDigit = num%10;
    sum += lastDigit;
    num = Math.floor(num/10);
}
console.log(sum);


//? Problem 2 — Factorial (Iterative) 

let n=7, fact=1;

for (let i=1; i<=7; i++){
    fact *= i;
}
console.log("7 factorial ",fact);


//? Problem 3 — Count Vowels in String (loop over chars) 

let str = "Bangladesh";
let count=0;
for (let i=0; i<str.length; i++){
    if ( ((str[i] === "a" || str[i] ==="e") || (str[i] === "i" || str[i]==="o")) || str[i]  === "u" ){
        count++;
    }
}
console.log(count);


//? Problem 4 — Prime Checker (basic) 
let number = 37;
let isPrime=true;

for (let i=2; i<=Math.sqrt(number) ; i++){
    if (number %i ===0){
        isPrime=false;
        break;  
    }
}
if (isPrime){
    console.log("prime");  
}else{
    console.log("Not prime");
}


//? Problem 5 — Fibonacci (first N terms) 

let N=10, n1=0, n2=1, n3; 
for (let i=1; i<=N; i++){
    console.log(n1);
    
    n3 = n1+n2;
    n1 = n2;
    n2 = n3;
    // console.log(n3);
    
}


//? Problem 6 — Multiplication Table with Skip

let a=6;

for (let i=1; i<=10; i++){
    if ( (a * i) % 4===0 ){
        continue;   
    }
    console.log(a, "*", i, "=", a*i); 
}


//? Problem 7 — Reverse Number & Palindrome Check

let x = 12321, result = 0, original=x;
while( x!=0 ){
    let lastDigit = x % 10;
    result = result *10 + lastDigit;
    x=Math.floor(x /10);
}
if ( result === original ){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}


//? Problem 8 — Nested Loops: Pattern
// *
// **
// ***
// ****
// *****

for (let i=1; i<=5; i++){
    let star="";
    for (let j=1; j<=i; j++){
        star=star+"*";
    }
    console.log(star);
    
}


// 1
// 22
// 333
// 4444
// 55555

for (let i=1; i<=5; i++){
    let start="";
    for (let j=1; j<=i; j++){
        start += i;
    }
    console.log(start);
    
}

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

for (let i=1; i<=5; i++){
    let start="";
    for (let j=1; j<=i; j++){
        start +=j;
    }
    console.log(start);
    
}

//? Problem 9 - Count Primes (1–200) Print how many prime numbers exist between 1 and 200.

for (let i=2; i<=200; i++){
    let isPrime=true;
    for (let j=2; j<=Math.sqrt(i); j++){
        if( i % j===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(i); 
    }  
}


//? Problem 10 - Largest Digit in Number

let numb=947326;
let largeDigit=0;
while(numb!=0){
    let lastDigit = numb % 10;
    if (largeDigit <= lastDigit){
        largeDigit = lastDigit;
    }
    numb =Math.floor(numb / 10)
}
console.log(largeDigit);



