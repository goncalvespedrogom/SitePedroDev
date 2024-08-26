let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let scroll = document.querySelector('.scroll-top')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

window.addEventListener('scroll', function(){
    scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth'
    })
}
