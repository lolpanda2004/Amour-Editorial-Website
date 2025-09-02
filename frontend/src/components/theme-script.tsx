"use client"

import { useEffect, useState } from "react"

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
              document.documentElement.style.colorScheme = 'dark'
            } else {
              document.documentElement.classList.remove('dark')
              document.documentElement.style.colorScheme = 'light'
            }
          } catch (_) {}
        `,
      }}
    />
  )
}
