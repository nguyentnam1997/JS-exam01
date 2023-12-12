//2. Kiểm tra DOM
const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

const quizContainer = document.querySelector(".quiz-container");
quizContainer.innerHTML = "";
quizes.forEach((quiz) => {
  const quizItem = document.createElement("div");
  quizItem.classList.add("quiz-item");

  const questionHeader = document.createElement("h3");
  questionHeader.textContent = `Câu ${quiz.id} : ${quiz.question}`;

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("quiz-answer");

  // Tạo một biến để đảm bảo rằng name của radio button là duy nhất cho mỗi câu hỏi
  //const radioName = `answer-${quiz.id}`;

  quiz.answers.forEach((answer) => {
    const answerItem = document.createElement("div");
    answerItem.classList.add("quiz-answer-item");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `${quiz.id}`; // Đặt tên radio button theo biến radioName

    const label = document.createElement("label");
    label.textContent = answer;

    answerItem.appendChild(input);
    answerItem.appendChild(label);

    answerContainer.appendChild(answerItem);
  });

  quizItem.appendChild(questionHeader);
  quizItem.appendChild(answerContainer);

  quizContainer.appendChild(quizItem);
});

// Lấy danh sách tất cả các input radio
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Hàm chọn ngẫu nhiên một số từ 0 đến n - 1
function getRandomIndex(n) {
  return Math.floor(Math.random() * n);
}

// Hàm chọn ngẫu nhiên một câu trả lời và đánh dấu là đã chọn
function randomAnswers() {
  quizes.forEach((quiz) => {
    const radioName = `${quiz.id}`;
    const radioGroup = document.querySelectorAll(`input[name="${radioName}"]`);
    console.log(radioGroup);

    // Chọn ngẫu nhiên một câu trả lời
    const randomIndex = getRandomIndex(quiz.answers.length);
    const selectedAnswer = quiz.answers[randomIndex];

    // Đánh dấu là đã chọn cho radio button tương ứng
    if (radioGroup[selectedAnswer - 1]) {
        radioGroup[selectedAnswer - 1].checked = true;
      }
  });
}

// Gán sự kiện cho nút "Random Answer"
const randomButton = document.getElementById("btn");
randomButton.addEventListener("click", randomAnswers);
