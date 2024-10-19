"use strict";
const toggleButton = document.getElementById("toggle-interest");
const interestSection = document.querySelector(".interests-section ul");
toggleButton.addEventListener("click", () => {
    if (interestSection.style.display === "none") {
        interestSection.style.display = "block";
    }
    else {
        interestSection.style.display = "none";
    }
});
