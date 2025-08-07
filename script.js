console.log("Connected✈");

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel_button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel_nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel_button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel_item_selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel_button_selected")
      );

      items[i].classList.add("carousel_item_selected");
      button.classList.add("carousel_button_selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel_item_selected");
  buttons[0].classList.add("carousel_button_selected");
});
