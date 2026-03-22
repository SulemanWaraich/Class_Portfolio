"use client"

import { ArrowRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

// ─── Color palette (mirrors MinimalLanding) ───────────────────────────────────
const COLORS = {
  bg: "#EDE5D8",
  card: "#E8DCC4",
  text: "#2D1F1A",
  accent: "#B87333",
  border: "#2D1F1A15",
  muted: "#2D1F1A99",
}

// ─── Types ────────────────────────────────────────────────────────────────────
export interface CaseStudyData {
  overview: string
  problem: string
  solution: string
  impact: string[]
  techHighlights: { label: string; description: string }[]
}

export interface ProjectWithCaseStudy {
  id: number
  img: string
  title: string
  status: boolean
  content: string
  url?: string
  github?: string
  skill: string[]
  preview?: string
  caseStudy?: CaseStudyData
}

interface CaseStudyProps {
  project: ProjectWithCaseStudy
  onBack: () => void
  onViewDetail: () => void
}

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

// ─── Section block ─────────────────────────────────────────────────────────────
function Section({
  index,
  label,
  children,
}: {
  index: number
  label: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: COLORS.accent }}
      >
        {label}
      </p>
      {children}
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CaseStudy({ project, onBack, onViewDetail }: CaseStudyProps) {
  const cs = project.caseStudy

  return (
    <div className="space-y-10">
      {/* ── Back nav ── */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-4"
      >
        <button
          onClick={onBack}
          className="group flex items-center gap-2 transition-colors duration-200"
          style={{ color: COLORS.text }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text)}
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm">Back to projects</span>
        </button>

        <span style={{ color: COLORS.border, borderLeft: `1px solid ${COLORS.text}30` }} className="h-4" />

        <button
          onClick={onViewDetail}
          className="text-sm transition-colors duration-200"
          style={{ color: COLORS.muted }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
        >
          Project detail →
        </button>
      </motion.div>

      {/* ── Header ── */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: COLORS.accent }}>
          Case Study
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.text }}>
          {project.title}
        </h1>

        {/* Status pill */}
        {project.status && (
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ backgroundColor: `${COLORS.accent}20` }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }} />
            <span className="text-xs font-medium" style={{ color: COLORS.text }}>
              Live
            </span>
          </div>
        )}
      </motion.div>

      {/* ── Divider ── */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="h-px w-full"
        style={{ backgroundColor: `${COLORS.text}15` }}
      />

      {cs ? (
        <>
          {/* ── Overview ── */}
          <Section index={3} label="Overview">
            <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              {cs.overview}
            </p>
          </Section>

          {/* ── Problem ── */}
          <Section index={4} label="The Problem">
            <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              {cs.problem}
            </p>
          </Section>

          {/* ── Solution ── */}
          <Section index={5} label="The Solution">
            <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              {cs.solution}
            </p>
          </Section>

          {/* ── Tech highlights ── */}
          {cs.techHighlights.length > 0 && (
            <Section index={6} label="Technical Highlights">
              <div className="space-y-3 pt-1">
                {cs.techHighlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-lg"
                    style={{ backgroundColor: `${COLORS.card}80` }}
                  >
                    <div
                      className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: COLORS.accent }}
                    />
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold" style={{ color: COLORS.text }}>
                        {item.label}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* ── Impact ── */}
          {cs.impact.length > 0 && (
            <Section index={7} label="Impact & Outcomes">
              <ul className="space-y-2 pt-1">
                {cs.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sm mt-0.5" style={{ color: COLORS.accent }}>
                      ✓
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </>
      ) : (
        /* ── Fallback when no caseStudy data is provided ── */
        <Section index={3} label="Overview">
          <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
            {project.content}
          </p>
          <div
            className="mt-4 p-4 rounded-lg border"
            style={{ borderColor: `${COLORS.accent}40`, backgroundColor: `${COLORS.accent}08` }}
          >
            <p className="text-sm" style={{ color: COLORS.muted }}>
              A full case study for this project is coming soon. Check back later for an in-depth breakdown of the architecture, decisions, and outcomes.
            </p>
          </div>
        </Section>
      )}

      {/* ── Tech stack pills ── */}
      <Section index={8} label="Tech Stack">
        <div className="flex flex-wrap gap-2 pt-1">
          {project.skill.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-md font-medium"
              style={{ backgroundColor: COLORS.card, color: COLORS.text }}
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* ── CTA links ── */}
      <motion.div
        custom={9}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-4 pt-2"
      >
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
      </motion.div>
    </div>
  )
}
