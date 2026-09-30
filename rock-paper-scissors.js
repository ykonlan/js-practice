function getComputerChoice(){
    let choices = {0:"rock", 1:"paper", 2:"scissors"};
    let choice_no = Math.floor((Math.random() * 10)) % 3;
    return choices[choice_no];
}

function getHumanChoice(){
    let choices = {1:"rock", 2:"paper", 3:"scissors"};
    let choice = prompt("Enter 1 for Rock, 2 for Paper or 3 for Scissors");
    return choices[Number(choice)];
}



function playRound(computer_choice, human_choice){
    let winner
    let winning_pairs = [["rock", "scissors"], ["paper", "rock"], ["scissors","paper"]];
    if(computer_choice === human_choice){
        return "tie";
    }
    if (winning_pairs.some(pair=>{ return pair[0] === human_choice && pair[1] === computer_choice})){
        winner = "human";
        console.log(`You Win! ${human_choice} beats ${computer_choice}`);
    }else{
        winner = "computer";
        console.log(`You Lose! ${computer_choice} beats ${human_choice}`);
    }
    return winner


}

function playGame(){
    let human_score = 0;
    let computer_score = 0;
    for(i=0; i<5; i++){
        let human_choice = getHumanChoice();
        let computer_choice = getComputerChoice();
        let winner = playRound(computer_choice, human_choice);
        if(winner === "computer"){
            computer_score += 1;
        }else if(winner === "human"){
            human_score += 1;
        }
        
    }
    let message
    if(human_score === computer_score){
        message = `You tied ${computer_score}- ${human_score}`;
    }else{
        message = computer_score > human_score ? `Sorry, You lost ${computer_score}-${human_score}` : `Congrats, You won ${human_score}-${computer_score}`;
    }
    console.log(message);
    return
}

console.log(["rock", "scissors"] == ["rock", "scissors"]);
playGame();