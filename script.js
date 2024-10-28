function displayMessage() {
  const nameInput = document.querySelector("#inputName").value; // Get the name value
  const name = nameInput || "there"; // Default to "there" if name is empty
  alert(`Hello ${name}! Message Received! I will be in touch within 24 hours.`);
}

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#submitBtn");
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    displayMessage(); // Show alert with name
  });
});
