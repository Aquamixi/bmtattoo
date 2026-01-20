// Animação do botão no carregamento
window.addEventListener('load', () => {
  const heroButton = document.getElementById('heroButton');
  if (heroButton) heroButton.classList.add('loaded');
});

// Evita “pulos” no iOS/Android quando a barra do navegador muda o tamanho da viewport
// (ajuda especialmente em páginas com hero 100vh + elementos fixos)
(function fixMobileViewport() {
  const setVH = () => {
    // 1% da altura real da viewport
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', setVH);
})();
