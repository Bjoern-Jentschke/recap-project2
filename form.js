console.clear();
// Task 3: Create new Cards

const form = document.querySelector('[data-js="form"]');
const unorderedList = document.querySelector('[data-js="unordered"]');
const textareaOne = document.querySelector('[data-js="textareaOne"]');
const textareaTwo = document.querySelector('[data-js="textareaTwo"]');
const inputTag = document.querySelector('[data-js="inputTag"]');

console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    //rebuild the card
   const newList = document.createElement("li");
   newList.classList.add("card-list__item");
   unorderedList.append(newList);

   const newArticle = document.createElement("article");
   newArticle.classList.add("card");
   newList.append(newArticle);

   const newH2 = document.createElement("h2");
   newH2.classList.add("card__question");
   newH2.textContent = textareaOne.value;
   newArticle.append(newH2);

   const newButton = document.createElement("button");
   newButton.classList.add("card__button-answer");
   newButton.textContent = "Show Answer";
   newButton.type ="button";
   newArticle.append(newButton);

   const newP = document.createElement("p");
   newP.classList.add("card__answer", "card__answer--active");
   newP.textContent = textareaTwo.value;
   newArticle.append(newP);

   const newUnordered = document.createElement("ul");
   newUnordered.classList.add("card__tag-list");
   newArticle.append(newUnordered);

   const tagList = document.createElement("li");
   tagList.classList.add("card__tag-list-item");
   tagList.textContent = `#${inputTag.value}`;
   newUnordered.append(tagList);

   const newDiv = document.createElement("div");
   newDiv.classList.add("card__button-bookmark");
   newArticle.append(newDiv);

   const bookmarkButton = document.createElement("button");
   bookmarkButton.classList.add("bookmark");
   bookmarkButton.type ="button";
   bookmarkButton.innerHTML = (`<svg class="bookmark__icon" 
   xmlns="http://www.w3.org/2000/svg" 
   viewbox="0 0 24 24">
   <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 
   3V5c0-1.1-.9-2-2-2z"/>
   </svg>`)
   newDiv.append(bookmarkButton);
});

// Task 4: Form field text counter

const amountLeft = document.querySelector('[data-js="amountLeft"]');
const amountLeft2 = document.querySelector('[data-js="amountLeft2"]');
const maxLength1 = textareaOne.getAttribute('["maxlength"]');
const maxLength2 = textareaTwo.getAttribute('["maxlength"]');

const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
  };
  
  updateAmountLeft(maxLength1);
  
  textareaOne.addEventListener("input", () => {
    updateAmountLeft(maxLength1 - textareaOne.value.length);
  });


  const updateAmountLeft2 = (value) => {
    amountLeft2.innerText = value;
  };
  
  updateAmountLeft2(maxLength2);
  
  textareaTwo.addEventListener("input", () => {
    updateAmountLeft2(maxLength2 - textareaTwo.value.length);
  });







// other Solution for the svg bookmark without .innerHtml after research
// const bookmarkButton = document.createElement("button");
// bookmarkButton.classList.add("bookmark");
// bookmarkButton.type = "button";
// const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svg.classList.add("bookmark__icon");
// svg.setAttribute("viewbox", "0 0 24 24");
// const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
// path.setAttribute("d", "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z");
// svg.appendChild(path);
// bookmarkButton.appendChild(svg);
// newDiv.append(bookmarkButton);


