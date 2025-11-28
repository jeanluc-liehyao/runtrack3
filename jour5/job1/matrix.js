const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Dimensions du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Paramètres
const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;

// Position verticale des gouttes pour chaque colonne
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Retourne une lettre aléatoire
function randomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

// Fonction de dessin
function draw() {
    // Fonde léger pour créer l’effet de traînée
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Style des lettres
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    // Dessin des gouttes
    for (let i = 0; i < drops.length; i++) {
        const char = randomLetter();

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Remise à zéro parfois aléatoire
        const isOutOfScreen = drops[i] * fontSize > canvas.height;
        const shouldReset = Math.random() > 0.975;

        if (isOutOfScreen && shouldReset) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Redimensionnement du canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Intervalle d’animation
setInterval(draw, 20);
