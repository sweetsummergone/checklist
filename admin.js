const button_dark = document.querySelector("#button_dark");
const button_sidebar = document.querySelector("#button_sidebar");
const button_closer = document.querySelector("#sidebar_closer");
const lis = document.querySelectorAll("li");

button_sidebar.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

button_closer.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

button_dark.addEventListener("click", () => {
  document.querySelector("#main").classList.toggle("main_theme-dark");
});

lis.forEach(function (node, idx) {
  node.addEventListener(
    "click",
    (event) => {
      if (event.target.tagName.toUpperCase() === "LABEL") {
        return;
      }
      event.target.parentElement.classList.toggle("crossed");
    },
    false
  );
});
