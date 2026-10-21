# ⚽ Atlas FC - Gestionnaire de Composition d'Équipe (4-4-2)

Une application web interactive permettant à l'entraîneur du club amateur **Atlas FC** de gérer son effectif et de composer sa stratégie d'équipe sur un terrain schématisé en 4-4-2.

---

## 📌 Présentation du Projet

L'objectif de ce projet est de digitaliser la préparation des matchs d'Atlas FC. L'application permet d'ajouter, modifier, supprimer et positionner des joueurs sur le terrain selon les règles tactiques du football (compatibilité des postes, positions uniques, validation des numéros, etc.).

### 🛠️ Technologies utilisées
- **HTML5** (Structure sémantique, grille du terrain)
- **CSS3 / Tailwind CSS** (Stylisation, design responsive et animations)
- **CSS Grid natif** (Grille 12x9 pour le traçage du terrain de football)
- **JavaScript** (Manipulation du DOM, événements, localStorage, Regex)

---

## 🎨 Code Couleur des Postes

Les cartes des joueurs et leurs positions respectent un code couleur strict :
- 🟡 **Gardien de But (GB)** : Jaune (`bg-amber-400` / `#f59e0b`)
- 🔵 **Défenseurs (DEF)** : Bleu (`bg-blue-500` / `#3b82f6`)
- 🟢 **Milieux de Terrain (MIL)** : Vert (`bg-emerald-500` / `#10b981`)
- 🔴 **Attaquants (ATT)** : Rouge (`bg-red-500` / `#ef4444`)

---

## 🗓️ Roadmap & Planification des Tâches (Jira / Git)

> **Statut actuel du projet :** ⏳ *Jour 3 — En cours de réalisation*

```
[██████████████████░░░░░░░░░░░░░░░░░░] 45% Complété
```

### 📈 Tableau de suivi des étapes

| Jour / Date | Objectif principal | Tâches & Fonctionnalités | Statut |
| :--- | :--- | :--- | :---: |
| **Jour 1**<br>*(19/10/2026)* | **Initialisation & Maquette** | • Création du dépôt Git & structure du projet.<br>• Configuration de Tailwind CSS.<br>• Planification initiale du projet sur Jira.<br>• Structure HTML globale (Header, Aside, Main). | ✅ Terminé |
| **Jour 2**<br>*(20/10/2026)* | **Terrain CSS Grid** | • Construction du terrain en CSS Grid natif (12 colonnes × 9 lignes).<br>• Positionnement des 11 emplacements tactiques (GB 2x3, Joueurs 2x2).<br>• Légende des couleurs et header finalisé. | ✅ Terminé |
| **Jour 3**<br>*(21/10/2026)*<br>⭐ **[Aujourd'hui]** | **Modale & Validation** | • Structuration HTML/CSS de la modale d'ajout.<br>• **[En cours]** Gestion de l'ouverture / fermeture (bouton ✕, Annuler, Échap, clic arrière-plan, `stopPropagation`).<br>• Validation du formulaire par Regex (nom, poste, numéro unique).<br>• Premier déploiement sur Vercel. | 🔄 **En cours** |
| **Jour 4**<br>*(22/10/2026)* | **Assignation & Terrain** | • Ajout d'un joueur vers le banc (Aside).<br>• Assignation d'un joueur à sa position (compatibilité poste + position libre).<br>• Mise à jour de la case du terrain et opacité de la carte.<br>• Compteurs interactifs (Total joueurs & Placé / 11). | ⏳ À venir |
| **Jour 5**<br>*(23/10/2026)* | **Modification & Suppression** | • Suppression d'un joueur (avec confirmation et libération de position).<br>• Modification via la modale préremplie.<br>• Règle de retour sur le banc si changement de poste. | ⏳ À venir |
| **Jour 6**<br>*(26/10/2026)* | **Persistence & Finitions** | • Messages de notification toast (succès / erreur - 3 sec).<br>• Sauvegarde et synchronisation avec `localStorage`.<br>• Optimisation Responsive (Desktop, Tablette, Mobile). | ⏳ À venir |
| **Jour 7**<br>*(27/10/2026)* | **Bonus & Finalisation** | • Filtrage des joueurs par poste.<br>• Effet de surbrillance / clignotement au clic sur un joueur placé.<br>• Rédaction finale de la documentation et présentation orale. | ⏳ À venir |

---

## ⚙️ État d'Avancement Réalisé (Sprint Actuel)

### ✅ Ce qui est fait :
1. **Header** : Présentation du club Atlas FC, schéma tactique 4-4-2 et légende de couleurs dynamique.
2. **Aside (Panneau latéral)** : Zone préparée pour accueillir la liste des joueurs sur le banc et le bouton d'ajout d'un nouveau joueur.
3. **Terrain de jeu** : Tracé complet du terrain de football en **CSS Grid natif 12x9** avec marquage des 11 positions pré-définies (1 GB, 4 DEF, 4 MIL, 2 ATT).

### 🔄 En cours de développement :
- Gestion de la modale d'ajout/modification :
  - Événements d'ouverture/fermeture.
  - Utilisation de `stopPropagation()` pour empêcher la fermeture involontaire lors d'un clic à l'intérieur de la modale.
  - Écouteur sur la touche `Échap` (Escape).

---

## 🚀 Installation et Lancement Local

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/latifa2026-gm/TACHKILA-Composition-d-quipe.git
   ```

2. **Accéder au dossier** :
   ```bash
   cd TACHKILA-Composition-d-quipe
   ```

---

## 🔗 Liens du Projet

- **Projet Hébergé (Vercel)** : *[https://tachkilacompositiondequipe.vercel.app/]*
- **Gestion des Tâches (Jira)** : *[https://uca-team-v0nbvjtc.atlassian.net/jira/software/projects/TB/boards/3?sprintStarted=true&filter=&groupBy=none&atlOrigin=eyJpIjoiZjAzOTFhNDljNGMyNDg0Y2E2MjU2NmVhYzYyNzkzMTkiLCJwIjoiaiJ9]*
- **Dépôt GitHub** : *[https://github.com/latifa2026-gm/TACHKILA-Composition-d-quipe.git]*

---
