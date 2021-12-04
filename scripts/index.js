pasteCheckboxes();

function pasteCheckboxes() {
  var list = document.querySelectorAll("li");
  // appending the checkbox
  for (var i = 0; i < list.length; i++) {
    // creating checkbox element
    var checkbox = document.createElement("input");

    // Assigning the attributes
    // to created checkbox
    checkbox.classList.add("sidebar__check-input");
    checkbox.classList.add("form-check-input");
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.id = "id__" + i;
    if (list[i].classList.contains("list__crossed")) {
      checkbox.defaultChecked = true;
    }

    var label = document.createElement("label");
    label.classList.add("sidebar__check-label");
    label.classList.add("form-check-label");
    label.htmlFor = "id__" + i;

    org_html = list[i].innerHTML;
    new_html =
      checkbox.outerHTML +
      label.outerHTML.substring(0, label.outerHTML.length - 8) + // Only for label type
      org_html +
      "</label>";
    list[i].innerHTML = new_html;
  }
}

function setul() {
  document.querySelector("#content").innerHTML =
    document.querySelector("#sidebar__textarea").value;
  pasteCheckboxes();
  setlis();
}

function downloadInnerHtml(filename, el, mimeType) {
  var elHtml = document.querySelector(el).innerHTML;
  var link = document.createElement("a");
  mimeType = mimeType || "text/plain";

  link.setAttribute("download", filename);
  link.setAttribute(
    "href",
    "data:" + mimeType + ";charset=utf-8," + encodeURIComponent(elHtml)
  );
  link.click();
}

var fileName = "ul.txt"; // You can use the .txt extension if you want
