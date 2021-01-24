const catnegocio = document.getElementsByClassName('catnegocioimg'),
    catbranding = document.getElementsByClassName('catbrandingimg'),
    catdigital = document.getElementsByClassName('catdigitalimg'),
    catcomunic = document.getElementsByClassName('catcomunicimg'),
    catresearch = document.getElementsByClassName('catresearchimg');

    console.log(catbranding, catdigital)

for (let i = 0; i<catnegocio.length;i++) {
    catnegocio[i].setAttribute('src', 'imagenes/desktop/blog/icon-negocio.svg')
}

for (let i = 0; i<catbranding.length;i++) {
    catbranding[i].setAttribute('src', 'imagenes/desktop/blog/icon-branding.svg')
}

for (let i = 0; i<catdigital.length;i++) {
    catdigital[i].setAttribute('src', 'imagenes/desktop/blog/icon-digital.svg')
}

for (let i = 0; i<catcomunic.length;i++) {
    catcomunic[i].setAttribute('src', 'imagenes/desktop/blog/icon-comunicacion.svg')
}

for (let i = 0; i<catresearch.length;i++) {
    catresearch[i].setAttribute('src', 'imagenes/desktop/blog/icon-research.svg')
}

const blogs = document.getElementsByClassName('blogs');

for (let i =0; i<blogs.length; i++) {
    blogs[i].addEventListener('click', () => {
        window.open('internablogs.html','_self')
    })
}

