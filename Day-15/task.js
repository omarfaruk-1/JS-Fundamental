//? T-001: Create an array of 5 elements using the Array Constructor.
const array= new Array(1,2,3,4,5);
console.log(array);

//? T-002: Create an array of 3 empty slots. 
const array1= new Array(3);

//? T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const array2 =[1,2,3,4,5,6];
console.log(array2[array2.length-3]);

//? T-004: Use the for loop on the above array to print elements in the odd index. 
const array3 =[1,2,3,4,5,6];

for(let i = 0; i<array3.length; i++){
    if( i % 2!== 0){
        console.log(array3[i]);
    }
};

//? T-005: Add one element at the front and the end of an array. 
const array4 =[1,2,3,4,5,6];
console.log(array4.push(7));
console.log(array4.unshift(0));
console.log(array4);

//? T-006: Remove an element from the front and the end of an array. 
array4.pop();
array4.shift()
console.log(array4);


//? T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const food = ["nuts","cucumber","apple","banana","pizza","Sushi","Noodles","Pasta","Egg","Rice"];

const [Nut,Cucumber,apple,banana,pizza,sushi,noodles,pasta,egg,rice]=food;
console.log(sushi);


//? T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [nut,cucumber,...rest] =food;


//? T-009: Clone an Array(Shallow cloning)
// const arr = [1,2,3,4,5,6,7];

const cpyArr =[...arr];
console.log(a=cpyArr);

//? T-010: Empty an array using its length property 
const arr1 = [1,2,3,4,5,6,7];
arr1.length=0;
console.log(arr1);


//? T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
const arr2 = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i<arr2.length; i++){
    if(arr2[i]===5){
        arr2.length=6;
        break;
    }
}


//? T-012: Create an Array of 10 elements. Use the splice() method to empty the array. 
const arr = [1,2,3,4,5,6,7];
arr.splice(0,)
console.log(arr);


//? T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
//efficient method is array.length = 0 because it fast compare to others


//? T014: What happens when you concatenate two empty arrays? 
// ekta empty array hbe 


//? T-015: How can you check if a value is partially matching with any of the elements of an Array?

// Use slice() when you want a copy or extract elements without changing the original array.

// Use splice() when you want to modify the original array by removing or adding elements.


//? T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

const alpha = ['A','C','H','B'];

const cpyAlpha=[...alpha]
// const as=cpyAlpha.sort(stringAss);
function stringAss (a,b){
    return a===b ? 0 : a > b ? 1 :-1;
}

const as=cpyAlpha.sort(stringDes);
function stringDes (a,b){
    return a===b ? 0 : a > b ? -1 :1;
}
console.log(alpha);
console.log(as);



//? T-018: Can you give examples of sparse and dense arrays? 
// Dense Array
// const denseArr = [1, 2, 3, 4, 5];

// Sparse Array
// const sparseArr = [1, , , 4, 5];

//? T-019: Give a practical usages of the .fill() method 

// Initialize arrays with a default value

//? array.fill(value, start, end)

// 1. Reset values
// 2. Fill part of an array
// 3. Create sequences or placeholders
// 4. Prepare arrays for async operations


//? T-020: How to convert an array to a string? 
const stringArr =[1,2,3,4,5];
const string = stringArr.toString()
console.log(string);




const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//? employees array: An array of emplyees working in a department.
const employeeDept = employees.map((emp)=>{
    const dpt = departments.find((d)=>d.id===emp.departmentId);
    
    return {...emp, dptName : dpt ? dpt.name : "Unknown"}
})
console.log(employeeDept);

//? departments array: An array of departments where emplyees work.
// const findEmpDpt = employeeDept.filter((dpt)=>dpt.dptName==="Engineering");
// console.log(findEmpDpt);


//? T-021: Can you filter employees who work in the "Engineering" department 
const findEmpDpt = employeeDept.filter((dpt)=>dpt.dptName==="Engineering");
console.log(findEmpDpt);


//? T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)". 

const newArr = employeeDept.map((emp)=>{
    return `${emp.name} ${emp.dptName}`;
})

console.log(newArr);


//? T-023: Find the highest salary among employees.
const highestSalary =employeeDept.reduce((max,emp)=>{
    return emp.salary > max ? emp.salary :max;
},0)

console.log(highestSalary);





//? T-024: Check if there is at least one employee in the "Sales" department.
const leastSales = employeeDept.some((emp)=> emp.dptName==="Sales");
console.log(leastSales);



//? T-025: Write a function to filter employees earning more than 6000.
const earnMore = employeeDept.filter((emp)=>{
    return emp.salary> 6000;
});

console.log(earnMore);


//? T-026: Create an array of employee names only.
const empName=employeeDept.map((emp)=>{
    return `${emp.name}`;
})

// T-027: Calculate the total salary of all employees using 

const allEmSalary = employeeDept.reduce((sum,emp)=>{
    return sum+emp.salary;
},0)

console.log(allEmSalary);


//? T-028: Is there any employee earning less than 5000? 
const lessEarning = employeeDept.some((emp)=> emp.salary<5000)


//? T-029: Find the first employee who earns exactly 5100. 
const exactSalary = employeeDept.find((emp)=>emp.salary===5100);

//? T-030: Find the last employee in the "HR" department.
const lasHr= employeeDept.findLast((emp)=>emp.dptName==="HR");


//? T-031: Find the first employee in the "Marketing" department.
const firstMrk= employeeDept.find((emp)=>emp.dptName==="Marketing");


//? T-032: Check if all employees earn more than 4000. 
const moreSalary= employeeDept.filter((emp)=> emp.salary>=4000);

//? T-033: Find the first employee in the "Sales" department.
const saleEm= employeeDept.findLast((emp)=>emp.dptName==="Sales");


// let arr = [1,2,3];
// arr.map(x => {
//   if(x === 2) return;
//   return x * 2;
// });
// console.log(arr);

// const arr = [0, false, "", null];
// const result = arr.filter(Boolean);
// console.log(result);


// const arr = [1,2,3];
// console.log(arr.includes(3, -1));


// console.log(
//   Array(3).fill(0).map((_,i)=>i)
// );



// ✅ Task:
let arrHi = [10, 5, 10, 8, 7, 8, 20];
const arrSecondHi = arrHi.sort(ascendingOrder);

function ascendingOrder (a,b){
    return b-a;
}
console.log(arrSecondHi);
console.log(arrSecondHi[1]);





// ✅ Task:

// ❶ "fashion" category এর product গুলোর total price বের করো
// ❷ শুধু product name এর একটি new array বানাও
// ❸ সবচেয়ে দামী product বের করো


const products = [
  { id: 1, name: "Phone", price: 20000, category: "tech" },
  { id: 2, name: "Laptop", price: 80000, category: "tech" },
  { id: 3, name: "Shirt", price: 1500, category: "fashion" },
  { id: 4, name: "Watch", price: 5000, category: "fashion" }
];

const fashionCata =products.filter((pro)=>{return pro.category=== "fashion";}).reduce((sum,pro)=>sum+pro.price,0)

console.log(fashionCata);

const productName=products.map((pro)=>{
    return `${pro.name}`;
})

const highestPrice = products.reduce((max,pro)=>{
    
    return pro.price > max ? pro.price : max;
},0)

console.log(highestPrice);




// ✅ Task 3 — Bug Fix Round (Coding Interview Simulation)

const numbers = [10, 20, 30];

const result = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(result);



// TASK–1 (Logic Test – HARD)

// 👉 Unique values রেখে descending order করো, তারপর top 3 বের করো

const nums1 = [5,4,10,10,4,7,3,9,7,9];

const desOrder=[...new Set(nums1)].sort((a,b)=>b-a);

console.log(desOrder[2]);



// ✅ TASK–2 (Reduce Mastery)
// 👉 products array এর total price per category বের করো:

const products1 = [
  {name:"Shirt", category:"fashion", price:500},
  {name:"Pants", category:"fashion", price:800},
  {name:"Phone", category:"tech", price:15000},
  {name:"Laptop", category:"tech", price:60000},
  {name:"Book", category:"others", price:300}
];


const perPricePro=products1.reduce((total,pro)=>{
    if(!total[pro.category]){
        total[pro.category]=0;
    } 
    total[pro.category] +=pro.price;
    return total;
},{});


console.log(perPricePro);


const data = [1, [-2, 4, 6], [-1, [8, -4]], 3];
const positiveData=data.flat(2).filter((i)=>{
    if(i>0 && i%2===0){
        return i;
    };
});
console.log(positiveData);


// task 
// const arr = [1,2,3];
// const result = arr.map(x => {
//   return x * 2;
// });
// console.log(result);



