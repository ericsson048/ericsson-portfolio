# 🔒 Guide de Sécurité - Configuration GitHub API

## ⚠️ IMPORTANT : Token GitHub Compromis

Votre token GitHub a été exposé et doit être révoqué immédiatement !

## 📋 Étapes à suivre MAINTENANT :

### 1. Révoquer l'ancien token
1. Allez sur : https://github.com/settings/tokens
2. Trouvez le token compromis qui a été partagé accidentellement
3. Cliquez sur "Delete" ou "Revoke"

### 2. Créer un nouveau token sécurisé
1. Allez sur : https://github.com/settings/tokens/new
2. Donnez un nom descriptif : "Portfolio API Token"
3. Sélectionnez l'expiration : 90 jours ou 1 an
4. Cochez les permissions nécessaires :
   - ✅ `public_repo` - Pour lire vos repos publics
   - ✅ `read:user` - Pour lire votre profil
   - ✅ `user:email` - Pour lire votre email (optionnel)
5. Cliquez sur "Generate token"
6. **COPIEZ LE TOKEN IMMÉDIATEMENT** (vous ne pourrez plus le revoir)

### 3. Configurer le token dans votre projet

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez les valeurs :

```env
GITHUB_TOKEN=votre_nouveau_token_ici
GITHUB_USERNAME=votre_username_github
```

Exemple :
```env
GITHUB_TOKEN=ghp_nouveauTokenSecurise123456789
GITHUB_USERNAME=ericsson-ishaka
```

### 4. Vérifier que .env.local est ignoré par Git

Vérifiez que `.env.local` est dans votre `.gitignore` :

```bash
# Dans le terminal
cat .gitignore | grep .env
```

Vous devriez voir `.env*.local`

### 5. Ne JAMAIS commettre les tokens

**À NE JAMAIS FAIRE :**
- ❌ Partager votre token sur Slack, Discord, email
- ❌ Le mettre directement dans le code
- ❌ Le commiter sur Git/GitHub
- ❌ Le partager dans une capture d'écran

**À FAIRE :**
- ✅ Toujours utiliser `.env.local`
- ✅ Utiliser des variables d'environnement
- ✅ Révoquer les tokens compromis immédiatement
- ✅ Utiliser des tokens avec permissions minimales
- ✅ Définir une date d'expiration

## 🚀 Tester votre configuration

Une fois le token configuré dans `.env.local`, testez :

```bash
# Démarrez le serveur
npm run dev

# Testez l'API dans un autre terminal
curl http://localhost:3000/api/github/profile
```

## 📚 Ressources

- [GitHub Token Best Practices](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

## 🆘 En cas de problème

Si vous avez exposé un token par accident :
1. Révoqué-le immédiatement
2. Créez un nouveau token
3. Changez les mots de passe si nécessaire
4. Activez l'authentification à deux facteurs (2FA)

