const questions = [
    ["What is the capital of India?", "A. New Delhi", "B. Mumbai", "C. Kolkata", "D. Chennai", "a"],
    ["The International Literacy Day was observed on ?", "A. Sep 8", "B. Nov 28", "C. May 2", "D. Sep 22", "a"],
    ["What is the capital of France?", "A. London", "B. Madrid", "C. Paris", "D. Rome", "c"],
    ["Which planet is known as the 'Red Planet'?", "A. Jupiter", "B. Mars", "C. Venus", "D. Saturn", "b"],
    ["Which of the following is a mammal?", "A. Frog", "B. Snake", "C. Dolphin", "D. Lizard", "c"],
    ["Who wrote the play 'Romeo and Juliet'?", "A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Leo Tolstoy", "a"],
    ["Which gas do plants absorb from the atmosphere?", "A. Carbon dioxide", "B. Oxygen", "C. Hydrogen", "D. Nitrogen", "a"],
    ["In which year did Christopher Columbus discover America?", "A. 1492", "B. 1776", "C. 1620", "D. 1848", "a"],
    ["Which planet is known as the 'Morning Star' or 'Evening Star'?", "A. Jupiter", "B. Mars", "C. Venus", "D. Saturn", "c"],
    ["What is the chemical symbol for gold?", "A. Go", "B. Gd", "C. Au", "D. Ag", "c"],
    ["Which country is known as the 'Land of the Rising Sun'?", "A. China", "B. South Korea", "C. Japan", "D. Thailand", "c"],
    ["Who is the author of 'The Catcher in the Rye'?", "A. J.D. Salinger", "B. F. Scott Fitzgerald", "C. Ernest Hemingway", "D. Mark Twain", "a"],
    ["What is the largest organ in the human body?", "A. Brain", "B. Heart", "C. Liver", "D. Skin", "d"],
    ["Which gas makes up the majority of the Earth's atmosphere?", "A. Oxygen", "B. Carbon dioxide", "C. Nitrogen", "D. Hydrogen", "c"],
    ["In the game of chess, which piece can move diagonally?", "A. Rook", "B. Bishop", "C. Knight", "D. Queen", "b"]
];

const amounts = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 10000000];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.querySelector('.options-container');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.querySelector('.result-container');
const totalScoreElement = document.getElementById('total-score');
const nextQuestionButton = document.getElementById('next-question');

// Function to load the next question
function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion[0];

        // Clear previous options
        optionsContainer.innerHTML = '';

        // Add options
        for (let i = 1; i <= 4; i++) {
            const option = document.createElement('button');
            option.className = 'option';
            option.textContent = currentQuestion[i];
            option.addEventListener('click', () => checkAnswer(i));
            optionsContainer.appendChild(option);
        }

        submitButton.disabled = true;
        resultContainer.style.display = 'none';
    } else {
        // Game over, show total score
        questionElement.textContent = 'Congratulations! You have completed the game, Thank you :).';
        totalScoreElement.textContent = `Total Score: Rs - ₹ ${totalScore}`;
        nextQuestionButton.style.display = 'none';
        submitButton.style.display = 'none';
    }
}

// Function to check the selected answer
function checkAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion[5] === String.fromCharCode(96 + optionIndex)) {
        totalScore += amounts[currentQuestionIndex];
        resultContainer.innerHTML = `Correct Answer! You have won Rs - ₹ ${amounts[currentQuestionIndex]}`;
    } else {
        resultContainer.innerHTML = `Wrong Answer! You have won Rs - ₹ ${totalScore}`;
        nextQuestionButton.style.display = 'none'; // Hide the "Next Question" button
        submitButton.style.display = 'none'; // Hide the "Submit Answer" button
    }

    resultContainer.style.display = 'block';
    submitButton.disabled = true;
    currentQuestionIndex++;
}

// Event listener for the "Submit Answer" button
submitButton.addEventListener('click', () => checkAnswer());

// Event listener for the "Next Question" button
nextQuestionButton.addEventListener('click', () => loadNextQuestion());

// Initialize the game
loadNextQuestion();


