<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc-en-ciel</title>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>

    <button id="melanger">Mélanger</button>

    <!-- Zone où sont les images dans le désordre -->
    <div id="zoneImages">
        <img src="images/arc1.png" data-id="1">
        <img src="images/arc2.png" data-id="2">
        <img src="images/arc3.png" data-id="3">
        <img src="images/arc4.png" data-id="4">
        <img src="images/arc5.png" data-id="5">
        <img src="images/arc6.png" data-id="6">
    </div>

    <!-- Zone pour reconstituer l'arc-en-ciel -->
    <div id="zoneTri"></div>

    <button id="verifier">Vérifier</button>

    <p id="resultat"></p>

    <script src="script.js"></script>
</body>
</html>
