// is array 
const arr=["a","b"];
console.log(Array.isArray(arr));

// create array using arrayOf() 
const arr1 = Array.of(12.3,5,4);
console.log(arr1);


let customers = [
  {
     'id': 001,
     'f_name': 'Abby',
     'l_name': 'Thomas',
     'gender': 'M',
     'married': true,
     'age': 32,
     'expense': 500,
     'purchased': ['Shampoo', 'Toys', 'Book']
  },
  {
     'id': 002,
     'f_name': 'Jerry',
     'l_name': 'Tom',
     'gender': 'M',
     'married': true,
     'age': 64,
     'expense': 100,
     'purchased': ['Stick', 'Blade']
  },
  {
     'id': 003,
     'f_name': 'Dianna',
     'l_name': 'Cherry',
     'gender': 'F',
     'married': true,
     'age': 22,
     'expense': 1500,
     'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
  },
  {
     'id': 004,
     'f_name': 'Dev',
     'l_name': 'Currian',
     'gender': 'M',
     'married': true,
     'age': 82,
     'expense': 90,
     'purchased': ['Book']
  },
  {
     'id': 005,
     'f_name': 'Maria',
     'l_name': 'Gomes',
     'gender': 'F',
     'married': false,
     'age': 7,
     'expense': 300,
     'purchased': ['Toys']
  }
];



// const seniorCitizen = customers.filter((customer)=>  customer.age>60)
// console.log(seniorCitizen);

// const nonSeniorCitizen = customers.filter((customer)=>  customer.age<60)
// console.log(nonSeniorCitizen);

// const customerFullName = customers.map((customer)=> {
//     customer["full_name"] = `${customer.f_name} ${customer.l_name}`
//     return customer;
// })
// console.log(customerFullName);


const customerFullName = customers.map((customer)=> {

    let title= "";
    if(customer.gender === "M"){
        title = "Mr";
    } else if(customer.gender === "F" && customer.married){
        title = "Mrs";
    }else{
        title = "miss";
    }

    customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`
    return customer;
})
console.log(customerFullName);


const a= [2,3,4];

const x = a.map((a)=>a+a)
console.log(x);


//? reduce structure 
// customers.reduce((accumulator, currentItem) => {
//    // total = accumulator
//    // customer = current item
// }, initialValue)



let count = 0;
const total = customers.reduce((acc,customer)=>{
    
    if(customer?.purchased?.includes("Book")){
        acc += customer.age;
        count++;
    }
        
    return acc;
    
},0);

const avrAge = Math.floor(total/count)
console.log(total);
console.log(avrAge);


const hasYoungCus = customers.some((customer)=>{
    return customer.age<10;
})

console.log(hasYoungCus);


//?  some method ekta element true holeo true return korbe
const numArr = [12,3,4,5,56,7];

const hasNum = numArr.some((n)=>{
    return n<2;
})

console.log(hasNum);

//? find method 
const findCust = customers.find((customer)=>{
    return customer.age>10;
});

console.log(findCust);


const numArray= [12,34,34,3,5,32,5,6,7,8,9,1,2,3,4];

const findNum=numArray.find((n)=>{
    return n<6;
})

//? filter method condition sotti hole return korbe jegulo sotti hoise
const findNumS=numArray.filter((n)=>{
    return n<6;
})

console.log(findNumS);


//? every method jodi sob gulo element true hoy tahole true na hole false return korbe

const evNum = [1,2,3,4,5,6,7,8];
const everyN = evNum.every((n)=>{
    return n<8;
})
console.log(everyN);
evNum.forEach(element => {
    console.log(element);
});


//? chaining
const mrdCusSpained = customers.filter((cus)=>cus.married).map((cus)=>cus.expense).reduce((acc,cur)=>{return acc+cur})
console.log(mrdCusSpained);
