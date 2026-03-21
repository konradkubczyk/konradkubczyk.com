import ProjectCard from "@/components/project-card";

const ProjectsSection = () => (
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
      {Array.from({ length: 16 }).map((_, i) => (
        <ProjectCard key={i} />
      ))}
    </div>
  </div>
);

export default ProjectsSection;
