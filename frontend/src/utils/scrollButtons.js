export function scrollButtons(element, value) {
    let docElement = document.getElementById(element);
    let newPos = docElement.scrollLeft += value;
    docElement.scroll({
        left: newPos,
        behavior: "smooth"
    });
}