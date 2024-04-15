import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image src="/icons/menu.svg" alt="menu icon" height={24} width={24} />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              width={25}
              height={25}
              alt="Evently logo"
            />
            <span className="font-semibold">
              Dev<span className="text-primary">Connect</span>
            </span>
          </div>
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
