import { useState, useRef, useEffect } from 'react'

interface HolisticItem {
  label: string
  emoji: string
  bg: string
  href: string
}

const holisticLivingItems: HolisticItem[] = [
  { label: 'Sleep Essentials', emoji: '🌙', bg: 'from-indigo-100 to-blue-50',   href: '#holistic-sleep'     },
  { label: 'Kitchen',          emoji: '🍳', bg: 'from-orange-100 to-amber-50',  href: '#holistic-kitchen'   },
  { label: 'Pantry',           emoji: '🫙', bg: 'from-yellow-100 to-lime-50',   href: '#holistic-pantry'    },
  { label: 'Superfoods',       emoji: '🥦', bg: 'from-emerald-100 to-green-50', href: '#holistic-superfoods'},
  { label: 'Wellness',         emoji: '🌿', bg: 'from-teal-100 to-emerald-50',  href: '#holistic-wellness'  },
  { label: 'Apparel',          emoji: '👘', bg: 'from-rose-100 to-pink-50',     href: '#holistic-apparel'   },
  { label: 'Shoes',            emoji: '👟', bg: 'from-sky-100 to-cyan-50',      href: '#holistic-shoes'     },
  { label: 'Babies & Kids',    emoji: '🧸', bg: 'from-pink-100 to-rose-50',     href: '#holistic-babies'    },
  { label: 'Furniture',        emoji: '🪑', bg: 'from-stone-100 to-amber-50',   href: '#holistic-furniture' },
  { label: 'Travel',           emoji: '✈️', bg: 'from-blue-100 to-sky-50',      href: '#holistic-travel'    },
  { label: 'Books',            emoji: '📚', bg: 'from-violet-100 to-purple-50', href: '#holistic-books'     },
  { label: 'Quotes',           emoji: '💬', bg: 'from-amber-100 to-yellow-50',  href: '#holistic-quotes'    },
  { label: 'Misc',             emoji: '✨', bg: 'from-fuchsia-100 to-pink-50',  href: '#holistic-misc'      },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-emerald-800 tracking-wide">Sandra Friedman</span>
          <span className="text-xs text-stone-500 tracking-wide">HHP, NC</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <li>
            <a href="#home" className="hover:text-emerald-700 transition-colors">Hello</a>
          </li>
          <li>
            <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
          </li>

          {/* Holistic Living mega-dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Holistic Living
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="fixed left-0 right-0 mt-3 z-50
                              bg-white shadow-xl border-t border-stone-100 p-6">
                <div className="max-w-6xl mx-auto">
                <p className="text-xs text-stone-400 tracking-widest uppercase mb-4 text-center">
                  Shop by Category
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {holisticLivingItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="group flex flex-col items-center rounded-xl overflow-hidden border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all"
                    >
                      {/* Image / gradient area */}
                      <div className={`w-full h-20 bg-gradient-to-br ${item.bg} flex items-center justify-center text-3xl`}>
                        {item.emoji}
                      </div>
                      {/* Label */}
                      <span className="w-full text-center text-xs font-medium text-stone-600 group-hover:text-emerald-700 transition-colors py-2 px-1 leading-tight">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <a href="#blog" className="hover:text-emerald-700 transition-colors">Blog</a>
          </li>
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
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-4 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
          {[
            { label: 'Hello', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Blog', href: '#blog' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-600 hover:text-emerald-700 transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          {/* Mobile holistic living 3-col image grid */}
          <div>
            <p className="text-sm font-medium text-stone-700 mb-3">Holistic Living</p>
            <div className="grid grid-cols-3 gap-2">
              {holisticLivingItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex flex-col items-center rounded-xl overflow-hidden border border-stone-100 hover:border-emerald-200 transition-all"
                >
                  <div className={`w-full h-14 bg-gradient-to-br ${item.bg} flex items-center justify-center text-2xl`}>
                    {item.emoji}
                  </div>
                  <span className="text-center text-[10px] font-medium text-stone-600 py-1.5 px-1 leading-tight">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-2 bg-emerald-700 text-white text-sm px-5 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  )
}
