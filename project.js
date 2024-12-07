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

// Add to cart
async function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  await fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  renderCart();
}

// Render cart
async function renderCart() {
  const response = await fetch("http://localhost:3000/cart");
  const cart = await response.json();
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>No items in cart.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
    cartDiv.appendChild(itemDiv);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartDiv.innerHTML += `<h3>Total: $${total}</h3>`;
}

// Remove from cart
async function removeFromCart(index) {
  await fetch(`http://localhost:3000/cart/${index}`, {
    method: "DELETE",
  });
  renderCart();
}
