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
        c: "Data Object Model",
        d: "Document Object Management",
        correct: "a",
      },
      {
        question: "Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: "IBM",
        correct: "a",
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "<!-- -->",
        d: "#",
        correct: "a",
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
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
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

    const questionEl = document.getElementById("question");
    const answersEls = document.querySelectorAll(".answer");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
    const resultEl = document.getElementById("result");
    const timerEl = document.getElementById("timer");

    let currentQuiz = 0;
    let score = 0;
    let timeLeft = 15;
    let timer;

    loadQuiz();

    function loadQuiz() {
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;

      // Reset and start timer
      timeLeft = 15;
      timerEl.innerText = `⏳ Time Left: ${timeLeft}s`;
      clearInterval(timer);
      timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      timeLeft--;
      timerEl.innerText = `⏳ Time Left: ${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion(); // auto move to next
      }
    }

    function deselectAnswers() {
      answersEls.forEach(el => el.checked = false);
    }

    function getSelected() {
      let answer;
      answersEls.forEach(el => {
        if (el.checked) {
          answer = el.id;
        }
      });
      return answer;
    }

    submitBtn.addEventListener("click", () => {
      clearInterval(timer);
      checkAnswerAndProceed();
    });

    function checkAnswerAndProceed() {
      const answer = getSelected();
      if (answer && answer === quizData[currentQuiz].correct) {
        score++;
      }
      nextQuestion();
    }

    function nextQuestion() {
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        document.querySelector(".quiz-container").innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly 🎉</h2>
          <button onclick="location.reload()">Restart Quiz</button>
        `;
      }
    }