// let userScore = prompt("Kindly enter a number: ")
let result = document.getElementById("result")
let grade_sound = document.getElementById("grade_sound")
let inputBtn = document.querySelector("input")

function gradeCalculator() {
    let userScore = Number(document.getElementById("score").value);
    let grade;
    if (userScore == "") {
        alert("Score cannot be blank");
        return;
    } else if (userScore < 0) {
        alert("INVALID! Grade can not be lesser than zero");
        return;
    } else if (userScore < 40) {
        grade = "F";
        result.style.color = "red"
        grade_sound.src = "./applause.mp3"
    } else if (userScore < 45) {
        grade = "E";
        result.style.color = "orange"
        grade_sound.src = "./applause.mp3"
    } else if (userScore < 50) {
        grade = "D";
        result.style.color = "pink"
        grade_sound.src = "./applause.mp3"
    } else if (userScore < 60) {
        grade = "C";
        result.style.color = "yellow"
        grade_sound.src = "./applause.mp3"
    } else if (userScore < 70) {
        grade = "B";
        result.style.color = "blue"
        grade_sound.src = "./applause.mp3"
    } else if (userScore <= 100) {
        grade = "A";
        result.style.color = "green"
        grade_sound.src = "./applause.mp3"
    } else if (userScore > 100) {
        alert("INVALID! Grade can not be greater than 100");
        return;
    } else {
        alert("Invalid Input");
    }
    result.innerText = `Your grade is "${grade}".`;
}
inputBtn.addEventListener("keypress", event => (event.key === "Enter"? gradeCalculator(): null ))
