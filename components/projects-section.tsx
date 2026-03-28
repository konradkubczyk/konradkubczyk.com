import { Suspense } from "react";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/services/projects/query";

export const ProjectsSection = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-3xl">Projects</h2>
      <div
        className="flex snap-x gap-4 overflow-x-auto"
        style={{
          margin: "0 calc(-1 * ((100vw - min(1600px, 100vw)) / 2 + 32px))",
          padding: "0 calc(((100vw - min(1600px, 100vw)) / 2 + 32px))",
          scrollbarWidth: "none",
        }}
      >
        <Suspense fallback="Loading...">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};
