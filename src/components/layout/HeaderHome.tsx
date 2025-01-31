"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "همه محصولات آرایشی",
    href: "/",
    description:
      "مجموعه‌های کامل آرایشی برای یک ظاهر هماهنگ و زیبا",
  },
  {
    title: "کرم های آرایشی",
    href: "/",
    description:
      "کرم‌های مرطوب‌کننده و پایه‌های آرایشی برای پوستی صاف و درخشان",
  },
  {
    title: "آرایش چشم",
    href: "/",
    description:
      "مجموعه‌ای از محصولات آرایش چشم، شامل سایه، خط چشم و ریمل برای نگاهی جذاب",
  },
  {
    title: "آرایش گونه",
    href: "/",
    description: "محصولات آرایش گونه مانند رژگونه و هایلایتر برای ظاهری شاداب و درخشان",
  },
  {
    title: "آرایش لب",
    href: "/",
    description:
      "انواع رژلب، لیپ‌گلاس و خط لب برای لب‌هایی زیبا و جذاب",
  },
  {
    title: "محصولات مو",
    href: "/",
    description:"مراقبت و استایل مو با محصولاتی مانند ژل، واکس و اسپری مو",
  },
  {
    title: "عطر و ادکلن",
    href: "/",
    description:
      "کشف رایحه‌های منحصر به فرد برای هر سلیقه و مناسب هر موقعیت",
  },
  {
    title: "ست های آرایشی",
    href: "/",
    description:
      "مجموعه‌های کامل آرایشی برای یک ظاهر هماهنگ و زیبا",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="text-right ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              خانه
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              جدید
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              پرفروش ترین ها
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>مراقبت پوست</NavigationMenuTrigger>

          <NavigationMenuContent >
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium bg-cover w-48 h-full p-0">
                      <img src="card.avif" className="w-full h-full" />
                    </div>

                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#" title="ماسک‌ها">
              </ListItem>
              <ListItem href="/#" title="خرید بر اساس نیاز پوست">
              </ListItem>
              <ListItem href="/#" title="خرید بر اساس مواد تشکیل‌دهنده">
              </ListItem>
              <ListItem href="/#" title="همه‌ی محصولات مراقبت پوست">
              </ListItem>
              <ListItem href="/#" title="خرید بر اساس نوع پوست">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>آرایشی</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <h5 className="text-xs">
                    {component.description}
                  </h5>

                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              همه محصولات
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              درباره ما
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
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
