'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    role: 'Program Analyst',
    company: 'Ziga Infotech.',
    period: 'July 2025 – Present',
    type: 'Full-time',
    description: [
      'Developed, maintained, and managed multiple software projects across different platforms.',
      'Worked with various programming languages and frameworks to build and enhance applications',
      'Worked with various programming languages and frameworks to build and enhance applications',
      'Supported efficient software deployment, maintenance, and delivery of high-quality solutions.',
    ],
    tech: ['Laravel', 'MySQL', 'RESTful API', 'CodeIgniter', 'API Development', 'PHP'],
  },
  {
    role: 'Software Engineer',
    company: 'BNC Motors',
    period: 'September 2023 – July 2025',
    type: 'Full-time',
    description: [
      'Developed and maintained web applications for a diverse client base, ensuring high-quality user experiences',
      'Built interactive and dynamic web interfaces using HTML, CSS, and JavaScript.',
      'Implemented back-end functionality using PHP and gained basic experience with Node.js.',
      'Integrated and managed MySQL databases to support data-driven web applications.',
      'Collaborated on full-stack development tasks to deliver responsive and functional web solutions.',
    ],
    tech: ['PHP', 'MySQL', 'Node.js', 'Express', 'Linux', 'JSON', 'Shell Scripting', 'Git', 'Stored Procedure', 'jQuery'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'BNC Motors',
    period: 'September 2022 – September 2023',
    type: 'Full-time',
    description: [
      'Collaborated with senior developers to design, develop, and implement software solutions, contributing to the full software development lifecycle',
      'Wrote clean, efficient, and maintainable code in [HTML, PHP, MYSQLI, JS] to meet project requirements and deadlines',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'AJAX', 'REST APIs','TortoiseSVN'],
  },
]

function TimelineItem({ exp, index, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0

  const card = (
    <motion.div
      className="glass rounded-2xl p-6 border border-subtle hover:border-[var(--accent)]/30 transition-colors duration-300"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="mb-4">
        <h3 className="font-display text-lg font-bold text-primary">{exp.role}</h3>
        <p className="text-[var(--accent)] font-semibold text-sm mt-0.5">{exp.company}</p>
      </div>
      <ul className="space-y-1.5 mb-4">
        {exp.description.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-secondary">
            <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[var(--accent)] block" />
            {point}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {exp.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-secondary)] text-muted border border-subtle">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )

  const period = (
    <div className={isEven ? 'text-right pt-1' : 'pt-1'}>
      <span className="font-mono text-sm text-[var(--accent)] font-medium">{exp.period}</span>
      <div className="text-xs text-muted mt-1">{exp.type}</div>
    </div>
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Mobile layout */}
      <div className="relative pl-8 mb-8 md:hidden">
        <div className="absolute left-0 top-1 w-6 h-6 rounded-full accent-gradient flex items-center justify-center">
          <FiBriefcase size={12} className="text-white" />
        </div>
        {!isLast && (
          <div className="absolute left-[11px] top-7 bottom-[-32px] w-px"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        )}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[var(--accent)]">{exp.period}</span>
          <span className="text-xs text-muted">· {exp.type}</span>
        </div>
        {card}
      </div>

      {/* Desktop layout: exactly 3 grid children */}
      <div className="hidden md:grid md:grid-cols-[1fr_40px_1fr] md:gap-8 items-start mb-8">
        {/* Col 1: period (even) or card (odd) */}
        <div>{isEven ? period : card}</div>

        {/* Col 2: dot + line */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center shadow-lg flex-shrink-0"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          >
            <FiBriefcase size={16} className="text-white" />
          </motion.div>
          {!isLast && (
            <div className="w-px flex-1 mt-3 min-h-[2rem]" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
          )}
        </div>

        {/* Col 3: card (even) or period (odd) */}
        <div>{isEven ? card : period}</div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[var(--accent)] mb-2 block">04. experience</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-primary">
            My career<br />
            <em className="not-italic text-gradient">journey</em>
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.company + exp.period}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
