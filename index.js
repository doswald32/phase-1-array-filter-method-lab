function findMatching(array, name) {
    const match = array.filter((driver) => driver.toLowerCase() === name.toLowerCase());
    return match;
}

function fuzzyMatch(array, name) {
    const match = array.filter((driver) => driver[0] === name[0]);
    return match;
}

function matchName(array, name) {
    const match = array.filter((driver) => driver.name === name);
    return match;
}