const testimonios = document.getElementById(`testimonios`);
marqueelementsdisplayedtest = getComputedStyle(root).getPropertyValue("--marqueelementsdisplayedtest");

root.style.setProperty('--marqueelementstest', testimonios.children.length)


for (let i = 0; i < marqueelementsdisplayedtest; i++) {
    testimonios.appendChild(testimonios.children[i].cloneNode(true))
}
