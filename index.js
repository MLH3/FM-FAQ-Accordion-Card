const accordionEl = document.querySelectorAll(".accordion");
const labelEl = document.querySelectorAll(".label");
const contentEl = document.querySelectorAll(".content");
const arrowEl = document.querySelectorAll(".arrow");

for (let i = 0; i < accordionEl.length; i++) {
  accordionEl[i].addEventListener("click", () => {
    contentEl[i].classList.toggle("hidden");
    labelEl[i].classList.toggle("active");
    arrowEl[i].classList.toggle("rotate");
  });
}
