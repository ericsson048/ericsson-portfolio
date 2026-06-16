# 🚀 Routes API GitHub

Ce dossier contient les routes API Next.js pour récupérer les données GitHub.

## 📁 Structure

```
app/api/github/
├── profile/route.js    - Récupère le profil GitHub complet
├── repos/route.js      - Récupère la liste des repositories
└── stats/route.js      - Récupère les statistiques GitHub
```

## 🔧 Configuration

1. **Créez un token GitHub personnel** :
   - Allez sur : https://github.com/settings/tokens/new
   - Permissions nécessaires : `public_repo`, `read:user`

2. **Configurez les variables d'environnement** :
   
   Créez/modifiez le fichier `.env.local` à la racine du projet :
   
   ```env
   GITHUB_TOKEN=votre_token_github
   GITHUB_USERNAME=votre_username_github
   ```

## 📡 Endpoints disponibles

### 1. `/api/github/profile` - GET
Récupère les informations de profil GitHub.

**Réponse exemple :**
```json
{
  "success": true,
  "profile": {
    "name": "Ericsson Ishaka",
    "username": "ericsson-ishaka",
    "bio": "Software Developer",
    "avatar": "https://...",
    "location": "Burundi",
    "email": "...",
    "followers": 10,
    "following": 5,
    "public_repos": 26
  }
}
```

### 2. `/api/github/repos` - GET
Récupère la liste des repositories publics (10 plus récents, non-forks).

**Réponse exemple :**
```json
{
  "success": true,
  "repos": [
    {
      "num": "01",
      "category": "JavaScript",
      "title": "mon-projet",
      "description": "Description du projet",
      "img": "/assets/work/thumb1.png",
      "stack": [
        { "name": "JavaScript" },
        { "name": "react" }
      ],
      "live": "https://...",
      "github": "https://github.com/...",
      "stars": 5,
      "forks": 2,
      "updated": "2025-01-04T..."
    }
  ],
  "total": 26
}
```

### 3. `/api/github/stats` - GET
Récupère les statistiques agrégées.

**Réponse exemple :**
```json
{
  "success": true,
  "stats": {
    "experience": 2,
    "projects": 26,
    "technologies": 8,
    "commits": 500,
    "followers": 10,
    "stars": 50,
    "forks": 15
  },
  "profile": {
    "name": "Ericsson Ishaka",
    "bio": "...",
    "avatar": "..."
  }
}
```

## 🧪 Tests

### Test local (développement)

```bash
# Démarrer le serveur
npm run dev

# Tester dans un autre terminal
curl http://localhost:3000/api/github/profile
curl http://localhost:3000/api/github/repos
curl http://localhost:3000/api/github/stats
```

### Test dans le navigateur

Ouvrez :
- http://localhost:3000/api/github/profile
- http://localhost:3000/api/github/repos
- http://localhost:3000/api/github/stats

## ⚡ Cache

Les réponses API sont cachées pendant **1 heure** (3600 secondes) pour :
- Améliorer les performances
- Réduire les appels à l'API GitHub
- Éviter de dépasser les limites de taux (rate limits)

## 🔒 Sécurité

- ✅ Le token est stocké dans `.env.local` (non commité)
- ✅ Le token n'est jamais exposé au client
- ✅ Les routes sont des Server Actions (backend only)
- ✅ Permissions minimales (lecture seule)

## 📊 Limites de taux

Avec authentification :
- **5000 requêtes/heure** par utilisateur
- Avec le cache (1h), vous ferez ~3-4 requêtes/heure

## 🐛 Gestion d'erreurs

Toutes les routes retournent un format cohérent :

**Succès :**
```json
{
  "success": true,
  "data": {...}
}
```

**Erreur :**
```json
{
  "error": "Message d'erreur",
  "message": "Détails techniques"
}
```

## 🔄 Prochaines étapes

Pour utiliser ces données dans vos composants, voir :
- `components/Stats.jsx` - Mettre à jour avec `/api/github/stats`
- `app/work/page.jsx` - Mettre à jour avec `/api/github/repos`

