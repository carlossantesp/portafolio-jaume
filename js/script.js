const links = document.querySelectorAll(".menu ul a");

links.forEach((link) => {
  link.addEventListener("click", smoothScrollHandler);
});

function smoothScrollHandler(e) {
  e.preventDefault();
  clearLinksActive();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
  this.classList.add("is-active");
}

function clearLinksActive() {
  links.forEach((link) => {
    link.classList.remove("is-active");
  });
}
function onTopHandler() {
  clearLinksActive();
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
