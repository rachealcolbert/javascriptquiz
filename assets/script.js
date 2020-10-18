var startButton = document.getElementById("start-button");
var questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

var questions = [
    {
        question: Do you have to poop?; 
        answers: [
            { text: 'yes', correct}
        ]
    }
]