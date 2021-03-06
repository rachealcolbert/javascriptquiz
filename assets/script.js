var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var submitButton = document.getElementById('submit-button');
var highScores = document.getElementById('high-scores');
var timer = document.getElementById('countdown');
var timerHandle
var timeLeft = 60;
var finalScore = document.getElementById('final-score')
var score = 0;
var submitInitialContainerElement = document.getElementById('submit-initial-container');

let currentQuestionIndex = 0;

startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', startTimer);
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < question.length - 1) {
        currentQuestionIndex++
    } else {
        showFinalScore();
        questionContainerElement.classList.add('hide');
        questionElement.classList.add('hide');
        answerButtonsElement.classList.add('hide');
    };
    setNextQuestion();
})


function startTimer() {
    timerHandle = setInterval(function () {
            if (timeLeft >= 1) {
                timer.textContent = timeLeft;
                timeLeft = timeLeft - 1;
            }
            if (timeLeft === 0) {
                timer.textContent = 'Time is up!';
            }
        },
        1000);
}

function startQuiz() {
    startButton.classList.add('hide');
    submitInitialContainerElement.classList.add('hide');
    currentQuestionIndex = 0;
    questionContainerElement.classList.add('hide');
    questionElement.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    console.log(currentQuestionIndex);
    showQuestion(question[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('buttons');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (currentQuestionIndex > question.length) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.classList.remove('hide');
    }
}


function showFinalScore() {
    document.getElementById("submit-initial-container").classList.remove('hide');
    finalScore.textContent = "Your score is " + score;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        score++;
        element.classList.add('correct');
    } else {
        timeLeft--;
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var question = [{
        question: 'Commonly used data types do NOT include:',
        answers: [{
                text: 'strings',
                correct: false
            },
            {
                text: 'booleans',
                correct: false
            },
            {
                text: 'alerts',
                correct: true
            },
            {
                text: 'numbers',
                correct: false
            },
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed with______.',
        answers: [{
                text: 'quotes',
                correct: false
            },
            {
                text: 'curly brackets',
                correct: true
            },
            {
                text: 'parenthesis',
                correct: false
            },
            {
                text: 'square brackets',
                correct: false
            },
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store_______.',
        answers: [{
                text: 'numbers and strings',
                correct: false
            },
            {
                text: 'other arrays',
                correct: false
            },
            {
                text: 'booleans',
                correct: false
            },
            {
                text: 'all of the above',
                correct: true
            },
        ]
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables.',
        answers: [{
                text: 'commas',
                correct: false
            },
            {
                text: 'curly brackets',
                correct: false
            },
            {
                text: 'quotes',
                correct: true
            },
            {
                text: 'parenthesis',
                correct: false
            },
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [{
                text: 'console.log',
                correct: true
            },
            {
                text: 'JavaScript',
                correct: false
            },
            {
                text: 'terminal/bash',
                correct: false
            },
            {
                text: 'for loops',
                correct: false
            },
        ]
    },
];




submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var initials = document.querySelector('#initials').value;
    if (initials === '') {
        alert('Initials cannot be blank.');
    } else {
        submitInitialContainerElement.classList.add('hide');
        highScores.classList.remove('hide');

    }
    localStorage.setItem("initials", initials);
});

renderLastRegistered();

function renderLastRegistered() {
    localStorage.getItem("initials", initials);
    var initials = localStorage.getItem("initials");

    if (initials === null) {
        return;
    }
}