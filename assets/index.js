const main = document.querySelector("#main");
const subjectSelect = document.querySelector("#subjectSelect");
const progressBar = document.querySelector("#progressBar");
const backBar = document.querySelector("#backBar");
const levelTest = document.querySelector("#levelTest");
const mathProblem1 = document.querySelector("#mathProblem1");

progressBar.style.width = "0%";
backBar.style.width = "0%";

let problemIndex = 1;

function selectYourSubject() {
    main.style.display = "none";
    progressBar.style.width = "10%";
    backBar.style.width = "100%";
    subjectSelect.style.display = "block";
}

function mathProblem() {
    subjectSelect.style.display = "none";
    progressBar.style.width = "20%";
    levelTest.style.display = "block"
    if (problemIndex == 1) {
        mathProblem1.style.display = "block";
    }
    progressBar.style.width = "10%";
}