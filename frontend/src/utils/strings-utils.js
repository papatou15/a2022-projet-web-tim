export function TrimDOMElements(string) {
    return string.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
}

const genericDomElements = {
    titre: <h2></h2>,
    paragraphe: <p></p>
}


