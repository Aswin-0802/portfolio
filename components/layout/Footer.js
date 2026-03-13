import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const socialLinks = [
  { href: 'https://github.com/Aswin-0802', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/aswin-m-436a8a245/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:aswinmohan212002@gmail.com', icon: FiMail, label: 'Email' },
]

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-subtle bg-surface-2 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-md accent-gradient flex items-center justify-center text-white text-sm font-bold">
                AM
              </span>
              <span className="font-display text-lg font-bold text-primary">Aswin Mohan</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Full Stack Developer building elegant, performant web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-subtle flex items-center justify-center text-muted hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {year} All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed & developed with ♥
          </p>
        </div>
      </div>
    </footer>
  )
}
