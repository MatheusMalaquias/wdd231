const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close-modal");

openButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById(button.dataset.modal);
    modal.style.display = "flex";
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.modal);
    modal.style.display = "none";
  });
});