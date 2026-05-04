import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Runway Visualizer — Burn Rate & Hiring Scenario Planner',
  description: 'Model cash runway based on hiring plans and revenue projections. Built for startup founders and CTOs planning team growth.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8364dc13-39e1-4d01-a769-d677c02e9d1b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
