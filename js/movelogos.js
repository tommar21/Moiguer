const root = document.documentElement,
    marqueelementsdisplayedlogos = getComputedStyle(root).getPropertyValue("--marqueelementsdisplayedlogos"),
    logos = document.getElementsByClassName('logos');

root.style.setProperty('--marqueelementslogos', logos[0].children.length)

for (let i = 0; i < marqueelementsdisplayedlogos; i++) {
    for (let j = 0; j < logos.length; j++) {
        logos[j].appendChild(logos[j].children[i].cloneNode(true))
    }
}