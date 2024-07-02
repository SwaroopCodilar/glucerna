document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".cmp-accordion__button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const panel = this.closest(".cmp-accordion__item").querySelector(
        ".cmp-accordion__panel"
      );
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", !isExpanded);

      if (isExpanded) {
        panel.classList.remove("cmp-accordion__panel--expanded");
        panel.style.maxHeight = "0";
      } else {
        panel.classList.add("cmp-accordion__panel--expanded");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
