function jourtravaille(date) {

    // Liste des jours fériés de 2020
    const joursFeries2020 = [
        new Date(2020, 0, 1),
        new Date(2020, 3, 13),
        new Date(2020, 4, 1),
        new Date(2020, 4, 8),
        new Date(2020, 4, 21),
        new Date(2020, 5, 1),
        new Date(2020, 6, 14),
        new Date(2020, 7, 15),
        new Date(2020, 10, 1),
        new Date(2020, 10, 11),
        new Date(2020, 11, 25),
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1; // +1 car janvier vaut 0
    const annee = date.getFullYear();

    // Vérification jour férié
    for (let feries of joursFeries2020) {
        if (
            feries.getDate() === jour &&
            feries.getMonth() === date.getMonth() &&
            feries.getFullYear() === annee
        ) {
            console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
            return;
        }
    }

    // Vérification week-end
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

jourtravaille(new Date(2020, 0, 1));  // Jour férié
jourtravaille(new Date(2020, 3, 4));  // Week-end ?
jourtravaille(new Date(2020, 2, 3));  // Jour travaillé
