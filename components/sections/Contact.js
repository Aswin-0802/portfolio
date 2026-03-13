'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'aswinmohan212002@gmail.com', href: 'mailto:aswinmohan212002@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/aswin-m-436a8a245/', href: 'https://www.linkedin.com/in/aswin-m-436a8a245/' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Aswin-0802', href: 'https://github.com/Aswin-0802' },
  { icon: FiMapPin, label: 'Location', value: 'Chennai, IN', href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.text || 'Something went wrong. Please try again.')
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm font-body text-primary border border-subtle bg-[var(--bg-secondary)] 
    placeholder:text-muted focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 
    transition-all duration-200`

  return (
    <section id="contact" className="py-24 bg-surface-2" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[var(--accent)] mb-2 block">05. contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-primary">
            Let&apos;s work<br />
            <em className="not-italic text-gradient">together</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-secondary leading-relaxed mb-8">
              Have a project in mind? Looking for a developer to join your team? Or just want to say hello? 
              My inbox is always open — I&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-soft)' }}>
                    <Icon size={16} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-[var(--accent)] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-primary">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-8 glass rounded-xl p-4 border border-subtle">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-primary">Available for work</span>
              </div>
              <p className="text-xs text-muted">Currently open to full-time roles and select freelance projects.</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-subtle">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <FiCheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">Message sent!</h3>
                    <p className="text-secondary text-sm max-w-xs">
                      Message sent successfully. Thank you for contacting me! I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm text-[var(--accent)] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                          Name <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                          Email <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="admin@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Message <span className="text-[var(--accent)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project or just say hi..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                        >
                          <FiAlertCircle size={16} className="flex-shrink-0" />
                          {errorMessage || 'Something went wrong. Please try again.'}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl accent-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                      whileHover={status !== 'loading' ? { scale: 1.01 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.99 } : {}}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-muted text-center">
                      I&apos;ll respond within 24 hours. Your info stays private.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
