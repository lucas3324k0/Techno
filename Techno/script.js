const estatua = document.querySelector('.estatua img');

estatua.addEventListener('mousemove', (event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 25;
    const y = (window.innerHeight / 2 - event.clientY) / 25;

    estatua.style.transform = `rotateY(${x + 20}deg) rotateX(${y + 10}deg)`;
});

estatua.addEventListener('mouseenter', () => {
    estatua.style.transition = 'transform 0.1s'; /* Suaviza a transição */
});

estatua.addEventListener('mouseleave', () => {
    estatua.style.transition = 'transform 0.5s'; /* Suaviza a transição ao retornar */
    estatua.style.transform = 'rotateY(0deg) rotateX(0deg)'; /* Retorna a posição inicial */
});

// MENU TOOLBAR

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});