import { useState } from 'react'

export default function Footer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false)

  return (
    <footer className="bg-stone-800 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-white font-semibold text-lg mb-1">Holistic Living</p>
          <p className="text-emerald-400 text-xs tracking-wider mb-3">HHP, NC</p>
          <p className="text-sm leading-relaxed">
            Certified Holistic Health Practitioner and Nutrition Consultant.
            Compassionate, whole-person care rooted in traditional wisdom.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Hello', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Blog', href: '#blog' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-emerald-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div id="contact-footer">
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="tel:+16143837897"
                className="hover:text-emerald-400 transition-colors"
              >
                (614) 383-7897
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
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
            The information provided on this website is for educational purposes only and is not
            intended to diagnose, treat, cure, or prevent any disease or health condition. The
            services offered by Holistic Living (HHP, NC) are complementary and do not replace
            the advice of a licensed medical doctor. Always consult a qualified healthcare
            professional before making changes to your health regimen.
          </p>
        )}
      </div>

      <div className="border-t border-stone-700 px-6 py-4 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} Holistic Living. All rights reserved.
      </div>
    </footer>
  )
}
