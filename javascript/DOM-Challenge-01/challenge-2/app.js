const heading = document.getElementById("mainHeading");

const allButtons = Array.from(
  document.querySelector(".color-buttons").children
);

allButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.textContent !== "Reset") {
      heading.style.color = btn.textContent.toLowerCase();
    } else {
      heading.style.color = "black";
    }
  });
});
