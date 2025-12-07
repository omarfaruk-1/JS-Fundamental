/*
- What is DOM
- Understanding dom types
- Accessing DOM
- Mini projects
- Task

*/


// Document 
// console.log(document.body);



//by id
let titleElm = document.getElementById("heading").style.color="green";


//by class
let infoElm =  document.getElementsByClassName("info");
console.log(infoElm);


[...infoElm].forEach(ele=> console.log(ele))




// query selector and query Selector All

// query selector -------> querySelector(), it give first matched element

let infoPra = document.querySelector("p.info");
console.log(infoPra);

// query selector -------> querySelectorAll(), it give all matched element
let para = document.querySelectorAll("p.info");
console.log("From query selector all",para);
let hOne = document.querySelector("#heading");
console.log(hOne);


// getElementByTagName
// let paraTagName=document.getElementsByTagName('p').style.color="green";



// Highlight Text 
function highlightText (){
    let element = document.querySelectorAll("p.info");
    console.log(element);

    element.forEach(element=>{
        element.style.backgroundColor="yellow"; 
    })
}


//filter List

function filterList(){
    const inputElm = document.getElementById("searchInput");
    const inputValue = inputElm.value;
    console.log(inputValue);
    
    const itemElm = document.querySelectorAll("ul#itemList li");
    itemElm.forEach((item)=>{
        item.style.display = item.innerText.toLowerCase().includes(inputValue.toLowerCase()) ? "block" : "none";
    }) 
}





//word frequency
let textWord = document.getElementById("text").innerText;

textWord = textWord.toLowerCase();

textWord = textWord.replace(/[^\w\s]/g, "");

let textArray = textWord.split(" ");

let wordCount = {};

for (let i = 0; i < textArray.length; i++) {
    let word = textArray[i];

    if (wordCount[word]) {
        wordCount[word] += 1;
    } else {
        wordCount[word] = 1;
    }
}

let maxWord = "";
let maxCount = 0;

for (let word in wordCount) {
    if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        maxWord = word;
    }
}

const result = document.getElementById("res");
result.textContent = `Most frequent word: ${maxWord} (${maxCount} times)`;

console.log(wordCount);