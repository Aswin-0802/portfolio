'use client'

import { useState, useEffect } from 'react'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: 'var(--bg-primary)',
        animation: loading ? undefined : 'loaderFadeOut 0.5s ease forwards',
      }}
    >
      <div className="loader-letter">
        <span
          className="font-display text-7xl md:text-9xl font-bold"
          style={{
            color: 'var(--accent)',
            display: 'inline-block',
            animation: 'letterReveal 1s ease forwards',
          }}
        >
          A
        </span>
        <div
          className="loader-underline"
          style={{
            height: '3px',
            background: 'var(--accent)',
            marginTop: '8px',
            animation: 'underlineGrow 0.8s ease 0.4s forwards',
            transform: 'scaleX(0)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes underlineGrow {
          to {
            transform: scaleX(1);
          }
        }

        .fixed {
          animation: loaderFadeOut 0.4s ease 1.6s forwards;
        }

        @keyframes loaderFadeOut {
          to {
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  )
}
