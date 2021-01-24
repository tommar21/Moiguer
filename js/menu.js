const openmenu = document.getElementById("bmenu");
const menu = document.getElementById("menu");
const closemenu = document.getElementById("closemenu");


openmenu.addEventListener('click', function () {

    menu.style.width = "100%"

    menu.style.transition = "0.5s"

    for (var i = 0; i < menu.children.length; i++) {
        menu.children[i].style.opacity = "1"
    }
});

closemenu.addEventListener('click', function () {

    menu.style.width = "0%"

    menu.style.transition = "0.2s"

    for (var i = 0; i < menu.children.length; i++) {
        menu.children[i].style.opacity = "0"
    }
})

window.addEventListener('scroll', function () {

    menu.style.width = "0%"

});