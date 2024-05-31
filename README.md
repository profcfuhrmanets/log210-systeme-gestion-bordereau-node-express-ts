# Système de gestion des bordereaux (SGB)

Application utilisée dans le cadre du cours de LOG210 et développée avec Node, Express et TypeScript.

## Diagramme de classes (généré par tplant)

![dcl](dist/docs/dcl.svg)

Ce système doit être utilisé pour obtenir l'information de base pour la réalisation de votre laboratoire en LOG210. Il possède les qualités suivantes:

 - il est simple pour les débutants en LOG210
   - il n'y a pas de cadriciel pour le front-end ni pour la persistance, mais ça n'empêche pas d'ajouter ces dimensions.
   - il est seulement [REST niveau 1](https://restfulapi.net/richardson-maturity-model/#level-one), mais ça n'empêche pas de modifier l'API pour qu'il soit [REST niveau 3](https://restfulapi.net/richardson-maturity-model/#level-three).
 - il est orienté objet (avec TypeScript)
 - il contient des tests pour l'API (avec Mocha)
 - il fait une séparation entre les couches présentation et domaine, selon la méthodologie de conception du cours LOG210 (Larman)

## Voulez-vous utiliser ce serveur?

1. Installer Node.js 20 ou supérieur
1. (Créer une fork et) Cloner
1. Installer les dépendances Node - `npm install`
1. Compiler les sources et lancer le serveur de développement - `npm start`
1. Lancer les tests (pas besoin de lancer le serveur d'abord) - `npm run test`
1. Lancer les tests en mode TDD - `npm run watch`
1. Lancer un seul test - `npm run test -- -g "nom ou partie du nom d'un test"`

Voir https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40

## Utiliser ce serveur avec Docker (optionnel)

- Création de votre image docker
  - `docker build -t sgb --file Dockerfile .`
- Exécuter votre image docker
  - `docker run -p 3200:3200 sgb`

## Consulter la documentation de l'API

Pour générer et consulter la documentation, exécuter `npm start`. Ouvrir l'URL affichée dans la console.
