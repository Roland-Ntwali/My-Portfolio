const menu_button = document.getElementById("menu_btn");
const close_menu = document.getElementById("close_menu");

menu_button.addEventListener("click", () => {
  mobile_menu.classList.add("show");
});

close_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("show");
});
