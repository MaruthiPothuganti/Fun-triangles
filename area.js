const base = document.querySelector("#input");
const height = document.querySelector("#inputTwo");
const btnCalculate = document.querySelector("#btn-Calculate");
const resultOutput = document.querySelector("#output");

btnCalculate.addEventListener('click', function calculateArea() {



    if (Number(base.value) > 0 && Number(height.value) > 0) {
        const area = 0.5 * Number(base.value) * Number(height.value);

        resultOutput.innerText = "The area of the triangle is " + area + " cm‸2";
    } else {
        resultOutput.innerText = "Invalid Inputs";
    }
})