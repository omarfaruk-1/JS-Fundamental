// This keyword concept clear practice 


// this keyword at global execution it refer to window object 



// this parspect object and function 

const emp = {
    name : "Omar",
    id : "2321e",
    returnFun : function (){
        return this; // it refer this object if call method  it call implicit binding
    },
    printName: function(){
        console.log(`The name is ${this.name}`);
        
    }
}

console.log(emp.name);
console.log(emp.returnFun());
console.log(emp.printName());

// standalon call 
const print = emp.printName;
console.log(print()); // it show undefined


const tom = {
    name : "Tom",
    age : 7
}

const jerry = {
    name : "Jerry",
    age : 9
}


function greetMe (obj){
    obj.message = function(){
        console.log(`the name is ${this.name} and ${this.age} year old`);
    }
    console.log(obj);
    
}

greetMe(tom)
console.log(tom.message());

greetMe(jerry)
console.log(jerry.message());


// Inside function 

function sayName (){
    console.log("This is inside function", this);
    
}

sayName()


function outer(){
    console.log(" this is outer this ",this);

    return function inner(){
        console.log("this is inner function this",this);
        
    }
    
}
console.log(outer());

const innerR=outer()
console.log(innerR());


// inside arrow function 

const food ={
    name : "Mango",
    color : "Green",
    getDesc : ()=>{
        console.log(`the ${this.name} is ${this.color}`);   
    }
}

console.log(food.getDesc());


//? arrow function use parent scope where getDesc is lexical place which object is foodC so arrow function refer the object foodC so it use (this means foodC property like name age)
const foodC ={
    name : "rich",
    color : "white",
    fruit : {
        name : "Mango",
        color : "Green",
        // getDesc : ()=>{
        //     console.log(`the ${this.name} is ${this.color}`);
        // }

        // getDesc : function (){
        //     return  ()=>{
        //         console.log(`the ${this.name} is ${this.color}`);
        //     }
        // }


        getDesc : function (){
            const arrD=  ()=>{
                console.log(`the ${this.name} is ${this.color}`);
            }
            return arrD;
        }
    },
    getMsg(){
        console.log(`the ${this.name} is ${this.color}`);
    }
}

console.log(foodC.getMsg());
const descFun =foodC.fruit.getDesc();
// console.log(foodC.fruit.getDesc()());
console.log(descFun());


//? binding call, apply and bind

// call function and object are separate pass the object call method then inside the function this will refer that object
function greeting (){
    console.log(`this is ${this.name}`);
}

const person = {
    name : "Omar",
    age : 34
}

greeting.call(person);




const likes = function (hobby1,hobby2){
    console.log(`this is ${this.name} my hobby are ${hobby1} and ${hobby2}`);
}

const pr ={
    name : "omar"
}

likes.call(pr,"playing football","sleeping")



//? apply all of argument pass as array '
const hobbies = ["playing football","sleeping"]
likes.apply(pr,hobbies)




//? bind it return new function or hold the function in variable
function newHob (hobby1,hobby2){
    console.log(`this is ${this.name} my hobby are ${hobby1} and ${hobby2}`);
}

const pro ={
    name : "Bob"
}

const newH =newHob.bind(pro, "Gaming", "Reading");
newH()


const Cartoon = function (name,animal){
    this.name = name,
    this.animal = animal,
    this.print = function(){
        console.log(this.name +" is " + this.animal);
        
    }
}

const tomCartoon = new Cartoon("Tom", "Cat")
tomCartoon.print()
const jerryCartoon = new Cartoon("Jerry", "Mouse")
jerryCartoon.print()



//? task


// LEVEL 1 — BEGINNER (Warm-up) 
const obj = {
  name: "Alex",
  show() {
    console.log(this.name);
  }
};
obj.show();


const obj1 = {
  name: "Alex",
  show: () => {
    console.log(this.name);
  }
};
obj1.show();


function test() {
  this.name = "JS";
}
const a = new test();
console.log(a.name);


function hello() {
  console.log(this);
}
hello();



// LEVEL 2 — MID LEVEL

const obj2 = {
  name: "Bob",
  say() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};
obj2.say();


const obj3 = {
  name: "Bob",
  say() {
    return () => {
      console.log(this.name);
    };
  }
};

const f = obj3.say();
f();



const obj4 = {
  name: "A",
  refer: {
    name: "B",
    show() {
      console.log(this.name);
    }
  }
};

const x = obj4.refer.show;
x();


const obj5 = {
  name: "A",
  refer: {
    name: "B",
    show: () => {
      console.log(this.name);
    }
  }
};
obj5.refer.show();




// 🔴 LEVEL 3 — PRO 

function Person(name) {
  this.name = name;
  this.say = function() {
    return () => {
      console.log(this.name);
    };
  };
}

const p = new Person("Adam");
const fn = p.say();
fn();




const obj6 = {
  name: "Root",
  child: {
    name: "Leaf",
    get() {
      return function() {
        console.log(this.name);
      };
    }
  }
};

const f1 = obj6.child.get();
f1();





const obj7 = {
  name: "Root",
  child: {
    name: "Leaf",
    get() {
      return function() {
        console.log(this.name);
      };
    }
  }
};
obj7.child.get()();




// 🔥 LEVEL 4 — MASTERS 
const obj8 = {
  name: "A",
  get() {
    return () => {
      return () => {
        console.log(this.name);
      };
    };
  }
};

obj8.get()()();




const obj9 = {
  name: "A",
  get() {
    return function () {
      return () => {
        console.log(this.name);
      };
    };
  }
};

obj9.get()()();



const a1 = {
  name: "One",
  get() {
    return function() {
      return () => {
        console.log(this.name);
      };
    };
  }
};

const b = {
  name: "Two",
  f: a1.get()
};

b.f()();
