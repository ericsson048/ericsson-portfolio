import { NextResponse } from 'next/server';

// Cette route récupère les statistiques GitHub de l'utilisateur
export async function GET(request) {
  try {
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    if (!token || !username) {
      return NextResponse.json(
        { error: 'GitHub token ou username non configuré' },
        { status: 500 }
      );
    }

    // Récupérer les informations de l'utilisateur
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Cache 1 heure
      }
    );

    if (!userResponse.ok) {
      throw new Error('Erreur lors de la récupération des données utilisateur');
    }

    const userData = await userResponse.json();

    // Récupérer tous les repos pour les statistiques
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }
      }
    );

    if (!reposResponse.ok) {
      throw new Error('Erreur lors de la récupération des repos');
    }

    const repos = await reposResponse.json();

    // Calculer les statistiques
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
    const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
    
    // Récupérer les commits (approximation via les events)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }
      }
    );

    let commitCount = 0;
    if (eventsResponse.ok) {
      const events = await eventsResponse.json();
      commitCount = events.filter(event => event.type === 'PushEvent').length * 3; // Approximation
    }

    // Calculer l'expérience (années depuis la création du compte)
    const accountCreated = new Date(userData.created_at);
    const yearsOfExperience = Math.floor((Date.now() - accountCreated.getTime()) / (1000 * 60 * 60 * 24 * 365));

    const stats = {
      experience: Math.max(yearsOfExperience, 1),
      projects: userData.public_repos,
      technologies: languages.length,
      commits: commitCount > 0 ? commitCount : 500, // Fallback
      followers: userData.followers,
      following: userData.following,
      stars: totalStars,
      forks: totalForks
    };

    return NextResponse.json({
      success: true,
      stats,
      profile: {
        name: userData.name,
        bio: userData.bio,
        location: userData.location,
        avatar: userData.avatar_url,
        url: userData.html_url
      }
    });

  } catch (error) {
    console.error('Erreur API GitHub Stats:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}

