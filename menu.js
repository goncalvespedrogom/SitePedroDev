let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let scroll = document.querySelector('.scroll-top')

/* início menu mobile abrir-fechar */

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/* fim menu mobile abrir-fechar */

/* início back to top */

window.addEventListener('scroll', function(){
    scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth'
    })
}

/* fim back to top */

/* início scroll reveal */

    ScrollReveal().reveal('.img-sobre', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    })

    ScrollReveal().reveal('.txt-sobre', {
        origin: 'left',
        duration: 2000,
        distance: '20%',

    })

    ScrollReveal().reveal('.redes', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
    })

/* fim scroll reveal */