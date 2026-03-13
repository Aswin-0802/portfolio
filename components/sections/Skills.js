'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiBootstrap,
  SiNodedotjs, SiPhp, SiLaravel,
  SiMysql, SiPostgresql,
  SiGit, SiLinux, SiVscodium, 
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 80 },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 60 },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 65 },
      { name: 'JavaScript', icon: SiJavascript, color: '#3178C6', level: 75 },      
    ]
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
    skills: [
      { name: 'PHP', icon: SiPhp, color: '#e93838', level: 75 },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 70 },
      { name: 'Laravel', icon: SiLaravel, color: '#E10098', level: 75 },
    ]
  },
  {
    title: 'Database',
    emoji: '🗄️',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/20',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 50 },
      { name: 'MySQL', icon: SiMysql, color: '#47A248', level: 80 },
    ]
  },
  {
    title: 'Tools & DevOps',
    emoji: '🛠️',
    color: 'from-orange-500/20 to-amber-500/20',
    border: 'border-orange-500/20',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 92 },
      { name: 'Cursor', icon: SiVscodium, color: '#00BFFF', level: 75 },
      { name: 'Linux Shell', icon: SiLinux, color: '#FCC624', level: 85 }, 
    ]
  },
]

function SkillCard({ skill, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={16} style={{ color: skill.color }} />
          <span className="text-sm font-medium text-secondary">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[var(--accent)] mb-2 block">02. skills</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-primary">
            Technical<br />
            <em className="not-italic text-gradient">arsenal</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className={`rounded-2xl p-6 border glass ${category.border}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${category.color} border ${category.border} mb-6`}>
                <span>{category.emoji}</span>
                <span className="text-sm font-semibold text-primary">{category.title}</span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
