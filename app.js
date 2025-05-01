const toggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
