const button_dark = document.querySelector("#button_dark");
const button_sidebar = document.querySelector("#button_sidebar");
const button_closer = document.querySelector("#sidebar_closer");

button_sidebar.addEventListener("click", (_) => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

button_closer.addEventListener("click", (_) => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

button_dark.addEventListener("click", (_) => {
  document.querySelector("#main").classList.toggle("main_theme-dark");
});

// function handleSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const value = Object.fromEntries(data.entries());
//   value.topics = data.getAll("topics");
//   console.log({ value });
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);
