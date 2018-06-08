document.querySelector('a').addEventListener('click', displayQuestionOnClick)

const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  const questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    resolve(document.querySelector('.question-container').innerHTML = '')
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  let buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return buttons
}

function toggleTrueAndFalseButtons() {
  const buttonArray = trueAndFalseButtons()
    buttonArray[0].classList.toggle("hide")
    buttonArray[1].classList.toggle("hide")
}

function displayQuestionOnClick() {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000).then(toggleTrueAndFalseButtons)
}
