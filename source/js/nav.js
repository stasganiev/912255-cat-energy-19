var siteNav = document.querySelector(".main-nav");
var siteNavBtn = document.querySelector(".btn__burger-js");

siteNav.classList.remove("navbar__js_nojs");

siteNavBtn.addEventListener("click", function() {
  if (siteNav.classList.contains("navbar__js_closed")) {
    siteNav.classList.remove("navbar__js_closed");
    siteNav.classList.add("navbar__js_opend");
  } else {
    siteNav.classList.add("navbar__js_closed");
    siteNav.classList.remove("navbar__js_opend");
  }
});
