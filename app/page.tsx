import Image from "next/image";

const Home = () => (
  <div className="flex h-dvh flex-col items-center justify-center gap-10">
    <Image
      className="dark:invert"
      src="/logo.svg"
      alt="Logo"
      width={100}
      height={100}
      priority
    />
    <h1 className="text-muted-foreground font-sans text-2xl">Konrad Kubczyk</h1>
  </div>
);

export default Home;
