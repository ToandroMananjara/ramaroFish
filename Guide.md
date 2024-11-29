# 📘 Backend Development Guide with NestJS, GraphQL, PostgreSQL, Apollo, and Prisma

Bienvenue dans notre projet backend ! Ce guide décrit les technologies que chaque membre doit maîtriser pour travailler efficacement.

## 🎯 **Objectif**

Comprendre et utiliser les technologies choisies pour construire une API backend robuste, modulaire et performante.

---

## 🛠️ **Technologies à étudier**

### **1. NestJS**

Un framework backend TypeScript inspiré d'Angular, conçu pour la modularité et la maintenabilité.

- **Pourquoi NestJS ?**

  - Structure modulaire.
  - Support natif de TypeScript.
  - Intégration facile avec GraphQL et PostgreSQL.

- **À apprendre :**

  - Concepts de base : Modules, contrôleurs, services, middleware.
  - Décorateurs (@Module, @Controller, @Injectable, etc.).
  - Gestion des dépendances via `Dependency Injection`.
  - Intégration avec GraphQL.

- **Ressources recommandées :**
  - [Documentation officielle de NestJS](https://docs.nestjs.com)
  - Tutoriels YouTube : _NestJS Crash Courses_.

---

### **2. GraphQL**

Un langage de requête pour les APIs permettant de récupérer uniquement les données nécessaires.

- **Pourquoi GraphQL ?**

  - Alternative moderne à REST.
  - Requêtes flexibles et performantes.
  - Typage statique et introspection intégrée.

- **À apprendre :**

  - Concepts de base : Schémas, types (Query, Mutation, Subscription).
  - Différences entre REST et GraphQL.
  - Écriture de requêtes et mutations dans GraphQL.
  - Utilisation d’Apollo Server avec NestJS.

- **Ressources recommandées :**
  - [Documentation officielle de GraphQL](https://graphql.org/learn/)
  - [Apollo GraphQL](https://www.apollographql.com/docs)

---

### **3. PostgreSQL**

Une base de données relationnelle puissante, idéale pour les applications complexes.

- **Pourquoi PostgreSQL ?**

  - Performances élevées et fiabilité.
  - Supporte les relations avancées entre les données.
  - Compatible avec Prisma pour une gestion simplifiée.

- **À apprendre :**

  - Concepts SQL : Tables, relations, requêtes (SELECT, INSERT, UPDATE, DELETE).
  - Création et gestion des bases de données.
  - Écriture de requêtes SQL avancées (jointures, transactions).
  - Intégration avec Prisma.

- **Ressources recommandées :**
  - [Documentation PostgreSQL](https://www.postgresql.org/docs/)
  - Tutoriels YouTube : _PostgreSQL for Beginners_.

---

### **4. Apollo**

Une implémentation populaire de GraphQL utilisée pour créer un serveur GraphQL.

- **Pourquoi Apollo ?**

  - Facile à intégrer avec NestJS.
  - Support pour les requêtes en temps réel (subscriptions).
  - Richesse des outils comme Apollo Studio pour analyser les APIs.

- **À apprendre :**

  - Configurer Apollo Server avec NestJS.
  - Écrire des resolvers et gérer les requêtes/mutations.
  - Configurer les abonnements (subscriptions) pour le temps réel.

- **Ressources recommandées :**
  - [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)

---

### **5. Prisma**

Un ORM moderne pour simplifier la gestion des bases de données.

- **Pourquoi Prisma ?**

  - Génère automatiquement un client TypeScript pour interagir avec la base.
  - Support des migrations et des relations complexes.
  - Très facile à utiliser avec PostgreSQL.

- **À apprendre :**

  - Configurer Prisma avec PostgreSQL.
  - Écrire des modèles dans `schema.prisma`.
  - Générer des migrations.
  - Utiliser le client Prisma pour les opérations CRUD.

- **Ressources recommandées :**
  - [Documentation Prisma](https://www.prisma.io/docs)
  - Tutoriels officiels sur le site Prisma.

---

## 🚀 **Plan d'étude recommandé**

1. **Semaines 1-2 :**

   - Apprendre les bases de NestJS.
   - Se familiariser avec les schémas GraphQL.

2. **Semaines 3-4 :**

   - Comprendre PostgreSQL et écrire des requêtes SQL simples.
   - Configurer Prisma et écrire des modèles.

3. **Semaines 5-6 :**
   - Approfondir Apollo Server et intégrer GraphQL avec NestJS.
   - Pratiquer les relations et les migrations avec Prisma.

---

## 📂 **Structure du projet**

Voici une structure typique que nous allons suivre :

```
src/
├── app.module.ts
├── users/
│   ├── users.module.ts
│   ├── users.service.ts
│   ├── users.resolver.ts
│   ├── entities/
│   │   └── user.entity.ts
│   └── dto/
│       ├── create-user.input.ts
│       └── update-user.input.ts
├── prisma/
│   └── prisma.service.ts
```

---

## ✅ **Prochaines étapes**

1. Installe les outils nécessaires :

   - Node.js et npm.
   - PostgreSQL.
   - Prisma CLI.

2. Clone le projet et lance l'installation :

   ```bash
   git clone <url-du-projet>
   cd <nom-du-dossier>
   npm install
   ```

3. Configure l'environnement (`.env`) :

   ```env
   DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>"
   ```

4. Suis le plan d'étude pour monter en compétence sur chaque technologie.
