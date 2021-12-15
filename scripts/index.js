pasteCheckboxes();

function pasteCheckboxes() {
  let list = document.querySelectorAll("li");
  for (var i = 0; i < list.length; i++) {
    let checkbox = document.createElement("input");
    checkbox.classList.add("sidebar__check-input");
    checkbox.classList.add("form-check-input");
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.id = "id__" + i;

    if (list[i].classList.contains("list__crossed")) {
      checkbox.defaultChecked = true;
    }

    let label = document.createElement("label");
    label.classList.add("sidebar__check-label");
    label.classList.add("form-check-label");
    label.htmlFor = "id__" + i;
    label.innerHTML = list[i].innerText;

    list[i].innerText = "";
    list[i].insertAdjacentElement("afterbegin", checkbox);
    list[i].insertAdjacentElement("beforeend", label);
  }
}

function setUl() {
  document.querySelector("#list").innerHTML =
    document.querySelector("#sidebar__textarea").value;
  pasteCheckboxes();
  setQueries();
}

function downloadInnerHtml(filename, el, mimeType) {
  let elHtml = document.querySelector(el).innerHTML;
  let link = document.createElement("a");
  mimeType = mimeType || "text/plain";

  link.setAttribute("download", filename);
  link.setAttribute(
    "href",
    "data:" + mimeType + ";charset=utf-8," + encodeURIComponent(elHtml)
  );
  link.click();
}

let fileName = "ul.txt"; // You can use the .txt extension if you want
