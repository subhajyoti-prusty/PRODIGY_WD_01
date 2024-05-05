// Select the hero image element
const heroImage = document.querySelector(".hero img");

// Add event listener for mouseover
heroImage.addEventListener("mouseover", () => {
  // Change cursor to pointer
  heroImage.style.cursor = "pointer";
});

// Add event listener for mouseout
heroImage.addEventListener("mouseout", () => {
  // Change cursor back to default
  heroImage.style.cursor = "default";
});