let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const msgBox=document.querySelector(".msg-container");
const userPoints=document.querySelector("#user-score");
const compPoints=document.querySelector("#comp-score");


const genCompChoice= ()=>{
  let options =["rock","paper","scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
}
const drawGame = ()=>{
    console.log("draw game");
    msg.innerText = "Game was Draw.";
    msgBox.style.backgroundColor="#2f353a"
    msg.style.color="white";
}
const ShowWinner = (userWin)=>{
    if(userWin){
        userScore++;
        console.log("you win!");
        msg.innerText = "You Win!";
        msgBox.style.backgroundColor="green";
        msg.style.color="white";
        userPoints.innerText= userScore;
    }else{
        console.log("you lose");
        compScore++;
        msg.innerText = "You lose!";
        msgBox.style.backgroundColor="red";
        msg.style.color="white";
        compPoints.innerText= compScore;
    }
}
const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice =genCompChoice();
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin= compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin= compChoice ==="rock"? false : true;
        }
        ShowWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});