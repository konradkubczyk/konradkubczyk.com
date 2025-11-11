import Image from "next/image";

const Home = () => (
  <div className="flex h-dvh items-center justify-center">
    <Image
      className="dark:invert"
      src="/logo.svg"
      alt="Logo"
      width={100}
      height={20}
      priority
    />
  </div>
);

export default Home;
