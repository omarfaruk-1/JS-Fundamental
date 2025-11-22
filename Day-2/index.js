console.log("Day-2 Js");

// Variable: variable are used to store data

// variable declaration keyword or variable specifier are var, let and const
// variable declaration --> specifier variableName = value


/* variable declaration rules:
1. Variable name start with lattes,underscore or dollar symbol
2. Variable name can not start with number
3. Variable name can not be reserved keyword
4. Variable name con not contain any space

*/


/*
-----------------Specifier---------------
var: Function scope and can be redeclared
let: Block scope,can be reassigned
const: Block scope,can not reassigned    
*/


// var variable declared 
// var name="Omar Faruk";
// console.log(name);
var name ="Faruk";
console.log(name);


//let variables
let num=20;
console.log(num);

// let num=10;// can not redeclared block scope
let fruit;
fruit="Apple";
console.log(fruit);


// const variable
// const age; ?we need to give value of variable when we declared a variable 
const age=20;
console.log(age);


// data types 
/*
? Primitive data types: These are basic data types like string,number,boolean,undefine,null,bigint,symbol

string: text value ("hello")
number: numeric value (20,3.4-> floating value)
boolean: True/False value(true,false)
undefine: variable value not assign (let x;)
null: variable value nothing (let x=null means x value is nothing)
big int: bigger number(929832873298432)
symbol: unique identifiers (Symbol('"id"))


? Non-Primitive data type: complex data type these are objects, array and function

object: collection of key value pairs
array: ordered list of value
function: code that can be execute


*/


let student={
    name:"faruk",
    age:20,
    location:"Kanchan"
}

console.log(student.age);
