export function trimDomElements(string) {
    return string.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
}


