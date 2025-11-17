function citation() {
    let element = document.getElementById("citation"); // récupère l'article
    let texte = element.innerText; // prend le texte
    console.log(texte); // affiche dans la console
}

document.getElementById("button").addEventListener("click", citation);
