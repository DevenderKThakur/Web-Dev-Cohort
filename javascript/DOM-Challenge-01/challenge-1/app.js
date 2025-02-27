const bulb = document.getElementById("bulb");

const btn = document.getElementById("toggleButton");

const statusChange = document.getElementById("status");

const body = document.getElementById("body");

btn.addEventListener("click", function () {
  if (bulb.classList.contains("off")) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    bulb.classList.remove("off");
    btn.textContent = "Turn Off";
    statusChange.textContent = "Status: On";
  } else {
    bulb.classList.add("off");
    btn.textContent = "Turn On";
    statusChange.textContent = "Status: Off";
    body.style.backgroundColor = "#fff";
    body.style.color = "#333";
  }
});
