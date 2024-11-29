## 1- Importer la base de donnée .sql dans postgresql

## 2- Mettre a jour le fichier .env

```
DATABASE_URL="postgresql://postgres:100901%23marsup@localhost:5432/ramaroFishDb?schema=public"
```

## 3- Mettre en place prisma

```
$ npm install prisma --save-dev
```

```
$ npx prisma
```

```
$ npx prisma init
```

Pour creer le modele dans le fichier schema.prisma relationnel avec la base de donnée :

```
$ npx prisma db pull
```

## 3- Install and generate Prisma Client#

```
$ npm install @prisma/client
```

```
$ npx prisma generate
```
