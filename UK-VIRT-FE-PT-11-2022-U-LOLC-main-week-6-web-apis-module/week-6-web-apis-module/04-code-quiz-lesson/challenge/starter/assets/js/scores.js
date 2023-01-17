let highScoreEl = document.querySelector("#highscores");
let clear = document.querySelector("#clear");

let highScores = JSON.parse(localStorage.getItem("highScores"));

console.log(highScores[0]);

for (let i = 0; i < highScores.length; i++) {
    let createScore = document.createElement("li");
    createScore.textContent = JSON.stringify(highScores[i]);
    highScoreEl.appendChild(createScore);
}

clear.addEventListener("click", function (event){
    // localStorage.clear();
    
    highScoreEl.removeChild();

})