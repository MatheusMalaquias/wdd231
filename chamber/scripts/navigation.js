const button = document.getElementById("menuButton");
const nav = document.getElementById("navMenu");

button.addEventListener("click", () => {
nav.classList.toggle("show");
});