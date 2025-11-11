import { FeaturedCard } from "@/app/_components/Featured/FeaturedCard";
import { FEATURED } from "@/app/_constants/featured";

export const Featured = () => (
  <>
    {Object.entries(FEATURED).map(([title, description]) => (
      <FeaturedCard key={title} title={title} description={description} />
    ))}
  </>
);
