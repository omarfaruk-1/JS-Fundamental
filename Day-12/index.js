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

    }
}






const {a = 10, b = 20} = { b: 5 };

console.log(a, b);
