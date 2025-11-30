# Scope and Scope chain

1. Global Scop: That variable declared out side block and function it's call Global scop  

2. Block Scope: That variable declared inside block using let and const, it only accessible inside the block. we can not access outside the block. note var function scope so if we declared with var it accessible outside of the block.

3. Function Scope: Inside function it only accessible inside function even declared with var(because var function scope).




# scope chain
<pre>

var x = 10;

function outerFunc (){
    var x = 20;

    function innerFunc (){
        var x = 30;
        console.log(x);
    }

    innerFunc();
    console.log(x);

    //try to find output
</pre>


<pre>

    let name = "global";
    function show() {
        console.log(name);
        let name = "local";
    }
    show(); referenceError name inside the function declared after console so it get referenceError

</pre>