# Pulse

Concept de dashboard de banque en ligne en mode sombre. **Projet concept** : les données (comptes, transactions) sont fictives.

## Pages

- `/` : tableau de bord avec solde, objectifs, graphique de dépenses interactif et dernières transactions
- `/transactions` : liste complète avec recherche et filtre entrées / sorties (filtrés côté serveur)
- `/epargne` : objectifs d'épargne, avec création d'un nouvel objectif

## API (Nitro / Node)

- `GET /api/account`
- `GET /api/transactions?q=&type=all|in|out`
- `GET /api/goals` · `POST /api/goals`

## Stack

Nuxt 4 · Vue 3 · TypeScript · Nitro (Node)

## Lancer le projet

```bash
pnpm install
pnpm dev
```
