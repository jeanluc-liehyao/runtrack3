const button = document.getElementById("button");

button.addEventListener("click", async () => {
    try {
        const response = await fetch("expression.txt");
        const data = await response.text();

        const p = document.createElement("p");
        p.textContent = data;
        document.body.appendChild(p);

    } catch (error) {
        console.error("Erreur :", error);
    }
});
