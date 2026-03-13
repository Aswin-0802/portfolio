'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

const projects = [
  {
    title: 'Dealer Management System ',
    description: 'A Dealer Management System (DMS) is a software that streamlines vehicle dealership operations, including sales, inventory, customer service, and finance. It improves efficiency, reduces errors, and enhances customer experience',
    tech: ['PHP', 'JavaScript', 'MySQL', 'CanvasJS', 'HTML', 'CSS', 'SVN'],
    // github: 'https://github.com/alexmorgan/saas-dashboard',
    // demo: 'https://dashboard.alexmorgan.dev',
    featured: false,
    stars: 40,
    category: 'Backend Developer',
  },
  {
    title: 'Enterprise Resource Planning',
    description: 'Enterprise Resource Planning (ERP) is a software system that integrates core business processes, such as finance, HR, supply chain, and sales, into a single platform. It helps organizations streamline operations, improve data accuracy, and enhance decision-making by providing real-time insights across all departments. ERP improves efficiency, reduces costs, and ensures better coordination within the company',
    tech: ['PHP', 'Laravel', 'MySql', 'Express', 'Linux', 'Shell Scripting'],
    // github: 'https://github.com/alexmorgan/ai-content',
    // demo: 'https://ai-content.alexmorgan.dev',
    featured: true,
    stars: 80,
    category: 'Backend Developer',
  },
  {
    title: 'Cheap Storage',
    description: 'Cheap Storage is a web-based storage rental platform developed using Laravel 12. The system allows users in the United States and Canada to search, compare, and rent affordable storage units online. The platform includes a powerful Admin Panel for managing locations, storage units, pricing, customers, bookings, and payments.',
    tech: ['Laravel', 'MySql', 'Ajax', 'LiveWire', 'MVC Architecture', 'JavaScript', 'GIT'],
    // github: 'https://github.com/alexmorgan/ecommerce',
    demo: 'https://cheapstorageunits.com/',
    featured: false,
    stars: 90,
    category: 'Full Stack',
  },
  {
    title: 'Amibev',
    description: 'This project is an e-commerce website and mobile application developed to sell various electronic and machine spare parts online. The platform includes a centralized Laravel-based Admin Panel to manage products, orders, customers, inventory, and shipping operations. REST APIs were developed to connect the backend with the website and mobile application. The system is integrated with DTDC courier services for order shipment and delivery tracking, enabling efficient order management and logistics',
    tech: ['Laravel', 'RESTful APIs', 'Node.js', 'PHP', 'MySQL', 'Node.js', 'GIT'],
    // github: 'https://github.com/alexmorgan/collab-docs',
    demo: 'https://sneindia.in/',
    featured: false,
    stars: 50,
    category: 'E-Commerce ',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      className="group relative glass rounded-2xl border border-subtle overflow-hidden hover:border-[var(--accent)]/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Top accent bar */}
      <div className="h-1 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono border border-subtle text-muted">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 rounded-md text-xs font-mono text-[var(--accent)] border border-[var(--accent)]/30"
                style={{ background: 'var(--accent-soft)' }}>
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted">
            <FiStar size={12} />
            {project.stars}
          </div>
        </div>

        {/* Title & desc */}
        <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-secondary)] text-muted border border-subtle">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-subtle">
          {/* <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            <FiGithub size={15} />
            Code
          </a> */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted hover:text-[var(--accent)] transition-colors duration-200 ml-auto"
          >
            Live <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 bg-surface-2" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[var(--accent)] mb-2 block">03. projects</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-primary">
              Things I've<br />
              <em className="not-italic text-gradient">built</em>
            </h2>
            <a
              href="https://github.com/Aswin-0802"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-[var(--accent)] transition-colors duration-200 pb-1"
            >
              <FiGithub size={16} />
              View all on GitHub
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
