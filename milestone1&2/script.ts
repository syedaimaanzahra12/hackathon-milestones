const toggleButton = document.getElementById(
  "toggle-interest"
) as HTMLButtonElement;
const interestSection = document.querySelector("interests-section") as HTMLElement;
toggleButton.addEventListener("click", () => {
  if (interestSection.style.display === "none") {
    interestSection.style.display = "block";
  } else {
    interestSection.style.display = "none";
  }
});
