// Start Financial Literacy Quiz
document.getElementById('start-quiz-btn').addEventListener('click', function() {
    window.scrollTo(0, document.getElementById('quiz').offsetTop);
    loadQuiz();
});

let currentQuestion = 0;
const quizData = [
    {
        question: 'What is the primary purpose of a credit score?',
        options: ['To calculate your income', 'To determine your loan eligibility', 'To track your spending habits', 'None of the above'],
        correct: 1
    },
    {
        question: 'Which of the following is considered a good savings practice?',
        options: ['Spending all your income', 'Saving at least 20% of your income', 'Relying entirely on credit', 'Avoiding savings altogether'],
        correct: 1
    }
    // Add more questions as needed
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <p>${quizData[currentQuestion].question}</p>
        ${quizData[currentQuestion].options.map((option, index) => `
            <button class="option" data-index="${index}">${option}</button>
        `).join('')}
    `;

    // Event listener for answer selection
    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(event) {
    const selectedOption = parseInt(event.target.getAttribute('data-index'));
    if (selectedOption === quizData[currentQuestion].correct) {
        // Correct answer, increase score (if needed)
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quiz-feedback').style.display = 'block';
    document.getElementById('score').innerText = '75%'; // Just an example
    document.getElementById('feedback').innerText = 'Great job! You have a solid understanding of personal finance.';
    document.getElementById('submit-quiz-btn').style.display = 'none';
}

// Contact Form Submission (for demonstration)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been submitted!');
});
