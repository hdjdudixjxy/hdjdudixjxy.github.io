document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.bienvenida');
ScrollReveal().reveal('.beneficios', { delay: 500 });
ScrollReveal().reveal('.banner-beneficios', { delay: 500 });
ScrollReveal().reveal('.banner-recomendaciones', { delay: 500 });

