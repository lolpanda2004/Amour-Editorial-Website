"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Statement of Purpose",
    href: "/services#sop",
    description:
      "Craft compelling SOPs that showcase your unique journey and aspirations for university admissions.",
  },
  {
    title: "Letter of Recommendation",
    href: "/services#lor",
    description:
      "Professional LOR editing that highlights your strengths and achievements effectively.",
  },
  {
    title: "Personal Essays",
    href: "/services#essays",
    description:
      "Develop powerful personal narratives that resonate with admissions committees.",
  },
  {
    title: "Cover Letters",
    href: "/services#cover-letters",
    description: "Create impactful cover letters that make you stand out to potential employers.",
  },
  {
    title: "Resume Review",
    href: "/services#resume",
    description:
      "Professional resume optimization to showcase your experience and skills effectively.",
  },
  {
    title: "Academic Editing",
    href: "/services#academic",
    description:
    "Comprehensive editing services for academic papers, theses, and research documents.",
  },
]

export function NavigationMenuDemo({ fontClass = "" }: { fontClass?: string }) {
  return (
    <div className={`flex justify-center w-full ${fontClass}`}>
      <nav className="fixed-top top-0 left-0 z-50 w-full px-8 py-3 flex items-center justify-center rounded-4xl bg-transparent">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gradient-to-br from-orange-200 via-white to-stone-100">
                  {components.map((component) => (
                    <ListItem
                      className="border border-white/30 rounded-lg bg-orange-200/10 backdrop-blur-3xl shadow-md hover:shadow-lg hover:scale-105 ease-in-out transition-all duration-300 "
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/blog"
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/success-stories"
              >
                Success Stories
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contact">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
