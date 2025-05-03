const quizData = [
  {
    question: "AIとは何の略でしょう？",
    options: ["Artificial Intelligence", "Automatic Information", "Advanced Interface", "Analog Input"],
    answer: "Artificial Intelligence",
    explanation: "AIは『Artificial Intelligence（人工知能）』の略です。"
  },
  {
    question: "銀行業務にAIを活用する主な目的は？",
    options: ["人手を減らすことだけ", "セキュリティを下げる", "業務の効率化と顧客サービス向上", "社員の監視"],
    answer: "業務の効率化と顧客サービス向上",
    explanation: "AIは業務効率化や顧客満足度向上などに活用されます。"
  },
  {
    question: "AIが得意とすることは？",
    options: ["直感的判断", "複雑な感情理解", "大量データの分析", "法律の解釈"],
    answer: "大量データの分析",
    explanation: "AIは大量のデータを高速に処理・分析するのが得意です。"
  },
  {
    question: "ChatGPTのような生成AIは何をする？",
    options: ["画像処理", "文章や会話を生成する", "会計処理", "ウイルス対策"],
    answer: "文章や会話を生成する",
    explanation: "生成AIは文章・会話・画像などを自動生成する技術です。"
  },
  {
    question: "AI導入により懸念されることは？",
    options: ["人手不足", "電力消費の低下", "仕事の奪取や偏見の助長", "言語能力の向上"],
    answer: "仕事の奪取や偏見の助長",
    explanation: "AIは人の仕事を奪うリスクや、データに基づく偏見を強化する恐れがあります。"
  },
  {
    question: "AIチャットボットの利点は？",
    options: ["常時対応が可能", "間違いが多い", "複雑な判断が得意", "人件費がかかる"],
    answer: "常時対応が可能",
    explanation: "チャットボットは24時間対応でき、簡単な問い合わせに自動応答可能です。"
  },
  {
    question: "AIの限界は？",
    options: ["正確な数値計算", "クリエイティブな発想", "大量処理", "論理演算"],
    answer: "クリエイティブな発想",
    explanation: "AIは創造性や倫理判断といった人間的要素にはまだ制限があります。"
  },
  {
    question: "AIが融資審査で活用されるとき、重要なのは？",
    options: ["データの質と偏りの排除", "速さだけ", "担当者の好み", "AIの名前"],
    answer: "データの質と偏りの排除",
    explanation: "誤ったデータや偏ったデータは不公平な審査を引き起こします。"
  },
  {
    question: "AIを活用した営業支援ツールの例は？",
    options: ["紙の名刺管理", "SalesforceのようなCRM", "FAX", "Excelのみ"],
    answer: "SalesforceのようなCRM",
    explanation: "CRM（顧客管理システム）ではAIが予測分析などに活用されています。"
  }
];

let currentQuestion = 0;
let score = 0;

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const quiz = quizData[currentQuestion];
  const options = shuffle([...quiz.options]);

  document.getElementById("question").innerText = quiz.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  options.forEach((option) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "radio";
    input.name = "option";
    input.value = option;
    input.id = option;

    label.htmlFor = option;
    label.textContent = option;

    li.appendChild(input);
    li.appendChild(label);
    optionsContainer.appendChild(li);
  });

  document.getElementById("explanation").innerText = "";
}

function submitAnswer() {
  const selected = document.querySelector("input[name='option']:checked");

  if (!selected) return alert("回答を選択してください。");

  const quiz = quizData[currentQuestion];
  const isCorrect = selected.value === quiz.answer;

  if (isCorrect) score++;

  document.getElementById("explanation").innerText = 
    (isCorrect ? "正解！" : "不正解。") + " " + quiz.explanation;

  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
    document.getElementById("next-button").disabled = true;
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("score").innerText = `${score} / ${quizData.length}`;
}

function printResult() {
  window.print();
}

function goToStart() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}
