const btn_Ajouter_joueur=document.querySelector("#btn_ajouter");
const modale=document.querySelector("#form");
const btn_fermeture=document.querySelector("#btn-fermer");
const posts=document.querySelector("#the_post");
const Ajoute=document.querySelector("#ajoute");
const Annuler=document.querySelector("#annuler");
const select_joueur=document.createElement("select");

// la creation du tableau :
let tab_joueur=[];

// la gestion du l'ouverture et fermeture du modale .
btn_Ajouter_joueur.addEventListener("click",()=>{
      modale.classList.remove("hidden");
});
btn_fermeture.addEventListener("click",()=>{
    modale.classList.add("hidden");
});
// les fonctionnalite du validation des champs :





Ajoute.addEventListener("click",()=>{
        const option_joueur=document.createElement("option");
        //option_joueur.textContent=la valeur choisie parmit les poste 
       
       
});

