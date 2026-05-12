interface Service {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: '☯️',
    title: 'Traditional Chinese Medicine',
    description:
      'Complementary healing modalities rooted in centuries of TCM philosophy — acupuncture, herbal therapy, and energetic balancing to restore harmony throughout the body.',
  },
  {
    icon: '👁️',
    title: 'Iridology',
    description:
      'A detailed analysis of the iris to identify areas of strength and weakness in the body\'s systems, providing a non-invasive window into your overall constitutional health.',
  },
  {
    icon: '🔬',
    title: 'Mineral Hair Analysis',
    description:
      'A tissue mineral analysis using a hair sample to reveal nutritional deficiencies, toxic metal exposure, and metabolic patterns that influence your long-term wellbeing.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-4xl font-semibold text-stone-800 mt-2">Healing Services</h2>
          <p className="text-stone-500 mt-4 max-w-lg mx-auto">
            Each session is personalized to your unique constitution, history, and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all bg-stone-50 hover:bg-emerald-50/40"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
