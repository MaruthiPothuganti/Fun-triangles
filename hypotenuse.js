const sideOne = document.querySelector("#input");
const sideTwo = document.querySelector("#inputTwo");
const btnCalculate = document.querySelector("#btn-Calculate");
const resultOutput = document.querySelector("#output");



btnCalculate.addEventListener('click', function calculateHypotenuse() {
    const sum = (Number(sideOne.value) * Number(sideOne.value)) + (Number(sideTwo.value) * Number(sideTwo.value))
    const hypotenuse = Math.sqrt(sum).toFixed(3);
    resultOutput.innerText = "The length of the Hypotenuse is " + hypotenuse + " cm.";
})