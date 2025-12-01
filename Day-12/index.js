// object declared 

let student ={
    name : "Jamil",
    age: 20,
    id : "0E1",
    course : {
        cse101 : "Structure Programming",
        cse102 : "Data structure",
        cse103 : "Algorithm",
    },
    address : {
        city : "Dhaka",
        postCode : "0123",
        country : "Bangladesh",
        greet : function(){
            console.log(`Welcome to ${this.country}`);
            
        }
    }
    
}

for (let key in student){
    console.log(key);
    console.log(student[key]);
}


console.log(student.course.cse101);
console.log(student.address.greet());

// add property 

student.cg =3.30
console.log(student.cg);
student["movie Lover"] = true;
console.log(student["movie Lover"]);

console.log(student);
delete student["movie Lover"]
console.log(student);










// constructor function name should be Capital later

function Car (name, model, price){

    this.name = name;
    this.model = model;
    this.price = price;

}

let car1 = new Car ("BMW", "X1", 40000);
console.log(car1);
console.log(car1.name);


function person (name,age){
    return{
        name,
        age,
        greet(){
            console.log(this.name); 
        }
    }
}

let user = person("Omar",25);
user.greet()



let profile = {
    name : "Omar Faruk",
    age : 25,
    company : "Baper hotel",
    msg : function (){
         console.log(`${this.name} work at ${this.company}`)
    },
    salary : undefined
    
}

// check salary property in object 
// if (! profile.salary){
//     console.log("salary not exist");
    
// }
console.log( "salary" in profile);

// for ... loop 
for (let key in profile){
    console.log(key);
    console.log(profile[key]);
}


console.log(profile.msg());


//? Task 1 — Create Object & Access
let book = {
    title : "Structure Programming",
    author : "Omar",
    price : 340,
    read : ()=>{
        console.log("I am reading the book");
        
    }
}

console.log(book.title);
console.log(book.read());

//? Task 2 — Update & Loop
// Update the price of the book
// Loop through all keys and print key: value

book.price = 450;
console.log(book.price);

for (let key in book){
    console.log(book[key]);
    
}


//? Task 3 — Nested Object

// Create student object with name and marks (math, english, science)
// Print all subjects and marks
// Print total marks

let student = {
    name : "Omar",
    mark :{
        math : 80,
        english :85,
        science : 80,
    },
    totalMark : ()=>{
        console.log(this.mark);
        let sum = 0;
        // for (let value in mark){
        //     sum += mark[value];
        // }
        // console.log(sum);
    }
    
}
console.log(student.totalMark());

console.log(Object.keys(student.mark));
console.log(Object.values(student.mark));
console.log(student.totalMark(Object.values(student.mark)));


//? Task 4 — Object Destructuring

// Destructure the student object to get name and marks
// Print name and math mark only
let student = {
    name : "Omar",
    mark :{
        math : 80,
        english :85,
        science : 80,
    },
    totalMark : (mark)=>{
        let sum = 0;
        for (let value in mark){
            sum += mark[value];
        }
        console.log(sum);
    }
    
}
let {name,mark} = student;
console.log(name,mark);


//? Task 5 — Object Factory / Method

// Create a function createCar(brand, speed) which returns an object with:
// brand, speed properties
// accelerate() and brake() methods to change speed
// Test it with 2 cars

function  createCar(brand,speed){
    return {
        brand,
        speed,
        accelerate(){
            this.speed += 10;
            return this.speed;
        },
        break(){
            this.speed -= 10;
            return this.speed;
        }

    }
}

let car5 =createCar("BMW",110)
console.log(car5.accelerate());
console.log(car5.break());






// target object with replace source object key value if have common key
const {a = 10, b = 20} = { b: 5 };

console.log(a, b);

//? test-1 
const user1 = {
  name: "Omar",
  get() {
    return this.name;
  }
};

const fn = user1.get;
console.log(fn());


//? test-2 
let data = {
  count: 0,
  inc() {
    this.count++;
  }
};

let f = data.inc;
f();
console.log(data.count);


//? test-3 
const obj = {name: "Omar"};
delete obj.name;
console.log("name" in obj);





//? test-4
const user3 = { name: "Omar" };
const { name4 = "Unknown", age = 25 } = user3;
console.log(name4, age);



//? test-5
const child = {
  value: 20,
  get() {
    return super.value;
  }
};

Object.setPrototypeOf(child, { value: 100 });

console.log(child.get());


//? test-6
const obj9 = { 
    a: { 
        b: {
             c: 5 
            
        } 
    } 
};

const {a: {b: { c = 10} }} = obj9;

console.log(c);



//? test-7
const obj5 = {
  value: 100,
  getValue: function() { return this.value; }
};

const fn1 = obj5.getValue;
console.log(fn1());

//? test-8
const parent = {
  value: 60,
  getValue() { return this.value; }
};

const child1 = Object.create(parent);
child1.value = 70;

console.log(child1.getValue());
