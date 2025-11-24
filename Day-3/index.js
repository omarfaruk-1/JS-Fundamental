// # Arithmetic expression  

let a=12;
let b=5;

let f_name="Omar";
let l_name="Faruk";

console.log(f_name + " " + l_name);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Increment and Decrement
let count=5;
console.log(count++) //value will be 5 (count = count+1)
console.log(count);//6

console.log(++count); //(7)here firstly increase then return the value

console.log(count--);//7 count=count-1
console.log(count);//6

console.log(--count);//5 count=count-1




// ? Comparison operator

console.log(0==false);//true
console.log(3==3);//true
console.log(3=='3');//true
console.log(3!='3'); //false
console.log(null==null);//true

console.log(3==="3");//false
console.log(3!=="3");//true

let obj1={name:"Omar"}
let obj2={name:"Omar"}

console.log(obj1===obj2);//false because both are different memory location or address here check is it same memory.
console.log(obj1 !==obj2); //true

// ?Logical Operator AND (&&), OR (||), NOT (!), NULLISH (??)

console.log(false&&false);
console.log(false&&true);
console.log(true&&false);
console.log(true&&true);
console.log("Banana"&&"Apple");


console.log(false||false);
console.log(false||true);
console.log(true||false);
console.log(true||true);
console.log(true||false);
console.log("Banana"||"Apple");



console.log(!true)//toggle

let x=null??3;
let y=false??4;
console.log(x);
console.log(y);


let age=34;
age>=50?console.log("I am senior"):console.log("I not senior citizen");











