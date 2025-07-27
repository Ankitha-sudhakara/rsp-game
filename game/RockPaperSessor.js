let user_score=0;
let computer_score=0;

const choices=document.querySelectorAll(".choice");
const msg1=document.getElementById("msg");
const user_score1=document.getElementById("user_score");
const computer_score1=document.getElementById("comp_score");

const genarate_choice=()=>
{
    const options=["rock","paper","scissor"];
    const random_index=Math.floor(Math.random()*3);
    return options[random_index]
}
const drawGame=()=>
{
    msg1.innerText="its Draw play Again!";
    msg1.style.backgroundColor="#081b31";
}
const showWinner=(userWin,user_choice,compChoice)=>
{
 if(userWin)
 {
    user_score++;
    user_score1.innerText=user_score;
    msg1.innerText=`You Win!! ${user_choice} beats ${compChoice}`;
    msg1.style.backgroundColor="green";
 }
 else{
    computer_score++;
    computer_score1.innerText=computer_score;
    msg1.innerText=`You lost!! ${compChoice} beats ${user_choice}  `;
    msg1.style.backgroundColor="red";
 
 }
}
const playGame=(user_choice)=>
{
    const compChoice=genarate_choice();
    if (user_choice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if (user_choice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }else if(user_choice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,user_choice,compChoice);
    }


}
choices.forEach((choice)=>
{
choice.addEventListener("click",()=>
{
   const user_choice=choice.getAttribute("id");
   playGame(user_choice);
});
});