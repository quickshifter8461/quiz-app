// quiz Questions
const quizData = [
  {
      question: "Which of the following front-end technologies is primarily used for structuring web content?",
      a: "JavaScript",
      b: "CSS",
      c: "HTML",
      d: "Python",
      correct: "c"
  },
  {
      question: "Which language is used to style HTML documents?",
      a: "HTML",
      b: "CSS",
      c: "SQL",
      d: "JavaScript",
      correct: "b"
  },
  {
      question: "What is the most used programming language in 2021?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
  },
  {
      question: "Which of the following is a JavaScript framework used for building user interfaces?",
      a: "Bootstrap",
      b: "Angular",
      c: "Django",
      d: "Laravel",
      correct: "b"
  },
  {
      question: "What does the CSS property display: flex; do?",
      a: "Hides an element",
      b: "Creates an inline elements",
      c: "Applies flexible box layout",
      d: "Clears floats",
      correct: "c"
  },
  {
      question: "Which HTML tag is used to define an unordered list?",
      a: "<ul>",
      b: "<ol>",
      c: "<li>",
      d: "<list>",
      correct: "a"
  },
  {
      question: "In JavaScript, what does DOM stand for?",
      a: "Document Object Model",
      b: "Data Object Model",
      c: "Digital Object Model",
      d: "Dynamic Object Model",
      correct: "a"
  },
  {
      question: "Which of the following is NOT a valid CSS selector?",
      a: ".classname",
      b: "#idname",
      c: "element",
      d: ":pseudo-classname",
      correct: "d"
  },
  {
      question: "Which of the following is a CSS preprocessor?",
      a: "TypeScript",
      b: "SASS",
      c: "React",
      d: "Node.js",
      correct: "b"
  },
  {
    question: "Which attribute is used in HTML to specify an image source?",
    a: "href",
    b: "src",
    c: "alt",
    d: "link",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz"); // container to display questions
const answersEls = document.querySelectorAll(".answer"); // container to display options
const questionEl = document.getElementById("question"); // question h2
const a_text = document.getElementById("a_text"); //options
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit"); //submit btn
const result = document.getElementById("result"); //container to display result
const scoreEl = document.getElementById("score"); //score h1
const restartBtn = document.getElementById("restart"); //restart btn

let currentQuiz = 0;
let score = 0;

loadQuiz();
// loading questions
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
// deselecting answers
function deselectAnswers() {
  answersEls.forEach((answerEl) => (answerEl.checked = false));
}
//getting the selected answer
function getSelected() {
  let answer;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.value;
    }
  });
  return answer;
}
// function for checking the answer and updating the score
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score < 5) {
        result.classList.add("fail-img")
        scoreEl.classList.add("failure")
      }
      else{
        result.classList.remove("fail-img")
        scoreEl.classList.remove("failure")
      }
      quiz.style.display = "none";
      result.style.display = "block";
      scoreEl.innerText = `Your score: ${score}/${quizData.length}`;
    }
  }
});
// restart function
restartBtn.addEventListener("click", () => {
  currentQuiz = 0;
  score = 0;
  quiz.style.display = "block";
  result.style.display = "none";
  loadQuiz();
});
