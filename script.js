console.log("Connected✈️");

// ===============================
// CAROUSEL INITIALIZATION
// ===============================

// Select all carousels (supports multiple carousels on the page)
document.querySelectorAll(".carousel").forEach((carousel) => {

  // Get all the individual slides inside this carousel
  const items = carousel.querySelectorAll(".carousel_item");

  // Create dot navigation buttons for each carousel slide
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel_button"></span>`;
  });

  // Add left arrow, right arrow, and dot navigation to the carousel
  // These will be positioned relative to the entire carousel
  // takes a chunk of HTML code (as a string) and inserts it directly into the DOM inside the carousel element, 
  // placing it right before the closing tag of that element.
  carousel.insertAdjacentHTML("beforeend", `     

  <button class="carousel_arrow left">&#8592;</button>
  <button class="carousel_arrow right">&#8594;</button>
  <div class="carousel_nav">${buttonsHtml.join("")}</div>`);

  // Grab all the navigation dots we just added
  const buttons = carousel.querySelectorAll(".carousel_button");

  // Grab the arrow elements
  const leftArrow = carousel.querySelector(".carousel_arrow.left");
  const rightArrow = carousel.querySelector(".carousel_arrow.right");

  // Track the currently selected slide index
  let currentIndex = 0;

  // ===============================
  // FUNCTION: Show a specific slide
  // ===============================
  function showSlide(index) {
    // Remove active classes from all slides and dots
    items.forEach((item) => item.classList.remove("carousel_item_selected"));
    buttons.forEach((button) => button.classList.remove("carousel_button_selected"));

    // Add active class to the targeted slide and corresponding dot
    items[index].classList.add("carousel_item_selected");
    buttons[index].classList.add("carousel_button_selected");

    // Update the current index tracker
    currentIndex = index;
  }

  // ===============================
  // DOT NAVIGATION: Click Events
  // ===============================
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      showSlide(i); // Show the slide that matches the clicked dot
    });
  });

  // ===============================
  // ARROW NAVIGATION: Click Events
  // ===============================
  leftArrow.addEventListener("click", () => {
    // Go to the previous slide (wrap around if at start)
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(newIndex);
  });

  rightArrow.addEventListener("click", () => {
    // Go to the next slide (wrap around if at end)
    const newIndex = (currentIndex + 1) % items.length;
    showSlide(newIndex);
  });


  // ===============================
  // INITIALIZE: Show first slide on page load
  // ===============================
  showSlide(0);
});


// ===============================
// POINTS CALCULATOR FORM
// ===============================

// Listen for form submission on the Points Calculator
document.getElementById('pointsForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Get form values
  const age = parseInt(document.getElementById('age').value);
  const education = document.getElementById('education').value;

  // Start total points at 0
  let points = 0;

  // ===============================
  // Age Points Calculation
  // ===============================
  if (age >= 18 && age <= 25) points += 12;
  else if (age >= 26 && age <= 32) points += 10;
  else if (age >= 33 && age <= 39) points += 8;
  else if (age >= 40 && age <= 45) points += 6;
  // We use += here because you’re adding to the existing value of points, not replacing it.

  // ===============================
  // Education Points Calculation
  // ===============================
  if (education === 'bachelor') points += 10;
  else if (education === 'masters') points += 15;
  else if (education === 'phd') points += 20;

  // Display the total points in the result area
  document.getElementById('result').textContent = `Total Points: ${points}`;
});
