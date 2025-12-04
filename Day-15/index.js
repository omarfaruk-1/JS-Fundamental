const arr=["omar",23,423,false];
console.log(arr.length);
console.log(arr[2]);
arr.push(60)
console.log(arr)

// array creation 

const array = new Array(3,4)
const array1 = new Array(3) //it create 3 length a array which is 3 empty items if access it will show undefined
console.log(array);



const fruit = ["Mango","JackFruit","Apple","Banana"];

// add element push
fruit.push("Orange") //push return array length and add element last
fruit.unshift("Watermelon"); //add first ad return array length


// removed array element 
fruit.pop(); //pop return removed element
fruit.shift(); //unshift return removed element


// array copy and colon 
const fruit1= fruit.slice();

console.log(Array.isArray(fruit));


const len = fruit.length;
console.log(len);
console.log(fruit[len-2]);

for(let i = 0; i < fruit1.length; i++){
    console.log(`Element at ${i} is ${fruit1[i]}`); 
}



//? array destructuring

let fruits = ["Tomato", "Caret", ["Mango","Banana","apple"],"Mashroom"];

console.log(fruits[2]);
console.log(fruits[3]);

// const[tom, car, [mango,ban,app]] = fruits;
const[, , [,ban,]] = fruits;

// const fru = fruits[2];
// const [mg, banana, apple]=fru;
console.log(ban);


const bigNested = [
    "Home",
    "Profile",
    [
        "Dashboard",
        "Settings",
        [
            "Privacy",
            "Security",
            "Notifications",
            "Theme",
            "Language",
            "Backup",
            "Update",
            "Advanced"
        ],
        "Activity",
        "Messages",
        "Friends"
    ],
    "About",
    "Help",
    "Logout",
    [
        "Store",
        "Cart",
        [
            "Electronics",
            "Clothing",
            "Books",
            "Shoes",
            "Accessories",
            "Furniture",
            "Toys"
        ],
        "Orders",
        "Wishlist",
        "Support"
    ],
    "Footer"
];

console.log(bigNested);

const [hm,pro,[dash,set,[pr,sec,not,them,lan,bac,upd,ad],act,msg,frd],ab,hlp,lg,[st,cart,[elc,cloth,bk,sho,acces,frun,toy],or,whish,suport,],fot]=bigNested;


console.log(pr);
console.log(bk);


const numbers = [1,2,3,4,5,6,7,8,9];
const [ a,b,c,...rest] = numbers;
console.log(a);
console.log(rest);



//? swap value using destructuring 

let x=10,y=50;
const n=[x,y]
console.log([x,y]);

[y, x] = n;
console.log(y,x);



// marge two array 

const num1 =[1,2,3,45];
const num2 = [50,60,70,80,[-1,-2,-3]];

const newArr= [...num1, ...num2];
// const newArr= structuredClone(new);
console.log(newArr);

const newAr =[...num1,...num2];
const safeM =structuredClone([newAr]).flat(2);
console.log(safeM);



//fixed length not changeable 

const array3 =[1,2,3,4,5,6,9];

Object.defineProperty(array3,"length", {writable:false});
array3.length=0;
console.log(array3.length);


