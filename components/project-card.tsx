const ProjectCard = () => (
  <div
    className="bg-muted flex min-w-xs snap-start flex-col gap-2 rounded-2xl p-4"
    style={{
      scrollMarginLeft: "calc(((100vw - min(1600px, 100vw)) / 2 + 32px))",
    }}
  >
    <h2 className="font-display text-xl">repository-name</h2>
    <p className="text-muted-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae
      egestas purus. Fusce feugiat rutrum magna semper pretium. Pellentesque
      libero massa, commodo id mollis eu, aliquet et tortor. Vivamus viverra,
      augue in tempus fringilla.
    </p>
    <div className="flex flex-wrap gap-2">
      {["Next.js", "React", "Tailwind CSS", "TypeScript"].map((tag) => (
        <span
          key={tag}
          className="bg-primary-foreground rounded-md px-2 py-1 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
