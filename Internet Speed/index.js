document.querySelector("button").addEventListener("click", (e) => {
  var imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG",
    downloadSize = 8576988,
    time_start,
    time_end,
    downloadSrc = new Image();
  document.querySelector(".loader-content").classList.add("hide");
  document.querySelector(".loader").classList.remove("hide");
  time_start = new Date().getTime();
  var cacheImg = "?" + time_start;
  downloadSrc.src = imageLink + cacheImg;
  downloadSrc.onload = () => {
    time_end = new Date().getTime();
    var timeDuration = (time_end - time_start) / 1000;
    var speed = ((downloadSize / timeDuration / 1024 / 1024) * 8).toFixed(2);
    let i = 0;
    const animate = () => {
      if (i < speed) {
        document.querySelector(".content").innerHTML =
          i.toFixed(2) + "<small>Mbps</small>";
        setTimeout(animate, 20);
      } else {
        document.querySelector(".content").innerHTML =
          speed + "<small>Mbps</small>";
      }
      i += 1.01;
    };
    animate();
    document.querySelector(".loader-content").classList.remove("hide");
    document.querySelector(".loader-content").classList.add("result");
    document.querySelector(".loader").classList.add("hide");
    document.querySelector(".content").classList.remove("hide");
    e.target.innerText = "Check Again";
  };
});
