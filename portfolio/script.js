let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = 0;
  showSlide(currentSlide);
}
function start(){
  currentSlide = (currentSlide - 1) % slides.length;
  showSlide(currentSlide);
}
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);

  document.getElementById("contact-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("response").textContent = "Thanks! I'll get back to you 💌";
    this.reset();
  });

  // 🎉 Typewriter effect
  const text = "Hi, I'm Prema 👀👋";
  const target = document.getElementById("typed-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
});
  function exitPage() {
    window.open('', '_self', '');
    window.close();
  }
function exitPage() {
  window.location.href = "about:blank";
}

function copyEmail() {
  const email = document.getElementById("email-text").textContent;
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard! 💌");
  });
}
