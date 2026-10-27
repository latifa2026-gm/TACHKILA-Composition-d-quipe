// la seelection des elements au premier 
const btnAjouter = document.querySelector("#btn_ajouter");
const modaleForm = document.querySelector("#form");
const btnFermer = document.querySelector("#btn-fermer");
const btnAnnuler = document.querySelector("#annuler");
const formTitle = document.querySelector("#form-title");
const btnNbrJoueur = document.querySelector("#btn-nbr-joueur");
const compteurPlaces = document.querySelector("#compteur-places");
const notification = document.querySelector("#notification");

const emplacementsTerrain = document.querySelectorAll(".emplacement-joueur");
const inputNom = document.querySelector("#Nom");
const inputNum = document.querySelector("#Num");
const errorNom = document.querySelector("#eror-contenuN");
const errorNum = document.querySelector("#eror-contenu");

const conteneurJoueurs = document.querySelector("#liste_joueurs");
const templateCarte = document.querySelector("#template-carte-joueur");

//les variariables globales a utiliser dans le fichier complet avec n'imposrte quel emplacement .
let tab_joueur = [];
let idJoueurEnModification = null;
let notificationTimer = null;

// affichage message du succes ou d'erreur (3 secondes et apres d'esparu)
function afficherNotification(message, estSucces) {
    if (notificationTimer) {
        clearTimeout(notificationTimer);
    }

    notification.textContent = message;
    notification.classList.remove("hidden", "bg-green-600", "bg-red-600");

    if (estSucces) {
        notification.classList.add("bg-green-600");
    } else {
        notification.classList.add("bg-red-600");
    }

    notificationTimer = setTimeout(function () {
        notification.classList.add("hidden");
    }, 3000);
}

// Chargement initial depuis LocalStorage
function chargerDepuisLocalStorage() {
    const donnees = localStorage.getItem("tachkila_joueurs");
    if (donnees) {
        tab_joueur = JSON.parse(donnees);
    }
}

// Ouverture du modale
function ouvrireModale() {
    modaleForm.classList.remove("hidden");
}

// la fonction du fermeture du modale avec X , eshaper du clavier et buutton annuler 
function fermerModale() {
    modaleForm.classList.add("hidden");
    modaleForm.reset();
    idJoueurEnModification = null;
    formTitle.textContent = "Ajouter un joueur";
    errorNom.textContent = "";
    errorNum.textContent = "";
    const errorpost = document.querySelector(".post-error");
    if (errorpost) {
        errorpost.textContent = "";
    }
}

// Écouteurs pour la fermeture et l'ouverture
btnAjouter.addEventListener("click", function () {
    idJoueurEnModification = null;
    modaleForm.reset();
    formTitle.textContent = "Ajouter un joueur";
    ouvrireModale();
});

btnFermer.addEventListener("click", function (event) {
    event.preventDefault();
    fermerModale();
});

btnAnnuler.addEventListener("click", function (event) {
    event.preventDefault();
    fermerModale();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modaleForm.classList.contains("hidden")) {
        fermerModale();
    }
});
// on stop ici la propagartion pour que event ne doit pas cibler les parents or autres tarvaille sur element cibler .
modaleForm.addEventListener("click", function (event) {
    event.stopPropagation();
});

//fonction pour la validation du Nom du joueur 
function valideNom() {
    const valeur = inputNom.value.trim();
    const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-']{3,30}$/;
    if (valeur === "") {
        errorNom.textContent = "Le nom est obligatoire.";
    } else if (!regexNom.test(valeur)) {
        errorNom.textContent = "Le nom doit contenir de 3 à 30 lettres.";
    } else {
        errorNom.textContent = "";
    }
}

//fonction pour la validation du Nom du joueur 
function valideNumero(){
    const valeur = inputNum.value.trim();
    const numInt = parseInt(valeur, 10);
    const regexNum = /^[1-9][0-9]?$/;
    let numeroExiste = false;
    for (let i = 0; i < tab_joueur.length; i++) {
        if (tab_joueur[i].numero == numInt && tab_joueur[i].id !== idJoueurEnModification) {
            numeroExiste = true;
            break;
        }
    }
    if (valeur === "") {
        errorNum.textContent = "Le numéro est obligatoire.";
    } else if (!regexNum.test(valeur)) {
        errorNum.textContent = "Le numéro doit être entre 1 et 99.";
    } else if (numeroExiste) {
        errorNum.textContent = "Ce numéro est déjà attribué à un autre joueur.";
    } else {
        errorNum.textContent = "";
    }
}

// fonction pour la validation du poste du joueur 
function validerPoste() {
    const posteCocher = document.querySelector('input[name="post"]:checked');
    const errorpost = document.querySelector(".post-error");
    if (!posteCocher) {
        errorpost.textContent = "Veuillez choisir le poste.";
    } else {
        errorpost.textContent = "";
    }
}

// fonction pour la validation du Nom du joueur en cours de saisie du l'utilisateur 
inputNom.addEventListener("input", valideNom);
inputNum.addEventListener("input", valideNumero);

const radioPoste = document.querySelectorAll('input[name="post"]');
for (let i = 0; i < radioPoste.length; i++) {
    radioPoste[i].addEventListener("change", validerPoste);
}

//si je clique sur le buuton avec type submit le fait c'est ici 
modaleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    valideNom();
    valideNumero();
    validerPoste();
    const errors = document.querySelectorAll(".messageeror");
    let haserror = false;
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].textContent.trim() !== "") {
            haserror = true;
            break;
        }
    }
    if (haserror) {
        afficherNotification("Veuillez corriger les erreurs du formulaire.", false);
        return;
    }
    const posteCocher = document.querySelector('input[name="post"]:checked');
    let textePost = "";
    if (posteCocher.id === "gd") textePost = "GB";
    if (posteCocher.id === "df") textePost = "DEF";
    if (posteCocher.id === "ml") textePost = "MIL";
    if (posteCocher.id === "att") textePost = "ATT";
    if (idJoueurEnModification !== null) {
        // ici concernant la modefication du joueur 
        for (let i = 0; i < tab_joueur.length; i++) {
            if (tab_joueur[i].id === idJoueurEnModification) {
                tab_joueur[i].nom = inputNom.value.trim();
                tab_joueur[i].numero = parseInt(inputNum.value, 10);
                if (tab_joueur[i].poste !== textePost) {
                    tab_joueur[i].position = "BANC";
                }
                tab_joueur[i].poste = textePost;
                break;
            }
        }
        afficherNotification("Joueur modifié avec succès !", true);
    } else {
        // ici concernant l'ajout du joueur 
        const nouveauJoueur = {
            id: crypto.randomUUID(),
            nom: inputNom.value.trim(),
            numero: parseInt(inputNum.value, 10),
            poste: textePost,
            position: "BANC"
        };
        tab_joueur.push(nouveauJoueur);
        afficherNotification("Joueur ajouté avec succès !", true);
    }

    localStorage.setItem("tachkila_joueurs", JSON.stringify(tab_joueur));
    afficherJoueursBanc();
    afficherTerrain();
    fermerModale();
});

// fonction pour le calcul et mise a jour des compteurs 
function mettreAJourCompteurs() {
    btnNbrJoueur.textContent = `${tab_joueur.length} joueur${tab_joueur.length > 1 ? 's' : ''}`;
    let nbPlaces = 0;
    for (let i = 0; i < tab_joueur.length; i++) {
        if (tab_joueur[i].position !== "BANC") {
            nbPlaces++;
        }
    }
    compteurPlaces.textContent = `Joueurs placés : ${nbPlaces} / 11`;
}
//fonction pour l'Affichage dynamique dans l'aside qui contient l'ensemble des joueurs
function afficherJoueursBanc() {
    conteneurJoueurs.innerHTML = "";
    mettreAJourCompteurs();

    if (tab_joueur.length === 0) {
        conteneurJoueurs.innerHTML = `
            <div class="bg-slate-900/80 text-slate-300 p-3 text-xs text-center rounded-xl border border-slate-700">
                Aucun joueur dans l'effectif pour le moment.
            </div>`;
        return;
    }

    for (let i = 0; i < tab_joueur.length; i++) {
        const joueur = tab_joueur[i];

        const clone = templateCarte.content.cloneNode(true);
        const carteDiv = clone.querySelector(".carte-joueur");
        const badgePoste = clone.querySelector(".card-poste");

        badgePoste.textContent = joueur.poste;
        clone.querySelector(".card-nom").textContent = joueur.nom;
        clone.querySelector(".card-numero").textContent = `N°${joueur.numero}`;

        if (joueur.poste === "GB") badgePoste.className += " bg-yellow-400 text-black";
        if (joueur.poste === "DEF") badgePoste.className += " bg-blue-500 text-white";
        if (joueur.poste === "MIL") badgePoste.className += " bg-green-500 text-white";
        if (joueur.poste === "ATT") badgePoste.className += " bg-red-500 text-white";

        if (joueur.position !== "BANC") {
            carteDiv.classList.add("opacity-40");
        }

        const selectPos = clone.querySelector(".select-position");
        selectPos.innerHTML = `<option value="BANC">Banc</option>`;

        for (let k = 0; k < emplacementsTerrain.length; k++) {
            const slot = emplacementsTerrain[k];
            const idSlot = slot.id;
            const posteSlot = slot.getAttribute("data-poste");
            let estOccupeeParAutre = false;
            for (let j = 0; j < tab_joueur.length; j++) {
                if (tab_joueur[j].position === idSlot && tab_joueur[j].id !== joueur.id) {
                    estOccupeeParAutre = true;
                    break;
                }
            }
            if (posteSlot === joueur.poste && !estOccupeeParAutre) {
                const option = document.createElement("option");
                option.value = idSlot;
                option.textContent = idSlot.replace("slot-", "").toUpperCase();

                if (joueur.position === idSlot) {
                    option.selected = true;
                }

                selectPos.appendChild(option);
            }
        }
        selectPos.addEventListener("change", function () {
            joueur.position = this.value;
            localStorage.setItem("tachkila_joueurs", JSON.stringify(tab_joueur));
            afficherJoueursBanc();
            afficherTerrain();
            afficherNotification("Position sur le terrain mise à jour !", true);
        });
        carteDiv.addEventListener("click", function (event) {
            if (event.target.tagName !== "SELECT" && !event.target.closest("button")) {
                if (joueur.position !== "BANC") {
                    const slotElem = document.getElementById(joueur.position);
                    if (slotElem) {
                        slotElem.classList.remove("flash-highlight");
                        void slotElem.offsetWidth;
                        slotElem.classList.add("flash-highlight");
                    }
                }
            }
        });
        const btnEdit = clone.querySelector(".btn-modifier");
        btnEdit.addEventListener("click", function () {
            ouvrirModalePourModifier(joueur.id);
        });

        const btnSuppr = clone.querySelector(".btn-supprimer");
        btnSuppr.addEventListener("click", function () {
            supprimerJoueur(joueur.id);
        });
        conteneurJoueurs.appendChild(clone);
    }
}
// fonct pour l'affichage du terrain
function afficherTerrain() {
    for (let i = 0; i < emplacementsTerrain.length; i++) {
        const slot = emplacementsTerrain[i];
        const idSlot = slot.id;
        const defaultText = idSlot.replace("slot-", "").toUpperCase();

        let joueurOccupant = null;
        for (let j = 0; j < tab_joueur.length; j++) {
            if (tab_joueur[j].position === idSlot) {
                joueurOccupant = tab_joueur[j];
                break;
            }
        }
        if (joueurOccupant) {
            slot.innerHTML = `
                <div class="flex flex-col items-center justify-center w-full h-full text-center">
                    <span class="font-bold text-xs text-amber-300">${joueurOccupant.nom}</span>
                    <span class="text-xs text-white">N°${joueurOccupant.numero}</span>
                </div>
            `;
        } else {
            slot.textContent = defaultText;
        }
    }
}
//fonction pour la Suppression avec confirmation 
function supprimerJoueur(idJoueur) {
    let indexATrouver = -1;

    for (let i = 0; i < tab_joueur.length; i++) {
        if (tab_joueur[i].id === idJoueur) {
            indexATrouver = i;
            break;
        }
    }

    if (indexATrouver !== -1) {
        const confirmation = confirm(`Voulez-vous vraiment supprimer le joueur ${tab_joueur[indexATrouver].nom} ?`);
        
        if (confirmation) {
            tab_joueur.splice(indexATrouver, 1);
            localStorage.setItem("tachkila_joueurs", JSON.stringify(tab_joueur));
            afficherJoueursBanc();
            afficherTerrain();
            afficherNotification("Joueur supprimé, sa position est désormais libre.", true);
        }
    }
}

// fonction pour la preparation et modification
function ouvrirModalePourModifier(idJoueur) {
    idJoueurEnModification = idJoueur;

    let joueurTrouve = null;
    for (let i = 0; i < tab_joueur.length; i++) {
        if (tab_joueur[i].id === idJoueur) {
            joueurTrouve = tab_joueur[i];
            break;
        }
    }

    if (joueurTrouve) {
        inputNom.value = joueurTrouve.nom;
        inputNum.value = joueurTrouve.numero;

        const radiosPoste = document.querySelectorAll('input[name="post"]');
        for (let i = 0; i < radiosPoste.length; i++) {
            const radio = radiosPoste[i];
            let posteMatch = "";
            if (radio.id === "gd") posteMatch = "GB";
            if (radio.id === "df") posteMatch = "DEF";
            if (radio.id === "ml") posteMatch = "MIL";
            if (radio.id === "att") posteMatch = "ATT";

            if (posteMatch === joueurTrouve.poste) {
                radio.checked = true;
            }
        }

        const errors = document.querySelectorAll(".messageeror");
        for (let i = 0; i < errors.length; i++) {
            errors[i].textContent = "";
        }

        formTitle.textContent = "Modifier le joueur";
        modaleForm.classList.remove("hidden");
    }
}
chargerDepuisLocalStorage();
afficherJoueursBanc();
afficherTerrain();