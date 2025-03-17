# Random Quote Genrating website.

This project is a simple web application that allows users to:

- Copy quote to the clipboard
- Share the copied text on Twitter
- Fetch API data on page load
- Experience a fully responsive design

## 🚀 Features

- **Copy to Clipboard:** Users can copy quote with a single button click.
- **Share on Twitter:** After copying, users can share the quote via Twitter.
- **Fetch API on Page Load:** The app fetches data from an API automatically when the page loads.
- **Responsive Design:** The UI adapts to different screen sizes (desktop, tablet, and mobile).

## 🛠 Technologies Used

- HTML
- CSS (Responsive Design with Media Queries)
- JavaScript (Clipboard API, Fetch API)

## 📜 Usage

1. Clone this repository:
   ```sh
   git clone https://github.com/DevenderKThakur/Web-Dev-Cohort/tree/main/javascript/Assignment-01
   ```
2. Open the `index.html` file in your browser.
3. The API data will be fetched and displayed automatically.
4. Type or edit the text inside the input field.
5. Click the **"Copy"** button to copy the text.
6. A message will appear confirming the copy action.
7. Click the **"Share on Twitter"** button to tweet the copied text.

## 📌 Code Overview

### HTML Structure:

- Contains para tag which has the quote as text content .
- A Next Quote button when clicked the quote gets genrated .
- A "Copy" button to copy text to the clipboard.
- A "Share on Twitter" button (hidden until text is copied).
- A placeholder to display API-fetched content.

### JavaScript Functions:

- `getData()`: Calls an API on page load.
- `copyTextFromClipboard()`: Copies the text from the input field.
- `shareQuoteOnTwitter()`: Opens Twitter with the copied text pre-filled.

### CSS Styling:

- Dark theme with a monospace font.
- Centered container with flexible layout.
- Responsive design using media queries for mobile optimization.

## 📷 Screenshot

<img src="Screenshot (3).png">




---

Made with ❤️ by Devender Kumar Thakur
