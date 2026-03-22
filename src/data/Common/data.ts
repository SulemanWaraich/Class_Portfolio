// src/data/Common/data.ts
// ─── Add `caseStudy` to any project that has one.
// ─── Projects without `caseStudy` simply won't show the Case Study button.

import { BiLogoPostgresql, BiLogoPhp } from "react-icons/bi"
import { FaGithub, FaLinkedinIn, FaPython, FaXTwitter } from "react-icons/fa6"
import { FaVuejs, FaLaravel, FaAws, FaDocker, FaGitAlt } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { IoLogoNodejs } from "react-icons/io5"
import { SiFlutter, SiScrapy, SiSelenium } from "react-icons/si"
import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiBehance,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDjango,
  SiMysql,
} from "react-icons/si"
import { TbBrandTypescript } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

// ─── Skills ────────────────────────────────────────────────────────────────────
const skills = [
  { id: 1, icon: BiLogoPhp, text: "PHP" },
  { id: 2, icon: FaPython, text: "Python" },
  { id: 3, icon: IoLogoNodejs, text: "Node.js" },
  { id: 4, icon: FaLaravel, text: "Laravel" },
  { id: 5, icon: SiDjango, text: "Django" },
  { id: 6, icon: SiExpress, text: "Express" },
  { id: 7, icon: RiReactjsLine, text: "React" },
  { id: 8, icon: FaVuejs, text: "Vue.js" },
  { id: 9, icon: RiNextjsLine, text: "Next.js" },
  { id: 10, icon: SiFlutter, text: "Flutter" },
  { id: 11, icon: FaAws, text: "AWS" },
  { id: 12, icon: SiMysql, text: "MySQL" },
  { id: 13, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 14, icon: SiMongodb, text: "MongoDB" },
  { id: 15, icon: SiRedis, text: "Redis" },
  { id: 16, icon: SiScrapy, text: "Scrapy" },
  { id: 17, icon: SiSelenium, text: "Selenium" },
  { id: 18, icon: DiJavascript, text: "JavaScript" },
  { id: 19, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 20, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 21, icon: FaDocker, text: "Docker" },
  { id: 22, icon: FaGitAlt, text: "Git" },
  { id: 23, icon: FaGithub, text: "GitHub" },
  { id: 24, icon: VscTerminalLinux, text: "Linux" },
  { id: 25, icon: SiPostman, text: "Postman" },
]

// ─── Projects ──────────────────────────────────────────────────────────────────
// To add a Case Study to any project, add a `caseStudy` key.
// Projects WITHOUT `caseStudy` will simply not display the Case Study button.
const projects = [
  {
    id: 1,
    img: "/assets/Images/project/pakpay.png",
    title: "PakPay – Fintech Payment Platform",
    status: true,
    content:
      "Built a fintech platform for secure and real-time digital payments. Designed a ledger-based wallet system where balances are derived from transactions to ensure consistency. Implemented real-time updates using WebSockets and developed scalable backend services with Node.js and PostgreSQL. Deployed using AWS, Docker, and CI/CD pipelines.",
    url: "https://pakpay10.site",
    github: "https://github.com/SulemanWaraich/PakPay",
    skill: ["Node.js", "PostgreSQL", "Next.js", "Docker", "AWS", "WebSockets", "CI/CD"],
    preview: "",

    // ── Case study data ────────────────────────────────────────────────────────
    // Remove this block to hide the Case Study button for this project.
    caseStudy: {
      overview:
        "PakPay is a fintech platform built to enable secure, real-time digital payments for Pakistani users. It targets the growing demand for reliable digital wallets by implementing a ledger-first architecture — every balance is derived from an immutable transaction log, never stored as a mutable field.",
      problem:
        "Existing payment solutions in the region suffered from balance inconsistencies, lack of real-time feedback, and poor scalability under load. Users couldn't trust their wallet balances after failed or concurrent transactions, eroding confidence in the platform.",
      solution:
        "The core insight was treating every payment as a double-entry ledger transaction. Balances are computed on-demand from the transaction history, making the system provably consistent. WebSocket channels push real-time confirmations to clients, eliminating the need to poll. The entire backend is containerized with Docker and deployed on AWS behind a CI/CD pipeline, allowing zero-downtime releases.",
      techHighlights: [
        {
          label: "Ledger-based wallet system",
          description:
            "Instead of storing a mutable balance field, every wallet balance is derived by summing its transaction history. This guarantees consistency even under concurrent writes and makes auditing trivially easy.",
        },
        {
          label: "Real-time updates via WebSockets",
          description:
            "A dedicated WebSocket server broadcasts transaction confirmations and balance updates instantly to connected clients, removing polling latency and improving perceived performance.",
        },
        {
          label: "Containerized AWS deployment",
          description:
            "All services run in Docker containers orchestrated on AWS ECS. A GitHub Actions CI/CD pipeline runs tests, builds images, and deploys on every merge to main — keeping release cycles under 5 minutes.",
        },
        {
          label: "PostgreSQL with row-level locking",
          description:
            "Critical debit/credit operations use SELECT FOR UPDATE to prevent race conditions, ensuring atomicity across concurrent payment requests without sacrificing throughput.",
        },
      ],
      impact: [
        "Zero balance inconsistencies reported across all test transactions since launch.",
        "Sub-200 ms end-to-end payment confirmation delivered over WebSocket.",
        "Deployment downtime reduced to zero with rolling ECS updates.",
        "Codebase structured to onboard new payment methods (cards, mobile money) with under 2 hours of integration work.",
      ],
    },
  },
  {
    id: 2,
    img: "/assets/Images/project/leetcode.png",
    title: "LeetCode Clone – Coding Platform",
    status: true,
    content:
      "Developed an interactive coding platform with dynamic problem rendering and test execution logic. Designed backend APIs to handle submissions and evaluate test cases, focusing on performance and scalable architecture.",
    url: "",
    github: "",
    skill: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    preview: "",
    // No caseStudy key → Case Study button won't appear
  },
  {
    id: 3,
    img: "/assets/Images/project/claude.png",
    title: "AI Chat App – Claude Clone",
    status: true,
    content:
      "Built an AI-powered chat application with real-time streaming responses and conversation memory. Integrated external AI APIs and designed a responsive UI for smooth user interaction.",
    url: "",
    github: "",
    skill: ["Next.js", "OpenAI API", "TailwindCSS", "JavaScript"],
    preview: "",
  },
  {
    id: 4,
    img: "/assets/Images/project/metaverse.png",
    title: "Metaverse Game – Interactive 3D Experience",
    status: true,
    content:
      "Developed an interactive metaverse-style web experience with real-time user interactions and dynamic environments. Focused on performance optimization and immersive UI/UX design.",
    url: "",
    github: "",
    skill: ["JavaScript", "Three.js", "React", "WebGL"],
    preview: "",
  },
]

// ─── Other data (unchanged) ────────────────────────────────────────────────────
const writings: never[] = []

const hireText =
  "I'm currently available for freelance projects and consulting opportunities. With 8+ years of experience in backend and full-stack development, I can help bring your ideas to life with scalable, efficient solutions."

const emailLink =
  "mailto:suleman.devx@gmail.com?subject=Interested%20in%20Working%20Together"

const navLinks = [
  { id: 1, name: "Lab", link: "/lab", icon: ImLab },
  { id: 2, name: "X", link: "https://x.com/Suleman_devx", icon: FaXTwitter },
  { id: 3, name: "GitHub", link: "https://github.com/SulemanWaraich", icon: FaGithub },
  { id: 4, name: "LinkedIn", link: "https://www.linkedin.com/in/muhammad-suleman-9aa056292/", icon: FaLinkedinIn },
]

const supportText =
  "If you love what I do, whether it's my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work."

const newsText =
  "Subscribe to my newsletter to get updates on my latest projects, blogs, and news. Stay connected and be the first to know what I'm working on!"

export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
}
