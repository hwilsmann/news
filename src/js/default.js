const popup_overlay = document.querySelector('[data-popup-overlay]');     
const iframe = popup_overlay.querySelector("[data-iframe]");

const open = document.querySelector('[data-popup-open]');
const close = document.querySelector('[data-popup-close]');

open.addEventListener('click', () => {  
  popup_overlay.classList.add('--is-visible');
});
close.addEventListener('click', () => {
  iframe.src = iframe.src;

  popup_overlay.classList.remove('--is-visible');
});