// on commence par la selection des elements :
const btnAjouter=document.querySelector("#btn_ajouter");
const modaleForm=document.querySelector("#form");
const btnFermer=document.querySelector("#btn-fermer");
const btnAnnuler=document.querySelector("#annuler");

const inputNom=document.querySelector("#Nom");
const inputNum=document.querySelector("#Num");
const errorNom=document.querySelector("#eror-contenuN");
const errorNum=document.querySelector("#eror-contenu");
// const posteCocher=document.querySelector('input[name="post"]:checked');
// console.log(posteCocher);
// const errorpost=document.querySelector("#post-error");
const tab_joueur=[];
const conteneur_joueur=document.querySelector("#liste_joueurs");
// maintenant sur la gestion du modale fermeture par exemple 
// fonction pour l'ouveture du modale 
function ouvrireModale(){
    modaleForm.classList.remove("hidden");
}
// fonction pour la fermiture du modale 
function fermerModale(){
    modaleForm.classList.add("hidden");
    modaleForm.reset()
    errorNom.textContent =" ";
    errorNum.textContent =" ";
}

// conceranant l'ecoute aux evenements
btnAjouter.addEventListener("click",ouvrireModale);
btnFermer.addEventListener("click",(event)=>{
    event.preventDefault();
     fermerModale();
});
btnAnnuler.addEventListener("click",(event)=>{
    event.preventDefault();
     fermerModale();
});
// la fermeture de modale avec la touche echap :
document.addEventListener("keydown",(event)=>{
    if(event.key==="Escape" && !modaleForm.classList.contains("hidden")){
        fermerModale();
    }
});

// on stope la propagation du l'evenement
modaleForm.addEventListener("click",(event)=>{
    event.stopPropagation();
});

// etpae de validatoin du formulaire :
// fucntion pour validre le nom du joueur 
function valideNom(){
    const valeur =inputNom.value.trim();
    const regexNom=/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-']{3,30}$/;
    if(valeur=== ""){
        errorNom.textContent="Le nom est obligatoire.";
    }
    else if(!regexNom.test(valeur)){
        errorNom.textContent="Le nom doit contenir de 3 a 30 lettres.";
    }else{
        errorNom.textContent="";
    }
}

// function pour valider le numero :
function valideNumero(){
    const valeur =inputNom.value.trim();
    const numInt=parseInt(valeur,10);
    const regexNum=/^[1-9][0-9]?$/;

    //const numeroExiste=tab_joueur.some((j)=>j.numero===numInt);
    //ca concernant l'unicite du numero du joueur 
    let numeroExiste=false;
    for(let i=0;i<tab_joueur.length;i++){
          if(tab_joueur[i].numero===numInt){
            numeroExiste=true;
            break;
          }
    }
    if(valeur === ""){
        errorNum.textContent="Le numero est obligatoire.";
    }
    else if(!regexNum.test(valeur)){
        errorNum.textContent="Le numero doit etre entre 1 et 99 .";
    }else if(numeroExiste){
        errorNum.textContent="Ce numero est deja attribue a un autre joueur";
    }else errorNum.textContent="";
}

// functio pour valider la selection du poste :
function validerPoste(){
    const posteCocher=document.querySelector('input[name="post"]:checked');
    const errorpost=document.querySelector(".post-error");
    if(!posteCocher){
          errorpost.textContent="Veuillez choisir le poste ."
    }else{
        errorpost.textContent="";
    }
}
// la validation en xours de l'ecriture :
inputNom.addEventListener("input",valideNom);
inputNum.addEventListener("input",valideNumero);
// posteCocher.addEventListener("input",validerPoste());

const radioPoste=document.querySelectorAll('input[name="post"]');
// on boucle sur l'ensemble des radsio
radioPoste.forEach((radio) => {
  radio.addEventListener("change", validerPoste);
});

// soumission du formulaire avec event submit :
modaleForm.addEventListener("submit",function(event){
    event.preventDefault();
    valideNom();
    valideNumero();
    validerPoste();
    const errors = document.querySelectorAll(".messageeror")
    let haserror = false;
    errors.forEach(error => {
        console.log(error.textContent);
        if (error.innerText.trim() !== "") {
            haserror = true;
            // console.log(haserror)
        }
    });
    // console.log(haserror);
    if(haserror){
        return;
    }
    const posteCocher=document.querySelector('input[name="post"]:checked');
    // console.log(posteCocher.id);
    let textePost="";
    if(posteCocher.id==="gd"){
         textePost="GB";
    }
    if(posteCocher.id==="df"){
         textePost="DEF";
    }
    if(posteCocher.id==="ml"){
         textePost="ML";
    }
    if(posteCocher.id==="ATT"){
         textePost="att";
    }
    const nouveauJoueur={
        id:crypto.randomUUID(),
        nom:inputNom.value.trim(),
        numero:parseInt(inputNum,10),
        poste:textePost,
        position:"BANC"
    }
    tab_joueur.push(nouveauJoueur);
    localStorage.setItem("tachkila_joueurs", JSON.stringify(tab_joueur));
    afficherJoueursBanc();
    console.log(tab_joueur);
    fermerModale();
})



// Selection du conteneur dans l'aside
const conteneurBanc = document.querySelector("#liste-joueurs");

// function simple pour afficher les cartes
function afficherJoueursBanc() {
  conteneurBanc.innerHTML = ""; // Vider l conteneur

  for (let i = 0; i < tab_joueur.length; i++) {
    const joueur = tab_joueur[i];

    // Créer un div pour le joueur
    const carte = document.createElement("div");
    carte.className = "flex items-center justify-between p-3 bg-slate-800 rounded-lg text-white mb-2";

    carte.innerHTML = `
      <div>
        <span class="font-bold text-amber-500">[${joueur.numero}]</span>
        <span class="font-bold">${joueur.nom}</span>
        <span class="text-xs text-slate-400">N°${joueur.poste}</span>
        <button type="button" class="btn-modifier"><img src=""/></button>
        <button type="button" class=""><img src="btn-supprimer"/></button>
      </div>
    `;

    conteneurBanc.appendChild(carte);
  }
}


