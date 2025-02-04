"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function HambergerMenu() {
  return (
    <div className="text-right flex flex-col space-y-8 ">

      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1 ">

        <Link href="/" legacyBehavior passHref>
          خانه
        </Link>
      </div>

      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1  items-center">
        <Link href="/products/category/new" legacyBehavior passHref>
          جدید
        </Link>
      </div>


      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1 ">
        <Link href="/products/category/bestsellers" legacyBehavior passHref>
          پرفروش ترین ها
        </Link>
      </div>


      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1 ">
        <Link href="/#" legacyBehavior passHref>
          مراقبت پوست
        </Link>
      </div>


      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1 ">
        <Link href="/#" legacyBehavior passHref>
          آرایشی
        </Link>
      </div>


      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1 ">
        <Link href="/products" legacyBehavior passHref>
          همه محصولات
        </Link>
      </div>


      <div className="w-full hover:bg-[#62A496]/50 hover:border-y transition-all duration-500 px-10 py-1 ">
        <Link href="/#" legacyBehavior passHref>
          درباره ما
        </Link>
      </div>

    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
