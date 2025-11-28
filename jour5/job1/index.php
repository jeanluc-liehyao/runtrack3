<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="matrix.css">
</head>
<body>


<canvas id="matrix"></canvas>

<div class="container">
    
    <h2>MATRIX</h2>

    <?php if (isset($_SESSION['prenom'])): ?>

        <p>Bonjour <?= htmlspecialchars($_SESSION['prenom']) ?>. BIENVENUE SUR LA MATRICE.</p>

        <div class="home-links">
            <a href="logout.php">Se déconnecter</a>
        </div>

    <?php else: ?>

        <p>Bienvenue sur La Matrice.</p>

        <div class="home-links">
            <a href="inscription.php">Inscription</a>
            <a href="connexion.php">Connexion</a>
        </div>

    <?php endif; ?>

</div>
<script src="matrix.js"></script>

</body>
</html>
