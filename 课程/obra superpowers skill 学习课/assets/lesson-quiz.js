function setFeedback(element, correct, message) {
  element.textContent = message;
  element.className = `feedback ${correct ? "success" : "error"}`;
}

function initLessonQuiz() {
  const items = document.querySelectorAll("[data-quiz-answer]");

  items.forEach((item) => {
    const answer = item.getAttribute("data-quiz-answer");
    const explanation = item.getAttribute("data-quiz-explanation") || "";
    const feedback = item.querySelector(".feedback");

    item.querySelectorAll(".quiz-option").forEach((button) => {
      button.addEventListener("click", () => {
        const choice = button.getAttribute("data-choice");
        const correct = choice === answer;
        const prefix = correct ? "答对了：" : "还差一点：";
        setFeedback(feedback, correct, `${prefix}${explanation}`);
      });
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLessonQuiz);
} else {
  initLessonQuiz();
}
