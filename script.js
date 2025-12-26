function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });

  animateSkills();
}

function animateSkills() {
  document.querySelectorAll(".progress div").forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}

window.addEventListener("scroll", animateSkills);

const texts = ["Aditya Sharma", "Full Stack Developer"];
let index = 0;

setInterval(() => {
  const textElement = document.getElementById("changing-text");
  textElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
  }, 500);
}, 5000);


