const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (_) => {
    document.getElementById("sidebar").classList.toggle("collapsed");
  })
);

// function handleSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const value = Object.fromEntries(data.entries());
//   value.topics = data.getAll("topics");
//   console.log({ value });
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);
