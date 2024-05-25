window.addEventListener('load', function() {
  const typedText = document.querySelector(".typed-text") as HTMLElement;
  const textToType = "Dante Vilchez";
  let currentIndex = 0;

  function typeText() {
    if (currentIndex < textToType.length) {
      typedText.textContent += textToType.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeText, 90);
    }
  }

  typeText();
});