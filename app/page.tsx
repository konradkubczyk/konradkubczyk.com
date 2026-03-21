import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/projects-section";

const Home = () => (
  <div className="flex justify-center p-8">
    <div className="bg-primary-foreground flex w-full max-w-400 flex-col gap-48 rounded-4xl p-8">
      <Header />
      <Hero />
      <ProjectsSection />
    </div>
  </div>
);

export default Home;
