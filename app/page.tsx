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
    <div className="flex flex-col gap-4 text-center">
      <h1 className="font-display text-4xl">Konrad Kubczyk</h1>
      <p className="text-muted-foreground">
        Crafting immersive web experiences with acute precision
      </p>
    </div>
  </div>
);

export default Home;
