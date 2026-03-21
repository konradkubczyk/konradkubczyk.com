import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => (
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
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="https://github.com/konradkubczyk" target="_blank">
              GitHub
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
);

export default Header;
