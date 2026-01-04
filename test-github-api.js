// Script de test pour vérifier la configuration GitHub API
// Utilisation : node test-github-api.js

const checkEnvFile = () => {
  console.log('\n🔍 Vérification du fichier .env.local...\n');
  
  try {
    const fs = require('fs');
    const path = require('path');
    
    const envPath = path.join(__dirname, '.env.local');
    
    if (!fs.existsSync(envPath)) {
      console.log('❌ Fichier .env.local introuvable !');
      console.log('📝 Créez le fichier avec :');
      console.log('   GITHUB_TOKEN=votre_token');
      console.log('   GITHUB_USERNAME=votre_username\n');
      return false;
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    const hasToken = envContent.includes('GITHUB_TOKEN=') && 
                     !envContent.includes('GITHUB_TOKEN=votre');
    const hasUsername = envContent.includes('GITHUB_USERNAME=') && 
                        !envContent.includes('GITHUB_USERNAME=votre');
    
    if (!hasToken) {
      console.log('⚠️  GITHUB_TOKEN non configuré dans .env.local');
    } else {
      console.log('✅ GITHUB_TOKEN trouvé');
    }
    
    if (!hasUsername) {
      console.log('⚠️  GITHUB_USERNAME non configuré dans .env.local');
    } else {
      console.log('✅ GITHUB_USERNAME trouvé');
    }
    
    if (hasToken && hasUsername) {
      console.log('\n🎉 Configuration correcte !\n');
      return true;
    } else {
      console.log('\n❌ Configuration incomplète\n');
      return false;
    }
    
  } catch (error) {
    console.log('❌ Erreur lors de la lecture du fichier:', error.message);
    return false;
  }
};

const testGitHubAPI = async () => {
  console.log('\n🧪 Test de connexion à l\'API GitHub...\n');
  
  // Charger les variables d'environnement
  require('dotenv').config({ path: '.env.local' });
  
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;
  
  if (!token || !username) {
    console.log('❌ Variables d\'environnement manquantes');
    return;
  }
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Connexion GitHub réussie !');
      console.log(`👤 Nom: ${data.name || 'Non défini'}`);
      console.log(`🔗 Username: ${data.login}`);
      console.log(`📚 Repos publics: ${data.public_repos}`);
      console.log(`👥 Followers: ${data.followers}`);
      console.log(`📍 Localisation: ${data.location || 'Non définie'}\n`);
      
      console.log('🎯 Prochaine étape : Démarrez le serveur avec "npm run dev"\n');
    } else {
      const error = await response.json();
      console.log(`❌ Erreur ${response.status}: ${error.message}`);
      
      if (response.status === 401) {
        console.log('\n🔒 Le token est invalide ou révoqué');
        console.log('📝 Créez un nouveau token sur: https://github.com/settings/tokens/new\n');
      }
    }
    
  } catch (error) {
    console.log('❌ Erreur de connexion:', error.message);
    console.log('\n💡 Vérifiez votre connexion Internet\n');
  }
};

// Exécution
const main = async () => {
  console.log('\n╔═══════════════════════════════════════╗');
  console.log('║  Test Configuration GitHub API       ║');
  console.log('╚═══════════════════════════════════════╝');
  
  const envOk = checkEnvFile();
  
  if (envOk) {
    // Vérifier si dotenv est installé
    try {
      require('dotenv');
      await testGitHubAPI();
    } catch (error) {
      console.log('\n⚠️  Package "dotenv" non installé');
      console.log('📦 Installez-le avec: npm install dotenv');
      console.log('    Ou testez directement avec: npm run dev\n');
    }
  } else {
    console.log('📖 Lisez INSTRUCTIONS_URGENTES.md pour plus d\'aide\n');
  }
};

main();

