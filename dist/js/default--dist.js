const popup_overlay=document.querySelector("[data-popup-overlay]"),iframe=popup_overlay.querySelector("[data-iframe]"),open=document.querySelector("[data-popup-open]"),close=document.querySelector("[data-popup-close]");open.addEventListener("click",()=>{popup_overlay.classList.add("--is-visible")}),close.addEventListener("click",()=>{iframe.src=iframe.src,popup_overlay.classList.remove("--is-visible")});