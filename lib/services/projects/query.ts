import { z } from "zod";
import { fetchGithubRepos } from "./client";
import { projectSchema } from "./schema";
import { Project } from "./types";

export const getProjects = async (): Promise<Project[]> => {
  const username = process.env.GITHUB_USERNAME;
  const targetTopic = process.env.GITHUB_TOPIC;

  if (!username || !targetTopic) {
    throw new Error(
      "Missing GITHUB_USERNAME or GITHUB_TOPIC environment variable",
    );
  }

  const data = await fetchGithubRepos(username);
  const projects = z.array(projectSchema).parse(data);

  return projects.filter(({ topics }) => topics.includes(targetTopic));
};
