const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefaut();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTartget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTartget.setAttribute('aria-label', 'Fechar Menu');   
    } else {
        event.currentTartget.setAttribute('aria-label', 'Abrir Menu');   
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);