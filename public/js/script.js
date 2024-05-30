const hambMenu = document.getElementById('hamb-menu')
const navMenu = document.getElementById('nav-menu')
hambMenu.addEventListener('click', function (x) {
    x.preventDefault
    hambMenu.classList.toggle('hamb-active')
    navMenu.classList.toggle('hidden')
})

window.onscroll = function () {
    const nav = document.getElementById('navbar')
    const navFixed = nav.offsetTop

    if( window.scrollY > navFixed){
        nav.classList.add('nav-fixed')
    }
    else {
        nav.classList.remove('nav-fixed')
    }
}