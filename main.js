var lastElement;

function selectYear(year) {
  if (lastElement) lastElement.setAttribute("class", "year");
  var element = document.getElementById(year);
  element.setAttribute("class", "year active");
  lastElement = element;
}
