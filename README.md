## Starting the app:

```
docker-compose up
```

Also if you're running application for the first time run:

```
yarn prisma:generate && yarn prisma:migrate dev
```

## Generating a new migration from schema and applying it:

```
yarn prisma:migrate dev --name [migration_name]
```
