// phew… not a lot going on here. Please add some code!

// 1. add toggle function to bookmark
console.clear();

const buttonBookmark = document.querySelector('[data-js="bookmarkToggle"]')

console.log(buttonBookmark);

buttonBookmark.addEventListener("click", () => {
    buttonBookmark.classList.toggle("bookmark--active")
})

// 2. add hidden function to answer box

// answerbox1:
const answerButton = document.querySelector('[data-js="showAnswer"]');
const answerText = document.querySelector('[data-js="textAnswer"]');

answerButton.addEventListener("click", () => {
    answerText.classList.toggle("card__answer--active");
    
    if (answerText.classList.contains("card__answer--active")) {
        answerButton.textContent = "Hide answer";
    } else {
        answerButton.textContent = "Show answer";
    }
})

// answerbox2

const answerButtonTwo = document.querySelector('[data-js="showAnswerTwo"]');
const answerTextTwo = document.querySelector('[data-js="textAnswerTwo"]');

answerButtonTwo.addEventListener("click", () => {
    answerTextTwo.classList.toggle("card__answer--active");

   if (answerTextTwo.classList.contains("card__answer--active")) {
        answerButtonTwo.textContent = "Hide answer";
    } else {
        answerButtonTwo.textContent = "Show answer";
    }
});

// answerbox3

const answerButtonThree = document.querySelector('[data-js="showAnswerThree"]');
const answerTextThree = document.querySelector('[data-js="textAnswerThree"]');

answerButtonThree.addEventListener("click", () => {
    answerTextThree.classList.toggle("card__answer--active");

    if (answerTextThree.classList.contains("card__answer--active")) {
        answerButtonThree.textContent = "Hide answer";
    } else {
        answerButtonThree.textContent = "Show answer";
    }
});

