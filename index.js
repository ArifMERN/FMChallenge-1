var open = document.getElementById("open");
var close = document.getElementById("close");
var menu = document.getElementById("menu");
open.addEventListener("click", () => {
  menu.style.display = "flex";
});
close.addEventListener("click", () => {
  menu.style.display = "none";
});
