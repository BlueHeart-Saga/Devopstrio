import { NextResponse } from "next/server";
import fallbackRepos from "@/data/real-repos.json";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Devopstrio-Landing-Zone-Portal",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    let allRepos: any[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore && page <= 5) {
      const res = await fetch(
        `https://api.github.com/orgs/Devopstrio/repos?per_page=100&page=${page}&sort=pushed`,
        {
          headers,
          next: { revalidate: 3600 },
        }
      );

      if (!res.ok) {
        break;
      }

      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        allRepos = allRepos.concat(data);
        if (data.length < 100) hasMore = false;
        else page++;
      } else {
        hasMore = false;
      }
    }

    if (allRepos.length > 0) {
      const validRepos = allRepos
        .filter((r) => r.name !== ".github")
        .map((r) => ({
          name: r.name,
          desc: r.description,
          lang: r.language,
          stars: r.stargazers_count,
          url: r.html_url,
          pushed_at: r.pushed_at,
          topics: r.topics || [],
        }));

      return NextResponse.json({ success: true, count: validRepos.length, repos: validRepos });
    }
  } catch (err) {
    console.warn("GitHub API fetch error in /api/github-repos, serving verified fallback:", err);
  }

  // Fallback to verified real repos JSON if GitHub API is unreachable or rate limited
  return NextResponse.json({
    success: true,
    count: fallbackRepos.length,
    repos: fallbackRepos,
    fallback: true,
  });
}
