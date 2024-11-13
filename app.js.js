let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#computer");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = genCompChoice();

        if(userChoice === compChoice){
            draw();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                //Comp choice can be = "paper", "scissors" 
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                //Comp choice can be = "rock", "scissors"
                userWin = compChoice === "rock" ? true : false;
            }else{
                //Comp choice can be = "rock", "paper"
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    })
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    const randChoice = options[randIdx];
    return randChoice;
};

const draw = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `Congratulations, You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}