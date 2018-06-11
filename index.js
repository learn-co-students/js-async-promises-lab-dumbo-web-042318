const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  qBox = document.querySelector('.question-container');
  qBox.innerHTML = question["questionText"];
}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time )
  })
}

function removeQuestion(){
  document.querySelector('.question-container').innerHTML = ''
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
    .then(removeQuestion)
    .catch(console.log)
}

function trueAndFalseButtons() {
  let buttons =  document.querySelector('.true-false-list').querySelectorAll('.btn')
  buttons.forEach(btn => btn.innerText = btn.innerText.trim().toUpperCase())
  return buttons
}

function toggleTrueAndFalseButtons() {
  let buttons = trueAndFalseButtons()
  buttons.forEach(function(btn){
    if (btn.classList.contains('hide')) {
      btn.classList.remove('hide')
    } else {
      btn.classList.add('hide')
    };
  })
};

function displayQuestionOnClick() {
  let button = document.querySelector('.waves-light, .btn')
  button.addEventListener("click", console.log("clicked"))
  askQuestionThenRemoveQuestion(10000)
  toggleTrueAndFalseButtons()
}
