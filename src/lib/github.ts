export interface GitHubRepoData {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export async function fetchRepoData(
  repoName: string
): Promise<GitHubRepoData | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/WojciechGalant1/${repoName}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      language: data.language,
    };
  } catch {
    return null;
  }
}
