const input = document.querySelectorAll(".input");
const btnCheck = document.querySelector("#btnCheck");
const output = document.querySelector("#output");

function showOutput(msg) {
    output.innerHTML = msg;
}


btnCheck.addEventListener('click', function isTriangle() {
    const userInput = Number(input[0].value) + Number(input[1].value) + Number(input[2].value);
    if (userInput === 180) {
        showOutput("It is a Triangle");
    } else {
        showOutput("Uh oh, It is not a Triangle");
    }
})

/*--------------------------------------------------------------------------------------------*/