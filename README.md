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

## 🗓️ Roadmap & Planification des Tâches (Jira / Git)

> **Statut actuel du projet :** ✅ *Fonctionnalités Principales Terminées*

[████████████████████████████████░░░░] 85% Complété


### 📈 Tableau de suivi des étapes

| Jour / Date | Objectif principal | Tâches & Fonctionnalités | Statut |
| :--- | :--- | :--- | :---: |
| **Jour 1**<br>*(19/10/2026)* | **Initialisation & Maquette** | • Création du dépôt Git & structure du projet.<br>• Configuration de Tailwind CSS.<br>• Planification initiale du projet sur Jira.<br>• Structure HTML globale (Header, Aside, Main). | ✅ Terminé |
| **Jour 2**<br>*(20/10/2026)* | **Terrain CSS Grid** | • Construction du terrain en CSS Grid natif (12 colonnes × 9 lignes).<br>• Positionnement des 11 emplacements tactiques (GB 2x3, Joueurs 2x2).<br>• Légende des couleurs et header finalisé. | ✅ Terminé |
| **Jour 3**<br>*(21/10/2026)* | **Modale & Validation** | • Structuration HTML/CSS de la modale d'ajout.<br>• Gestion de l'ouverture / fermeture (bouton ✕, Annuler, Échap, clic arrière-plan, `stopPropagation`).<br>• Validation du formulaire par Regex (nom, poste, numéro unique).<br>• Premier déploiement sur Vercel. | ✅ Terminé |
| **Jour 4**<br>*(22/10/2026)* | **Assignation & Terrain** | • Ajout d'un joueur vers le banc (Aside).<br>• Assignation d'un joueur à sa position (compatibilité poste + position libre).<br>• Mise à jour de la case du terrain et opacité de la carte.<br>• Compteurs interactifs (Total joueurs & Placé / 11). | ✅ Terminé |
| **Jour 5**<br>*(23/10/2026)* | **Modification & Suppression** | • Suppression d'un joueur (avec confirmation et libération de position).<br>• Modification via la modale préremplie.<br>• Règle de retour sur le banc si changement de poste. | ✅ Terminé |
| **Jour 6**<br>*(26/10/2026)* | **Persistence & Finitions** | • Messages de notification toast (succès / erreur - 3 sec).<br>• Sauvegarde et synchronisation avec `localStorage`.<br>• Optimisation Responsive (Desktop, Tablette, Mobile). | ✅ Terminé |
| **Jour 7**<br>*(27/10/2026)* | **Bonus & Finalisation** | • Filtrage des joueurs par poste.<br>• Effet de surbrillance / clignotement au clic sur un joueur placé.<br>• Rédaction finale de la documentation et présentation orale. | ❌ Non réalisé |

---

## ⚙️ État d'Avancement Réalisé

### ✅ Ce qui est fait :
1. **Header** : Présentation du club Atlas FC, schéma tactique 4-4-2 et légende de couleurs dynamique.
2. **Aside (Panneau latéral)** : Gestion dynamique des joueurs sur le banc et compteurs interactifs.
3. **Terrain de jeu** : Tracé complet du terrain de football en **CSS Grid natif 12x9** avec placement dynamique des 11 joueurs selon leur compatibilité tactique.
4. **Modale & Formulaire** : Système complet de validation Regex (numéro unique, champs requis), gestion fine des événements (Échap, clic extérieur, `stopPropagation`) et pré-remplissage en mode édition.
5. **Persistance & Notifications** : Sauvegarde dans le `localStorage`, système de notifications Toast et réactivité complète sur mobile et tablette.

---
**lien de presentation :** *[https://canva.link/7cp2lr6efo2s2l3]*
