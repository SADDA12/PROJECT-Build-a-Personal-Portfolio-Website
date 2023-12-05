const phrases = ["frontend developer 👩🏽‍💻","Data analyst 📊"];
  let currentPhrase = 0;
  let currentChar = 0;
  let htmlElement = document.querySelector('.dynamic-text');
  let isDeleting = false;
  let typingSpeed = 200;

  function type() {
    if (isDeleting && currentChar > 0) {
      currentChar--;
      typingSpeed = 50;
    } else if (!isDeleting && currentChar < phrases[currentPhrase].length) {
      currentChar++;
      typingSpeed = 200;
    }

    htmlElement.textContent = phrases[currentPhrase].substring(0, currentChar);

    if (!isDeleting && currentChar == phrases[currentPhrase].length) {
      isDeleting = true;
      typingSpeed = 1000;
    } else if (isDeleting && currentChar === 0) {
      currentPhrase = (currentPhrase + 1) % phrases.length;
      isDeleting = false;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, typingSpeed);






let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
