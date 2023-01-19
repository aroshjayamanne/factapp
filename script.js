//hide the form when the page is loaded
const btn = document.querySelector(".btn-opn");
const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});
