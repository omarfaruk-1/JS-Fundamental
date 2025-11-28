
//? ROCKPAPERSCISSORS 

export function rockPaperScissors (){


    //? for user input need to use html page 
    let userPrompt = prompt("Enter rock, paper or scissors",)
    let userChoose = userPrompt.toLowerCase();

    //? validation 
    if(userChoose !== "rock" && userChoose !=="paper" && userChoose !== "scissors"){
        console.log("Invalid input");
        return; 
    }

    let computerChoose = Math.floor((Math.random()*3)+1);

    console.log(computerChoose);

    if (computerChoose===1){
        computerChoose = "rock";
    }else if (computerChoose===2){
        computerChoose = "paper";
    }else{
        computerChoose = "scissors";
    }

    //condition generate for game
    if(
        userChoose === "rock" && computerChoose === "paper" ||
        userChoose === "paper" && computerChoose === "scissors" ||
        userChoose === "scissors" && computerChoose === "rock"
    ){
        console.log("Computer Win");     
    }else if (userChoose === computerChoose){
        console.log("The game tie");   
    }else if(
        userChoose === "paper" && computerChoose === "rock" ||
        userChoose === "scissors" && computerChoose === "paper" ||
        userChoose === "rock" && computerChoose === "scissors"
    ){
        console.log("Congratulation YOU WIN");
    }

    // ? trie again 
    let palyAgainPrompt = prompt("I you want play again type YES or if you do not type NO");
    let playAgain = palyAgainPrompt ? palyAgainPrompt.toLocaleLowerCase(): "no";
    if(playAgain === "yes"){
        rockPaperScissors();
    }else{
        console.log("Thanks for play see you next time");
        
    }
    
}
