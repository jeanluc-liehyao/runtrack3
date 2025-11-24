// Fonction utilitaire : mélanger un tableau
function melangerTableau(tableau) {
    return tableau.sort(() => Math.random() - 0.5);
}

// Mélanger les images
document.getElementById("melanger").addEventListener("click", function() {
    let zoneImages = document.getElementById("zoneImages");
    let images = Array.from(zoneImages.children);

    let melange = melangerTableau(images);

    zoneImages.innerHTML = "";
    melange.forEach(img => zoneImages.appendChild(img));
});

// Déplacer une image vers la zoneTri
document.querySelectorAll("#zoneImages img").forEach(img => {
    img.addEventListener("click", function() {
        document.getElementById("zoneTri").appendChild(img);
    });
});

// Vérifier l’ordre
document.getElementById("verifier").addEventListener("click", function() {
    let zoneTri = Array.from(document.getElementById("zoneTri").children);

    // Vérifier que l'utilisateur a bien mis les 6 images
    if (zoneTri.length !== 6) {
        afficherMessage("Vous avez perdu", "red");
        return;
    }

    // Vérifier l'ordre
    for (let i = 0; i < zoneTri.length; i++) {
        if (zoneTri[i].dataset.id != i + 1) {
            afficherMessage("Vous avez perdu", "red");
            return;
        }
    }

    afficherMessage("Vous avez gagné", "green");
});

// Fonction qui affiche le message
function afficherMessage(texte, couleur) {
    let resultat = document.getElementById("resultat");
    resultat.textContent = texte;
    resultat.style.color = couleur;
}
