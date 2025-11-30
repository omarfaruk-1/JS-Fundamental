//? Global scope 

let name ="Omar Faruk";

function printName (){
    console.log(name);
    
}
printName();

//? Block scope 

{
    let movie = "IronMan";
    var ticket = 30;
    console.log(movie);
    console.log(ticket);
    
}
// console.log(movie); we get referenceError
// console.log(ticket); it show output 30 because var is function scope.


//? Function scope

function scopeFunc(){
    var price = 10;
    console.log(price);
}
scopeFunc();
// console.log(price); we get referenceError because var is function scope.


//? scope chain

var x = 10;

function outerFunc (){
    var x = 20;

    function innerFunc (){
        var x = 30;
        console.log(x);
        
    }
    innerFunc();
    console.log(x);

}

outerFunc();
console.log(x);


// let name = "global";
// function show() {
//   console.log(name);
//   let name = "local";
// }
// show(); referenceError name inside the function declared after console so it get referenceError
