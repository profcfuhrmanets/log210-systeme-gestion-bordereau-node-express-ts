# Système de gestion des bordereaux (SGB)

[![Build and Tests](https://github.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts/actions/workflows/build-and-tests.yml/badge.svg)](https://github.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts/actions/workflows/build-and-tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts/badge.svg?branch=feature/multiple-changes)](https://coveralls.io/github/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts?branch=feature/multiple-changes)

Application utilisée dans le cadre du cours de LOG210 et développée avec Node, Express et TypeScript.

Ce système doit être utilisé pour obtenir l'information de base pour la réalisation de votre laboratoire en LOG210. Il possède les qualités suivantes:

 - il est simple pour les débutants en LOG210
   - il n'y a pas de cadriciel pour le front-end ni pour la persistance, mais ça n'empêche pas d'ajouter ces dimensions.
   - il est seulement [REST niveau 2](https://restfulapi.net/richardson-maturity-model/#level-two), mais ça n'empêche pas de modifier l'API pour qu'il soit [REST niveau 3](https://restfulapi.net/richardson-maturity-model/#level-three).
 - il est orienté objet (avec TypeScript)
 - il contient des tests pour l'API (avec Jest)
 - il fait une séparation entre les couches présentation et domaine, selon la méthodologie de conception du cours LOG210 (Larman)

## Modèle du domaine

![Modèle du domaine](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts/master/docs/mdd.puml)

## Voulez-vous utiliser ce serveur?

1. [Installer Node.js 20](https://nodejs.org/en/download/package-manager) ou supérieur
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

La [documentation de l'API](https://profcfuhrmanets.github.io/log210-systeme-gestion-bordereau-node-express-ts/) a été générée avec [apidoc](https://apidocjs.com/).

Pour générer et consulter la documentation localement (par exemple, dans un clone), exécuter `npm run all_docs`, puis `npm start`. Ouvrir l'URL affichée dans la console.

## Interagir avec l'API avec TypeScript

Pour interagir avec l'API du SGB dans votre application, installer la bibliothèque suivante dans votre projet - `npm install node-fetch`

Puis, importer la bibliothèque dans le fichier `.ts` concerné :

```js
import fetch from 'node-fetch';
```

Exemple avec une requête `GET` :

```js
fetch("http://localhost:3200/api/v3/student/all")
    .then(async response =>
    {
        var data = await response.json();

        console.log(data);
    })
    .catch(error => console.error("Error: ", error));
```

Exemple avec une requête `POST` :

```js
var params = {
    student_id: "first_name.last_name%2B1%40gmail.com",
    group_id: "S20213-LOG210-01",
    type: "Devoir1",
    type_id: 2,
    grade: 75.1
};

fetch("http://localhost:3200/api/v3/grade/insert",
{
    method: "post",
    body: JSON.stringify(params),
    headers: {"Content-Type": "application/json"}
}).then(async response =>
{
    var data = await response.json();

    console.log(data);
});
```
