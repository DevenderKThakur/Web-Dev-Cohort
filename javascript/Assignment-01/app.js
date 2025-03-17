const random_text = document.getElementById("random-text");

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

function copyTextFromClipboard() {
  const text = random_text.textContent;

  navigator.clipboard
    .writeText(text)
    .then(function () {
      alert("The Quote has been copied");
    })
    .catch((error) => console.log(error));
}

function shareQuoteOnTwitter() {
  const text = random_text.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}`;
  // console.log(text);
  window.open(twitterUrl, "_blank");
}

// API call on click of the btn
genrateQuoteBtn.addEventListener("click", getData);

// clippboard copy
copyTextBtn.addEventListener("click", copyTextFromClipboard);

// Share on twitter btn
shareTwitterBtn.addEventListener("click", shareQuoteOnTwitter);

// Onload of the webpage call the API
window.onload = getData;
