function bisextile(annee) {
    // si elle est divisible par 4, mais pas par 100, sauf si elle est divisible par 400.
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2024));
console.log(bisextile(2023));
console.log(bisextile(2000)); 
console.log(bisextile(1900)); 
