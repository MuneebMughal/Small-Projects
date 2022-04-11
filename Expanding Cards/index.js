const panels = document.querySelectorAll(".panel");
panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    removeAllActive();
    panel.classList.add("active");
  })
);
const removeAllActive = () => {
  panels.forEach((panel) => panel.classList.remove("active"));
};
