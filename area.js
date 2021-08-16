const base = document.querySelector("#input");
const height = document.querySelector("#inputTwo");
const btnCalculate = document.querySelector("#btn-Calculate");
const resultOutput = document.querySelector("#output");

btnCalculate.addEventListener('click', function calculateArea() {
    const area = 0.5 * Number(base.value) * Number(height.value);

    resultOutput.innerText = "The area of the triangle is " + area + " cm‸2";

})