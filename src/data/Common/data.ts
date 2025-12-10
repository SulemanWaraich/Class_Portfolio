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
    img: "/assets/Images/project/rota.png",
    title: "Rota - Şehir Rehberi",
    status: true,
    content:
      "Discover places around the world, create travel plans, and draw your route. Join the street wanderers community and experience the real city. A comprehensive travel platform with advanced search, AI-powered recommendations, and real-time route planning.",
    url: "https://rota.tips/",
    github: "",
    skill: ["React Native", "Laravel", "TypeScript", "Python", "AWS", "OpenSearch", "DynamoDB", "MySQL", "LLM", "Laravel Nightwatch", "Laravel Forge"],
    preview: "",
  },
  {
    id: 2,
    img: "/assets/Images/project/parolla.png",
    title: "parolla.app",
    status: true,
    content:
      "Solve daily puzzles and compete with others. Create your own question-answer sets and solve fun quizzes created by players. A Turkish word game platform built with Vue.js and Laravel.",
    url: "https://parolla.app/",
    github: "",
    skill: ["Vue.js", "Laravel", "MySQL", "AWS"],
    preview: "",
  },
  {
    id: 3,
    img: "/assets/Images/project/sanalyer.png",
    title: "sanalyer.com",
    status: true,
    content:
      "Telling stories that mainstream media won't. A modern content platform covering technology, travel, and software development with original research, in-depth analysis, and unique perspectives on Turkish tech ecosystem.",
    github: "",
    url: "https://sanalyer.com/",
    skill: ["WordPress", "PHP", "MySQL"],
    preview: "",
  },
  {
    id: 4,
    img: "/assets/Images/project/old-portfolio.png",
    title: "Old Portfolio",
    status: true,
    content:
      "My previous portfolio website built with React, featuring a cyberpunk-inspired design aesthetic. Includes sections for blog posts, projects showcase, and about me. Dark theme with neon accents and futuristic UI elements.",
    github: "https://github.com/apo-bozdag/apo-bozdag.github.io",
    url: "https://apo-bozdag.github.io/",
    skill: ["React", "CSS", "JavaScript"],
    preview: "",
  },
]

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
    link: "https://x.com/apo_bozdag",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/apo-bozdag",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/apo-bozdag",
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
