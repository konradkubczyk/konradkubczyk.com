import Image from "next/image";

const Home = () => (
  <div className="flex justify-center items-center h-dvh">
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
