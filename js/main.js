const openmenu = document.getElementById("bmenu");
const menu = document.getElementById("menu");
const closemenu = document.getElementById("closemenu");
const posh2 = document.querySelector("#home2").offsetTop;
const logoymenu = document.querySelectorAll("nav > div img");
const header = document.querySelector('header');
const poscasos = document.getElementById('casos');
const poscasosbot = poscasos.offsetTop + poscasos.clientHeight;
const itemsmenu = document.getElementsByClassName('itemsmenu');
const contitle = document.getElementById('contitle');
const titcasos = document.getElementById('titcasos')


openmenu.addEventListener('click', function () {

    menu.style.width = "100%"

    menu.style.transition = "0.5s"

    for (var i = 0; i < menu.children.length; i++) {
        menu.children[i].style.opacity = "1"
    }
});

closemenu.addEventListener('click', function () {
    console.log('sisisi')

    menu.style.width = "0%"

    menu.style.transition = "0.2s"

    for (var i = 0; i < menu.children.length; i++) {
        menu.children[i].style.opacity = "0"
    }
})

window.addEventListener('scroll', function () {

    var posact = window.scrollY;

    if (posact >= posh2) {
        logoymenu[0].src = "imagenes/Desktop/que hacemos/logo.svg"
        logoymenu[1].src = "imagenes/Desktop/que hacemos/menu.svg"
        header.style.opacity = "1"
        header.style.backgroundColor = "white"
    }

    else if (posact >= posh2 - 150 && posact <= posh2) {
        header.style.opacity = "0"
        header.style.backgroundColor = "transparent"
    }

    else {
        logoymenu[0].src = "imagenes/Desktop/home/logo.svg"
        logoymenu[1].src = "imagenes/Desktop/home/menu.svg"
        header.style.opacity = "1"
        header.style.backgroundColor = "transparent"
    }

    if (posact >= poscasos.offsetTop && posact <= poscasosbot) {
        contitle.style.justifyContent = 'space-between'
        contitle.style.marginTop = '20px'
        titcasos.innerHTML = '<h1>Casos</h1>'
        itemsmenu[0].innerHTML = '<h2>Todos los casos</h2>'
        itemsmenu[1].innerHTML = '<h2>Branding</h2>'
        itemsmenu[2].innerHTML = '<h2>Negocio</h2>'
        itemsmenu[3].innerHTML = '<h2>Digital</h2>'
        itemsmenu[4].innerHTML = '<h2>Comunicación</h2>'
        itemsmenu[5].innerHTML = '<h2>Research</h2>'
    }

})

//SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER //

const slider = document.getElementById('sliderinfo')
const slides = document.getElementsByClassName('infos')
const bcambiar1 = document.getElementById('bcambiar1')
const bcambiar2 = document.getElementById('bcambiar2')
var movex = 0
var movexder = (-100 / slides.length) * (slides.length - 1)
var conteo = 0

// AJUSTAR WIDTH DEL SLIDER Y LOS SLIDES //

slider.style.width = 100 * slides.length + '%'

for (let i = 0; i < slides.length; i++) {

    slides[i].style.width = 65 / slides.length + "%"
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




// CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS CASOS //

contitle.style.justifyContent = 'flex-end'
        contitle.style.marginTop = '0px'
        titcasos.innerHTML = ''
        itemsmenu[0].innerHTML = '<h2>Qué hacemos</h2>'
        itemsmenu[1].innerHTML = '<h2>Casos</h2>'
        itemsmenu[2].innerHTML = '<h2>Equipo</h2>'
        itemsmenu[3].innerHTML = '<h2>Blog</h2>'
        itemsmenu[4].innerHTML = '<h2>Contacto</h2>'
        itemsmenu[5].innerHTML = '<div><img src="imagenes/Desktop/Menu/linkedin.svg" alt=""></div>'