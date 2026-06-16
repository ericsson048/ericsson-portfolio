import { NextResponse } from 'next/server';

// Cette route récupère tous les repositories publics de l'utilisateur
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

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        // Cache la réponse pendant 1 heure (3600 secondes)
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des repos', details: errorData },
        { status: response.status }
      );
    }

    const repos = await response.json();

    // Filtrer et formater les données pour le portfolio
    const formattedRepos = repos
      .filter(repo => !repo.fork) // Exclure les forks
      // .slice(0, 10) // Limiter aux 10 plus récents
      .map((repo, index) => ({
        num: String(index + 1).padStart(2, '0'),
        category: repo.language || 'project',
        title: repo.name,
        description: repo.description || 'Pas de description disponible',
        img: `/assets/work/thumb${(index % 3) + 1}.png`, // Utilise les images existantes
        stack: [
          { name: repo.language || 'Code' },
          ...(repo.topics ? repo.topics.slice(0, 2).map(topic => ({ name: topic })) : [])
        ],
        live: repo.homepage || '',
        github: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated: repo.updated_at
      }));

    return NextResponse.json({
      success: true,
      repos: formattedRepos,
      total: repos.length
    });

  } catch (error) {
    console.error('Erreur API GitHub:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}

