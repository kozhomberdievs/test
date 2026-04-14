const res = document.getElementById("res");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  if (num1 > num2) {
    res.textContent = ">";
  } else if (num1 < num2) {
    res.textContent = "<";
  } else {
    res.textContent = "=";
  }
});