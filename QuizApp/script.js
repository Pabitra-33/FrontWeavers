const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Display Object Management",
    c: "Document Object Management",
    d: "Display Object Model",
    correct: "a",
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script href='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script src='xxx.js'>",
    d: "<script file='xxx.js'>",
    correct: "c",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "font",
    b: "class",
    c: "style",
    d: "styles",
    correct: "c",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Tool Multi Language",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz(); // Initial call to load the first quiz question

// Load the quiz question and answers
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Deselect all answer choices
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Get the selected answer
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Handle the submit button click
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
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly 🎉</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});