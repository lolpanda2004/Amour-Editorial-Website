"use client"
import Script from "next/script"

export function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {`
        try {
          if (
            localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.classList.add('dark')
            document.documentElement.style.colorScheme = 'dark'
          } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.style.colorScheme = 'light'
          }
        } catch (_) {}
      `}
    </Script>
  )
}
