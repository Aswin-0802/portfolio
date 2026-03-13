'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }} />
        <div className="absolute -bottom-16 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Content */}
        <div>
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted font-mono">Available for opportunities</span>
          </motion.div>

          <motion.div variants={item} className="mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-subtle text-muted">
              <HiCode className="text-[var(--accent)]" />
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
            <span className="text-primary block">Hello, I&apos;m</span>
            <span className="text-gradient block mt-1">Aswin Mohan</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg text-secondary leading-relaxed mb-8 max-w-lg">
            I craft <strong className="text-primary font-semibold">fast, accessible, beautiful</strong> web applications. 
            Passionate about clean code, great UX, and solving real problems with elegant technical solutions.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl accent-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects <FiArrowRight size={16} />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-subtle text-primary font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            {[
              { href: 'https://github.com/Aswin-0802', icon: FiGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/aswin-m-436a8a245/', icon: FiLinkedin, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-[var(--accent)] transition-colors duration-200"
              >
                <Icon size={22} />
              </a>
            ))}
            <div className="w-px h-5 bg-[var(--border)]" />
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 text-sm text-muted hover:text-[var(--accent)] transition-colors duration-200"
            >
              <FiDownload size={15} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Visual element */}
        <motion.div variants={item} className="hidden lg:flex items-center justify-center">
          <div className="relative">
            {/* Profile image placeholder */}
            <motion.div
              className="w-80 h-80 rounded-3xl glass overflow-hidden relative shadow-custom-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-secondary) 100%)' }}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-display font-black text-white accent-gradient shadow-lg">
                    AM
                  </div>
                  <p className="font-display text-xl font-bold text-primary">Aswin Mohan</p>
                  <p className="text-sm text-muted font-mono mt-1">Full Stack Dev</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            { <motion.div
              className="absolute -top-4 -left-0 glass rounded-xl px-3 py-2 text-xs font-mono shadow-custom"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-green-500">✓</span>{' '}
              <span className="text-secondary">4+ years experience</span>
            </motion.div> }

            {/* <motion.div
              className="absolute -bottom-4 -right-8 glass rounded-xl px-3 py-2 text-xs font-mono shadow-custom"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <span className="text-[var(--accent)]">★</span>{' '}
              <span className="text-secondary">50+ projects shipped</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-12 glass rounded-xl px-3 py-2 text-xs font-mono shadow-custom"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
            >
              <span className="text-blue-400">⚡</span>{' '}
              <span className="text-secondary">React & Next.js</span>
            </motion.div> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-muted font-mono">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
