let togglenavbar = document.querySelector("#togglenavbar");
let menu = document.querySelector("#menu");
let menutoggle = false;
const togglenavbarFunc = () => {
  menutoggle = !menutoggle;
  if (menutoggle) {
    menu.classList.remove("hide-nav");
    togglenavbar.classList.add("button-active");
  } else {
    menu.classList.add("hide-nav");
    togglenavbar.classList.remove("button-active");
  }
};
togglenavbar.addEventListener("click", togglenavbarFunc);
