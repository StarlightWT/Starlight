var lastElement;

function selectYear(year) {
  if (lastElement) lastElement.setAttribute("class", "year");
  var element = document.getElementById(year);
  element.setAttribute("class", "year active");
  lastElement = element;
}

function copy(text) {
  navigator.clipboard.writeText(text);
  var element = document.getElementById("copy_notif");
  element.setAttribute("class", "copied_text_obj active");
  setTimeout(() => {
    var element = document.getElementById("copy_notif");
    element.setAttribute("class", "copied_text_obj");
  }, 3000);
}
