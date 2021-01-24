const slider = document.getElementById('sliderinfo')
const slides = document.getElementsByClassName('infos')
const bcambiar1 = document.getElementById('bcambiar1')
const bcambiar2 = document.getElementById('bcambiar2')
var movex = 0
var movexder = (-100 / slides.length) * (slides.length - 1)
var conteo = 0
var x480 = window.matchMedia("(max-width: 480px)")


// AJUSTAR WIDTH DEL SLIDER Y LOS SLIDES //

slider.style.width = 100 * slides.length + '%'

for (let i = 0; i < slides.length; i++) {

    if(x480.matches) {
        slides[i].style.width = 70 / slides.length + "%"
    }
    else {

        slides[i].style.width = 65 / slides.length + "%"
    }

}


// MOVER SLIDER Y OCULTAR FLECHAS //

bcambiar1.addEventListener('click', function () {

    if (conteo != 0) {

        movex = movex + 100 / slides.length

        // MUEVE PARA LA IZQUIERDA //

        slider.style.transform = "translateX(" + movex + "%" + ")"

        conteo--

    }

    // SE OCULTA LA FLECHA IZQUIERDA

    if (conteo === 0) {
        bcambiar1.style.transform = "rotate(180deg) scale(1) translateX(500px)"
    }

    // SE MUESTRA LA FLECHA DERECHA AL VOLVER

    if (conteo < slides.length - 1) {

        bcambiar2.removeAttribute('style')
    }

})

bcambiar2.addEventListener('click', function () {

    if (conteo < slides.length - 1) {

        movex = movex - 100 / slides.length

        // SE MUEVE PARA LA DERECHA

        slider.style.transform = "translateX(" + movex + "%" + ")"

        conteo++
    }

    // SE MUESTRA FLECHA IZQUIERDA AL AVANZAR

    if (conteo > 0) {
        bcambiar1.removeAttribute('style')
    }

    // SE OCULTA FLECHA DERECHA 

    if (conteo === slides.length - 1) {
        bcambiar2.style.transform = "scale(1) translateX(500px)"
    }

})

// SI HAY UNO O NINGUN SLIDE SACAR FLECHA DERECHA 

if (slides.length <= 1) {
    bcambiar2.style.transform = "scale(1) translateX(500px)"
}

// FLECHA IZQUIERDA OCULTA POR DEFECTO

if (conteo === 0) {
    bcambiar1.style.transform = ('rotate(180deg) scale(1) translate(500px)')
    bcambiar1.style.transition = 'none'
}

const logo = document.getElementById('logo'),
      botonmenu= document.getElementById('botonmenu'),
      posh2 = document.getElementById('home2').offsetTop,
      nav = document.getElementById('navindex');

window.addEventListener('scroll', () => {

    var posact = window.scrollY

    if (posact>=posh2) {
        logo.setAttribute('src', 'imagenes/desktop/casos/logo.svg')
        botonmenu.setAttribute('src', 'imagenes/desktop/casos/menu.svg')
        nav.style.backgroundColor = 'white'
    }
    else {
        logo.setAttribute('src', 'imagenes/desktop/home/logo.svg')
        botonmenu.setAttribute('src', 'imagenes/desktop/home/menu.svg')
        nav.style.backgroundColor = 'transparent'
    }
})
