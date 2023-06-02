function copy(text) {
  navigator.clipboard.writeText(text);
  var element = document.getElementById("copy_notif");
  element.setAttribute("class", "copied_text_obj active");
  setTimeout(() => {
    var element = document.getElementById("copy_notif");
    element.setAttribute("class", "copied_text_obj");
  }, 3000);
}

function hideNav() {
  const nav = document.getElementById("nav_menu_backdrop");
  nav.setAttribute("style", "display:none;");
}
function showNav() {
  const nav = document.getElementById("nav_menu_backdrop");
  nav.setAttribute("style", "display:block;");
}
