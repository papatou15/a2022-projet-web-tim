export function getCoursFromID(listeCours, id) {
    let coursFromID = null;
    listeCours.forEach(cours => {
        if (cours.id === id) {
            coursFromID = cours;
        }
    });
    return coursFromID;
}

export function sortSessions(listeSessions) {
    function compare(a, b) {
        if (a.slug < b.slug) {
            return -1;
        }
        if (a.slug > b.slug) {
            return 1;
        }
        return 0;
    }

    return listeSessions.sort(compare);
}

export function cutString(string, longueurMax) {
    let text = string;
    if (string.length > longueurMax) {
        text = string.substring(0, longueurMax)//cuts to 1024
        let last = text.lastIndexOf(" ")//gets last space (to avoid cutting the middle of a word)
        text = text.substring(0, last)//cuts from last space (to avoid cutting the middle of a word)
        text = text + ` (...)`//adds (...) at the end to show that it's cut
    }
    return text;
}