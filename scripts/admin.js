const button_dark = document.querySelector("#button__dark-mode");
const button_sidebar = document.querySelector("#button__sidebar-toggle");
const button_closer = document.querySelector("#sidebar__closer");
const lis = document.querySelectorAll("li");

button_sidebar.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("sidebar-collapsed");
});

button_closer.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("sidebar-collapsed");
});

button_dark.addEventListener("click", () => {
  document.getElementById("main").classList.toggle("main__theme-dark");
});

lis.forEach(function (node, idx) {
  node.addEventListener(
    "click",
    (event) => {
      if (event.target.tagName.toUpperCase() === "LABEL") {
        return;
      }
      event.target.parentElement.classList.toggle("list__crossed");
    },
    false
  );
});
