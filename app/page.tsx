import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Home = () => (
  <div className="flex justify-center p-8">
    <div className="bg-primary-foreground flex w-full max-w-400 flex-col gap-48 rounded-4xl p-8">
      <header className="bg-muted flex items-center justify-between rounded-2xl px-4 py-2">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Logo"
          width={24}
          height={24}
          priority
        />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="https://github.com/konradkubczyk" target="_blank">
                  GitHub
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <div className="flex flex-1 flex-col justify-center gap-4">
        <h1 className="font-display text-6xl">The margin mender</h1>
        <p className="text-muted-foreground text-2xl">
          Crafting web experiences since 2021
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-display text-3xl">Projects</h2>
        <div
          className="flex snap-x gap-4 overflow-x-auto"
          style={{
            margin: "0 calc(-1 * ((100vw - min(1600px, 100vw)) / 2 + 32px))",
            padding: "0 calc(((100vw - min(1600px, 100vw)) / 2 + 32px))",
            scrollbarWidth: "none",
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="bg-muted flex min-w-sm snap-start flex-col gap-2 rounded-2xl p-4"
              style={{
                scrollMarginLeft:
                  "calc(((100vw - min(1600px, 100vw)) / 2 + 32px))",
              }}
            >
              <h2 className="font-display text-xl">repository-name</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae egestas purus. Fusce feugiat rutrum magna
                semper pretium. Pellentesque libero massa, commodo id mollis eu,
                aliquet et tortor. Vivamus viverra, augue in tempus fringilla,
                tellus turpis placerat sapien, ut luctus tellus orci ut odio.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "Tailwind CSS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-primary-foreground rounded-md px-2 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
