import FeaturedCard from "@/app/_components/Featured/FeaturedCard";
import featured from "@/app/_data/featured.json";

export default function Featured() {
  return (
    <>
      {Object.entries(featured).map(([title, description]) => (
        <FeaturedCard title={title} description={description} />
      ))}
    </>
  );
}
