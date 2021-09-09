//code taken from https://codepen.io/edubz99/pen/PeRjNb?editors=1010

// QUESTIONS

const questions = [{
        "question": "Age range?",
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
        "question": "I feel..",
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
        "question": "Which is your priority",
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
        "question": "Best Sentence to describe you?",
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
        "question": "To have an ideal day, I must have..",
        "answer1": "slept at least 8 hours.",
        "answer1Total": "1",
        "answer2": "had a fruitful night with my partner.",
        "answer2Total": "2",
        "answer3": "finished all my pending itinerary the previous day.",
        "answer3Total": "3",
        "answer4": "been fully rejuvinated.",
        "answer4Total": "4"
    },
    {
        "question": "You easily get irritated when ask about..",
        "answer1": "your sleep",
        "answer1Total": "1",
        "answer2": "your lovelife",
        "answer2Total": "2",
        "answer3": "work",
        "answer3Total": "3",
        "answer4": "leisure",
        "answer4Total": "4"
    },
    {
        "question": "Which word is best related to your need",
        "answer1": "Somnolence",
        "answer1Total": "1",
        "answer2": "Endearing",
        "answer2Total": "2",
        "answer3": "Attentive",
        "answer3Total": "3",
        "answer4": "Tranquil",
        "answer4Total": "4",
    }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()


    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;
    //If quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
            `<h1 class="final-score">Your score: ${totalScore}</h1>
           <div class="summary">
              <h1>Summary</h1>
              <p>The best scent you need is..., see below for a summary based on your results:</p>
              <p>21 and above - Se detendrer</p>
              <p>14 - 21 - Concentrer</p>
              <p>7 - 14 - Desir </p>
              <p>7 - Noir</p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
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


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);