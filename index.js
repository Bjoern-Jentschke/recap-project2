// phew… not a lot going on here. Please add some code!

// 1. add toggle function to bookmark
console.clear();

const buttonBookmark = document.querySelector('[data-js="bookmarkToggle"]')

console.log(buttonBookmark);

buttonBookmark.addEventListener("click", () => {
    buttonBookmark.classList.toggle("bookmark--active")
})

// 2. add hidden function to answer box
const answer = document.querySelector('[data-js="showAnswer"]');
const answerText = document.querySelector('[data-js="textAnswer"]')

answer.addEventListener("click", () => {
    answerText.classList.toggle("card__answer--active");
    
    if (answerText.classList.contains("card__answer--active")) {
        answer.textContent = "Hide answer";
    } else {
        answer.textContent = "Show answer";
    }
})

