const readline = require('readline');

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who is the president of the United States?",
        options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Washington"],
        answer: "Joe Biden"
    }
];

let currentQuestion = 0;
let score = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayQuestion() {
    const currentQuizData = questions[currentQuestion];
    console.log(currentQuizData.question);
    currentQuizData.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].answer;
    if (answer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        playQuiz();
    } else {
        showScore();
    }
}

function showScore() {
    console.log(`Your score: ${score} out of ${questions.length}`);
    rl.close();
}

function playQuiz() {
    displayQuestion();
    rl.question('Enter your answer (1, 2, 3, 4): ', (answer) => {
        checkAnswer(questions[currentQuestion].options[parseInt(answer) - 1]);
    });
}

playQuiz();
