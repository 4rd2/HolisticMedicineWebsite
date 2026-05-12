export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-semibold text-lg mb-2">Harmony Holistic</p>
          <p className="text-sm leading-relaxed">
            Compassionate, traditional, whole-person care. Your path to natural wellness starts here.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>123 Wellness Way, Suite 4</li>
            <li>Columbus, OH 43210</li>
            <li>
              <a href="mailto:hello@harmonyholistic.com" className="hover:text-emerald-400 transition-colors">
                hello@harmonyholistic.com
              </a>
            </li>
            <li>
              <a href="tel:+16145550000" className="hover:text-emerald-400 transition-colors">
                (614) 555-0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-stone-700 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Harmony Holistic. All rights reserved.
      </div>
    </footer>
  )
}
