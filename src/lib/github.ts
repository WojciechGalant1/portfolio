export interface GitHubRepoData {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export async function fetchRepoData(
  repoName: string
): Promise<GitHubRepoData | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(
      `https://api.github.com/repos/WojciechGalant1/${repoName}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
        signal: controller.signal,
      }
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
  } finally {
    clearTimeout(timeout);
  }
}
