// object 
// problem-01 
const student = {
  name: "Rahim",
  age: 20,
  marks: 85
};

console.log(student.name);
if(student.marks>80){
    console.log("Excellent")
}
student.age=21;

// ✅ Problem 2 – Total Marks
const marks = {
  math: 80,
  english: 70,
  physics: 90
};

let total=0;
let count=0;
Object.values(marks).forEach(value=>{
    total+=value;
    count++;
})
console.log(total);
console.log(total/count);


// ✅ Problem 3 – Shopping Cart Total 

const cart = {
  apple: 3,
  banana: 5,
  orange: 2,
  mango: 4
};
let totalProduct = 0;
for(let key in cart){
    console.log(key);
    totalProduct++;
}
console.log(totalProduct);


// ✅ Problem 4 – Nested Object Calculation 
const store = {
  rice: { price: 50, quantity: 4 },
  oil: { price: 120, quantity: 2 },
  sugar: { price: 70, quantity: 3 }
};

let totalPrice = 0;
for ( let value in store){
    totalPrice+= store[value].price*store[value].quantity
}
console.log(totalPrice)


// ✅ Problem 5 – Filter Object 
const users = {
  user1: { name: "A", age: 17 },
  user2: { name: "B", age: 22 },
  user3: { name: "C", age: 19 }
};

const arr=["Omar",2,3,4,5]

function find(str,sub){
    if(str===sub){
        console.log();
        
    }
}
const str="hello world"
console.log(str.includes("el",3));


const str1="Omar Faruk";

const arr1=Array.from(str)
console.log(arr1)


const products = [
  {name: "Phone", price: 1000},
  {name: "Laptop", price: 50000},
  {name: "Mouse", price: 500}
];

const newProduct= products.filter((pro)=>{
    return pro.price>1000;
})

console.log(newProduct);


const cart = [
  {item: "Book", price: 200},
  {item: "Pen", price: 50},
  {item: "Bag", price: 500}
];

const totalPrice=cart.reduce((acc,currentValue)=>acc+currentValue.price,0)
console.log(totalPrice);


function createAdder(num){

    return function (a){
        console.log(num+a);
    }
}
const add = createAdder(5);
add(3)
add(10)


//--------------------------------
let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  inner();
}

outer();
