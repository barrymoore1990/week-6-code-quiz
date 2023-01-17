let timerText = document.querySelector("#time");
let startQuiz = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let choices = document.querySelector("#choices");

// timer for quiz
startQuiz.addEventListener("click", function(e) {
    
    let timer = 90;
    let intervalId = setInterval(function(){
    timer--;
    timerText.textContent = timer;

}, 1000);

    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    newQuestion();
})

// questions
let questions = [
    {question: "1", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "2", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "3", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "4", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "5", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}
]


let currentQuestion = 0;

function newQuestion() {
    choices.innerHTML = "";
    document.querySelector("#question-title").textContent = questions[currentQuestion].question

    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        
        let buttonCreate = document.createElement("button");
        buttonCreate.textContent = questions[currentQuestion].answers[i];
        buttonCreate.setAttribute("data-index", i);
        choices.appendChild(buttonCreate);
    }
}


choices.addEventListener("click", function (event){
    if(event.target.matches("button")) {
        console.log(event.target.getAttribute("data-index"));
        currentQuestion++;
        newQuestion();
    }
})


for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].answers.length);

    
}



// timer -= 20 would add on 20

// On last question have some sort of game over function which stops timer
// clearInterval(intervalId);
// timer (would now display score which is seconds left)