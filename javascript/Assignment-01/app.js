const random_text = document.getElementById("random-text");

// 'https://api.freeapi.app/api/v1/public/cats/cat/random'

const copyTextBtn = document.getElementById("copy-text-btn");

const genrateQuoteBtn = document.getElementById("genrate-btn");

const shareTwitterBtn = document.getElementById("share-btn");

async function getData() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await response.json();
    random_text.textContent = `" ${data.data.content} "`;
  } catch (error) {
    console.log(error);
  }
}

// API call
genrateQuoteBtn.addEventListener("click", getData);

// clippboard copy
copyTextBtn.addEventListener("click", function () {
  const text = random_text.textContent;

  navigator.clipboard
    .writeText(text)
    .then(function () {
      alert("The Quote has been copied");
    })
    .catch((error) => console.log(error));
});

// Share on twitter btn
shareTwitterBtn.addEventListener("click", function () {
  const text = random_text.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}`;
  window.open(twitterUrl, "_blank");
});

window.onload = getData;
