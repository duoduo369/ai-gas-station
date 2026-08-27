function updateFeedback(element, correct, message) {
  element.textContent = message;
  element.className = `feedback ${correct ? "success" : "error"}`;
}

function initQuiz() {
  const quizItems = document.querySelectorAll("[data-quiz-answer]");

  quizItems.forEach((item) => {
    const answer = item.getAttribute("data-quiz-answer");
    const explanation = item.getAttribute("data-quiz-explanation") || "";
    const feedback = item.querySelector(".feedback");

    item.querySelectorAll(".quiz-option").forEach((button) => {
      button.addEventListener("click", () => {
        const choice = button.getAttribute("data-choice");
        const correct = choice === answer;
        const prefix = correct ? "答对了：" : "再试一次：";
        updateFeedback(feedback, correct, `${prefix}${explanation}`);
      });
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuiz);
} else {
  initQuiz();
}
