const quizform = document.querySelector(".quiz-form");
const SubmitAnswerBtn = document.querySelector("#submit-answer-btn")
const outputE1 = document.querySelector("#output");

const correctAnswers = ["90","right angle"];

function calculatescore(){
    let score = 0;
    let index = 0;
    const formresults = new FormData(quizform);
    for(let value of formresults.values()){
        if(value === correctAnswers[index]){
            score = score +1;
        }
        index = index + 1;
    }
    outputE1.innerText = "your score is " + score;
}
SubmitAnswerBtn.addEventListener("click",calculatescore);
