const menu_button = document.getElementById("menu_btn");
const close_menu = document.getElementById("close_menu");
const hide_menu = document.getElementById("hideb")

menu_button.addEventListener("click", () => {
  mobile_menu.classList.add("show");
  menu_button.style.display = 'none';
});

close_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("show");
  menu_button.classList.remove("mobile_menu");
  menu_btn.style.display = 'flex';
});

hide_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("show");
  menu_btn.style.display = 'flex';
});