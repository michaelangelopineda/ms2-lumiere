// QUESTIONS
const QUESTIONS = [{
        "QUESTION": "Age range?",
        "answer1": "under 18",
        "answer1Total": "1",
        "answer2": "18 - 25",
        "answer2Total": "3",
        "answer3": "25 - 40",
        "answer3Total": "2",
        "answer4": "above 40",
        "answer4Total": "4"
    },
    {
        "QUESTION": "I feel..",
        "answer1": "I dont sleep well",
        "answer1Total": "1",
        "answer2": "I lack intimacy",
        "answer2Total": "2",
        "answer3": "I need to concentrate",
        "answer3Total": "3",
        "answer4": "I'm to tired",
        "answer4Total": "4"
    },
    {
        "QUESTION": "Which is your priority",
        "answer1": "Sleep",
        "answer1Total": "1",
        "answer2": "Love",
        "answer2Total": "2",
        "answer3": "Focus",
        "answer3Total": "3",
        "answer4": "Relaxation",
        "answer4Total": "4"
    },
    {
        "QUESTION": "Best Sentence to describe you?",
        "answer1": "I have difficulty falling asleep.",
        "answer1Total": "1",
        "answer2": "I don't think my partner and I get to enjoy each others company.",
        "answer2Total": "2",
        "answer3": "My attention span is very limited.",
        "answer3Total": "3",
        "answer4": "My exhaustion level is off the roof.",
        "answer4Total": "4"
    },
    {
        "QUESTION": "To have an ideal day, I must have..",
        "answer1": "Slept at least 8 hours.",
        "answer1Total": "1",
        "answer2": "Had a fruitful night with my partner.",
        "answer2Total": "2",
        "answer3": "Finished all my pending itinerary the previous day.",
        "answer3Total": "3",
        "answer4": "Been fully rejuvinated.",
        "answer4Total": "4"
    },
    {
        "QUESTION": "You easily get irritated when ask about..",
        "answer1": "Your sleep",
        "answer1Total": "1",
        "answer2": "Your lovelife",
        "answer2Total": "2",
        "answer3": "Work",
        "answer3Total": "3",
        "answer4": "Leisure",
        "answer4Total": "4"
    },
    {
        "QUESTION": "Which word is best related to your need",
        "answer1": "Somnolence",
        "answer1Total": "1",
        "answer2": "Endearing",
        "answer2Total": "2",
        "answer3": "Attentive",
        "answer3Total": "3",
        "answer4": "Tranquil",
        "answer4Total": "4",
    }
];

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const TOTALQUESTIONS = QUESTIONS.length;

const CONTAINER = document.querySelector('.quiz-container');
const QUESTION_EL = document.querySelector('.question');
const OPTION_ONE = document.querySelector('.option1');
const OPTION_TWO = document.querySelector('.option2');
const OPTION_THREE = document.querySelector('.option3');
const OPTION_FOUR = document.querySelector('.option4');
const NEXT_BUTTON = document.querySelector('.next');
const PREVIOUS_BUTTON = document.querySelector('.previous');
const RESTART_BUTTON = document.querySelector('.restart');
const RESULT = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {

    //Select each question by passing it a particular index
    const QUESTION = QUESTIONS[index];
    const OPTION_ONE_TOTAL = QUESTIONS[index].answer1Total;
    const OPTION_TWO_TOTAL = QUESTIONS[index].answer2Total;
    const OPTION_THREE_TOTAL = QUESTIONS[index].answer3Total;
    const OPTION_FOUR_TOTAL = QUESTIONS[index].answer4Total;
    //Populate html elements 
    QUESTION_EL.innerHTML = `${index + 1}. ${QUESTION.QUESTION}`;
    OPTION_ONE.setAttribute('data-total', `${OPTION_ONE_TOTAL}`);
    OPTION_TWO.setAttribute('data-total', `${OPTION_TWO_TOTAL}`);
    OPTION_THREE.setAttribute('data-total', `${OPTION_THREE_TOTAL}`);
    OPTION_FOUR.setAttribute('data-total', `${OPTION_FOUR_TOTAL}`);
    OPTION_ONE.innerHTML = `${QUESTION.answer1}`;
    OPTION_TWO.innerHTML = `${QUESTION.answer2}`;
    OPTION_THREE.innerHTML = `${QUESTION.answer3}`;
    OPTION_FOUR.innerHTML = `${QUESTION.answer4}`;
}

//function to load next question
function loadNextQuestion() {
    const SELECTED_OPTION = document.querySelector('input[type="radio"]:checked');

    //Check if there is a radio input checked
    if (!SELECTED_OPTION) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const ANSWER_SCORE = Number(SELECTED_OPTION.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(ANSWER_SCORE);

    selectedAnswersData.push();

    const TOTAL_SCORE = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    SELECTED_OPTION.checked = false;
    //If quiz is on the final question
    if (currentQuestion == TOTALQUESTIONS - 1) {
        NEXT_BUTTON.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if (currentQuestion == TOTALQUESTIONS) {
        CONTAINER.style.display = 'none';
        RESULT.innerHTML =
            `<h1 class="final-score">Your score: ${TOTAL_SCORE}</h1>
            <div class="summary">
            <p>Check your score's equivalent below for our Scent recommendation</p>
            <p class="summary-result">21 and above - Se Detendre</p>
            <p class="summary-result">15 - 20 - Concentrer</p>
            <p class="summary-result">8 - 14 - Desir </p>
            <p class="summary-result">7 - Noir</p>
            </div>
            <button class="btn btn-secondary bg-color-button2 restart">Restart Quiz</button>`
        ;
        return;
    }

    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if (e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        location.reload();
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    generateQuestions(currentQuestion);
    NEXT_BUTTON.addEventListener('click', loadNextQuestion);
    PREVIOUS_BUTTON.addEventListener('click', loadPreviousQuestion);
    RESULT.addEventListener('click', restartQuiz);
});