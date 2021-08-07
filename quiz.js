const quizForm = document.forms[0];
const queDivs = document.querySelectorAll('.ow');
const output = document.querySelector('.output');
const submitQuiz = document.querySelector('#submitQuiz');

const correctAns = ['option1', 'option2', 'option1', 'option1', 'option1'];
let score = 0;

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(quizForm);
  let index = 0;
  for (let entry of data) {
    if (entry[1] == correctAns[index]) {
      queDivs[index].style.backgroundColor = 'green';
      score++;
    } else {
      queDivs[index].style.backgroundColor = 'red';
    }
    index++;
  }
  output.style.display = 'block';
  output.innerText = score + ' are correct answers';
});