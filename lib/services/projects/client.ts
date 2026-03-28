import { CACHE_TIME } from "@/lib/constants/services";

export const fetchGithubRepos = async (username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      next: {
        revalidate: CACHE_TIME,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub repositories: ${response.statusText}`);
  }

  return response.json();
};
