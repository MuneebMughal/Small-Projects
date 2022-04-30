const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");
genJoke();
function genJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      joke.innerText = data.joke;
    });
}
jokeBtn.addEventListener("click", genJoke);
