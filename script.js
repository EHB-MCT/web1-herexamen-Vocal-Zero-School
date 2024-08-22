document.addEventListener("DOMContentLoaded", function () {
	/**
	 * Updates the order of features based on the screen width.
	 * If the screen width is less than 768 pixels, moves the text below the image.
	 * If the screen width is 768 pixels or larger, moves the text back to above the image.
	 */
	function updateFeatureOrder() {
		const featureRight = document.querySelector(".feature-right");
		const screenWidth = window.innerWidth;

		if (screenWidth < 768) {
			if (featureRight) {
				const text = featureRight.querySelector(".feature-text");
				const image = featureRight.querySelector("img");

				if (text && image) {
					featureRight.appendChild(text); // Move text below image
				}
			}
		} else {
			// Reset the order on larger screens
			if (featureRight) {
				const text = featureRight.querySelector(".feature-text");
				const image = featureRight.querySelector("img");

				if (text && image) {
					featureRight.insertBefore(text, image); // Move text back to above image
				}
			}
		}
	}

	updateFeatureOrder(); // Run on page load
	window.addEventListener("resize", updateFeatureOrder); // Run on resize
});
