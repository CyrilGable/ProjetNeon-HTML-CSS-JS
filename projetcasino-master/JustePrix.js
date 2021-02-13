// Partie méli
// ---------------------------------------------------------------
// Partie 1_3: Fonction de bulles plus et moins 
function appear(nb, RecupChiffre) {
    bulle = document.querySelector("#bulle");
    var apparition = document.createElement("p");
    apparition.classList.add("pop_up");
    apparition.innerHTML = RecupChiffre + " -  C'est " + nb;
    bulle.insertBefore(apparition, bulle.firstChild);
}
// --------------------------------------------------------------
// VARIABLES PRESENTENT DANS LE JEU :
var max = 100; // Defini le chiffre max :varie selon les niveaux
var min = 0;
var score1 = 0; // Partie 1 : Permet de compter le nombre d'essai pour l'Homme 
var score2 = 0; // Partie 2 : Permet de compter le nombre d'essai pour Robot
var ClickMax = 0; // Compteur à rebours déduit à chaque +1 score (varie selon les niveaux )
var ClickMaxNiv = 0; // Nombre d'essai max : varie selon le niveau 
var ChiffreAleatoire = 0; // Chiffre aléatoire à deviner par l'Humain 
var ChiffreAleatoire2 = Math.floor(Math.random() * (max - min) + min); // Chiffre aléatoire proposé par Robot

// ---------------------------------------------------------------
// Partie 1_2 : Boutons de niveaux au survol de la souris
function mouse(bin, nb) {

    const survol = document.querySelector("#Survol");
    const txt_lv = document.createElement("p");
    txt_lv.id = "txt";
    txt_lv.innerHTML = "Trouve un nombre entre 1 et " + nb;

    if (bin == 1) {
        survol.append(txt_lv);
    }
    else if (bin == 0) {
        block = document.querySelector("#txt");
        block.remove();
    }
}
// --------------------------------------------------------------
// Partie 1_1 : Consignes du jeu générée à l'ouverture de la page 
function Debut() {
    var regles = document.getElementById("regles");
    regles.remove();
    var commencer = document.getElementById("Commencer");
    commencer.remove();
    document.getElementById("input").style.display = "block";
}
// Partie 1_2 : Choisir le niveau 
function Partie1_2() {
    document.getElementById("Niveau").style.display = "block";
    document.getElementById("AfficherConsigne").innerHTML = "Choisi un niveau ";
    document.getElementById("AfficherNiveaux").style.display = "none";
}
function Niveau1() {
    max = 100;
    ClickMax = 12;
    ClickMaxNiv = 11;
    ChiffreAleatoire = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("Niveau").style.display = "none";
    document.getElementById("MonCompteur").style.display = "block";
    document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax;
    document.getElementById("BoutonsPartie1_3").style.display = "block";
    document.getElementById("AfficherConsigne").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouve le nombre mystère, compris entre 1 et 100";
}
function Niveau2() {
    max = 1000;
    ClickMax = 17;
    ClickMaxNiv = 16;
    ChiffreAleatoire = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("Niveau").style.display = "none";
    document.getElementById("MonCompteur").style.display = "block";
    document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax;
    document.getElementById("BoutonsPartie1_3").style.display = "block"
    document.getElementById("AfficherConsigne").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouve le nombre compris entre 1 et 1000 ";
}
function Niveau3() {
    max = 10000;
    ClickMax = 20;
    ClickMaxNiv = 19;
    ChiffreAleatoire = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("Niveau").style.display = "none";
    document.getElementById("MonCompteur").style.display = "block";
    document.getElementById("MonCompteur").innerHTML = "Nombre d'essai :  " + ClickMax;
    document.getElementById("BoutonsPartie1_3").style.display = "block"
    document.getElementById("AfficherConsigne").style.display = "block"
    document.getElementById("AfficherConsigne").innerHTML = "Trouve le nombre mystère, compris entre 1 et 10 000 ";
}

// Partie 1_3 : Partie 1 du jeu 
function Partie1_3() {
    var RecupChiffre = document.getElementById("recup").value;
    if (RecupChiffre == false) { // Si mon input est vide : renvoi un message d'erreur 
        document.getElementById("MessageErreur").style.display = "block";
        document.getElementById("MessageErreur").innerHTML = "Le nombre doit être compris entre 1 et " + max;
    }
    else if (score1 == ClickMaxNiv) { // Si le score = au nombre d'essai max : le jeu est fini
        document.getElementById("MessageErreur").style.display = "none";
        score1 += 1
        ClickMax = ClickMaxNiv;
        Transition()
    }
    else if (RecupChiffre > ChiffreAleatoire) { // Permet de generer une bulle "c'est moins"
        if (RecupChiffre > max) { // Permet de contrôler les chiffres hors limtes (du max)
            document.getElementById("MessageErreur").style.display = "block";
            document.getElementById("MessageErreur").innerHTML = "Le nombre doit être compris entre 1 et " + max;
        } else {
            RecupChiffre == true
            score1 += 1;
            document.getElementById("recup").innerHTML = score1;
            ClickMax -= 1;
            document.getElementById("button").value = ClickMax;
            document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax;
            document.getElementById("MessageErreur").style.display = "none";
            appear("moins", RecupChiffre);
        }
    }

    else if (RecupChiffre < ChiffreAleatoire) { // Permet de generer une bulle "c'est plus"
        if (RecupChiffre < min) { // Permet de contrôler les chiffres hors limtes (du max)
            document.getElementById("MessageErreur").style.display = "block";
            document.getElementById("MessageErreur").innerHTML = "Le nombre doit être compris entre 1 et " + max;
        } else {
            RecupChiffre == true
            score1 += 1;
            document.getElementById("recup").innerHTML = score1;
            ClickMax -= 1;
            document.getElementById("button").value = ClickMax;
            document.getElementById("MonCompteur").innerHTML = "Nombre d'essai : " + ClickMax;
            document.getElementById("MessageErreur").style.display = "none";
            appear("plus", RecupChiffre);
        }
    }
    else if (RecupChiffre == ChiffreAleatoire) { // L'Humain a trouvé la reponse : le jeu est fini 
        document.getElementById("MessageErreur").style.display = "none";
        ClickMax = ClickMaxNiv;
        return Transition()
    }
}

// Partie 2_1 : Phase 1 : Consigne du jeu 2 
function Transition() {
    document.getElementById("MessageErreur").style.display = "none";
    document.getElementById("BoutonsPartie1_3").style.display = "none"
    document.getElementById("bulle").style.display = "none";
    document.getElementById("MonCompteur").style.display = "none"
    document.getElementById("AfficherConsigne").innerHTML = " Well done ! <br><br> Tu as fait " + score1 + " essai(s). <br><br> <div> Dans la prochaine partie, tu vas devoir penser à un nombre compris entre 0 et " + max + ".</div>  <div> Robot te fera des propositions et tu devras lui dire si ton nombre est plus petit ou plus grand. </div> <div> Il a le même nombre d'essais que toi, le joueur avec le plus petit score l'emporte :) </div> "
    document.getElementById("JouerPartie2").style.display = "block";
}

// Partie 2_2 : Phase 2 : Demande à l'Humain de penser à un chiffre
function Partie2_1() {
    document.getElementById("AfficherConsigne").innerHTML = "Pense à un nombre compris entre " + min + " et " + max;
    document.getElementById("GenererChiffreAleatoire").style.display = "block";
    document.getElementById("MonScore").style.display = "none";
    document.getElementById("BoutonsPartie1_3").style.display = "none";
    document.getElementById("JouerPartie2").style.display = "none";

}
// Partie 2_3 : Partie 2 du jeu 
function Partie2_2() {
    document.getElementById("Robot").style.display = "flex" // Apparition de Robot
    document.getElementById("AfficherConsigne").innerHTML = "Dis à Robot si...";
    document.getElementById("BoutonsPartie2_2").style.display = "block";
    document.getElementById("GenererChiffreAleatoire").style.display = "none";
    document.getElementById("MonCompteur").style.display = "none";
    document.getElementById("SonCompteur").style.display = "block";
    document.getElementById("SonCompteur").innerHTML += "Son compteur  : " + ClickMax;
    document.getElementById("BoutonsPartie2_2").style.display = "block";
    document.getElementById("BlocChiffreAleatoire").style.display = "block";
    document.getElementById("LeChiffreAleatoire2").innerHTML += "Est-ce que c'est " + ChiffreAleatoire2 + " ?";
}

function CestMoins() { // Génère un nouveau chiffre aléatoire si l'Humain dit que c'est moins 
    score2 += 1;
    document.getElementById("buttonMoins").value = score2;
    ClickMax -= 1;
    document.getElementById("buttonMoins").value = ClickMax;
    document.getElementById("SonCompteur").innerHTML = "Nombre d'essai : " + ClickMax;
    if (score2 == ClickMaxNiv) {
        Transition2()
    } else {
        max = ChiffreAleatoire2
        ChiffreAleatoire2 = Math.floor(Math.random() * (max - min) + min)
        document.getElementById("LeChiffreAleatoire2").innerHTML = "Est-ce que c'est " + ChiffreAleatoire2 + " ?";
    }
}

function CestPlus() { // Génère un nouveau chiffre aléatoire si l'Humain dit que c'est plus
    score2 += 1;
    document.getElementById("buttonMoins").value = score2;
    ClickMax -= 1;
    document.getElementById("buttonMoins").value = ClickMax;
    document.getElementById("SonCompteur").innerHTML = "Nombre d'essai : " + ClickMax;
    if (score2 == ClickMaxNiv) {
        Transition2()
    } else {
        min = ChiffreAleatoire2
        ChiffreAleatoire2 = Math.floor(Math.random() * (max - min) + min)
        document.getElementById("LeChiffreAleatoire2").innerHTML = "Est-ce que c'est " + ChiffreAleatoire2 + " ?";
    }
}

function CestCa() { // La Partie 2 et le jeu sont terminés 
    Transition2()
}

function Transition2() { // Les scores sont affichés avec un mot de fin + bouton pour rejouer 
    document.getElementById("Robot").style.display = "none"
    document.getElementById("MessageErreur").style.display = "none";
    document.getElementById("BoutonsPartie2_2").style.display = "none"
    document.getElementById("SonScore").style.display = "block";
    document.getElementById("SonScore").innerHTML += "Son score : " + score2;
    document.getElementById("MonScore").style.display = "block";
    document.getElementById("MonScore").innerHTML += "Mon score : " + score1;
    document.getElementById("SonCompteur").style.display = "none";
    document.getElementById("BlocChiffreAleatoire").style.display = "none";
    document.getElementById("Rejouer").style.display = "block";
    if (score1 < score2) { // Le mot de fain varie si l'Humain a perdu ou gagné 
        document.getElementById("AfficherConsigne").innerHTML = " Partie finie !<br><br> Tu as réussi à faire moins d'essais que Robot. <br> Ce qui fait de toi le vainqueur de cette partie ! </div>  <br><br> Merci d'avoir jouer, à bientôt :) "
    } else {
        document.getElementById("AfficherConsigne").innerHTML = " Partie finie !<br><br> Robot a réussi à faire moins essais que toi... <br> Retente vite ta chance ! "
    }

}