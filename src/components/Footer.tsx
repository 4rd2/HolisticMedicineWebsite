import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false)

  return (
    <footer className="bg-stone-800 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Brand */}
        <div>
          <p className="text-white font-semibold text-lg mb-2">Holistic Living</p>
          <p className="text-sm leading-relaxed max-w-xs">
            A curated wellness platform helping you build a non-toxic, intentional life —
            one thoughtful choice at a time.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-white font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Home',            to: '/'               },
              { label: 'About',           to: '/about'          },
              { label: 'Shop',            to: '/holistic-living'},
              { label: 'Blog',            to: '/blog'           },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-emerald-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Affiliate + health disclaimer */}
      <div className="border-t border-stone-700 px-6 py-4 max-w-6xl mx-auto">
        <button
          onClick={() => setDisclaimerOpen(!disclaimerOpen)}
          className="flex items-center gap-2 text-xs text-stone-500 hover:text-stone-300 transition-colors mx-auto"
        >
          Disclaimer
          <svg
            className={`w-3 h-3 transition-transform ${disclaimerOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {disclaimerOpen && (
          <p className="mt-3 text-xs text-stone-500 leading-relaxed max-w-3xl mx-auto text-center">
            This site contains affiliate links. We may earn a small commission if you purchase
            through our links, at no extra cost to you. All recommendations are based on genuine
            belief in the product's quality and alignment with holistic wellness principles.
            Content on this site is for informational purposes only and does not constitute
            medical advice. Always consult a qualified healthcare professional before making
            changes to your health regimen.
          </p>
        )}
      </div>

      <div className="border-t border-stone-700 px-6 py-4 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} Holistic Living. All rights reserved.
      </div>
    </footer>
  )
}
