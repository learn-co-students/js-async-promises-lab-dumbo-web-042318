const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(ques){
  document.querySelector('.question-container').innerHTML = ques.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })

}

function removeQuestion(){
  return new Promise(function(resolve){
    resolve(document.querySelector('.question-container').innerHTML = '')
  })
}

function askQuestionThenRemoveQuestion(time){
    return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return btns
}

function toggleTrueAndFalseButtons(){
  const btns = trueAndFalseButtons()
  btns[0].classList.toggle("hide")
  btns[1].classList.toggle("hide")
}

document.querySelector('.waves-effect').addEventListener('click', displayQuestionOnClick)

function displayQuestionOnClick(){
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000).then(toggleTrueAndFalseButtons)

}
