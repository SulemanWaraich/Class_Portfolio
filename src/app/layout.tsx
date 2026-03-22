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
    default: "Muhammad Suleman - Software Developer",
    template: "%s | Muhammad Suleman"
  },
  description: "Portfolio of Muhammad Suleman - Software Developer with 8+ years of backend and full-stack experience. Specializing in PHP, Python, Node.js, Laravel, Django, React, Vue.js, and AWS infrastructure.",
  keywords: ["Muhammad Suleman", "Portfolio", "Software Developer", "Backend Developer", "Full Stack Developer", "PHP", "Laravel", "Python", "Django", "Node.js", "Vue.js", "React", "AWS"],
  authors: [{ name: "Muhammad Suleman" }],
  creator: "Muhammad Suleman",
  metadataBase: new URL("https://abdullahbozdag.com"), //chnage to actual domain
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
    title: "Muhammad Suleman - Software Developer",
    description: "Portfolio of Muhammad Suleman - Software Developer with 8+ years of backend and full-stack experience. Specializing in PHP, Python, Node.js, Laravel, Django, React, Vue.js, and AWS infrastructure.",
    url: "https://abdullahbozdag.com", //chnage to actual domain
    siteName: "Muhammad Suleman Portfolio",
    images: [
      {
        url: "/assets/Images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Suleman - Software Developer"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Suleman - Software Developer",
    description: "Portfolio of Muhammad Suleman - Software Developer with 8+ years of backend and full-stack experience.",
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
