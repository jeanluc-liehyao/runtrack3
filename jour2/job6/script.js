const konami = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

let touches = [];

window.addEventListener("keydown", (e) => {
    touches.push(e.key);

    if (touches.length > konami.length) {
        touches.shift();
    }

    if (JSON.stringify(touches) === JSON.stringify(konami)) {
        activerKonami();
    }
})

function activerKonami() {
    document.body.classList.add("konami-active");
    document.getElementById("message").textContent =
        "Code Konami activé — Bienvenue à La Plateforme !";
}

