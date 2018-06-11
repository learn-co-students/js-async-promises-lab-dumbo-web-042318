const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  document.querySelector(".question-container").innerHTML = question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  document.querySelector(".question-container").innerHTML = ""
  return Promise.resolve("What even is this lab.");
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then((result) => {
    removeQuestion()
    return result;
  })
}

function trueAndFalseButtons() {
  return document.querySelectorAll(".true-false-list .btn")
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach((btn) => { 
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
  return btn.addEventListener('click', function() {
    console.log("clicked")
    toggleTrueAndFalseButtons() 
    askQuestionThenRemoveQuestion(5000).then(() => console.log("hello"));
  }, false)
}
