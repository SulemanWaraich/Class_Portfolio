import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Abdullah Bozdag - Software Developer",
    template: "%s | Abdullah Bozdag"
  },
  description: "Portfolio of Abdullah Bozdag - Software Developer with 8+ years of backend and full-stack experience. Specializing in PHP, Python, Node.js, Laravel, Django, React, Vue.js, and AWS infrastructure.",
  keywords: ["Abdullah Bozdag", "Portfolio", "Software Developer", "Backend Developer", "Full Stack Developer", "PHP", "Laravel", "Python", "Django", "Node.js", "Vue.js", "React", "AWS"],
  authors: [{ name: "Abdullah Bozdag" }],
  creator: "Abdullah Bozdag",
  metadataBase: new URL("https://abdullahbozdag.com"),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Abdullah Bozdag - Software Developer",
    description: "Portfolio of Abdullah Bozdag - Software Developer with 8+ years of backend and full-stack experience. Specializing in PHP, Python, Node.js, Laravel, Django, React, Vue.js, and AWS infrastructure.",
    url: "https://abdullahbozdag.com",
    siteName: "Abdullah Bozdag Portfolio",
    images: [
      {
        url: "/assets/Images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Bozdag - Software Developer"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Bozdag - Software Developer",
    description: "Portfolio of Abdullah Bozdag - Software Developer with 8+ years of backend and full-stack experience.",
    images: ["/assets/Images/og-image.png"],
    creator: "@apo_bozdag",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
