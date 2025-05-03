function checkAnswers() {
    const correctAnswers = {
        q1: 'A',
        q2: 'B',
        q3: 'B',
        q4: 'C',
        q5: 'B',
        q6: 'C',
        q7: 'C',
        q8: 'B',
        q9: 'B',
        q10: 'C',
        q11: 'B',
        q12: 'B',
        q13: 'B',
        q14: 'C',
        q15: 'A',
        q16: 'A',
        q17: 'A',
        q18: 'B'
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (const questionId in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[questionId]) {
            score++;
        }
    }

    const finalResultElement = document.getElementById('final-result');
    finalResultElement.textContent = `あなたの正解数は ${score} / ${totalQuestions} です！`;
}

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.textContent = 'まとめて回答する';
    submitButton.onclick = checkAnswers;
    document.body.appendChild(submitButton);

    const finalResultElement = document.createElement('p');
    finalResultElement.id = 'final-result';
    document.body.appendChild(finalResultElement);
});