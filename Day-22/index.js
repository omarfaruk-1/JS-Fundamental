


function boilWater ( callback){

    setTimeout(()=>{
        callback()
    },2000);
}
function boiled(){
    console.log("Water boiled"); 
}
boilWater()

//? taks-02 
console.log("Start");

setTimeout(() => {
  console.log("Cooking");
}, 1000);

console.log("Order Taken");


// task-3 
function classEnd(callback){
    console.log("Class start")
    setTimeout(()=>{
        console.log("class end")
        callback();
        
    },3000)
}

function classStart(){
    console.log("Certificate given")
}
classEnd(classStart)



// task-04 
function placeOrder(callback){
    console.log("Order placed immediately")
    setTimeout(()=>{
        console.log("Food cooked after 2000 ms");
        callback();
    },2000)
}
function serveFood(){
    console.log("Food served");
}
placeOrder(serveFood)


// task-05 
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 1000);

console.log("4");

// output 1,4,2,3

//? task 06 
function login(callback){
    console.log("Logging in...")
    setTimeout(()=>{
        console.log("Login successful");
        callback()
    },1500)
}


function loadDashboard(){
    console.log("Dashboard loaded");
}
login(loadDashboard)

// task-07 
function processData(cb) {
  cb("Done");
}

function showResult(msg) {
  console.log(msg);
}

processData(showResult);
//callback showResult

// 🧩 Problem 9: True or False (Event Loop)
// 🧠 Problem Statement

// setTimeout(fn, 0) executes before synchronous code.

// 📤 Output

// False


// final task 
function taskA(callback) {  
    console.log("Task A started");
    
    setTimeout(()=>{
         console.log("Task A completed");
        callback()
    },1000)
}

function taskB(callback) {
    console.log("Task B started");
    
    setTimeout(()=>{
         console.log("Task B completed");
        callback()
    },1500)
}

function taskC(callback) {
    console.log("Task C started");
    
    setTimeout(()=>{
         console.log("Task C completed");
        callback()
    },500)
}

function runTasks() {
    taskA(function(){
        taskB(function(){
            taskC(function(){
                console.log("All tasks done");
                
            })
        })
    });
}

runTasks()