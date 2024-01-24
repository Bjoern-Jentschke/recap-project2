// phew… not a lot going on here. Please add some code!
console.clear();

const buttonBookmark = document.querySelector('[data-js="bookmarkToggle"]')

console.log(buttonBookmark);

buttonBookmark.addEventListener("click", () => {
    buttonBookmark.classList.toggle("bookmark--switchactive")
})

