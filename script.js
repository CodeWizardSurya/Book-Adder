// Select popup elements and buttons
const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const addPopupButton = document.getElementById("add-popup-button");
const cancelPopupButton = document.getElementById("cancel-popup");
const bookForm = document.getElementById("book-form");

const container = document.querySelector(".container");
const bookTitleInput = document.getElementById("book-title-input");
const bookAuthorInput = document.getElementById("book-author-input");
const bookDescriptionInput = document.getElementById("book-description-input");

// Show popup when + button clicked
addPopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

// Hide popup function
function hidePopup() {
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
  bookForm.reset();
}

// Cancel button click hides popup
cancelPopupButton.addEventListener("click", (event) => {
  event.preventDefault();
  hidePopup();
});

// Clicking outside popup box hides popup
popupOverlay.addEventListener("click", hidePopup);

// Add book on form submit
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = bookTitleInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const description = bookDescriptionInput.value.trim();

  if (title && author && description) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-container");
    bookDiv.innerHTML = `
      <h2>${title}</h2>
      <h5>${author}</h5>
      <p>${description}</p>
      <button onclick="deleteBook(event)">Delete</button>
    `;

    container.appendChild(bookDiv);
    hidePopup();
  }
});

// Delete book function
function deleteBook(event) {
  event.target.parentElement.remove();
}
