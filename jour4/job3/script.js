// ====== RÉCUPÉRATION DES ÉLÉMENTS ======
const idInput      = document.getElementById("id");
const nameInput    = document.getElementById("name");
const typeSelect   = document.getElementById("type");
const filterBtn    = document.getElementById("filter");
const refreshBtn   = document.getElementById("rafraichir");
const results      = document.getElementById("results");

const container    = document.querySelector(".container");
const cover        = document.getElementById("cover");

// ====== ANIMATION OUVERTURE / FERMETURE DU POKÉDEX ======
cover.addEventListener("click", () => {
    container.classList.toggle("open");
});

// ====== FERMETURE EN CLIQUANT EN DEHORS ======
document.addEventListener("click", (event) => {
    if (container.classList.contains("open")) {
        if (!container.contains(event.target) && event.target !== cover) {
            container.classList.remove("open");
        }
    }
});

// ====== CHARGEMENT DES POKÉMON ======
let pokemons = [];

fetch("pokemon.json")
    .then(res => res.json())
    .then(data => pokemons = data)
    .catch(err => {
        results.textContent = "Impossible de charger les Pokémon.";
        console.error(err);
    });

// ====== AFFICHAGE DES POKÉMON ======
function displayPokemons(list) {
    results.innerHTML = "";

    if (!list.length) {
        results.textContent = "Pokémon Inconnu.";
        return;
    }

    const ul = document.createElement("ul");

    list.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `#${p.id} - ${p.name.french} (${p.type.join(", ")})`;
        ul.appendChild(li);
    });

    results.appendChild(ul);
}

// ====== FILTRAGE ======
filterBtn.addEventListener("click", () => {
    const idValue    = idInput.value.trim();
    const nameValue  = nameInput.value.trim().toLowerCase();
    const typeValue  = typeSelect.value;

    const filtered = pokemons.filter(p => {
        if (idValue && p.id != idValue) return false;
        if (nameValue && !p.name.french.toLowerCase().includes(nameValue)) return false;
        if (typeValue && !p.type.includes(typeValue)) return false;
        return true;
    });

    displayPokemons(filtered);
});

// ====== RAFRAÎCHIR LES FILTRES ======
refreshBtn.addEventListener("click", () => {
    idInput.value = "";
    nameInput.value = "";
    typeSelect.value = "";

    results.innerHTML = "Écran rafraîchi.";
});
