const counters = document.querySelectorAll(".counter");
const updateCounter = (counter, target, increament) => {
  const counterVal = +counter.innerText;
  if (counterVal < target) {
    counter.innerText = `${counterVal + increament}`;
    setTimeout(()=>updateCounter(counter,target,increament),1);
  } else {
    counter.innerText = target;
  }
};
counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");
  const increament = target / 200;
  counter.innerText = "0";
  updateCounter(counter, target, increament);
});
