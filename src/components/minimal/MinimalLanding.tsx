"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/Common/data"
import { ArrowRight, ExternalLink, Briefcase, Mail, Home } from "lucide-react"
import { FaGithub } from "react-icons/fa"

interface Project {
  id: number
  img: string
  title: string
  status: boolean
  content: string
  url?: string
  github?: string
  skill: string[]
  preview?: string
}

type Section = "home" | "projects" | "experience" | "contact"

// Fixed vintage color palette - nostalgic, warm, Mexico-inspired
const COLORS = {
  bg: "#EDE5D8",        // Warm darker cream background
  card: "#E8DCC4",      // Sand card background
  text: "#2D1F1A",      // Dark brown text
  textSecondary: "#2D1F1ACC", // Text with opacity
  accent: "#B87333",    // Copper accent
  border: "#2D1F1A15",  // Subtle border
}

export default function MinimalLanding() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleSectionChange = (section: Section) => {
    if (section === activeSection) return
    setActiveSection(section)
    setSelectedProject(null)
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleBack = () => {
    setSelectedProject(null)
  }

  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main container */}
      <div className="relative z-10 flex h-screen">
        {/* Left content area with internal scroll */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-12 md:py-16 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedProject ? `project-${selectedProject.id}` : `section-${activeSection}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.25,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-full max-w-2xl max-h-full overflow-y-auto scrollbar-thin"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: `${COLORS.accent}40 transparent`,
              }}
            >
              {selectedProject ? (
                <ProjectDetail
                  project={selectedProject}
                  onBack={handleBack}
                />
              ) : (
                <SectionContent
                  section={activeSection}
                  onProjectClick={handleProjectClick}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right navigation sidebar - Always render, use CSS for responsive */}
        <DesktopNavigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>

      {/* Mobile navigation - Always render, use CSS for responsive */}
      <MobileNavigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  )
}

// Shared navigation items
const navItems = [
  { id: "home" as Section, label: "Home", icon: Home },
  { id: "projects" as Section, label: "Projects", icon: ArrowRight },
  { id: "experience" as Section, label: "Experience", icon: Briefcase },
  { id: "contact" as Section, label: "Contact", icon: Mail },
]

// Desktop Navigation Component
function DesktopNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (section: Section) => void
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorTop, setIndicatorTop] = useState<number | null>(null)

  // Use layoutEffect to calculate position before paint
  useLayoutEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection)
    const button = buttonRefs.current[activeIndex]

    if (button) {
      const buttonTop = button.offsetTop
      const buttonHeight = button.offsetHeight
      const top = buttonTop + buttonHeight / 2 - 24
      setIndicatorTop(top)
    }
  }, [activeSection])

  return (
    <nav className="hidden md:flex flex-col items-center justify-center gap-6 w-24 relative">
      {/* Full height border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ backgroundColor: COLORS.border }}
      />

      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <button
            key={item.id}
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
            onClick={() => onSectionChange(item.id)}
            className="group relative flex flex-col items-center gap-2 px-4 py-3 transition-all duration-200"
            style={{
              color: isActive ? COLORS.accent : COLORS.text,
              opacity: isActive ? 1 : 0.5,
            }}
          >
            <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        )
      })}

      {/* Active indicator - only show when position is calculated */}
      {indicatorTop !== null && (
        <div
          className="absolute left-0 w-1 h-12 rounded-r-full transition-all duration-200 pointer-events-none"
          style={{
            backgroundColor: COLORS.accent,
            top: `${indicatorTop}px`,
          }}
        />
      )}
    </nav>
  )
}

// Mobile Navigation Component
function MobileNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (section: Section) => void
}) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorLeft, setIndicatorLeft] = useState<number | null>(null)

  // Use layoutEffect to calculate position before paint
  useLayoutEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection)
    const button = buttonRefs.current[activeIndex]

    if (button) {
      const buttonLeft = button.offsetLeft
      const buttonWidth = button.offsetWidth
      const left = buttonLeft + buttonWidth / 2
      setIndicatorLeft(left)
    }
  }, [activeSection])

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-lg z-50"
      style={{
        backgroundColor: `${COLORS.bg}F5`,
      }}>
      <nav className="relative">
        {/* Top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: COLORS.border }}
        />

        {/* Active indicator - only show when position is calculated */}
        {indicatorLeft !== null && (
          <div
            className="absolute top-0 h-1 w-12 rounded-b-full transition-all duration-200 pointer-events-none"
            style={{
              backgroundColor: COLORS.accent,
              left: `${indicatorLeft}px`,
              transform: 'translateX(-50%)',
            }}
          />
        )}

        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                ref={(el) => {
                  buttonRefs.current[index] = el
                }}
                onClick={() => onSectionChange(item.id)}
                className="flex flex-col items-center gap-1 px-4 py-2 transition-all duration-200"
                style={{
                  color: isActive ? COLORS.accent : COLORS.text,
                  opacity: isActive ? 1 : 0.6,
                }}
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

// Section Content Component
function SectionContent({
  section,
  onProjectClick,
}: {
  section: Section
  onProjectClick: (project: Project) => void
}) {
  if (section === "home") {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{ color: COLORS.text }}
          >
            Abdullah Bozdağ
          </h1>
          <p className="text-lg max-w-lg leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
            Backend developer & full-stack builder. I create web applications and solve complex problems with clean, efficient code.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm" style={{ color: COLORS.text }}>
          <a
            href="https://x.com/apo_bozdag"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: COLORS.text }}
            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
          >
            X (Twitter)
          </a>
          <a
            href="https://github.com/apo-bozdag"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: COLORS.text }}
            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/apo-bozdag"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: COLORS.text }}
            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
          >
            LinkedIn
          </a>
          <a
            href="mailto:abdullah@radkod.com"
            className="transition-colors duration-200"
            style={{ color: COLORS.text }}
            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
          >
            Email
          </a>
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    )
  }

  if (section === "experience") {
    const experiences = [
      {
        year: "2018 - Present",
        title: "Back-End Developer",
        company: "Tripian Inc.",
        location: "Remote (Toronto, Canada)",
        description: "Core team member. Backend with PHP/Python, API design, React/Vue.js frontend, AWS infrastructure.",
      },
      {
        year: "2016 - Present",
        title: "Full-Stack Developer",
        company: "RadKod",
        location: "Freelance/Open Source",
        description: "Founded developer collective. Flutter apps, web games, backend services. Active GitHub contributor.",
      },
      {
        year: "2015 - 2017",
        title: "Back-End Developer",
        company: "AvantajBizde",
        location: "Izmir, Turkey",
        description: "C2C e-commerce platform with Laravel, ORM, and domain-driven design.",
      },
      {
        year: "2015",
        title: "Back-End Developer",
        company: "Promega",
        location: "Izmir, Turkey",
        description: "PHP backend modules, algorithm and data structure implementation.",
      },
      {
        year: "2014 - 2015",
        title: "Back-End Developer",
        company: "TurkWebAjans",
        location: "Izmir, Turkey",
        description: "Client websites using classic ASP and Adobe Flash. Junior developer role.",
      },
    ]

    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Experience
        </h2>

        {/* Mini Overview */}
        <div className="space-y-3 pb-2">
          <p className="text-sm" style={{ color: `${COLORS.text}CC` }}>
            <span style={{ color: COLORS.accent }} className="font-semibold">8+ years</span> building scalable web applications
          </p>

          {/* Primary Stack */}
          <div className="space-y-1">
            <p className="text-xs font-medium" style={{ color: `${COLORS.text}80` }}>
              Primary Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["PHP", "Python", "Node.js", "Laravel", "Django", "React", "Vue.js", "Next.js"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${COLORS.accent}15`,
                    color: COLORS.accent,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile & Tools */}
          <div className="space-y-1">
            <p className="text-xs font-medium" style={{ color: `${COLORS.text}80` }}>
              Mobile & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "React Native", "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${COLORS.accent}15`,
                    color: COLORS.accent,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: COLORS.border }}
          />

          <div className="space-y-6 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS.accent }}
                />

                <div className="space-y-1">
                  <p className="text-xs font-medium" style={{ color: COLORS.accent }}>
                    {exp.year}
                  </p>
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: `${COLORS.text}CC` }}>
                    {exp.company}
                  </p>
                  <p className="text-xs" style={{ color: `${COLORS.text}80` }}>
                    {exp.location}
                  </p>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: `${COLORS.text}99` }}>
                    {exp.description}
                  </p>
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
        <h2 className="text-4xl font-bold" style={{ color: COLORS.text }}>
          Get in Touch
        </h2>
        <div className="space-y-4" style={{ color: `${COLORS.text}CC` }}>
          <p className="leading-relaxed">
            I&apos;m currently available for freelance projects and consulting opportunities.
            Feel free to reach out if you&apos;d like to work together.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="mailto:abdullah@radkod.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 w-fit"
              style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.text
              }}
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

// Project Card Component
function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left p-5 rounded-lg transition-all duration-200"
      style={{
        backgroundColor: `${COLORS.card}80`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.card
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${COLORS.card}80`
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3
            className="text-xl font-semibold mb-1 transition-colors duration-200"
            style={{ color: COLORS.text }}
          >
            {project.title}
          </h3>
          <p className="text-sm line-clamp-1" style={{ color: `${COLORS.text}B3` }}>
            {project.content}
          </p>
        </div>
        <ArrowRight
          className="w-5 h-5 flex-shrink-0 ml-4 transition-all duration-200 group-hover:translate-x-1"
          style={{ color: COLORS.accent }}
        />
      </div>
    </button>
  )
}

// Project Detail Component
function ProjectDetail({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 transition-colors duration-200"
        style={{ color: COLORS.text }}
        onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent}
        onMouseLeave={(e) => e.currentTarget.style.color = COLORS.text}
      >
        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back</span>
      </button>

      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold" style={{ color: COLORS.text }}>
          {project.title}
        </h2>

        {project.status && (
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ backgroundColor: `${COLORS.accent}20` }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: COLORS.accent }}
            />
            <span className="text-sm" style={{ color: COLORS.text }}>
              Live
            </span>
          </div>
        )}
      </div>

      <p className="text-lg leading-relaxed" style={{ color: `${COLORS.text}CC` }}>
        {project.content}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.skill.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-md"
            style={{ backgroundColor: COLORS.card, color: COLORS.text }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200"
            style={{ backgroundColor: COLORS.text, color: COLORS.bg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.text
            }}
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
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.card
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            <FaGithub className="w-4 h-4" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  )
}
