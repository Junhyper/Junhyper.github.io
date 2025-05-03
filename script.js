const quizData = [
  {
    question: "AI技術を活用することで、銀行業務で最も効果があるとされる分野はどれか？",
    options: ["顧客対応", "融資審査", "会計処理", "マーケティング"],
    answer: 1, // 「融資審査」
    explanation: "AI技術は融資審査の効率化や精度向上に大きな役割を果たしています。",
  },
  {
    question: "AIを活用した顧客対応で代表的なものはどれか？",
    options: ["チャットボット", "ATM", "ネットバンキング", "支店の設置"],
    answer: 0, // 「チャットボット」
    explanation: "AIによるチャットボットは、顧客対応を24時間自動で行うことができます。",
  },
  {
    question: "AIを使った融資審査で最も重要な要素はどれか？",
    options: ["顧客の信用スコア", "過去の取引履歴", "顧客の年齢", "住居の種類"],
    answer: 1, // 「過去の取引履歴」
    explanation: "AIは、過去の取引履歴や支払い履歴を分析し、融資審査の精度を向上させます。",
  },
  // 他の問題も追加
  // 問題4〜9をここに追加
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const questionData = quizData[currentQuestionIndex];
  document.getElementById('question').textContent = questionData.question;
  const optionsList = document.getElementById('options');
  optionsList.innerHTML = '';

  // ランダムに選択肢を並べ替え
  const shuffledOptions = [...questionData.options];
  shuffledOptions.sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((option, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="radio" name="option" value="${index}" id="option${index}" />
                   <label for="option${index}">${option}</label>`;
    optionsList.appendChild(li);
  });

  document.getElementById('explanation').textContent = '';
  updateButtons();
}

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("選択肢を選んでください。");
    return;
  }

  const selectedAnswer = parseInt(selectedOption.value);
  const questionData = quizData[currentQuestionIndex];

  // 解答をチェック
  if (selectedAnswer === questionData.answer) {
    score++;
  }

  // 解説表示
  document.getElementById('explanation').textContent = questionData.explanation;

  // 次の問題へ進むボタンを有効にする
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
    document.getElementById('previous-button').disabled = false;
  } else {
    showResultScreen();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function showResultScreen() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('submit-screen').classList.remove('hidden');
  document.getElementById('submit-result-button').disabled = false;
}

function submitResult() {
  document.getElementById('submit-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');

  // 結果を表示
  document.getElementById('score').textContent = `${score} / ${quizData.length}`;
}

function printResult() {
  window.print();
}

function goToStart() {
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
  score = 0;
  currentQuestionIndex = 0;
}
