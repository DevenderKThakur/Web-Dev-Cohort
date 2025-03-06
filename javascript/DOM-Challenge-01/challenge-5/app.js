const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const captionText = document.getElementById("caption");

const imgGallery = document.getElementById("imageGallery");

const prevBtn = document.getElementById("prevButton");

const nextBtn = document.getElementById("nextButton");

const autotPlayBtn = document.getElementById("autoPlayButton");

const timerDisplay = document.getElementById("timerDisplay");

imgGallery.setAttribute("src", images[0].url);
captionText.textContent = images[0].caption;

let index = 0; // handles image index

let intervalId = null; // refrence to the setInteral

let state = false; // state of the autoplay btn

const transitionTime = 3;

let remainigTime = transitionTime;

let timerId = null;

function updateTimerTiminig() {
  timerDisplay.textContent = remainigTime;
}

nextBtn.addEventListener("click", function () {
  index += 1;
  if (index === images.length) {
    index = 0;
  }
  imgGallery.src = images[index].url;
  captionText.textContent = images[index].caption;
});

prevBtn.addEventListener("click", function () {
  index -= 1;
  if (index < 0) {
    index = images.length - 1;
  }
  imgGallery.src = images[index].url;
  captionText.textContent = images[index].caption;
});

autotPlayBtn.addEventListener("click", () => {
  if (!state) {
    state = true;
    autotPlayBtn.textContent = "Stop Auto Play";
    remainigTime = transitionTime;
    updateTimerTiminig();
    intervalId = setInterval(() => {
      index = (index + 1) % images.length;
      imgGallery.src = images[index].url;
      captionText.textContent = images[index].caption;
      remainigTime = transitionTime;
    }, transitionTime * 1000);

    timerId = setInterval(() => {
      remainigTime--;
      updateTimerTiminig();
    }, 1000);
  } else {
    state = false;
    autotPlayBtn.textContent = "Start Auto Play";
    clearInterval(intervalId);
    clearInterval(timerId);
  }
});
