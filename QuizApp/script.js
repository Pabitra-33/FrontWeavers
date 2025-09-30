document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.innerHTML = '<p>Quiz will be loaded here.</p>';
        // Load quiz questions dynamically
        fetch('quiz-questions.json')
            .then(response => response.json())
            .then(data => {
                // Process and display quiz questions
                displayQuizQuestions(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error loading quiz questions:', error);
            });
    }
    console.log("Quiz App Initialized");
    // Additional JavaScript functionality can be added here

    function displayQuizQuestions(questions) {
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = ''; // Clear previous content
            questions.forEach((question, index) => {
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');
                questionElement.innerHTML = `
                    <h3>Question ${index + 1}</h3>
                    <div class="question-text">
                        <p>${question.question}</p>
                        <img src="${question.image}" alt="Question Image">
                    </div>
                    <div class="options">
                        <ul>
                            ${question.options.map(option => `<li>${option}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="answer">
                        <strong>Answer:</strong> ${question.answer}
                    </div>
                `;
                quizContainer.appendChild(questionElement);
            });
        }
    }
});