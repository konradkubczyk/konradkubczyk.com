import { outfit } from "@/app/fonts";

type FeaturedCardProps = {
  title: string;
  description: string;
};

export const FeaturedCard = ({ title, description }: FeaturedCardProps) => (
  <div className="flex flex-col gap-3 rounded-2xl bg-neutral-300/75 px-5 py-4 backdrop-blur dark:bg-neutral-900/75">
    <h2
      className={`${outfit.className} text-2xl text-neutral-800 dark:text-neutral-300`}
    >
      {title}
    </h2>
    <p>{description}</p>
  </div>
);
