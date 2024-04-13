document.addEventListener('DOMContentLoaded', function () {
    // Le code à exécuter une fois que le document est prêt
    let colorBox = document.getElementById('color-box');
    let changeColorBtn = document.getElementById('change-color-btn');
    // Manipulation de l'élément ou autre opération

    // Ajouter un écouteur d'événement au bouton change-color-btn
    changeColorBtn.addEventListener('click', function () {
        // Changer la couleur d'arrière-plan de color-box en une couleur aléatoire
        colorBox.style.backgroundColor = getRandomColor();
    });
});

/*
function getRandomColor() {
    var letters = '0123456789ABCDEF'; // Les caractères hexadécimaux valides
    var color = '#'; // Le début d'une couleur hexadécimale

    // Boucle pour générer 6 caractères hexadécimaux aléatoires
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Ajoute un caractère hexadécimal aléatoire
    }

    return color; // Retourne la couleur générée
}
*/
function getRandomColor() {
    // Générer une valeur hexadécimale aléatoire pour chaque composante de couleur (rouge, vert, bleu)
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
}

/* Exemple d'utilisation
var randomColor = getRandomColor();
console.log(randomColor); // Affiche la couleur aléatoire générée*/

