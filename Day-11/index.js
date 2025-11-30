// Closure 

function outer (){
    let x =10;

    return function inner (){
        console.log(x);
    }

    // return inner;
}

let func = outer();
console.log(func());

function countFun (){
    let count = 0;
    return function countInner (){
        count++;
        console.log(count);
        
    }
}

let countF =countFun();

countF();
countF();


function createBankAccount (initialBalance){
    
    let balance = initialBalance;

    return {
        "deposit" : function  (amount){
            balance += amount;
            console.log("Deposit amount:",amount, "Current Balance:", balance);
        },
        "withdraw" : (amount)=>{
            if (amount > balance){
                console.log("Insufficient Balance");
            } else{
                balance -= amount;
                console.log("Withdraw amount:",amount, ", Current Balance:", balance);
            }
        },
        "checkBalance" : ()=> console.log("Balance:",balance)
    }

}


let bank = createBankAccount(100);
bank.deposit(100);
bank.withdraw(50)
bank.checkBalance()


for(var i=0;i<3;i++){ //var use korle get output 3 3 3
  setTimeout(function(){
    console.log(i);
  },1);
}


function a(){
    return function b(){
        return function c(){
            console.log("Hello");
        }
    }
}

a()()(); //a() call hoy b return kore, a()() b call hoy c return kore and a()()() call hoy




function createCounter(){

    let count=0;

    return {
        "increment" : ()=> ++count,
        "decrement" : ()=>--count,
        "countValue" : ()=> console.log(count)

    }
}

let counterGet =createCounter();
counterGet.increment()
counterGet.increment()
counterGet.increment()
counterGet.countValue()
counterGet.decrement()
counterGet.countValue()


function arrFun(n){

    let ar=[];
    for(let i= 0; i<n; i++){
        ar.push(()=>i*2);
    }
    return ar;
}

let arr=arrFun(4);

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());