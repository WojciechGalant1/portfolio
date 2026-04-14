import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ repo: string }> }
) {
  const { repo } = await params;

  try {
    const res = await fetch(
      `https://api.github.com/repos/WojciechGalant1/${repo}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Repository not found" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      language: data.language,
      description: data.description,
      updated_at: data.updated_at,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repository data" },
      { status: 502 }
    );
  }
}
