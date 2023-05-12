// phew… not a lot going on here. Please add some code!
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

/* const answer = document.querySelector('data-js="card__answer');
const answerButton = document.querySelector('data-js="');
 */
const answer = document.querySelector('[data-js="card__answer"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
