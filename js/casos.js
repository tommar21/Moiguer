const casos = document.getElementsByClassName('caso');
const closecaso = document.getElementById('closecaso');
const descaso = document.querySelector('#descaso');
const html = document.getElementsByTagName('html')[0];
const contcasos =document.getElementById('casos');
const nav = document.querySelector('nav');

for (let i = 0; i < casos.length; i++) {
    casos[i].addEventListener('click', () => {
        descaso.style.transform = 'scale(1)'
        window.scrollTo({
            top: contcasos.offsetTop,
            left: 0,
            behavior: "smooth"
        })
        html.style.overflowY='hidden';
    })
}

closecaso.addEventListener('click', () => {
    descaso.removeAttribute('style')
    html.style.overflowY='visible';
})

// FILTRO FILTRO FILTRO FILTRO FILTRO FILTRO FILTRO FILTRO

const openfiltro = document.getElementById("openfiltro");
const filtro = document.getElementById("filtro");
const closefiltro = document.getElementById("closefiltro");


openfiltro.addEventListener('click', function () {

    window.scrollTo({
        top: nav.offsetTop,
        left: 0,
        behavior: "smooth"
    })

    html.style.overflowY='hidden';

    filtro.style.height = "100vh"

    filtro.style.transition = "0.5s"

    for (var i = 0; i < filtro.children.length; i++) {
        filtro.children[i].style.opacity = "1"
    }
});

closefiltro.addEventListener('click', function () {

    html.style.overflowY='visible';

    filtro.style.height = "0vh"

    filtro.style.transition = "0.2s"

    for (var i = 0; i < filtro.children.length; i++) {
        filtro.children[i].style.opacity = "0"
    }
})