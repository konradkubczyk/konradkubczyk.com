import { outfit } from "@/app/fonts";

export default function FeaturedCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-neutral-300/75 px-5 py-4 backdrop-blur dark:bg-neutral-900/75">
      <h2
        className={`${outfit.className} text-2xl text-neutral-800 dark:text-neutral-300`}
      >
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}
