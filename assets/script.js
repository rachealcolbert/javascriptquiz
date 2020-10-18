var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestion = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
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
}]