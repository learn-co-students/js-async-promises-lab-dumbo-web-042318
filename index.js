const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  const questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise ((resolve, reject) => {
    setTimeout(function() {
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  const questionContainer = document.querySelector('.question-container')
  return new Promise ((resolve, reject) => {
    resolve(questionContainer.innerHTML = '')
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  const button = document.querySelector('.true-false-list').querySelectorAll(".btn")
  return button
}

function toggleTrueAndFalseButtons() {
  const btnArray = trueAndFalseButtons()
  btnArray[0].classList.toggle("hide")
  btnArray[1].classList.toggle("hide")
}

function displayQuestionOnClick() {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(1000).then(toggleTrueAndFalseButtons)
}

const askAway = document.querySelector('#ask')
askAway.addEventListener('click', displayQuestionOnClick)