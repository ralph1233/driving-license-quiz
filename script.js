const questions = {
  page1: [
    {
      id: 1,
      category: "Law",
      question: "عند دخولك نفق أثناء القيادة نهاراً، عليك:",
      answers: [
        "تشغيل الإضاءة المنخفضة (أضواء التلاقي) وتخفيف السرعة",
        "استعمال الزمور",
        "تشغيل الإضاءة المنخفضة (أضواء التلاقي) وزيادة السرعة",
      ],
      correctAnswer: "تشغيل الإضاءة المنخفضة (أضواء التلاقي) وتخفيف السرعة",
    },
    {
      id: 2,
      category: "Law",
      question: "عند قيادتك لمركبة أثناء الليل خلف مركبة أخرى عليك:",
      answers: [
        "تشغيل الإضاءة المنخفضة (أضواء التلاقي)",
        "استعمال أضواء الطريق (الإضاءة العالية)",
        "عدم استعمال الضوء",
      ],
      correctAnswer: "تشغيل الإضاءة المنخفضة (أضواء التلاقي)",
    },
    {
      id: 3,
      category: "Law",
      question:
        "في حال ظهور مركبة من الجهة المعاكسة أثناء استعمالك الإضاءة العالية ليلاً عليك:",
      answers: [
        "إطفاء الضوء نهائياً",
        "قطع الضوء بالتناوب بين ضوء الطريق وضوء التلاقي",
        "الانتقال إلى ضوء التلاقي",
      ],
      correctAnswer: "الانتقال إلى ضوء التلاقي",
    },
    {
      id: 4,
      category: "Law",
      question: "عند تعبئة خزان مركبتك بالوقود، عليك:",
      answers: [
        "ألا تهتم لأن هذا الأمر لا ينطوي على أي خطر",
        "أن تطفئ محرك المركبة",
        "أن تبقي المحرك شغالاً",
      ],
      correctAnswer: "أن تطفئ محرك المركبة",
    },
    {
      id: 5,
      category: "Safety",
      question:
        "عندما تتحول الإشارة من اللون الأخضر إلى اللون الأصفر لحظة عبور مركبتك للتقاطع، عليك:",
      answers: [
        "التوقف فوراً وسط التقاطع",
        "متابعة سيرك بانتباه",
        "تركيز نظرك على الإشارة",
      ],
      correctAnswer: "متابعة سيرك بانتباه",
    },
    {
      id: 6,
      category: "Law",
      question: "عند شعورك بالنعاس الشديد أثناء القيادة، عليك:",
      answers: [
        "أن تتناول الأدوية المنشطة ومتابعة السير",
        "ألا تهتم للأمر لأن النعاس يزول سريعاً",
        "أن تتوقف فوراً في مكان آمن لتأخذ قسطاً من الراحة",
      ],
      correctAnswer: "أن تتوقف فوراً في مكان آمن لتأخذ قسطاً من الراحة",
    },
    {
      id: 7,
      category: "Safety",
      question:
        "عند اقترابك من تقاطع معين يوجد قبله شرطي ينظم السير ووجود إشارة مرور ضوئية وإشارة سير ثابتة عليك الالتزام بـ:",
      answers: [
        "تعليمات شرطي السير",
        "الإشارة الضوئية فقط",
        "إشارة السير الثابتة فقط",
      ],
      correctAnswer: "تعليمات شرطي السير",
    },
    {
      id: 8,
      category: "Law",
      question: "فور جلوس السائق خلف المقود عليه أولاً أن:",
      answers: [
        "يعدل المقعد، ثم يعدل المرايا، ثم يربط حزام الأمان",
        "يربط حزام الأمان، ثم يعدل المرايا، ثم يعدل المقعد",
        "يربط حزام الأمان، ثم يعدل المقعد، ثم يعدل المرايا",
      ],
      correctAnswer: "يعدل المقعد، ثم يعدل المرايا، ثم يربط حزام الأمان",
    },
    {
      id: 9,
      category: "Law",
      question:
        "في كل مرة وقبل الانطلاق بالمركبة أو الدراجة لأول مرة، على السائق أن:",
      answers: [
        "يستمع إلى نشرة الأحوال الجوية",
        "يقوم بفحص روتيني لمختلف أنظمة المركبة",
        "لا يقوم بأي فحص طالما أن المحرك يعمل",
      ],
      correctAnswer: "يقوم بفحص روتيني لمختلف أنظمة المركبة",
    },
    {
      id: 10,
      category: "Law",
      question: "لا بأس على السائق أثناء القيادة أن:",
      answers: [
        "يقرأ الصحيفة",
        "يستعمل الهاتف",
        "يستمع إلى الراديو بصوت منخفض",
      ],
      correctAnswer: "يستمع إلى الراديو بصوت منخفض",
    },
    {
      id: 11,
      category: "Law",
      question: "على السائق والركاب أن يربطوا حزام الأمان:",
      answers: ["ضمن دقيقة من الانطلاق", "قبل الانطلاق", "قبل تشغيل المحرك"],
      correctAnswer: "قبل تشغيل المحرك",
    },
  ],
  page2: [
    {
      id: 12,
      category: "Law",
      question: "الهدف من مسند الرأس الموجود أعلى المقعد هو:",
      answers: [
        "منع انكسار الرقبة أو العنق إذا تعرضت المركبة لصدمة من الخلف",
        "استعماله كوسادة للنوم ليلاً في الرحلات الطويلة",
        "راحة الرأس أثناء الرحلة",
      ],
      correctAnswer:
        "منع انكسار الرقبة أو العنق إذا تعرضت المركبة لصدمة من الخلف",
    },
    {
      id: 13,
      category: "Law",
      question: "تقل قدرة السائق على التركيز أثناء القيادة بسبب:",
      answers: [
        "التمتع بالحيوية والنشاط",
        "الإرهاق والتعب والنعاس",
        "القيادة داخل المدينة",
      ],
      correctAnswer: "الإرهاق والتعب والنعاس",
    },
    {
      id: 14,
      category: "Law",
      question:
        "استخدام الهاتف الخلوي أثناء القيادة يؤثر على قيادة السائق بشكل:",
      answers: ["إيجابي", "سلبي", "سلبي وإيجابي معاً"],
      correctAnswer: "سلبي",
    },
    {
      id: 15,
      category: "Law",
      question: "النصيحة الأولى للسائق المتعاطي للكحول هي:",
      answers: [
        "أن يقود على سرعة منخفضة",
        "ألا يقود حتى ينتهي مفعول الكحول",
        "لا بأس بالأمر",
      ],
      correctAnswer: "ألا يقود حتى ينتهي مفعول الكحول",
    },
    {
      id: 16,
      category: "Law",
      question: "إن القيادة تحت تأثير الأدوية المنومة تكون:",
      answers: ["خطرة", "أقل تعباً", "غير خطرة"],
      correctAnswer: "خطرة",
    },
    {
      id: 17,
      category: "Law",
      question: "إذا علقت دواسة الوقود أثناء القيادة، عليك فوراً أن:",
      answers: [
        "تطفئ المحرك دون قفل المقود",
        "تشد فرامل اليد",
        "تصغّر ترس السرعة",
      ],
      correctAnswer: "تطفئ المحرك دون قفل المقود",
    },
    {
      id: 18,
      category: "Law",
      question: "إذا انفتح غطاء المحرك فجأة أثناء سير المركبة، عليك فوراً أن:",
      answers: [
        "تزيد سرعتك قليلاً",
        "تخفف السرعة تدريجياً لتوقف المركبة إلى جانب الطريق",
        "تضغط على الفرامل بشدة",
      ],
      correctAnswer: "تخفف السرعة تدريجياً لتوقف المركبة إلى جانب الطريق",
    },
    {
      id: 19,
      category: "Law",
      question:
        "في حال المطر الشديد، وحتى يتفادى السائق المخاطر، يجب عليه أن يبدأ رحلته:",
      answers: [
        "في وقت أبكر من المعتاد",
        "في وقت متأخر عن المعتاد",
        "متقيداً بالوقت",
      ],
      correctAnswer: "في وقت أبكر من المعتاد",
    },
    {
      id: 20,
      category: "Law",
      question: "قبل أن يصعد السائق إلى مركبته عليه أولاً أن:",
      answers: [
        "يتأكد أن لديه وقت كاف",
        "ينظر تحت المركبة ويدور حولها",
        "يربط حزام الأمان",
      ],
      correctAnswer: "ينظر تحت المركبة ويدور حولها",
    },
    {
      id: 21,
      category: "Law",
      question:
        "يجب على سائق المركبة أثناء القيادة على طرقات مزدحمة أن يأخذ لمحة سريعة على المرايا مرة كل:",
      answers: ["45 ثانية", "30 ثانية", "4 إلى 8 ثواني"],
      correctAnswer: "4 إلى 8 ثواني",
    },
    {
      id: 22,
      category: "Law",
      question:
        "إذا أراد السائق أن ينعطف بمركبته إلى جهة اليمين، عليه قبل الانعطاف أن ينظر في:",
      answers: [
        "المرآة اليسرى فقط",
        "المرآة اليمنى فقط",
        "كل المرايا وخاصة في المرآة اليمنى والبقعة العمياء",
      ],
      correctAnswer: "كل المرايا وخاصة في المرآة اليمنى والبقعة العمياء",
    },
    // {
    //   id: 23,
    //   category: "Law",
    //   question:
    //     "الخطر الأكبر الذي تشكله المركبات المتوقفة إلى جانب الرصيف الأيمن على السائق المار بقربها هو:",
    //   answers: [
    //     "فتح أحد الأبواب فجأة",
    //     "نزول أحد الركاب",
    //     "خروج طفل بشكل مفاجئ من بين المركبات المتوقفة",
    //   ],
    //   correctAnswer: "خروج طفل بشكل مفاجئ من بين المركبات المتوقفة",
    // },
  ],
  // page3: [],
};

// ----- Flatten all questions from every page -----
const allQuestions = Object.keys(questions).reduce((acc, pageKey) => {
  return acc.concat(questions[pageKey]);
}, []);

// ----- State -----
let currentIndex = 0;

// ----- DOM refs -----
const questionCard = document.getElementById("question-card");
const questionCategory = document.getElementById("question-category");
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
  }, 2500);
}

// ----- Render current question -----
function renderQuestion() {
  const total = allQuestions.length;
  if (total === 0) {
    questionCategory.textContent = "";
    questionText.textContent = "لا توجد أسئلة.";
    answersList.innerHTML = "";
    progressTotal.textContent = "0";
    questionJumpInput.value = "0";
    questionJumpInput.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    return;
  }

  const q = allQuestions[currentIndex];
  questionCategory.textContent = q.category || "";
  questionText.textContent = q.question || "";
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
  if (currentIndex < allQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  }
}

btnPrev.addEventListener("click", goPrev);
btnNext.addEventListener("click", goNext);

// ----- Jump to question -----
function jumpToQuestion() {
  const total = allQuestions.length;
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
    e.preventDefault();
    jumpToQuestion();
  }
});

// ----- Initial render -----
renderQuestion();
