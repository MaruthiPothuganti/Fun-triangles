const quiz = document.querySelector(".quiz");
const btnFinish = document.querySelector("#btnFinish");
const result = document.querySelector("#resultMessage");

var correctAnswers = ["Right", "Acute angled triangle", "Eqilateral Triangle", "Scalene Triangle", "60°", "Hypotenuse", "Scalene Triangle", "55°", "Equal", "BF = CE"];

btnFinish.addEventListener("click", function Result() {
    const fromQuiz = new FormData(quiz);
    let score = 0;
    let index = 0;
    for (let userAnswers of fromQuiz.values()) {
        if (userAnswers === correctAnswers[index]) {
            score += 1;
        }
        index += 1;
    }
    result.innerText = "Your Total Score is : " + score;
    console.log(score);
})