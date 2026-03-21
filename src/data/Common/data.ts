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
import {
  TbBrandTypescript,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

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
const projects = [
  {
    id: 1,
    img: "/assets/Images/project/pakpay.png", // add screenshot
    title: "PakPay – Fintech Payment Platform",
    status: true,
    content:
      "Built a fintech platform for secure and real-time digital payments. Designed a ledger-based wallet system where balances are derived from transactions to ensure consistency. Implemented real-time updates using WebSockets and developed scalable backend services with Node.js and PostgreSQL. Deployed using AWS, Docker, and CI/CD pipelines.",
    url: "https://pakpay10.site", // add live link if available
    github: "https://github.com/SulemanWaraich/PakPay", // add repo
    skill: ["Node.js", "PostgreSQL", "Next.js", "Docker", "AWS", "WebSockets", "CI/CD"],
    preview: "case-study", // use this to link case study page
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
];

const writings = [
  // Add your blog posts or articles here
  // Example:
  // {
  //   id: 1,
  //   img: "/assets/Images/writing/example.png",
  //   head: "Your Article Title",
  //   des: "Article description",
  //   link: "https://your-blog-link.com",
  // },
]

const hireText =
  "I'm currently available for freelance projects and consulting opportunities. With 8+ years of experience in backend and full-stack development, I can help bring your ideas to life with scalable, efficient solutions."

const emailLink =
  "mailto:abdullah@radkod.com?subject=Interested%20in%20Working%20Together"

const navLinks = [
  {
    id: 1,
    name: "Lab",
    link: "/lab",
    icon: ImLab,
  },
  {
    id: 2,
    name: "X",
    link: "https://x.com/Suleman_devx",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/Suleman_Waraich",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-suleman-9aa056292/",
    icon: FaLinkedinIn,
  },
]

const supportText =
  "If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work."

const newsText =
  "Subscribe to my newsletter to get updates on my latest projects, blogs, and news. Stay connected and be the first to know what I’m working on!"
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
