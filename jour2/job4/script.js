const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    if (/^[a-z]$/.test(event.key)) { //vérifie si la touche est une lettre minuscule comprise entre a et z
        textarea.value += event.key;
        if (document.activeElement === textarea) {
            textarea.value += event.key;
        }
    }
});
