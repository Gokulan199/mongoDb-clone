
// Word rotation
const words = ["Transactions", "Full Text Search", "Graph Data", " Vector Search", "AI","Streaming Data"];
let index = 0;
const wordSpan = document.querySelector(".rotate-word");

setInterval(() => {
  index = (index + 1) % words.length;
  wordSpan.textContent = words[index];
}, 3000);

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
