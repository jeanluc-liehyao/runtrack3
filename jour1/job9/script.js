function sort(numbers) {
    let n = numbers.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Si la valeur de gauche est plus grande que celle de droite
            if (numbers[i] > numbers[i + 1]) {
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;

                swapped = true;
            }
        }
        n--; // on réduit la zone à trier
    } while (swapped);

    return numbers;
}
function tri(numbers, order) {

    let sorted = sort(numbers);
    if (order === "desc") {
        sorted.reverse();
    }
    return sorted;
}

console.log(tri([3, 2, 4, 1], "asc"));
console.log(tri([2, 3, 4, 1], "desc"));
