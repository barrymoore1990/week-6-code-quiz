let timerText = document.querySelector("#time");
let startQuiz = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let choices = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen");
let feedback = document.querySelector("#feedback");
let finalScore = document.querySelector("#final-score");
let submitButton = document.querySelector("#submit");
let initials = document.getElementById("initials");

let timer = 0;
let currentQuestion = 0;

// questions
let questions = [
    {question: "Commonly used data types DO NOT include", answers:["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"], correctAnswer: 2},
    {question: "The condition in an if / else statement is enclosed within ________", answers:["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"], correctAnswer: 1},
    {question: "Arrays in JavaScript can be used to store", answers:["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"], correctAnswer: 3},
    {question: "String values must be enclosed within ______ when being assigned to variables", answers:["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"], correctAnswer: 2},
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", answers:["1. Javascript", "2. Terminal/bash", "3. For loops", "4. Console.log"], correctAnswer: 3}
]

// timer for quiz
startQuiz.addEventListener("click", function(e) {
    
    timer = 90;
    let intervalId = setInterval(function(){
    timer--;
    timerText.textContent = timer;
    if (currentQuestion >= questions.length) {
        clearInterval(intervalId);
        finalScore.textContent = timer;
    }
    if (timer == 0) {
        questionsScreen.classList.add("hide");
        endScreen.classList.remove("hide");
        clearInterval(intervalId);
        finalScore.textContent = "0";
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

let highScores = JSON.parse(localStorage.getItem("highScores"));
if (highScores == null) {
    highScores = [];
}

console.log(highScores);

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("success");
    
    let initialsPush = initials.value;
    let objPush = {"initials": initialsPush, "time": timer};
    highScores.push(objPush);
    console.log(highScores);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    document.location.href = './highscores.html';
})




