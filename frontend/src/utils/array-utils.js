export function melangerTableau(tableau) {
    let currentIndex = tableau.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [tableau[currentIndex], tableau[randomIndex]] = [
            tableau[randomIndex], tableau[currentIndex]];
    }

    return tableau;
}