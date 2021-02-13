// ---------------------------------------------------------------
// NOS VARIABLES GLOBALES
var NbBody = 0;
var monLaunch = document.getElementById("launch");
var totalVelocity = 0;

// ---------------------------------------------------------------
// LES FONCTIONS

//Determine le nombre de carré
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Change la difficulté
function SetDiff(Diff) {
    monLaunch.className = "";
    monLaunch.classList.add(Diff);
}

// Moyen d'obtenir la position des éléments
function getPosition(mouvement) {
    var divElement = document.querySelector("div");
    var results = divElement.getBoundingClientRect();
    console.log(results.top, results.left);
    if (mouvement) {
        window.requestAnimationFrame(getPosition);
    }
}
window.requestAnimationFrame(getPosition);

// Lancer le jeu
function Startgame() {
    score = 0;
    document.querySelector(".score").innerHTML = "<p> Votre score est de " + score + "% !</p>";
    reset();
    NbBody = getRandomIntInclusive(40, 50);
    console.log("Nombre de personnages : ", NbBody);
    var maDiff = document.getElementById("launch").className;

    // Switch selon la difficulté souhaitée
    switch (maDiff) {
        case "facile":
            document.querySelector("section").innerHTML = "";
            document.querySelector("h2").innerHTML = "Easy mode loaded...";
            ecart = 1.22;
            for (var index = 0; index < NbBody; index += 1) {
                let accel = 1 - (index * 0.01);
                let speed = index * 2;
                if (accel >= 0.8) {
                    velocity = speed * accel;
                    document.querySelector("section").innerHTML += "<div class='facile carre' style='animation-delay:" + velocity + "s'<p>^ _ ^</p></div>";
                } else {
                    velocity += ecart;
                    document.querySelector("section").innerHTML += "<div class='facile carre' style='animation-delay:" + velocity + "s'<p>^ _ ^</p></div>";
                }
                totalVelocity = velocity;
            }
            break;

        case "moyen":
            document.querySelector("section").innerHTML = "";
            document.querySelector("h2").innerHTML = "Medium mode loaded...";
            ecart = 1.0675;
            for (var index = 0; index < NbBody; index += 1) {
                let accel = 1 - (index * 0.01);
                let speed = index * 1.75;
                if (accel >= 0.8) {
                    velocity = speed * accel;
                    document.querySelector("section").innerHTML += "<div class='moyen carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                } else {
                    velocity += ecart;
                    document.querySelector("section").innerHTML += "<div class='moyen carre' style='animation-delay:" + velocity + "s'<p>o _ o</p></div>";
                }
                totalVelocity = velocity;
            }
            break;

        case "hard":
            document.querySelector("section").innerHTML = "";
            document.querySelector("h2").innerHTML = "Hard mode loaded...";
            ecart = 0.7625;
            for (var index = 0; index < NbBody; index += 1) {
                let accel = 1 - (index * 0.01);
                let speed = index * 1.25;
                if (accel >= 0.8) {
                    velocity = speed * accel;
                    document.querySelector("section").innerHTML += "<div class='hard carre' style='animation-delay:" + velocity + "s'<p>0 _ 0</p></div>";
                } else {
                    velocity += ecart;
                    document.querySelector("section").innerHTML += "<div class='hard carre' style='animation-delay:" + velocity + "s'<p>0 _ 0</p></div>";
                }
                totalVelocity = velocity;
            }
            break;

        case "impossible":
            document.querySelector("h2").innerHTML = "Godlike mode loaded...";
            document.querySelector("section").innerHTML = "";
            ecart = 0.4575;
            for (var index = 0; index < NbBody; index += 1) {
                let accel = 1 - (index * 0.01);
                let speed = index * 0.75;
                if (accel >= 0.8) {
                    velocity = speed * accel;
                    document.querySelector("section").innerHTML += "<div class='impossible carre' style='animation-delay:" + velocity + "s'<p>O _ O</p></div>";
                } else {
                    velocity += ecart;
                    document.querySelector("section").innerHTML += "<div class='impossible carre' style='animation-delay:" + velocity + "s'<p>O _ O</p></div>";
                }
                totalVelocity = velocity;
            }
            break
    }
}

// Le clicker
function clique() {
    var divElement = document.querySelectorAll("div.carre");
    var condition = false;
    // Permet d'ajouter les points
    for (let select = 0; select < divElement.length; select++) {
        if (divElement[select].getBoundingClientRect().left < 1231 && divElement[select].getBoundingClientRect().left > 1000) {
            compteur = compteur + 1;
            condition = true;
            document.querySelector("#cliks").innerHTML = "<span>" + compteur + "</span>";
        }
    }
    // Permet de retirer les points
    if (!condition) {
        compteur = compteur - 1;
        document.querySelector("#cliks").innerHTML = "<span>" + compteur + "</span>";
    }
    // Calcul du score
    score = (compteur / NbBody);
    score = score * 100;
    document.querySelector(".score").innerHTML = "<p> Votre score est de " + parseInt(score) + "% !</p>";
}

// La fonction reset
function reset() {
    compteur = 0;
    document.querySelector("#cliks").innerHTML = "<span>" + compteur + "</span>";
}