const quizzes = {
  HTML: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "What is the correct HTML element for the largest heading?", options: ["<h1>", "<heading>", "<h6>"], answer: 0 },
    { question: "Which HTML attribute specifies an alternate text for an image?", options: ["alt", "title", "src"], answer: 0 },
    { question: "Which doctype is correct for HTML5?", options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE html5>"], answer: 0 },
    { question: "Which HTML element defines the title of a document?", options: ["<title>", "<meta>", "<head>"], answer: 0 },
  ],
  CSS: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: 0 },
    { question: "Which property is used to change the background color?", options: ["color", "background-color", "bg-color"], answer: 1 },
    { question: "Which CSS property is used to change the text color?", options: ["color", "font-color", "text-color"], answer: 0 },
    { question: "How do you add a comment in CSS?", options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"], answer: 1 },
    { question: "Which property is used to change font size?", options: ["font-size", "text-size", "font-weight"], answer: 0 },
  ],
  // Add JavaScript questions similarly
};

let currentQuiz = [];
let score = 0;

function startQuiz(subject) {
  currentQuiz = quizzes[subject];
  score = 0;
  document.getElementById("homepage").style.display = "none";
  document.getElementById("quizpage").style.display = "block";
  document.getElementById("quiz-title").textContent = `${subject} Quiz`;
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = "";
  currentQuiz.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options
          .map((opt, i) => `<button onclick="selectAnswer(${index}, ${i}, this)">${opt}</button>`)
          .join("")}
      </div>
    `;
    questionsDiv.appendChild(questionDiv);
  });
}

function selectAnswer(questionIndex, optionIndex, btn) {
  const options = btn.parentNode.querySelectorAll("button");
  options.forEach(option => option.classList.remove("selected"));
  btn.classList.add("selected");
  currentQuiz[questionIndex].selected = optionIndex;
}

function submitQuiz() {
  score = 0;
  currentQuiz.forEach(q => {
    if (q.selected === q.answer) score++;
  });
  document.getElementById("quizpage").style.display = "none";
  document.getElementById("resultpage").style.display = "block";
  const resultMessage = score >= currentQuiz.length / 2 ? "Good job!" : "Better luck next time!";
  document.getElementById("result").textContent = `You scored ${score}/${currentQuiz.length}. ${resultMessage}`;
}

function generateCertificate() {
  document.getElementById("resultpage").style.display = "none";
  document.getElementById("certificatepage").style.display = "block";
}

function createCertificate(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const subject = document.getElementById("quiz-title").textContent.split(" ")[0];
  document.getElementById("cert-name").textContent = `Name: ${name}`;
  document.getElementById("cert-subject").textContent = `Subject: ${subject}`;
  document.getElementById("certificate").style.display = "block";
}
