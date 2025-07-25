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
    href: "/docs/primitives/alert-dialog",
    description:
      "A statement of purpose is a document that outlines the purpose of a project or organization.",
  },
  {
    title: "Letter of Recommendation",
    href: "/docs/primitives/hover-card",
    description:
      "A letter of recommendation is a document that recommends a person for a job or school.",
  },
  {
    title: "Personal Essays",
    href: "/docs/primitives/progress",
    description:
      "A personal essay is a piece of writing that tells a story about a person's life.",
  },
  {
    title: "Cover Letters",
    href: "/docs/primitives/scroll-area",
    description: "A cover letter is a letter that accompanies a resume when applying for a job.",
  },
  {
    title: "Resume",
    href: "/docs/primitives/tabs",
    description:
      "A resume is a document that summarizes a person's work experience, education, and skills.",
  },
  {
    title: "Transcripts",
    href: "/docs/primitives/tooltip",
    description:
    "A transcript is a document that records a person's academic history.",
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
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
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
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/success-stories">
                Success Stories
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink href="#" className="flex-row items-center gap-2">
                      <CircleHelpIcon />
                      Backlog
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="flex-row items-center gap-2">
                      <CircleIcon />
                      To Do
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="flex-row items-center gap-2">
                      <CircleCheckIcon />
                      Done
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
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
