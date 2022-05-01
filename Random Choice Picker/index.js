const textArea = document.getElementById("textarea");
const tagsEl = document.querySelector(".tags");
textArea.addEventListener("keyup", (e) => {
  makeTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    selectRandomTag();
  }
});
textArea.focus();
function makeTags(value) {
  const tagValues = value
    .split(",")
    .filter((val) => val.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tagValues.forEach((tagVal) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.innerText = tagVal;
    tagsEl.appendChild(tag);
  });
}
function selectRandomTag() {
  const interval = setInterval(() => {
    const randomTag =
      tagsEl.childNodes[Math.floor(Math.random() * tagsEl.childNodes.length)];
    randomTag.classList.add("selected");
    setTimeout(() => {
      randomTag.classList.remove("selected");
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag =
        tagsEl.childNodes[Math.floor(Math.random() * tagsEl.childNodes.length)];
      randomTag.classList.add("selected");
    }, 100);
  }, 3000);
}
