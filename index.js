// let userScore = prompt("Kindly enter a number: ")
function gradeCalculator() {
    let userScore = Number(document.getElementById("score").value);
    let grade;
    if (userScore == "") {
        alert("Score cannot be blank");
        return;
    } else if (userScore < 0) {
        alert("INVALID! Lesser than zero");
        return;
    } else if (userScore < 40) {
        grade = "F";
    } else if (userScore < 45) {
        grade = "E";
    } else if (userScore < 50) {
        grade = "D";
    } else if (userScore < 60) {
        grade = "C";
    } else if (userScore < 70) {
        grade = "B";
    } else if (userScore <= 100) {
        grade = "A";
    } else if (userScore > 100) {
        alert("INVALID! Greater than 100");
        return;
    } else {
        alert("Invalid Input");
    }
    result.innerText = "Your grade is " + grade;
}
