<?php
session_start();
require "config.php";

$serverError = "";

if (
    isset($_POST['nom']) &&
    isset($_POST['prenom']) &&
    isset($_POST['email']) &&
    isset($_POST['password'])
) {
    $nom = trim($_POST['nom']);
    $prenom = trim($_POST['prenom']);
    $email = trim($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Vérifie si email déjà utilisé
    $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);

    if ($check->rowCount() > 0) {
        $serverError = "Email déjà utilisé.";
    } else {
        // Insertion en BDD
        $insert = $pdo->prepare("INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)");
        $insert->execute([$nom, $prenom, $email, $password]);

        header("Location: connexion.php");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<canvas id="matrix"></canvas>

<div class="container">

    <h2>Inscription</h2>

    <?php if (!empty($serverError)): ?>
        <p class="error"><?= htmlspecialchars($serverError) ?></p>
    <?php endif; ?>

    <form id="formInscription" method="POST">

        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom">
        <span class="error" id="nomError"></span>

        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom">
        <span class="error" id="prenomError"></span>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email">
        <span class="error" id="emailError"></span>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password">
        <span class="error" id="passwordError"></span>

        <label for="password2">Confirmation du mot de passe :</label>
        <input type="password" id="password2">
        <span class="error" id="password2Error"></span>

        <button type="submit">S'inscrire</button>
    </form>

    <p>Déjà inscrit ? <a href="connexion.php"> Connecte-toi</a></p>
</div>

<script src="script.js"></script>
<script src="matrix.js"></script>
</body>
</html>
