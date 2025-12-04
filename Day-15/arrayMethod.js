const num = [1,3,2,4,5,61,7];

num.sort(desNum);

console.log(num);


function acs(a,b){
    return a + b;
}



function desNum(a,b){
    return b-a;
}



function desString(a,b){
    return a === b ? 0 : a > b ? -1  : 1
}



//? splice


const array = [1,2,3,4,5,6,7,8,9];
array.splice(3,0,50); //? 3 index number 0 how many number we want delete from array and 50 new value 

console.log(array);
array.splice(5,2,90)
console.log(array);


const name =["omar", "Faruk", "Noor"];
name.splice(0,3);
console.log(name);


// arr.length = 0 //? best method for empty array
// arr = []
// arr.shift()
// arr.pop()
// arr.splice()


//? at()
const numbers = [10,20,30,40,50,60];
numbers.at(-3) //40
console.log(numbers.at(-5));


const number = [10,20,30,800,40,50,60,70,80,90,200];

//copy within
number.copyWithin(1,3,6);
console.log(number);


// toReverse toSort toSplice with 





//? test 1
// const arr = new Array(5);
// console.log(arr.map(x => 10));

//? test 2
// const a = [1,2,3];
// const b = a;
// b.push(4);
// console.log(a);


//? test 3
// const a = [1,[2,3]];
// const b = a.slice();
// b[1][0] = 99;
// console.log(a[1][0]);

//?test 4
// let arr = [1,2,3];
// arr.length = 1;
// console.log(arr);

//?test 5
// const a = [1,2];
// const b = a.concat([3,4]);
// console.log(b === a);

//?test 6
// const x = [1,2,3];
// const y = structuredClone(x);
// y.push(4);
// console.log(x);

//?test 7
// const a = [1,2,3];
// delete a[1];
// console.log(a.length);

//?test 8
// const arr = [1,2,3];
// const result = arr.splice(1,1,9);
// console.log(arr, result);

//?test 9
// const a = [1,[2,[3]]];
// const b = a.flat(1);
// console.log(b);

//?test 10
// const a = [1,2,3];
// a.length = 0;
// console.log(a);

//?test 11
// const a = Array.from("123");
// console.log(a);

//?test 12
// const a = [1,2,3];
// const b = [...a];
// b[0] = 99;
// console.log(a[0]);

//? test 13
// const a = [1,2,3];
// a.splice(1,1,7,8);
// console.log(a);


//? test 14
// const a = [1,2,3,4];
// const b = a.filter(x => x > 10);
// console.log(b);
