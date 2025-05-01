import { FeaturedCard } from "@/app/_components/Featured/FeaturedCard";
import featured from "@/app/_data/featured.json";

export const Featured = () => (
  <>
    {Object.entries(featured).map(([title, description]) => (
      <FeaturedCard key={title} title={title} description={description} />
    ))}
  </>
);
