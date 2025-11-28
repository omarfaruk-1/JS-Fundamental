
//? Guessing Number game

function guessingNumber (){

    let userPrompt=prompt("Enter a number between 1 to 10");
    let userChoose=Number(userPrompt);

    if(userChoose >10 || userChoose<=0){
        console.log("Invalid input");
        return;
    }
    
    const computerNumber = Math.floor((Math.random()*10) + 1);
    
    console.log("Computer number ",computerNumber);
    let count=1;

    while(userChoose !== computerNumber){

        if (userChoose>=computerNumber){
            userPrompt=prompt("Enter a number between 1 to 10");
            userChoose=Number(userPrompt);
            console.log("User number ",userChoose);
            console.log("Too much high, choose lower number");
        }else{
                console.log("User number ",userChoose);
            console.log("Too much Lower, choose higher number");  
            userPrompt=prompt("Enter a number between 1 to 10");
            userChoose=Number(userPrompt); 
        }
        count++;
    }

    console.log("You guess right number");
    console.log("you attempt ",count);
    return;
}guessingNumber;

guessingNumber();