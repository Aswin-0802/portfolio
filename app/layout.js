import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Aswin Mohan — Full Stack Developer',
  description: 'Full Stack Developer specializing in PHP, Laravel, MySQL and Node.js. Building performant web applications with exceptional user experiences.',
  keywords: ['Full Stack Developer', 'PHP', 'Laravel', 'Node.js', 'JavaScript', 'MySQL', 'Web Developer'],
  authors: [{ name: 'Aswin Mohan' }],
  creator: 'Laravel, MySQL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-bay-mu-94.vercel.app',
    title: 'Aswin Mohan — Full Stack Developer',
    description: 'Full Stack Developer specializing in PHP, Laravel, MySQL and Node.js.',
    siteName: 'Aswin Mohan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aswin Mohan — Full Stack Developer',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Aswin Mohan — Full Stack Developer',
  //   description: 'Full Stack Developer specializing in PHP, Laravel, MySQL and Node.js.',
  //   images: ['/og-image.jpg'],
  //   creator: '@alexmorgan',
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://portfolio-bay-mu-94.vercel.app" />
      </head>
      <body className="font-body">
        <ThemeProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
