import { Link } from 'react-router-dom'

const philosophy = [
  {
    icon: '🌱',
    title: 'Root Causes Over Symptoms',
    body: 'Every product we recommend addresses the system underneath the symptom — not just the surface. A sleep spray isn\'t just aromatherapy; it\'s a nervous system reset.',
  },
  {
    icon: '🔬',
    title: 'Evidence Meets Tradition',
    body: 'We hold recommendations to two standards simultaneously: does it align with centuries of traditional use, and does modern research support the mechanism? Both matter.',
  },
  {
    icon: '🌍',
    title: 'Whole Environment Thinking',
    body: 'Your health doesn\'t stop at your plate. What you sleep on, cook with, wear, and surround yourself with is part of your daily dose. We curate all of it.',
  },
]

const criteria = [
  {
    label: 'Ingredient Integrity',
    detail: 'No synthetic fillers, petroleum derivatives, or undisclosed proprietary blends. We read every label.',
  },
  {
    label: 'Sourcing Transparency',
    detail: 'Organic certifications, fair trade sourcing, and supply chain visibility are weighted heavily in our selection.',
  },
  {
    label: 'TCM & Nutritional Alignment',
    detail: 'Each item is evaluated through the lens of Traditional Chinese Medicine energetics and whole-food nutritional science.',
  },
  {
    label: 'Toxin Load Reduction',
    detail: 'We prioritize products that actively reduce your body\'s exposure to hormone disruptors, heavy metals, and VOCs.',
  },
  {
    label: 'Longevity Over Convenience',
    detail: 'We favor durable, time-tested items over disposable, trend-driven alternatives — even when they cost more upfront.',
  },
  {
    label: 'Practitioner-Tested',
    detail: 'Where possible, items have been used or recommended within our own clinical practice before appearing on this platform.',
  },
]

export default function About() {
  return (
    <div className="pt-16">

      {/* Mission hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Our Mission</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-800 mt-3 mb-6 leading-tight">
            We believe the way you live every day<br className="hidden md:block" /> is the most powerful medicine you have.
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Holistic Living exists to make intentional, non-toxic, whole-person wellness
            accessible — by cutting through the noise and surfacing only the things
            worth bringing into your life.
          </p>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm tracking-widest uppercase">Our Philosophy</span>
            <h2 className="text-3xl font-semibold text-stone-800 mt-2">How We Think About Wellness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((p) => (
              <div key={p.title} className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-stone-800 mb-3">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product selection criteria */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm tracking-widest uppercase">How We Choose</span>
            <h2 className="text-3xl font-semibold text-stone-800 mt-2">Our Product Criteria</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every item in our shop passed through this filter before it earned a spot.
              These aren't arbitrary standards — they come directly from clinical practice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((c, i) => (
              <div key={c.label} className="bg-white rounded-2xl p-6 border border-stone-100 flex gap-4">
                <span className="text-emerald-700 font-bold text-lg mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-stone-800 mb-1">{c.label}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials trust strip */}
      <section className="py-16 px-6 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">Informed By</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Certified Holistic Health Practitioner (HHP)',
              'Nutrition Consultant (NC)',
              'Traditional Chinese Medicine',
              'Iridology',
              'Mineral Hair Analysis',
            ].map((cred) => (
              <span
                key={cred}
                className="bg-stone-50 border border-stone-200 text-stone-600 text-xs px-4 py-2 rounded-full"
              >
                {cred}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/holistic-living"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Explore the Shop
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
