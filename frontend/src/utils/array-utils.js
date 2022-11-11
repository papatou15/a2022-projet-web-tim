export function melangerTableau(tableau) {
    let currentIndex = tableau.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [tableau[currentIndex], tableau[randomIndex]] = [
            tableau[randomIndex], tableau[currentIndex]];
    }

    return tableau;
}

export function randomArraySlice(tableau, exclusion){
    let minimumNumber = tableau.length - exclusion;
    let randomNumber = 0;

    randomNumber = Math.floor(Math.random() * minimumNumber);

    return randomNumber;
}