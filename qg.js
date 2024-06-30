///////,,,,,,,,GAME QUIZ,,,,,,,//////////
import inquirer from "inquirer";
console.log("\n\twelcom to Quiz Game\n");
async function startQuiz() {
    let answer = await inquirer.prompt([
        {
            name: "quiz1",
            type: "list",
            message: "which is your favourit colr",
            choices: ["red", "mehroon", "black", "orang"]
        },
        {
            name: "quiz2",
            type: "list",
            message: "whish is your favourite city",
            choices: ["karachi", "islamabad", "quita", "mari"],
        },
        {
            name: "quiz3",
            type: "list",
            message: "which is your favourte country",
            choices: ["pakistan", "london", "saudia arab", "turky"],
        },
    ]);
    if (answer.quiz1 === "red", "mehroon", "black", "orang") {
        console.log('q1 correct answer');
    }
    else {
        console.log('q1 incorrect answer');
    }
    if (answer.quiz2 === "karachi", "islamabad", "quita", "mari") {
        console.log('q2 correct answer');
    }
    else {
        console.log('q2 incorrect answer');
    }
    if (answer.quiz3 === "pakistan", "london", "saudia arab", "turky") {
        console.log('q3 correct answer');
    }
    else {
        console.log('q3 incorrect answer');
    }
    let userConfirm = await inquirer.prompt([
        {
            name: "anss",
            type: "confirm",
            message: "do you want to continue"
        }
    ]);
    if (userConfirm.anss) {
        startQuiz();
    }
    else {
        console.log("\n\tthanks for using my quiz game");
    }
}
startQuiz();
