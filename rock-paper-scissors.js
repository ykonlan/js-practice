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



function playRound(human_choice){
    let winner
    let winning_pairs = [["rock", "scissors"], ["paper", "rock"], ["scissors","paper"]];
    let computer_choice = getComputerChoice();
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


function selectButton(btn){
    let choices = document.querySelectorAll(".choice");
    choices.forEach(element => {
        element.classList.remove("selected");
    });
    btn.target.classList.add("selected");
}

let choices = document.querySelectorAll(".choice");
choices.forEach(element => {
    element.addEventListener("click", selectButton);
});

let human = 0;
let pc = 0;
let played = 0


function submit_choice(){
    let choice = document.querySelector(".choice.selected");
    let human_scores = document.querySelector("#player-score");
    let pc_scores = document.querySelector("#computer-score");
    let message;
    let message_div = document.querySelector("#game-over>h1");
    if(played >= 4){
        human_scores.textContent = `Player Score - ${human}`;
        pc_scores.textContent = `Computer Score - ${pc}`;
        let gameOverDiv = document.querySelector("#game-over>h2");
        gameOverDiv.textContent = "Game is Over";
        if(pc > human){
            message = "Sorry, you Lose!";
            message_div.style.color = "red";
        }else if(human > pc){
            message = "Congrats, you Win!"
            message_div.style.color = "green";
        }else{
            message = "It was a tie."
        }
        message_div.textContent = message;
        human_scores.textContent = `Player Score - ${human}`;
        pc_scores.textContent = `Computer Score - ${pc}`;
        return
    }
    let winner = playRound(choice.value);
    played++;
    if(winner == "human"){
        human++;
    }else if(winner == "computer"){
        pc++;
    }
    human_scores.textContent = `Player Score - ${human}`;
    pc_scores.textContent = `Computer Score - ${pc}`;
}

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click",submit_choice);