window.addEventListener("load", () => {
  const finalText = document.querySelector(".final-text");
  const background = document.querySelector(".background-fade");

  // Simulate text fade-in (you can tie this to actual animation)
  setTimeout(() => {
    finalText.style.opacity = 1;

    // After final text is visible, fade in background
    setTimeout(() => {
      background.style.opacity = 1;
    }, 1000); // Delay background fade after text
  }, 2000); // Initial delay for demonstration
});
