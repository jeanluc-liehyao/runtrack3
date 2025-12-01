<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MATRIX</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Feather Icons (icônes) -->
    <script src="https://unpkg.com/feather-icons"></script>
</head>

<body class="bg-black text-green-400 font-mono">

    <!-- HEADER AVEC 4 LIENS -->
    <header class="bg-black border-b border-green-700 shadow-lg shadow-green-900/30">
        <nav class="container mx-auto p-4 flex justify-between items-center">
            
            <h1 class="text-3xl font-bold tracking-widest text-green-400">MATRIX</h1>

            <ul class="flex space-x-8 text-green-300 font-semibold">
                <li><a href="index.php" class="hover:text-white transition">Accueil</a></li>
                <li><a href="index.php" class="hover:text-white transition">Inscription</a></li>
                <li><a href="index.php" class="hover:text-white transition">Connexion</a></li>
                <li><a href="index.php" class="hover:text-white transition">Rechercher</a></li>
            </ul>

        </nav>
    </header>

    <!-- SECTION FORMULAIRE -->
    <section class="container mx-auto my-12 p-8 bg-black rounded-xl border border-green-700 shadow-xl shadow-green-900/40 max-w-lg">

        <h2 class="text-3xl font-bold text-center text-green-300 mb-8">Créer un compte</h2>

        <form action="index.php" method="post" class="space-y-6">

            <!-- Civilité -->
            <div>
                <label class="block mb-2 text-green-300 font-bold">Civilité :</label>
                <div class="flex space-x-6 text-green-400">
                    <label><input type="radio" name="civilite" value="M." class="mr-1 accent-green-500"> M.</label>
                    <label><input type="radio" name="civilite" value="Mme" class="mr-1 accent-green-500"> Mme</label>
                </div>
            </div>

            <!-- Prénom -->
            <div class="relative">
                <i data-feather="user" class="absolute left-3 top-3 text-green-500"></i>
                <input type="text" placeholder="Prénom"
                       class="w-full bg-black/70 text-green-300 pl-10 pr-3 py-3 border border-green-700 
                              rounded-lg shadow-lg shadow-green-900/40 focus:outline-none 
                              focus:ring-2 focus:ring-green-400">
            </div>

            <!-- Nom -->
            <div class="relative">
                <i data-feather="user-check" class="absolute left-3 top-3 text-green-500"></i>
                <input type="text" placeholder="Nom"
                       class="w-full bg-black/70 text-green-300 pl-10 pr-3 py-3 border border-green-700 
                              rounded-lg shadow-lg shadow-green-900/40 focus:outline-none 
                              focus:ring-2 focus:ring-green-400">
            </div>

            <!-- Adresse -->
            <div class="relative">
                <i data-feather="map-pin" class="absolute left-3 top-3 text-green-500"></i>
                <input type="text" placeholder="Adresse"
                       class="w-full bg-black/70 text-green-300 pl-10 pr-3 py-3 border border-green-700 
                              rounded-lg shadow-lg shadow-green-900/40 focus:outline-none 
                              focus:ring-2 focus:ring-green-400">
            </div>

            <!-- Email -->
            <div class="relative">
                <i data-feather="mail" class="absolute left-3 top-3 text-green-500"></i>
                <input type="email" placeholder="Email"
                       class="w-full bg-black/70 text-green-300 pl-10 pr-3 py-3 border border-green-700 
                              rounded-lg shadow-lg shadow-green-900/40 focus:outline-none 
                              focus:ring-2 focus:ring-green-400">
            </div>

            <!-- Mot de passe -->
            <div class="relative">
                <i data-feather="lock" class="absolute left-3 top-3 text-green-500"></i>
                <input type="password" placeholder="Mot de passe"
                       class="w-full bg-black/70 text-green-300 pl-10 pr-3 py-3 border border-green-700 
                              rounded-lg shadow-lg shadow-green-900/40 focus:outline-none 
                              focus:ring-2 focus:ring-green-400">
            </div>

            <!-- Confirmation mot de passe -->
            <div class="relative">
                <i data-feather="lock" class="absolute left-3 top-3 text-green-500"></i>
                <input type="password" placeholder="Confirmer le mot de passe"
                       class="w-full bg-black/70 text-green-300 pl-10 pr-3 py-3 border border-green-700 
                              rounded-lg shadow-lg shadow-green-900/40 focus:outline-none 
                              focus:ring-2 focus:ring-green-400">
            </div>

            <!-- Passions -->
            <div>
                <label class="block mb-2 text-green-300 font-bold">Passions :</label>
                <div class="grid grid-cols-2 gap-2 text-green-400">
                    <label><input type="checkbox" class="mr-1 accent-green-500"> Informatique</label>
                    <label><input type="checkbox" class="mr-1 accent-green-500"> Voyages</label>
                    <label><input type="checkbox" class="mr-1 accent-green-500"> Sport</label>
                    <label><input type="checkbox" class="mr-1 accent-green-500"> Lecture</label>
                </div>
            </div>

            <!-- Bouton -->
            <div class="text-center">
                <button type="submit"
                    class="bg-green-600 text-black font-bold px-8 py-3 rounded-lg 
                           shadow-lg shadow-green-900/50 hover:bg-green-400 
                           transition hover:scale-105">
                    Valider
                </button>
            </div>

        </form>
    </section>

    <!-- FOOTER AVEC 4 LIENS -->
    <footer class="border-t border-green-700 mt-10 py-6">
        <div class="container mx-auto flex justify-center space-x-10 text-green-300 text-lg font-semibold">
            <a href="index.php" class="hover:text-white transition">Accueil</a>
            <a href="index.php" class="hover:text-white transition">Inscription</a>
            <a href="index.php" class="hover:text-white transition">Connexion</a>
            <a href="index.php" class="hover:text-white transition">Rechercher</a>
        </div>
    </footer>

    <!-- Initialisation des icônes -->
    <script> feather.replace(); </script>

</body>
</html>
