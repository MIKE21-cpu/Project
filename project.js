// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Example: Changing background color on a button click
  const changeColorButton = document.getElementById("change-color-button");
  if (changeColorButton) {
    changeColorButton.addEventListener("click", function () {
      document.body.style.backgroundColor = getRandomColor();
    });
  }

  // Example: Toggling the visibility of a section
  const toggleSectionButton = document.getElementById("toggle-section-button");
  const section = document.getElementById("toggle-section");
  if (toggleSectionButton && section) {
    toggleSectionButton.addEventListener("click", function () {
      section.style.display =
        section.style.display === "none" ? "block" : "none";
    });
  }

  // Helper function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
