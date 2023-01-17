let timerText = document.querySelector("#time");
let startQuiz = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen");
let feedback = document.querySelector("#feedback");

let timer = 0;
let currentQuestion = 0;

// questions
let questions = [
    {question: "1", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "2", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "3", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "4", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2},
    {question: "5", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}
]

// timer for quiz
startQuiz.addEventListener("click", function(e) {
    
    timer = 90;
    let intervalId = setInterval(function(){
    timer--;
    timerText.textContent = timer;
    if (currentQuestion >= questions.length) {
        clearInterval(intervalId);
    }
    if (timer == 0) {
        questionsScreen.classList.add("hide");
        endScreen.classList.remove("hide");
        clearInterval(intervalId);
    }

}, 1000);

    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    newQuestion();
    
})


function newQuestion() {
    if (currentQuestion >= questions.length) {
        questionsScreen.classList.add("hide");
        endScreen.classList.remove("hide");
    } else {
        choices.innerHTML = "";
        document.querySelector("#question-title").textContent = questions[currentQuestion].question;

        for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
            
            let buttonCreate = document.createElement("button");
            buttonCreate.textContent = questions[currentQuestion].answers[i];
            buttonCreate.setAttribute("data-index", i);
            choices.appendChild(buttonCreate);
        }

    }
    
    
}

let answer = "";

function fback(answer) {
    
        feedback.classList.remove("hide");
        feedback.textContent = answer;
        
        setInterval(function(){
            feedback.classList.add("hide");
        }, 1000);
    
}

choices.addEventListener("click", function (event){
    if(event.target.matches("button")) {
        answer = event.target.getAttribute("data-index");
        if (answer != questions[currentQuestion].correctAnswer) {
            timer -= 10;
            fback("Wrong!");
        } else {
            fback("Correct!");
        }
        currentQuestion++;
        newQuestion();
    }
})


for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].answers.length);

    
}



// On last question have some sort of game over function which stops timer
// clearInterval(intervalId);
// timer (would now display score which is seconds left)