const height = document.getElementById("height");
const weight = document.getElementById("weight");
const text = document.getElementById("text");
const result = document.getElementById("result");

height.addEventListener("input", getData);
weight.addEventListener("input", getData);

function getData() {
  const h = height.value / 100;
  const w = weight.value;

  const imt = w / (h * h);

  result.value = imt.toFixed(1);

  if (imt < 18.5) {
    text.textContent = "Недостаточная масса тела.";
    result.style.color = "red";
  } else if (imt < 25) {
    text.textContent = "Норма.";
    result.style.color = "green";
  } else if (imt < 30) {
    text.textContent = "Избыточная масса тела.";
    result.style.color = "orange";
  } else {
    text.textContent = "Ожирение";
    result.style.color = "red";
  }
}
