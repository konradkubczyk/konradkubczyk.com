import { Project } from "@/lib/services/projects/types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div
    className="bg-muted flex min-w-xs snap-start flex-col gap-2 rounded-2xl p-4"
    style={{
      scrollMarginLeft: "calc(((100vw - min(1600px, 100vw)) / 2 + 32px))",
    }}
  >
    <h2 className="font-display text-xl">{project.name}</h2>
    <p className="text-muted-foreground">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.language && (
        <span
          className="bg-primary-foreground rounded-md px-2 py-1 text-sm"
        >
          {project.language}
        </span>
      )}
    </div>
  </div>
);

