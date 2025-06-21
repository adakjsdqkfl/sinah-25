function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");

  // Cierra el menú si haces clic fuera de él o del icono
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove("active");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // Cierra el menú al dar clic en cualquier enlace del menú
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('active');
    });
  });

  // Carrusel
  let index = 0;
  let interval;

  function showSlide(i) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => (slide.style.display = "none"));
    index = (i + slides.length) % slides.length;
    slides[index].style.display = "block";
  }

  function showNextSlide() {
    showSlide(index + 1);
  }

  function showPrevSlide() {
    showSlide(index - 1);
  }

  function startCarrusel() {
    interval = setInterval(showNextSlide, 3000);
  }

  function stopCarrusel() {
    clearInterval(interval);
  }

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      stopCarrusel();
      showNextSlide();
      startCarrusel();
    });

    prevBtn.addEventListener("click", () => {
      stopCarrusel();
      showPrevSlide();
      startCarrusel();
    });
  }

  showSlide(index);
  startCarrusel();
});
