function checkAnswer(questionId, correctAnswer) {
  const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
  const resultElement = document.getElementById(`result_${questionId}`);

  if (selectedAnswer) {
    if (selectedAnswer.value === correctAnswer) {
      resultElement.textContent = "正解！";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "不正解...";
      resultElement.style.color = "red";
    }
  } else {
    resultElement.textContent = "回答を選択してください。";
    resultElement.style.color = "orange";
  }
}