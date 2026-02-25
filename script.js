import { questions } from "./questions.js";

// ----- State -----
let currentIndex = 0;

// ----- DOM refs -----
const questionCard = document.getElementById("question-card");
const questionId = document.getElementById("question-id");
const questionCategory = document.getElementById("question-category");
const questionSignWrap = document.getElementById("question-sign-wrap");
const questionSignImage = document.getElementById("question-sign-image");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");
const progressTotal = document.querySelector(".progress-total");
const questionJumpInput = document.getElementById("question-jump");
const toastEl = document.getElementById("toast");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// ----- Toast -----
let toastTimeout = null;
function showToast(message, isCorrect) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toastEl.textContent = message;
  toastEl.className = "toast visible " + (isCorrect ? "correct" : "incorrect");
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("visible");
    toastTimeout = null;
  }, 1000);
}

// ----- Render current question -----
function renderQuestion() {
  const total = questions.length;
  if (total === 0) {
    questionId.textContent = "";
    questionCategory.textContent = "";
    questionSignWrap.hidden = true;
    questionSignImage.src = "";
    questionText.textContent = "لا توجد أسئلة.";
    questionText.hidden = false;
    answersList.innerHTML = "";
    progressTotal.textContent = "0";
    questionJumpInput.value = "0";
    questionJumpInput.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    return;
  }

  const q = questions[currentIndex];
  questionId.textContent = q.id != null ? "#" + q.id : "";
  questionCategory.textContent = q.category || "";
  const isSign = (q.category || "").toLowerCase() === "signs";
  if (isSign) {
    questionSignWrap.hidden = false;
    questionSignImage.src = "signs images/" + q.id + ".png";
    questionSignImage.alt = q.question || "Road sign";
    questionText.textContent = "";
    questionText.hidden = true;
  } else {
    questionSignWrap.hidden = true;
    questionSignImage.src = "";
    questionText.textContent = q.question || "";
    questionText.hidden = false;
  }
  progressTotal.textContent = String(total);
  questionJumpInput.value = String(currentIndex + 1);
  questionJumpInput.min = "1";
  questionJumpInput.max = String(total);
  questionJumpInput.disabled = false;

  answersList.innerHTML = "";
  (q.answers || []).forEach((answer) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = answer;
    button.addEventListener("click", () => {
      console.log(3);
      const correct = answer === q.correctAnswer;
      showToast(correct ? "Correct!" : "Incorrect.", correct);
    });
    li.appendChild(button);
    answersList.appendChild(li);
  });

  btnPrev.disabled = currentIndex <= 0;
  btnNext.disabled = currentIndex >= total - 1;
}

// ----- Navigation -----
function goPrev() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
}

function goNext() {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  }
}

btnPrev.addEventListener("click", goPrev);
btnNext.addEventListener("click", goNext);

// ----- Jump to question -----
function jumpToQuestion() {
  const total = questions.length;
  if (total === 0) return;
  let num = parseInt(questionJumpInput.value, 10);
  if (Number.isNaN(num) || num < 1) num = 1;
  if (num > total) num = total;
  currentIndex = num - 1;
  questionJumpInput.value = String(num);
  renderQuestion();
}

questionJumpInput.addEventListener("change", jumpToQuestion);
questionJumpInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    jumpToQuestion();
  }
});

// ----- Initial render -----
renderQuestion();
