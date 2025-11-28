<?php
session_start();
require "config.php";

$message = "";

if (isset($_POST['email'], $_POST['password'])) {

    $email = trim($_POST['email']);

    $req = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $req->execute([$email]);
    $user = $req->fetch();

    if ($user && password_verify($_POST['password'], $user['password'])) {

        $_SESSION['prenom'] = $user['prenom'];
        $_SESSION['id'] = $user['id'];

        header("Location: index.php");
        exit;

    } else {
        $message = "Identifiants incorrects.";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<canvas id="matrix"></canvas>

<div class="container">

    <h2>Connexion</h2>

    <?php if (!empty($message)): ?>
        <p class="error"><?= htmlspecialchars($message) ?></p>
    <?php endif; ?>

    <form id="formConnexion" method="POST">

        <label for="email">Email :</label>
        <input type="email" id="email" name="email">
        <span class="error" id="emailError"></span>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password">
        <span class="error" id="passwordError"></span>

        <button type="submit">Se connecter</button>
    </form>

    <p>Pas de compte ? <a href="inscription.php"> Inscris-toi </a></p>

</div>

<script src="script.js"></script>
<script src="matrix.js"></script>
</body>
</html>
