$(document).ready(function() {

    $("#bouton1").click(function() {

        // On vérifie si l'article n'existe pas
        if ($("#zoneCitation article").length === 0) {

            // On insère l'article dans le conteneur
            $("#zoneCitation").html(`
                <article>
                    Les logiciels et les cathédrales, c'est un peu la même chose :
                    d'abord on les construit, ensuite on prie.
                </article>
            `);
        }
    });

    $("#bouton2").click(function() {
        // On supprime seulement l'article, pas la zone
        $("#zoneCitation").empty();
    });

});

