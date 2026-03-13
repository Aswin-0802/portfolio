'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiZap, FiUsers, FiStar } from 'react-icons/fi'

const stats = [
  { value: '4+', label: 'Years of Coding', icon: FiStar },
  { value: '10+', label: 'Projects Built', icon: FiCode },
  { value: '5+', label: 'Team Collaborations', icon: FiUsers },
  { value: '99%', label: 'Project Success Rate', icon: FiZap },
]

const technologies = ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'PostgreSQL', 'MySQL', 'JavaScript']


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="about" className="py-24 bg-surface-2" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-mono text-sm text-[var(--accent)] mb-2 block">01. about me</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-primary">
              Crafting digital<br />
              <em className="not-italic text-gradient">experiences</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text + Tech */}
            <div>
              <motion.div variants={itemVariants} className="space-y-4 text-secondary leading-relaxed mb-8">
              <p className="text-lg">
                I'm a Full Stack Developer with a strong focus on building 
                <strong className="text-primary"> scalable and high-performance back-end systems</strong>. 
                I enjoy creating web applications that are reliable, efficient, and designed to grow with user needs.
              </p>
              <p>
                I work across the entire development lifecycle — from designing efficient database structures 
                and building scalable APIs to ensuring smooth integration with front-end interfaces. 
                My focus is on developing reliable, high-performance applications that are easy to maintain 
                and built to support growing user needs.
              </p>
              <p>
                Beyond coding, I value collaboration and clear communication. I enjoy working with 
                cross-functional teams to turn ideas into real products while ensuring projects are 
                delivered on time, within scope, and with a strong focus on performance and usability.
              </p>
              </motion.div>

              {/* Tech pills */}
              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Technologies I work with</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-sm font-mono border border-subtle text-secondary hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <div>
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
                {stats.map(({ value, label, icon: Icon }) => (
                  <motion.div
                    key={label}
                    className="glass rounded-2xl p-6 border border-subtle"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'var(--accent-soft)' }}>
                      <Icon size={18} className="text-[var(--accent)]" />
                    </div>
                    <div className="font-display text-3xl font-black text-primary mb-1">{value}</div>
                    <div className="text-sm text-muted">{label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Profile card */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-6 border border-subtle"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center text-white text-xl font-display font-black flex-shrink-0">
                    AM
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-primary">Aswin Mohan</div>
                    <div className="text-sm text-muted">Chennai, IN</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-600 dark:text-green-400">Open to work</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
