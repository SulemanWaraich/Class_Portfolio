"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/Common/data"
import { ArrowRight, ExternalLink, Briefcase, Mail, Home, FileText } from "lucide-react"
import { FaGithub, FaFileAlt, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import CaseStudy, { ProjectWithCaseStudy } from "@/components/CaseStudy"

// ─── Types ─────────────────────────────────────────────────────────────────────
type Section = "home" | "projects" | "experience" | "contact"
type ViewMode = "list" | "detail" | "casestudy"

// ─── Color palette ─────────────────────────────────────────────────────────────
const COLORS = {
  bg: "#EDE5D8",
  card: "#E8DCC4",
  text: "#2D1F1A",
  textSecondary: "#2D1F1ACC",
  accent: "#B87333",
  border: "#2D1F1A15",
}

// ─── Root component ────────────────────────────────────────────────────────────
export default function MinimalLanding() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [selectedProject, setSelectedProject] = useState<ProjectWithCaseStudy | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("list")

  // ── Navigation helpers ──────────────────────────────────────────────────────
  const handleSectionChange = (section: Section) => {
    if (section === activeSection && viewMode === "list") return
    setActiveSection(section)
    setSelectedProject(null)
    setViewMode("list")
  }

  const handleProjectClick = (project: ProjectWithCaseStudy) => {
    setSelectedProject(project)
    setViewMode("detail")
  }

  const handleCaseStudyClick = (project: ProjectWithCaseStudy) => {
    setSelectedProject(project)
    setViewMode("casestudy")
  }

  const handleBackToList = () => {
    setSelectedProject(null)
    setViewMode("list")
  }

  const handleBackToDetail = () => {
    setViewMode("detail")
  }

  // ── Determine what to render ────────────────────────────────────────────────
  const contentKey =
    viewMode === "casestudy"
      ? `casestudy-${selectedProject?.id}`
      : viewMode === "detail"
      ? `project-${selectedProject?.id}`
      : `section-${activeSection}`

  return (
    <div className="h-screen relative overflow-hidden" style={{ backgroundColor: COLORS.bg }}>
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex h-screen">
        {/* ── Scrollable content area ── */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-12 md:py-16 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={contentKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-3xl max-h-full overflow-y-auto"
              style={{ scrollbarWidth: "thin", scrollbarColor: `${COLORS.accent}40 transparent` }}
            >
              {/* ── Case Study view ── */}
              {viewMode === "casestudy" && selectedProject && (
                <CaseStudy
                  project={selectedProject}
                  onBack={handleBackToList}
                  onViewDetail={handleBackToDetail}
                />
              )}

              {/* ── Project detail view ── */}
              {viewMode === "detail" && selectedProject && (
                <ProjectDetail
                  project={selectedProject}
                  onBack={handleBackToList}
                  onCaseStudy={() => handleCaseStudyClick(selectedProject)}
                />
              )}

              {/* ── Section list view ── */}
              {viewMode === "list" && (
                <SectionContent
                  section={activeSection}
                  onProjectClick={handleProjectClick}
                  onCaseStudyClick={handleCaseStudyClick}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <DesktopNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      <MobileNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />
    </div>
  )
}

// ─── Shared nav items ──────────────────────────────────────────────────────────
const navItems = [
  { id: "home" as Section, label: "Home", icon: Home },
  { id: "projects" as Section, label: "Projects", icon: ArrowRight },
  { id: "experience" as Section, label: "Experience", icon: Briefcase },
  { id: "contact" as Section, label: "Contact", icon: Mail },
]

// ─── Desktop nav ───────────────────────────────────────────────────────────────
function DesktopNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (s: Section) => void
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorTop, setIndicatorTop] = useState<number | null>(null)

  useLayoutEffect(() => {
    const idx = navItems.findIndex((i) => i.id === activeSection)
    const btn = buttonRefs.current[idx]
    if (btn) setIndicatorTop(btn.offsetTop + btn.offsetHeight / 2 - 24)
  }, [activeSection])

  return (
    <nav className="hidden md:flex flex-col items-center justify-center gap-6 w-24 relative">
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: COLORS.border }} />
      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            ref={(el) => { buttonRefs.current[index] = el }}
            onClick={() => onSectionChange(item.id)}
            className="group relative flex flex-col items-center gap-2 px-4 py-3 transition-all duration-200"
            style={{ color: isActive ? COLORS.accent : COLORS.text, opacity: isActive ? 1 : 0.5 }}
          >
            <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        )
      })}
      {indicatorTop !== null && (
        <div
          className="absolute left-0 w-1 h-12 rounded-r-full transition-all duration-200 pointer-events-none"
          style={{ backgroundColor: COLORS.accent, top: `${indicatorTop}px` }}
        />
      )}
    </nav>
  )
}

// ─── Mobile nav ────────────────────────────────────────────────────────────────
function MobileNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (s: Section) => void
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorLeft, setIndicatorLeft] = useState<number | null>(null)

  useLayoutEffect(() => {
    const idx = navItems.findIndex((i) => i.id === activeSection)
    const btn = buttonRefs.current[idx]
    if (btn) setIndicatorLeft(btn.offsetLeft + btn.offsetWidth / 2)
  }, [activeSection])

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-lg z-50"
      style={{ backgroundColor: `${COLORS.bg}F5` }}
    >
      <nav className="relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: COLORS.border }} />
        {indicatorLeft !== null && (
          <div
            className="absolute top-0 h-1 w-12 rounded-b-full transition-all duration-200 pointer-events-none"
            style={{ backgroundColor: COLORS.accent, left: `${indicatorLeft}px`, transform: "translateX(-50%)" }}
          />
        )}
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                ref={(el) => { buttonRefs.current[index] = el }}
                onClick={() => onSectionChange(item.id)}
                className="flex flex-col items-center gap-1 px-4 py-2 transition-all duration-200"
                style={{ color: isActive ? COLORS.accent : COLORS.text, opacity: isActive ? 1 : 0.6 }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

// ─── Section router ────────────────────────────────────────────────────────────
function SectionContent({
  section,
  onProjectClick,
  onCaseStudyClick,
}: {
  section: Section
  onProjectClick: (p: ProjectWithCaseStudy) => void
  onCaseStudyClick: (p: ProjectWithCaseStudy) => void
}) {
  if (section === "home") {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ color: COLORS.text }}>
            Muhammad Suleman
          </h1>
          <p className="text-lg max-w-lg leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
            Backend developer & full-stack builder. I create web applications and solve complex problems with clean, efficient code.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          {[
            { label: "X (Twitter)", href: "https://x.com/Suleman_devx", icon: FaTwitter },
            { label: "GitHub", href: "https://github.com/SulemanWaraich", icon: FaGithub },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-suleman-9aa056292/", icon: FaLinkedin },
            { label: "Email", href: "mailto:suleman.devx@gmail.com", icon: FaEnvelope },
          ].map(({ label, href, icon: Icon   }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 flex items-center gap-1"
              style={{ color: COLORS.text }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text)}
            >
              <Icon /> 
              {label}
            </a>
          ))}
        </div>
      </div>
    )
  }

  if (section === "projects") {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Projects
        </h2>
        <div className="space-y-3">
          {(projects as ProjectWithCaseStudy[]).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
              onCaseStudy={project.caseStudy ? () => onCaseStudyClick(project) : undefined}
            />
          ))}
        </div>
      </div>
    )
  }

  if (section === "experience") {
    const experiences = [
      {
        year: "2025 - Present",
        title: "Founder & Software Engineer",
        company: "PakPay",
        location: "Remote",
        description:
          "Built a fintech platform for secure cross-border payments. Designed a modular backend using Node.js and PostgreSQL with a ledger-based transaction system. Implemented real-time updates using WebSockets and deployed scalable infrastructure on AWS with Docker and CI/CD pipelines.",
      },
      {
        year: "2025 - Present",
        title: "Digital Skills Trainer",
        company: "Jugnuu",
        location: "Karachi, Pakistan",
        description:
          "Teaching JavaScript, React, and full-stack development. Mentoring students to build production-ready applications and understand real-world debugging, architecture, and API integration.",
      },
      {
        year: "2023 - 2025",
        title: "Freelance Full Stack Engineer",
        company: "Self-Employed",
        location: "Remote",
        description:
          "Delivered 10+ full-stack applications across SaaS and web platforms. Built scalable frontends with React and optimized backend APIs using Node.js. Implemented CI/CD pipelines and containerized deployments using Docker.",
      },
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>Experience</h2>
        <div className="space-y-3 pb-2">
          <p className="text-sm" style={{ color: `${COLORS.text}CC` }}>
            <span style={{ color: COLORS.accent }} className="font-semibold">2+ years</span> building full-stack applications with a strong focus on backend systems and scalable architecture
          </p>
          {[
            { label: "Primary Stack", skills: ["JavaScript", "TypeScript", "Node.js", "NestJS", "Express", "React", "Next.js"] },
            { label: "Mobile & Tools", skills: ["Flutter", "PostgreSQL", "MongoDB", "Prisma", "AWS", "Docker", "CI/CD", "Nginx", "Cloudflare"] },
          ].map(({ label, skills }) => (
            <div key={label} className="space-y-1">
              <p className="text-xs font-medium" style={{ color: `${COLORS.text}80` }}>{label}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-2 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: `${COLORS.accent}15`, color: COLORS.accent }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: COLORS.border }} />
          <div className="space-y-6 pl-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1 w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                <div className="space-y-1">
                  <p className="text-xs font-medium" style={{ color: COLORS.accent }}>{exp.year}</p>
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>{exp.title}</h3>
                  <p className="text-sm font-medium" style={{ color: `${COLORS.text}CC` }}>{exp.company}</p>
                  <p className="text-xs" style={{ color: `${COLORS.text}80` }}>{exp.location}</p>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: `${COLORS.text}99` }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (section === "contact") {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>Get in Touch</h2>
        <div className="space-y-4" style={{ color: `${COLORS.text}CC` }}>
          <p className="leading-relaxed">
            I&apos;m currently available for freelance projects and consulting opportunities. Feel free to reach out if you&apos;d like to work together.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="mailto:suleman.devx@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 w-fit"
              style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.text)}
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}

// ─── Project card (list view) ──────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
  onCaseStudy,
}: {
  project: ProjectWithCaseStudy
  onClick: () => void
  onCaseStudy?: () => void
}) {
  return (
    <div
      className="group w-full text-left p-5 rounded-lg transition-all duration-200"
      style={{ backgroundColor: `${COLORS.card}80` }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.card)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `${COLORS.card}80`)}
    >
      <div className="flex items-center justify-between">
        {/* Clickable title area → project detail */}
        <button className="flex-1 min-w-0 text-left" onClick={onClick}>
          <h3 className="text-xl font-semibold mb-1 transition-colors duration-200" style={{ color: COLORS.text }}>
            {project.title}
          </h3>
          <p className="text-sm line-clamp-1" style={{ color: `${COLORS.text}B3` }}>
            {project.content}
          </p>
        </button>

        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          {/* Case Study shortcut — only shown when data exists */}
          {onCaseStudy && (
            <button
              onClick={(e) => { e.stopPropagation(); onCaseStudy() }}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-200"
              style={{ color: COLORS.accent, backgroundColor: `${COLORS.accent}15` }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${COLORS.accent}25`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `${COLORS.accent}15`)}
              title="View Case Study"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Case Study</span>
            </button>
          )}
          <ArrowRight
            onClick={onClick}
            className="w-5 h-5 cursor-pointer transition-all duration-200 group-hover:translate-x-1"
            style={{ color: COLORS.accent }}
          />
        </div>
      </div>
    </div>
  )
}

// ─── Project detail ────────────────────────────────────────────────────────────
function ProjectDetail({
  project,
  onBack,
  onCaseStudy,
}: {
  project: ProjectWithCaseStudy
  onBack: () => void
  onCaseStudy: () => void
}) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 transition-colors duration-200"
        style={{ color: COLORS.text }}
        onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text)}
      >
        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back</span>
      </button>

      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold" style={{ color: COLORS.text }}>
          {project.title}
        </h2>
        {project.status && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: `${COLORS.accent}20` }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }} />
            <span className="text-sm" style={{ color: COLORS.text }}>Live</span>
          </div>
        )}
      </div>

      <p className="text-lg leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
        {project.content}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.skill.map((skill) => (
          <span key={skill} className="px-3 py-1 text-sm rounded-md"
            style={{ backgroundColor: COLORS.card, color: COLORS.text }}>
            {skill}
          </span>
        ))}
      </div>

      {/* ── Action buttons ── */}
      <div className="flex flex-wrap gap-4 pt-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200"
            style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.text)}
          >
            <span>Visit Site</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md border transition-colors duration-200"
            style={{ borderColor: COLORS.text, color: COLORS.text }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.card)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <FaGithub className="w-4 h-4" />
            <span>View Code</span>
          </a>
        )}

        {/* ── Case Study button — only shown when caseStudy data exists ── */}
        {project.caseStudy && (
          <button
            onClick={onCaseStudy}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md border transition-all duration-200"
            style={{ borderColor: COLORS.accent, color: COLORS.accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${COLORS.accent}15`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            <FaFileAlt className="w-4 h-4" />
            <span>Case Study</span>
          </button>
        )}
      </div>
    </div>
  )
}
