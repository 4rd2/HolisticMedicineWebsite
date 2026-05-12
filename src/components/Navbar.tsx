import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-semibold text-emerald-800 tracking-wide">
          Harmony Holistic
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-stone-600">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-emerald-700 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-emerald-700 hover:bg-emerald-800 text-white text-sm px-5 py-2 rounded-full transition-colors"
        >
          Book a Session
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-stone-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-600 hover:text-emerald-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-emerald-700 text-white text-sm px-5 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  )
}
