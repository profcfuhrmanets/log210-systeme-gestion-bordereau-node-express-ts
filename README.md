# Système de gestion des bordereau 
[![Build and Tests](https://github.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts/actions/workflows/build-and-tests.yml/badge.svg)](https://github.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts/actions/workflows/build-and-tests.yml)

Application utilisée dans le cadre du cours de LOG210 et développée avec Node, Express et TypeScript

## Diagramme de classe (généré par tplant)

![dcl](dist/docs/dcl.svg)

Ce système doit être utilisé pour obtenir l'information de base à la réalisation de votre laboratoire en LOG210. Il possède les qualités suivantes:

 - il est simple pour les débutants en LOG210
   - il n'y a pas de framework pour le front-end ni pour la persistance, mais ça n'empêche pas d'ajouter ces dimensions.
   - il est seulement [REST niveau 1](https://restfulapi.net/richardson-maturity-model/#level-one), mais ça n'empêche pas de modifier l'API pour qu'il soit [REST niveau 3](https://restfulapi.net/richardson-maturity-model/#level-three).
 - il est orienté objet (avec TypeScript)
 - il contient des tests pour l'API (avec Mocha)
 - il fait une séparation entre les couches présentation et domaine, selon la méthodologie de conception du cours LOG210 (Larman)

## Voulez-vous utiliser ce serveur?

1. (Créer une fork et) Cloner
4. Installer les dépendences node - ```npm install```
5. Compiler les sources - ```npm run compile```
6. Lancer serveur de développement - ```npm start```
7. Lancer les tests (pas besoin de lancer le serveur d'abord) - ```npm run test```
8. Lancer les tests en mode TDD - ```npm run watch```
1. Lancer un seul test - ```npm run test -- -g "nom ou partie du nom d'un test"```

voir https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40

## Utiliser ce serveur avec Docker
- Création de votre image docker
  - docker build -t sgb --file Dockerfile .
- Exécuter votre image docker
  - docker run -p 3200:3200 sgb

## définition de l'API
```
npm run compile #Générer la documentation 
npm start 
```
Ouvrir votre navigateur à l'url suivant s'il n'ouvre pas automatiquement
 http://127.0.0.1:3200/docs/index
 http://localhost:3200/docs/index

