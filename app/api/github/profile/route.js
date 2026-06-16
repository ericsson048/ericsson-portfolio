import { NextResponse } from 'next/server';

// Cette route récupère le profil complet de l'utilisateur GitHub
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
      `https://api.github.com/users/${username}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erreur lors de la récupération du profil', details: errorData },
        { status: response.status }
      );
    }

    const profile = await response.json();

    return NextResponse.json({
      success: true,
      profile: {
        name: profile.name,
        username: profile.login,
        bio: profile.bio,
        avatar: profile.avatar_url,
        location: profile.location,
        email: profile.email,
        blog: profile.blog,
        twitter: profile.twitter_username,
        company: profile.company,
        followers: profile.followers,
        following: profile.following,
        public_repos: profile.public_repos,
        created_at: profile.created_at,
        updated_at: profile.updated_at,
        url: profile.html_url
      }
    });

  } catch (error) {
    console.error('Erreur API GitHub Profile:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}

