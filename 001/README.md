# Projet 001 - CV en ligne avec Vite

Ce projet est une application web construite avec **Vite + React**.  
Il présente un CV interactif avec trois composantes principales :
- **Infos personnelles**
- **Expérience**
- **Compétences**

---

## 🚀 Étapes effectuées

1. Création du projet avec Vite :
   ```bash
   npm create vite@latest 001
   ensuite j ai choisi le framework **React**
   puis j ai pris la variante JS + react compiler
   j ai utilisé Oxlint et enfin j ai installé avec npm

2. Ajout des 3 fichiers Competence.jsx InfoPerso.jsx et Experience.jsx
   j'ai codé les 3 fichiers puis les ai exporté par défaut pour les importer dans App.jsx
   L'extension jsx est une syntaxe spéciale qui mélange du JavaScript et du HTML dans le même fichier
   techniquement Vite ou React peuvent aussi fonctionner avec .js mais .jsx est une bonne pratique pour distinguer les fichiers React des simples scripts JavaScript.

3. Explication des packages....json
   le fichier package.json sert de carnet de bord pour l'application : il décrit le projet, liste les dépendances (les bibliothèques que utilisé), et définit les scripts qu'on peut lancer avec npm

   quand à package-lock.json il est généré automatiquement par npm quand on installe des dépendances (npm install), il enregistre les versions exactes de toutes les bibliothèques installées, y compris leurs sous‑dépendances , il garantit que si moi ou quelqu’un d’autre relance npm install sur ce projet, on aura exactement les mêmes versions de chaque package , il évite les problèmes de compatibilité liés aux mises à jour automatiques.