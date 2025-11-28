// =======================================================
//  Récupération sécurisée des éléments erreur
// =======================================================
const nomError       = document.getElementById("nomError");
const prenomError    = document.getElementById("prenomError");
const emailError     = document.getElementById("emailError");
const passwordError  = document.getElementById("passwordError");
const password2Error = document.getElementById("password2Error");


// =======================================================
//  VALIDATION FORMULAIRE D'INSCRIPTION
// =======================================================
const formInscription = document.getElementById("formInscription");

if (formInscription) {

    formInscription.addEventListener("submit", function(e) {

        let valid = true;

        // Récupération des valeurs propres
        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const password2 = document.getElementById("password2").value.trim();

        // Reset des messages d'erreur
        nomError.textContent = "";
        prenomError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        password2Error.textContent = "";

        // ---- Vérif nom ----
        if (nom === "") {
            nomError.textContent = "Le nom est obligatoire.";
            valid = false;
        }

        // ---- Vérif prénom ----
        if (prenom === "") {
            prenomError.textContent = "Le prénom est obligatoire.";
            valid = false;
        }

        // ---- Vérification email ----
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = "Email invalide.";
            valid = false;
        }

        // ---- Vérification mot de passe ----
        const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
        if (!passRegex.test(password)) {
            passwordError.textContent =
                "Min. 6 caractères, 1 majuscule, 1 minuscule, 1 chiffre.";
            valid = false;
        }

        // ---- Confirmation mot de passe ----
        if (password !== password2) {
            password2Error.textContent = "Les mots de passe ne correspondent pas.";
            valid = false;
        }

        // Bloque l’envoi si erreur
        if (!valid) e.preventDefault();
    });
}



// =======================================================
//  VALIDATION FORMULAIRE DE CONNEXION
// =======================================================
const formConnexion = document.getElementById("formConnexion");

if (formConnexion) {

    formConnexion.addEventListener("submit", function(e) {

        let valid = true;

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Reset erreurs
        if (emailError) emailError.textContent = "";
        if (passwordError) passwordError.textContent = "";

        // ---- Vérification email ----
        if (email === "") {
            emailError.textContent = "Email obligatoire.";
            valid = false;
        }

        // ---- Vérification mot de passe ----
        if (password === "") {
            passwordError.textContent = "Mot de passe obligatoire.";
            valid = false;
        }

        if (!valid) e.preventDefault();
    });
}
